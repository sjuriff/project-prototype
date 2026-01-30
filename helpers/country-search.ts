export function normalizeNo(s: string) {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/æ/g, 'ae')
    .replace(/ø/g, 'o')
    .replace(/å/g, 'a')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}
//SHOULD BE ALIAS TO ID
const ALIAS_TO_TITLE_NO: Record<string, string> = {
  // United Kingdom / Storbritannia
  uk: 'Storbritannia',
  england: 'Storbritannia',
  skotland: 'Storbritannia',
  wales: 'Storbritannia',
  'forente kongerike': 'Storbritannia',
  storbritannia: 'Storbritannia',
  'great britain': 'Storbritannia',

  // USA
  usa: 'USA',
  amerika: 'USA',
  'forente stater': 'USA',
  'de forente stater': 'USA',

  // UAE
  uae: 'De forente arabiske emirater',
  emiratene: 'De forente arabiske emirater',
  'de forente arabiske emirater': 'De forente arabiske emirater',
};

function buildAliasIndex(map: Record<string, string>) {
  const out: Record<string, string> = {};
  for (const [k, v] of Object.entries(map)) {
    out[normalizeNo(k)] = normalizeNo(v);
  }
  return out;
}

const ALIAS_TO_TITLE_NO_N = buildAliasIndex(ALIAS_TO_TITLE_NO);

export function expandedQueriesNo(qRaw: string) {
  const q = normalizeNo(qRaw);
  if (!q) return [];

  const mappedId = ALIAS_TO_TITLE_NO_N[q]; // already normalized
  if (!mappedId) return [q];

  // include both: mapped canonical id + original query
  // (so "uk" can still match "uk" if you ever store it anywhere)
  return Array.from(new Set([mappedId, q]));
}




export type SearchableCountry<T> = T & {
  _nTitle: string;
  _nId: string;
  _words: string[];
};

function scoreAgainstQuery<T>(c: SearchableCountry<T>, q: string) {
  const t = c._nTitle;
  const iso = c._nId;

  if (t === q) return 1000;
  if (iso === q) return 950;
  if (t.startsWith(q)) return 900;
  if (c._words.some((w) => w.startsWith(q))) return 850;
  if (iso.startsWith(q)) return 820;

  const idx = t.indexOf(q);
  if (idx !== -1) return 700 - idx;

  const isoIdx = iso.indexOf(q);
  if (isoIdx !== -1) return 650 - isoIdx;

  return -1;
}

export function preprocessCountries<T extends { title?: string; id?: string }>(
  countries: T[],
): SearchableCountry<T>[] {
  return countries.map((c) => {
    const nTitle = normalizeNo(c.title ?? '');
    const nId = normalizeNo(c.id ?? '');
    const words = nTitle.split(/\s+/).filter(Boolean);
    return { ...c, _nTitle: nTitle, _nId: nId, _words: words };
  });
}

export function searchCountries<T>(
  normalizedCountries: SearchableCountry<T>[],
  query: string,
  limit = 8,
): T[] {
  const qs = expandedQueriesNo(query);
  if (!qs.length) return [];

  return normalizedCountries
    .map((c) => {
      let best = -1;
      for (const q of qs) best = Math.max(best, scoreAgainstQuery(c, q));
      return { c, s: best };
    })
    .filter(({ s }) => s >= 0)
    .sort((a, b) => b.s - a.s)
    .slice(0, limit)
    .map(({ c }) => c);
}

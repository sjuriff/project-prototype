export function normalizeNo(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/æ/g, "ae")
    .replace(/ø/g, "o")
    .replace(/å/g, "a")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}


const ALIASES_NO: Record<string, string[]> = {
  uk: ["storbritannia", "forente kongerike", "england"],
  usa: ["de forente stater", "forente stater", "amerika"],
  uae: ["de forente arabiske emirater", "emiratene"],
};

export function expandedQueriesNo(qRaw: string) {
  const q = normalizeNo(qRaw);
  if (!q) return [];
  const extra = ALIASES_NO[q] ?? [];
  return [q, ...extra.map(normalizeNo)];
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
  countries: T[]
): SearchableCountry<T>[] {
  return countries.map((c) => {
    const nTitle = normalizeNo(c.title ?? "");
    const nId = normalizeNo(c.id ?? "");
    const words = nTitle.split(/\s+/).filter(Boolean);
    return { ...c, _nTitle: nTitle, _nId: nId, _words: words };
  });
}

export function searchCountries<T>(
  normalizedCountries: SearchableCountry<T>[],
  query: string,
  limit = 8
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
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

const ALIAS_TO_COUNTRY_CODE_NO: Record<string, string> = {
  // United Kingdom / Storbritannia
  uk: 'GB',
  england: 'GB',
  skotland: 'GB',
  scotland: 'GB',
  wales: 'GB',
  'forente kongerike': 'GB',
  storbritannia: 'GB',
  'great britain': 'GB',

  // USA
  usa: 'US',
  amerika: 'US',
  'forente stater': 'US',
  'de forente stater': 'US',

  // UAE
  uae: 'AE',
  emiratene: 'AE',
  'de forente arabiske emirater': 'AE',

  // Regions
  europa: 'EU',
  asia: 'AS',
  afrika: 'AF',
  'nord amerika': 'US',
  'nord-amerika': 'US',
};

function buildAliasIndex(map: Record<string, string>) {
  const out: Record<string, string> = {};

  for (const [alias, countryCode] of Object.entries(map)) {
    out[normalizeNo(alias)] = normalizeNo(countryCode);
  }

  return out;
}

const ALIAS_TO_COUNTRY_CODE_NO_N = buildAliasIndex(ALIAS_TO_COUNTRY_CODE_NO);

export function expandedQueriesNo(qRaw: string) {
  const q = normalizeNo(qRaw);
  if (!q) return [];

  const mappedCountryCode = ALIAS_TO_COUNTRY_CODE_NO_N[q];

  return Array.from(new Set(mappedCountryCode ? [mappedCountryCode, q] : [q]));
}

export type SearchableCountry<T> = T & {
  _nTitle: string;
  _nCountryCode: string;
  _words: string[];
};

function scoreAgainstQuery<T>(c: SearchableCountry<T>, q: string) {
  const title = c._nTitle;
  const countryCode = c._nCountryCode;

  if (countryCode === q) return 1000;
  if (title === q) return 950;

  if (title.startsWith(q)) return 900;
  if (c._words.some((w) => w.startsWith(q))) return 850;
  if (countryCode.startsWith(q)) return 820;

  const titleIndex = title.indexOf(q);
  if (titleIndex !== -1) return 700 - titleIndex;

  const countryCodeIndex = countryCode.indexOf(q);
  if (countryCodeIndex !== -1) return 650 - countryCodeIndex;

  return -1;
}

export function preprocessCountries<
  T extends {
    title?: string;
    countryCode?: string;
    id?: string | number;
  },
>(countries: T[]): SearchableCountry<T>[] {
  return countries.map((country) => {
    const nTitle = normalizeNo(country.title ?? '');
    const nCountryCode = normalizeNo(country.countryCode ?? '');
    const words = nTitle.split(/\s+/).filter(Boolean);

    return {
      ...country,
      _nTitle: nTitle,
      _nCountryCode: nCountryCode,
      _words: words,
    };
  });
}

export function searchCountries<T>(
  normalizedCountries: SearchableCountry<T>[],
  query: string,
  limit = 8,
): T[] {
  const queries = expandedQueriesNo(query);
  if (!queries.length) return [];

  return normalizedCountries
    .map((country) => {
      const score = Math.max(
        ...queries.map((query) => scoreAgainstQuery(country, query)),
      );

      return { country, score };
    })
    .filter(({ score }) => score >= 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ country }) => country);
}

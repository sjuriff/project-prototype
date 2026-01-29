"use client";

import { useMemo } from "react";
import { preprocessCountries, searchCountries } from  '@/helpers/country-search';

export function useCountrySearch<T extends { title?: string; id?: string }>(
  countries: T[],
  query: string,
  limit = 8
) {
  const normalized = useMemo(() => preprocessCountries(countries), [countries]);
  return useMemo(
    () => searchCountries(normalized, query, limit),
    [normalized, query, limit]
  );
}
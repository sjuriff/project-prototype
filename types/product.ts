
export interface Tier {
  data: string;
  validity: string;
  price: string;
  popular?: boolean
}

export interface Product {
  id: string;
  imageUrl: string | null;
  title: string;
  data: string;
  validity: string;
  price: string;
  countryCode: string;
  currency?: string;
  tiers: Tier[]
}
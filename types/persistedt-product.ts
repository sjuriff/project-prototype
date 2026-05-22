
export interface Tier {
  id: number;
  data: string;
  validity: string;
  price: number;
  popular?: boolean
}

export interface Product {
  id: number;
  imageUrl: string | null;
  title: string;
  data: string;
  validity: string;
  region?: string;
  price: number;
  countryCode: string;
  tiers: Tier[]
}
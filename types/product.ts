export interface Tier {
  id: number;
  data: string;
  validity: string;
  price: number;
  popular?: boolean;
}

export interface Product {
  id: number;
  imageUrl: string | null;
  title: string;
  region?: string;
  countryCode: string;
  tiers: Tier[];
}
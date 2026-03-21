export interface Tier {
  id: string;
  data: string;
  validity: string;
  price: number;
  popular?: boolean;
}

export interface Product {
  id: string;
  imageUrl: string | null;
  title: string;
  region?: string;
  countryCode: string;
  tiers: Tier[];
}
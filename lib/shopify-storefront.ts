import 'server-only';

import type { Product, Tier } from '@/types/shopify-product';

const SHOPIFY_STORE_DOMAIN = process.env.SHOPIFY_STORE_DOMAIN;
const SHOPIFY_STOREFRONT_TOKEN = process.env.SHOPIFY_STOREFRONT_TOKEN;
const SHOPIFY_API_VERSION =
  process.env.SHOPIFY_STOREFRONT_API_VERSION ?? '2026-01';

if (!SHOPIFY_STORE_DOMAIN) {
  throw new Error('Missing SHOPIFY_STORE_DOMAIN');
}

if (!SHOPIFY_STOREFRONT_TOKEN) {
  throw new Error('Missing SHOPIFY_STOREFRONT_TOKEN');
}

const storeDomain: string = SHOPIFY_STORE_DOMAIN;
const storefrontToken: string = SHOPIFY_STOREFRONT_TOKEN;
const apiVersion: string = '2026-01';
const COLLECTION_PRODUCTS_QUERY = `
  query CollectionProducts($handle: String!, $first: Int!) {
    collection(handle: $handle) {
      id
      title
      handle
      products(first: $first) {
        nodes {
          id
          title
          featuredImage {
            url
            altText
          }
          region: metafield(namespace: "custom", key: "region") {
            value
          }
          countryCode: metafield(namespace: "custom", key: "countryCode") {
            value
          }
          variants(first: 20) {
            nodes {
              id
              title
              price {
                amount
              }
              validity: metafield(namespace: "custom", key: "validity") {
                value
              }
              popular: metafield(namespace: "custom", key: "popular") {
                value
              }
            }
          }
        }
      }
    }
  }
`;

type ShopifyMetafield = {
  value: string | null;
} | null;

type ShopifyVariantNode = {
  id: string;
  title: string;
  price: {
    amount: string;
  };
  validity: ShopifyMetafield;
  popular: ShopifyMetafield;
};

type ShopifyProductNode = {
  id: string;
  title: string;
  featuredImage: {
    url: string;
    altText: string | null;
  } | null;
  region: ShopifyMetafield;
  countryCode: ShopifyMetafield;
  variants: {
    nodes: ShopifyVariantNode[];
  };
};

type CollectionProductsResponse = {
  collection: {
    id: string;
    title: string;
    handle: string;
    products: {
      nodes: ShopifyProductNode[];
    };
  } | null;
};

type ShopifyResponse<T> = {
  data?: T;
  errors?: Array<{ message?: string }>;
};

function parseBooleanMetafield(
  value: string | null | undefined,
): boolean | undefined {
  if (value == null) return undefined;
  return value === 'true';
}

function mapProduct(node: ShopifyProductNode): Product {
  const tiers: Tier[] = node.variants.nodes.map((variant) => ({
    id: variant.id,
    data: variant.title,
    validity: variant.validity?.value ?? '',
    price: Number(variant.price.amount),
    popular: parseBooleanMetafield(variant.popular?.value),
  }));

  return {
    id: node.id,
    imageUrl: node.featuredImage?.url ?? null,
    title: node.title,
    region: node.region?.value ?? undefined,
    countryCode: node.countryCode?.value ?? '',
    tiers,
  };
}

async function shopifyFetch<T>(
  query: string,
  variables?: Record<string, unknown>,
): Promise<T> {
  const response = await fetch(
    `https://${storeDomain}/api/${apiVersion}/graphql.json`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': storefrontToken,
      },
      body: JSON.stringify({ query, variables }),
      next: { revalidate: 60 },
    },
  );

  if (!response.ok) {
    throw new Error(
      `Shopify request failed: ${response.status} ${response.statusText}`,
    );
  }

  const json = (await response.json()) as ShopifyResponse<T>;

  if (json.errors?.length) {
    const message = json.errors
      .map((error) => error.message ?? 'Unknown Shopify error')
      .join(', ');

    throw new Error(message);
  }

  if (!json.data) {
    throw new Error('Shopify returned no data');
  }

  return json.data;
}

export async function getProductsByCollection(
  handle: string,
  first = 20,
): Promise<Product[]> {
  const data = await shopifyFetch<CollectionProductsResponse>(
    COLLECTION_PRODUCTS_QUERY,
    {
      handle,
      first,
    },
  );

  if (!data.collection) {
    return [];
  }

  return data.collection.products.nodes.map(mapProduct);
}

export async function getPopularProducts(first = 20): Promise<Product[]> {
  return getProductsByCollection('popular', first);
}

export async function getRegionProducts(first = 20): Promise<Product[]> {
  return getProductsByCollection('region', first);
}

export async function getAllProducts(first = 20): Promise<Product[]> {
  return getProductsByCollection('all', first);
}

export function getDefaultTier(product: Product): Tier | undefined {
  return (
    product.tiers.find((tier) => tier.popular === true) ?? product.tiers[0]
  );
}

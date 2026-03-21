import ProductsSection from "@/components/products/products-section"
import { getAllProducts } from "@/lib/shopify-storefront"

export default async function ProductsPage() {
  const products = await getAllProducts(29)
  return (
    <main>
      <ProductsSection products={products} />
    </main>
  )
}
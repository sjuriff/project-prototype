import ProductsSection from "@/components/products/products-section"
import products from "@/dummy-data/esim-products.json"
import { Product } from "@/types/product"

export default async function ProductsPage() {
  const contries : Product[] = products.countries

  return (
    <main>
      <ProductsSection products={contries} />
    </main>
  )
}
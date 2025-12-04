import ProductDetailV2 from "@/components/product-detail-card-v2";

export default function ProductDetailPage() {
  return (
    <main className="bg-surface border border-black flex items-center justify-center  flex flex-col  ">
      <section className="w-full border border-black bg-surface  min-h-screen flex items-center justify-center">
        <ProductDetailV2 />
      </section>
    </main>
  );
}
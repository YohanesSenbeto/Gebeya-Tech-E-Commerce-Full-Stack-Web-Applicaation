import Card from "@/components/Card";

const products = [
  {
    id: 1,
    title: "Cutting-Edge Laptop",
    description: "Experience the ultimate in performance and portability.",
    price: "$1,499.99",
    imageUrl: "/placeholder.svg",
  },
  {
    id: 2,
    title: "High-Performance Tablet",
    description: "A tablet that combines power and mobility.",
    price: "$999.99",
    imageUrl: "/placeholder.svg",
  },
  {
    id: 3,
    title: "Smartphone Pro",
    description: "The latest in smartphone technology.",
    price: "$799.99",
    imageUrl: "/placeholder.svg",
  },
];

export default function Card() {
  return (
    <section className="bg-[#0B2D5F] text-white py-12">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

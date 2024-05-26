//card.tsx
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface Product {
    id: number;
    title: string;
    description: string;
    price: string;
    imageUrl: string;
}

const products: Product[] = [
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

export default function Product() {
    return (
        <section className="bg-[#0B2D5F] text-white py-12">
            <div className="container px-4 md:px-6 max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2"
                        >
                            <Link className="absolute inset-0 z-10" href="#">
                                <span className="sr-only">
                                    View {product.title}
                                </span>
                            </Link>
                            <img
                                alt={product.title}
                                className="object-cover w-full aspect-[3/2] group-hover:opacity-50 transition-opacity"
                                height={300}
                                src={product.imageUrl}
                                width={450}
                            />
                            <div className="bg-[#0B2D5F] p-4">
                                <h3 className="font-bold text-xl">
                                    {product.title}
                                </h3>
                                <p className="text-sm text-gray-400">
                                    {product.description}
                                </p>
                                <div className="flex flex-col items-start justify-between mt-4">
                                    <div className="text-2xl font-bold">
                                        {product.price}
                                    </div>
                                    <div className="flex items-center gap-4 mt-4">
                                        <Button
                                            className="bg-[#FBBF24] text-[#0B2D5F] hover:bg-[#0B2D5F] hover:text-[#FBBF24] transition-colors"
                                            size="sm"
                                        >
                                            Add to Cart
                                        </Button>
                                        <Link
                                            className="inline-flex items-center justify-center rounded-md bg-[#FBBF24] text-[#0B2D5F] hover:bg-[#0B2D5F] hover:text-[#FBBF24] px-4 py-2 text-sm font-medium shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#0B2D5F] disabled:pointer-events-none disabled:opacity-50"
                                            href="#"
                                        >
                                            Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

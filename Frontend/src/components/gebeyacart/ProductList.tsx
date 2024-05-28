import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "./features/cart/cartSlice";
import { toast } from "react-toastify";

interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
    description: string;
}

export const products: Product[] = [
    {
        id: "1",
        name: "MacBook Pro",
        price: 1999.99,
        image: "https://static.wixstatic.com/media/495660_5a03a4c9e2ff41b1b0cdbab7711a2495~mv2.gif",
        description:
            "The MacBook Pro is a line of high-performance laptops from Apple, known for their advanced features and sleek design.",
    },
    {
        id: "2",
        name: "Dell XPS 13",
        price: 1499.99,
        image: "https://i.pinimg.com/originals/0c/30/4c/0c304c607341647a1c38076494aa3767.jpg",
        description:
            "The Dell XPS 13 is a powerful and compact laptop, ideal for professionals and students who need high performance on the go.",
    },
    {
        id: "3",
        name: "iPad Pro",
        price: 799.99,
        image: "https://static01.nyt.com/images/2020/04/21/business/21techfix1/21techfix1-jumbo.jpg?quality=75&auto=webp",
        description:
            "The iPad Pro is a versatile tablet with a powerful processor, perfect for both creative professionals and casual users.",
    },
    {
        id: "4",
        name: "iPhone 13 Pro",
        price: 999.99,
        image: "https://th.bing.com/th/id/OIP.GTVlND_UTYicMUTvzUNSpgAAAA?rs=1&pid=ImgDetMain",
        description:
            "The iPhone 13 Pro features an advanced camera system, a stunning display, and exceptional performance, all in a sleek design.",
    },
    {
        id: "5",
        name: "Apple Watch Series 7",
        price: 399.99,
        image: "https://gearguru.pk/wp-content/uploads/2023/09/MT8-Ultra-Smartwatch-1.webp",
        description:
            "The Apple Watch Series 7 offers a larger display, improved durability, and advanced health tracking features.",
    },
    {
        id: "6",
        name: "Sony X950H 4K TV",
        price: 1499.99,
        image: "https://th.bing.com/th/id/R.35f49d400a8d83548b6b68c48c264a1b?rik=uCCcN8funsswjg&pid=ImgRaw&r=0",
        description:
            "The Sony X950H 4K TV delivers stunning picture quality with vibrant colors and deep blacks, perfect for any home theater setup.",
    },
    {
        id: "7",
        name: "Sonos One SL Speaker",
        price: 179.99,
        image: "https://images.offerup.com/IcH4oPwtI0VG-HgFQ6-Dm-0PPO4=/600x800/d40c/d40c0365451d4422bf4632fe7be0a84e.jpg",
        description:
            "The Sonos One SL Speaker provides rich, room-filling sound, and is compatible with the Sonos wireless sound system.",
    },
    {
        id: "8",
        name: "Roku Streaming Stick 4K",
        price: 49.99,
        image: "https://th.bing.com/th/id/OIP.PdTppGOyjwqE_mMsHwc9eQHaHa?w=612&h=612&rs=1&pid=ImgDetMain",
        description:
            "The Roku Streaming Stick 4K offers easy access to thousands of streaming channels, with stunning 4K picture quality.",
    },
    {
        id: "9",
        name: "Canon EOS R6",
        price: 2499.99,
        image: "https://th.bing.com/th/id/OIP.G7jAhK5EL7hj9TNkhKFuXAAAAA?rs=1&pid=ImgDetMain",
        description:
            "The Canon EOS R6 is a professional-grade camera with advanced features, perfect for photographers and videographers.",
    },
    {
        id: "10",
        name: "Sony Alpha a7 III",
        price: 1799.99,
        image: "https://th.bing.com/th/id/R.a694ccdd8f04b12cb7704e876dff3d93?rik=bDvKlXpptR8aXQ&riu=http%3a%2f%2felectronicsadvisors.com%2fwp-content%2fuploads%2f2015%2f06%2fsony-a-7-3-1.jpg&ehk=P5VS%2flyUeOyen7EM9MxKM5K5TOa%2fgQ%2fucV31CTuV0AQ%3d&risl=&pid=ImgRaw&r=0",
        description:
            "The Sony Alpha a7 III is a full-frame mirrorless camera with excellent image quality and advanced autofocus capabilities.",
    },
    {
        id: "11",
        name: "GoPro HERO10 Black",
        price: 499.99,
        image: "https://i5.walmartimages.com/asr/f0bbafe1-ce04-4425-8f25-7b020d6826e0.e8a6edb31a63e8cc54aeee1c3e078702.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff",
        description:
            "The GoPro HERO10 Black is a durable and versatile action camera with advanced stabilization and high-resolution video capabilities.",
    },
    {
        id: "12",
        name: "Bose QuietComfort 35 II",
        price: 299.99,
        image: "https://th.bing.com/th/id/OIP.kntxUDDfANtFTBsVtO1ZzwHaE8?rs=1&pid=ImgDetMain",
        description:
            "The Bose QuietComfort 35 II headphones offer exceptional noise cancellation and premium sound quality for a superior listening experience.",
    },
];

const ProductList: React.FC = () => {
    const dispatch = useDispatch();

    const handleAddToCart = (product: Product) => {
        dispatch(addToCart(product));
        toast.success(`${product.name} added to cart!`);
    };

    return (
        <div className="width=[1200px]">
            <h2 className="text-2xl font-bold mb-6">Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="border rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300"
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="font-semibold text-lg">
                                {product.name}
                            </h3>
                            <p className="text-gray-600">${product.price}</p>
                            <p className="text-gray-700 text-sm mt-2">
                                {product.description}
                            </p>
                            <button
                                className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600 transition-colors duration-300"
                                onClick={() => handleAddToCart(product)}
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;

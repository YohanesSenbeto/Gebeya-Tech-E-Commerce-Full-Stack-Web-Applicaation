///ProductList.tsx
import { Button } from "@/components/ui/button";
import {
    DropdownMenuTrigger,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuCheckboxItem,
    DropdownMenuGroup,
    DropdownMenuContent,
    DropdownMenu,
    DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import { products } from "./gebeyacart/ProductList";
console.log(products);
export default function productLists() {
    console.log(products);
    return (
        <main className="bg-gray-100 py-8 px-4 md:px-8">
            <div className="container mx-auto">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-bold">All Products</h1>
                    <div className="flex items-center space-x-4">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button size="sm" variant="outline">
                                    <FilterIcon className="w-5 h-5 mr-2" />
                                    Filter
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>
                                    Filter by:
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                    <DropdownMenuLabel>
                                        Computers
                                    </DropdownMenuLabel>
                                    <DropdownMenuCheckboxItem>
                                        Laptops
                                    </DropdownMenuCheckboxItem>
                                    <DropdownMenuCheckboxItem>
                                        Desktops
                                    </DropdownMenuCheckboxItem>
                                    <DropdownMenuCheckboxItem>
                                        Tablets
                                    </DropdownMenuCheckboxItem>
                                </DropdownMenuGroup>
                                <DropdownMenuGroup>
                                    <DropdownMenuLabel>
                                        Mobile
                                    </DropdownMenuLabel>
                                    <DropdownMenuCheckboxItem>
                                        Phones
                                    </DropdownMenuCheckboxItem>
                                    <DropdownMenuCheckboxItem>
                                        Wearables
                                    </DropdownMenuCheckboxItem>
                                </DropdownMenuGroup>
                                <DropdownMenuGroup>
                                    <DropdownMenuLabel>
                                        Home Entertainment
                                    </DropdownMenuLabel>
                                    <DropdownMenuCheckboxItem>
                                        TVs
                                    </DropdownMenuCheckboxItem>
                                    <DropdownMenuCheckboxItem>
                                        Speakers
                                    </DropdownMenuCheckboxItem>
                                    <DropdownMenuCheckboxItem>
                                        Streaming Devices
                                    </DropdownMenuCheckboxItem>
                                </DropdownMenuGroup>
                                <DropdownMenuGroup>
                                    <DropdownMenuLabel>
                                        Cameras
                                    </DropdownMenuLabel>
                                    <DropdownMenuCheckboxItem>
                                        DSLR
                                    </DropdownMenuCheckboxItem>
                                    <DropdownMenuCheckboxItem>
                                        Mirrorless
                                    </DropdownMenuCheckboxItem>
                                    <DropdownMenuCheckboxItem>
                                        Action Cameras
                                    </DropdownMenuCheckboxItem>
                                </DropdownMenuGroup>
                                <DropdownMenuGroup>
                                    <DropdownMenuLabel>Audio</DropdownMenuLabel>
                                    <DropdownMenuCheckboxItem>
                                        Headphones
                                    </DropdownMenuCheckboxItem>
                                    <DropdownMenuCheckboxItem>
                                        Speakers
                                    </DropdownMenuCheckboxItem>
                                    <DropdownMenuCheckboxItem>
                                        Amplifiers
                                    </DropdownMenuCheckboxItem>
                                </DropdownMenuGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button size="sm" variant="outline">
                                    <ListIcon className="w-5 h-5 mr-2" />
                                    Sort
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Sort by:</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuRadioItem value="price-asc">
                                    Price: Low to High
                                </DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="price-desc">
                                    Price: High to Low
                                </DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="name-asc">
                                    Name: A to Z
                                </DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="name-desc">
                                    Name: Z to A
                                </DropdownMenuRadioItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white rounded-lg shadow-md overflow-hidden"
                    >
                        <img
                            alt="Product Image"
                            className="w-full h-48 object-cover"
                            height={300}
                            src={product.image}
                            style={{
                                aspectRatio: "400/300",
                                objectFit: "cover",
                            }}
                            width={400}
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-bold mb-2">
                                {product.name}
                            </h3>
                            <p className="text-gray-600 mb-2">
                                ${product.price.toFixed(2)}
                            </p>
                            <p className="text-gray-600 mb-4">
                                {product.description}
                            </p>
                            <Button className="w-full">Add to Cart</Button>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
function FilterIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
        </svg>
    );
}

function ListIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="8" x2="21" y1="6" y2="6" />
            <line x1="8" x2="21" y1="12" y2="12" />
            <line x1="8" x2="21" y1="18" y2="18" />
            <line x1="3" x2="3.01" y1="6" y2="6" />
            <line x1="3" x2="3.01" y1="12" y2="12" />
            <line x1="3" x2="3.01" y1="18" y2="18" />
        </svg>
    );
}

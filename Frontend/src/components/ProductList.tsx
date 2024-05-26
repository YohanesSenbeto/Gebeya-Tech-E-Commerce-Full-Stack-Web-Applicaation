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

export default function productList() {
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
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img
                            alt="Product Image"
                            className="w-full h-48 object-cover"
                            height={300}
                            src="https://static.wixstatic.com/media/495660_5a03a4c9e2ff41b1b0cdbab7711a2495~mv2.gif"
                            style={{
                                aspectRatio: "400/300",
                                objectFit: "cover",
                            }}
                            width={400}
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-bold mb-2">
                                MacBook Pro
                            </h3>
                            <p className="text-gray-600 mb-4">$1,999.99</p>
                            <Button className="w-full">Add to Cart</Button>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img
                            alt="Product Image"
                            className="w-full h-48 object-cover"
                            height={300}
                            src="https://i.pinimg.com/originals/0c/30/4c/0c304c607341647a1c38076494aa3767.jpg"
                            style={{
                                aspectRatio: "400/300",
                                objectFit: "cover",
                            }}
                            width={400}
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-bold mb-2">
                                Dell XPS 13
                            </h3>
                            <p className="text-gray-600 mb-4">$1,499.99</p>
                            <Button className="w-full">Add to Cart</Button>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img
                            alt="Product Image"
                            className="w-full h-48 object-cover"
                            height={300}
                            src="https://static01.nyt.com/images/2020/04/21/business/21techfix1/21techfix1-jumbo.jpg?quality=75&auto=webp"
                            style={{
                                aspectRatio: "400/300",
                                objectFit: "cover",
                            }}
                            width={400}
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-bold mb-2">iPad Pro</h3>
                            <p className="text-gray-600 mb-4">$799.99</p>
                            <Button className="w-full">Add to Cart</Button>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img
                            alt="Product Image"
                            className="w-full h-48 object-cover"
                            height={300}
                            src="https://th.bing.com/th/id/OIP.GTVlND_UTYicMUTvzUNSpgAAAA?rs=1&pid=ImgDetMain"
                            style={{
                                aspectRatio: "400/300",
                                objectFit: "cover",
                            }}
                            width={400}
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-bold mb-2">
                                iPhone 13 Pro
                            </h3>
                            <p className="text-gray-600 mb-4">$999.99</p>
                            <Button className="w-full">Add to Cart</Button>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img
                            alt="Product Image"
                            className="w-full h-48 object-cover"
                            height={300}
                            src="https://gearguru.pk/wp-content/uploads/2023/09/MT8-Ultra-Smartwatch-1.webp"
                            style={{
                                aspectRatio: "400/300",
                                objectFit: "cover",
                            }}
                            width={400}
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-bold mb-2">
                                Apple Watch Series 7
                            </h3>
                            <p className="text-gray-600 mb-4">$399.99</p>
                            <Button className="w-full">Add to Cart</Button>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img
                            alt="Product Image"
                            className="w-full h-48 object-cover"
                            height={300}
                            src="https://th.bing.com/th/id/R.35f49d400a8d83548b6b68c48c264a1b?rik=uCCcN8funsswjg&pid=ImgRaw&r=0"
                            style={{
                                aspectRatio: "400/300",
                                objectFit: "cover",
                            }}
                            width={400}
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-bold mb-2">
                                Sony X950H 4K TV
                            </h3>
                            <p className="text-gray-600 mb-4">$1,499.99</p>
                            <Button className="w-full">Add to Cart</Button>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img
                            alt="Product Image"
                            className="w-full h-48 object-cover"
                            height={300}
                            src="https://images.offerup.com/IcH4oPwtI0VG-HgFQ6-Dm-0PPO4=/600x800/d40c/d40c0365451d4422bf4632fe7be0a84e.jpg"
                            style={{
                                aspectRatio: "400/300",
                                objectFit: "cover",
                            }}
                            width={400}
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-bold mb-2">
                                Sonos One SL Speaker
                            </h3>
                            <p className="text-gray-600 mb-4">$179.99</p>
                            <Button className="w-full">Add to Cart</Button>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img
                            alt="Product Image"
                            className="w-full h-48 object-cover"
                            height={300}
                            src="https://th.bing.com/th/id/OIP.PdTppGOyjwqE_mMsHwc9eQHaHa?w=612&h=612&rs=1&pid=ImgDetMain"
                            style={{
                                aspectRatio: "400/300",
                                objectFit: "cover",
                            }}
                            width={400}
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-bold mb-2">
                                Roku Streaming Stick 4K
                            </h3>
                            <p className="text-gray-600 mb-4">$49.99</p>
                            <Button className="w-full">Add to Cart</Button>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img
                            alt="Product Image"
                            className="w-full h-48 object-cover"
                            height={300}
                            src="https://th.bing.com/th/id/OIP.G7jAhK5EL7hj9TNkhKFuXAAAAA?rs=1&pid=ImgDetMain"
                            style={{
                                aspectRatio: "400/300",
                                objectFit: "cover",
                            }}
                            width={400}
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-bold mb-2">
                                Canon EOS R6
                            </h3>
                            <p className="text-gray-600 mb-4">$2,499.99</p>
                            <Button className="w-full">Add to Cart</Button>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img
                            alt="Product Image"
                            className="w-full h-48 object-cover"
                            height={300}
                            src="https://th.bing.com/th/id/R.a694ccdd8f04b12cb7704e876dff3d93?rik=bDvKlXpptR8aXQ&riu=http%3a%2f%2felectronicsadvisors.com%2fwp-content%2fuploads%2f2015%2f06%2fsony-a-7-3-1.jpg&ehk=P5VS%2flyUeOyen7EM9MxKM5K5TOa%2fgQ%2fucV31CTuV0AQ%3d&risl=&pid=ImgRaw&r=0"
                            style={{
                                aspectRatio: "400/300",
                                objectFit: "cover",
                            }}
                            width={400}
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-bold mb-2">
                                Sony Alpha a7 III
                            </h3>
                            <p className="text-gray-600 mb-4">$1,799.99</p>
                            <Button className="w-full">Add to Cart</Button>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img
                            alt="Product Image"
                            className="w-full h-48 object-cover"
                            height={300}
                            src="https://i5.walmartimages.com/asr/f0bbafe1-ce04-4425-8f25-7b020d6826e0.e8a6edb31a63e8cc54aeee1c3e078702.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff"
                            style={{
                                aspectRatio: "400/300",
                                objectFit: "cover",
                            }}
                            width={400}
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-bold mb-2">
                                GoPro HERO10 Black
                            </h3>
                            <p className="text-gray-600 mb-4">$499.99</p>
                            <Button className="w-full">Add to Cart</Button>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img
                            alt="Product Image"
                            className="w-full h-48 object-cover"
                            height={300}
                            src="https://th.bing.com/th/id/OIP.kntxUDDfANtFTBsVtO1ZzwHaE8?rs=1&pid=ImgDetMain"
                            style={{
                                aspectRatio: "400/300",
                                objectFit: "cover",
                            }}
                            width={400}
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-bold mb-2">
                                Bose QuietComfort 35 II
                            </h3>
                            <p className="text-gray-600 mb-4">$299.99</p>
                            <Button className="w-full">Add to Cart</Button>
                        </div>
                    </div>
                </div>
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

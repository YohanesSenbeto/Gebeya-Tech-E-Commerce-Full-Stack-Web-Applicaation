import { Link } from "react-router-dom";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    DropdownMenuTrigger,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenu,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import {
    DrawerTrigger,
    DrawerTitle,
    DrawerDescription,
    DrawerHeader,
    DrawerFooter,
    DrawerContent,
    Drawer,
} from "@/components/ui/drawer";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export default function Navbar() {
    const [selectedCategory, setSelectedCategory] = useState("");

    const handleCategoryChange = async (value) => {
        setSelectedCategory(value);
        if (value === "all") {
            // Fetch all data
            console.log("Fetching all data...");
            // Add your fetch logic here
        } else {
            // Fetch data for the specific category
            console.log(`Fetching data for ${value}...`);
            // Add your fetch logic here
        }
    };

    return (
        <header className="bg-sky-950 text-white flex h-16 w-full items-center justify-between px-6 shadow-md dark:bg-gray-950 bg-color ">
            <Link
                className="flex items-center gap-2 font-semibold text-lg"
                to="/"
            >
                <GlobeIcon className="h-6 w-6" />
                <span>Gebeya Tech</span>
            </Link>
            <div className="flex-1 max-w-[600px] text-black">
                <form>
                    <div className="relative flex items-center space-x-2">
                        <Select onValueChange={handleCategoryChange}>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Select a category" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Categories</SelectLabel>
                                    <SelectItem value="all">ALL</SelectItem>
                                    <SelectItem value="phones">
                                        PHONES
                                    </SelectItem>
                                    <SelectItem value="laptops">
                                        LAPTOPS
                                    </SelectItem>
                                    <SelectItem value="desktops">
                                        DESKTOPS
                                    </SelectItem>
                                    <SelectItem value="electronics">
                                        ELECTRONICS
                                    </SelectItem>
                                    <SelectItem value="tv">TV</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>

                        <Input
                            className="w-full rounded-md bg-gray-100 pl-10 pr-4 py-2 text-sm focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary-500 focus:ring-offset-2 dark:bg-gray-800 dark:text-gray-50 dark:focus:ring-offset-gray-950"
                            placeholder="Search products ..."
                            type="search"
                        />
                        <SearchIcon className="h-10 w-10 text-white dark:text-gray-200 text-3xl" />
                    </div>
                </form>
            </div>
            <div className="flex items-center gap-4">
                <Drawer>
                    <DrawerTrigger asChild>
                        <Link
                            className="relative text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                            to="#"
                        >
                            <ShoppingCartIcon className="text-white h-6 w-6" />
                            <Badge className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-yellow text-white bg-white">
                                <p className="text-amber-700">3</p>
                            </Badge>
                        </Link>
                    </DrawerTrigger>
                    <DrawerContent className="w-[700px] h-[450px] m-[100px]">
                        <DrawerHeader>
                            <DrawerTitle>Cart</DrawerTitle>
                            <DrawerDescription>
                                Your shopping cart items.
                            </DrawerDescription>
                        </DrawerHeader>
                        <div className="px-4">
                            <div className="grid gap-4 max-h-[200px] overflow-y-auto">
                                {/* Cart items here */}
                            </div>
                        </div>
                        <DrawerFooter>
                            <div className="flex items-center justify-between">
                                <span className="font-medium">Total:</span>
                                <span className="font-medium bg-blue pr-12">
                                    $104.97
                                </span>
                            </div>
                            <div className="flex gap-2 mt-4">
                                <Button>Checkout</Button>
                                <Button variant="outline">
                                    Continue Shopping
                                </Button>
                            </div>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>

                <div className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-400 text-white">
                    <LocateIcon className="h-5 w-5" />
                    <span>Ethiopia</span>
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Avatar className="h-8 w-8 border border-gray-200 dark:border-gray-800 text-black">
                            <AvatarImage
                                alt="@shadcn"
                                src="https://avatars.githubusercontent.com/u/121575345?v=4"
                            />
                            <AvatarFallback>U</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56">
                        <DropdownMenuLabel>user user</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <Link to="/profile">Profile</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Link to="/Eypro">EYproducts</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Link to="/settings">Settings</Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <Link to="/home">Logout</Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <nav className="flex items-center gap-6 text-white">
                    <Link
                        className="text-white text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                        to="/"
                    >
                        Home
                    </Link>
                    <Link
                        className="text-white text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                        to="/productList"
                    >
                        Shop
                    </Link>
                    <Link
                        className="text-white text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                        to="/about"
                    >
                        About
                    </Link>
                    <Link
                        className="text-white text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                        to="/login"
                    >
                        Login
                    </Link>
                    <Link
                        className="text-white text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                        to="/contact"
                    >
                        Contact
                    </Link>
                </nav>
            </div>
        </header>
    );
}

function GlobeIcon(props: React.SVGProps<SVGSVGElement>) {
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
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
            <path d="M2 12h20" />
        </svg>
    );
}

function LocateIcon(props: React.SVGProps<SVGSVGElement>) {
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
            <line x1="2" x2="5" y1="12" y2="12" />
            <line x1="19" x2="22" y1="12" y2="12" />
            <line x1="12" x2="12" y1="2" y2="5" />
            <line x1="12" x2="12" y1="19" y2="22" />
            <circle cx="12" cy="12" r="7" />
        </svg>
    );
}

function ShoppingCartIcon(props: React.SVGProps<SVGSVGElement>) {
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
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l1.68 9.39a5 5 0 0 0 5 4.61h7.72a5 5 0 0 0 5-4.61l1-7H5" />
        </svg>
    );
}

function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
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
            <circle cx="11" cy="11" r="8" />
            <line x1="21" x2="16.65" y1="21" y2="16.65" />
        </svg>
    );
}

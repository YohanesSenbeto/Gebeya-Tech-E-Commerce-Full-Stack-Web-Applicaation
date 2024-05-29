// Navbar.tsx
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "./gebeyacart/App/store";
import CartDropdown from "./gebeyacart/CartDropdown";
import {
    DropdownMenuTrigger,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuContent,
    DropdownMenu,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
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

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const navigate = useNavigate();

    const handleCheckout = () => {
        setDropdownVisible(false);
        navigate("/checkout");
    };

    const cartItems = useSelector((state: RootState) => state.cart.items);
    const totalItems = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    const [category, setCategory] = useState("all");
    const [query, setQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleCategoryChange = (value: string) => {
        setCategory(value);
    };

    const handleSearch = async () => {
        try {
            const response = await axios.get(
                `/api/products/search?category=${category}&query=${query}`
            );
            setSearchResults(response.data.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleLogout = () => {
        // Implement logout functionality here
        setIsLoggedIn(false);
    };

    return (
        <header className="bg-sky-950 text-white flex h-16 w-full items-center justify-between px-6 shadow-md dark:bg-gray-950 bg-color">
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
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />

                        <SearchIcon
                            onClick={handleSearch}
                            className="h-10 w-10 text-white dark:text-gray-200 text-3xl cursor-pointer"
                        />
                        {searchResults.length > 0 && (
                            <div>
                                <h2>Search Results</h2>
                                <ul>
                                    {searchResults.map((product) => (
                                        <li key={product.product_id}>
                                            {product.product_name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
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
                            <ShoppingCartIcon
                                onClick={() =>
                                    setDropdownVisible(!dropdownVisible)
                                }
                                className="relative text-white h-6 w-6"
                            />
                            <Badge className="absolute -top-2 -right-2 flex h-5 w-6 items-center justify-center rounded-full bg-red-600 text-white text-xs font-bold">
                                <p className="text-white">{totalItems}</p>
                            </Badge>
                        </Link>
                    </DrawerTrigger>
                    <DrawerContent className="w-[500px] h-[590px] m-[100px]">
                        <DrawerHeader>
                            <DrawerTitle>Cart</DrawerTitle>
                            <DrawerDescription>
                                Your shopping cart items.
                            </DrawerDescription>
                        </DrawerHeader>
                        <DrawerDescription className="">

                        <CartDropdown items={cartItems} />
                        </DrawerDescription>

                        

                        <DrawerFooter className="">
                            <DrawerClose>
                                <div className="mt-10">
                                    <button
                                        onClick={() => navigate("/checkout")}
                                        className=" text-center bg-green-500 text-white px-4 py-2 rounded mt-5 hover:bg-green-600 transition-colors duration-300"
                                    >
                                        Proceed to Checkout
                                    </button>
                                </div>
                            </DrawerClose>
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
                            <Link to="/cart">mycart</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Link to="/gebeyacart">gebeyacart</Link>
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
                    {isLoggedIn ? (
                        <button
                            className="text-white text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    ) : (
                        <Link
                            className="text-white text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                            to="/login"
                        >
                            Login
                        </Link>
                    )}
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
};

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

export default Navbar;

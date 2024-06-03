// Navbar.tsx
import { Link, useNavigate } from "react-router-dom";
import { useState, ChangeEvent, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import logOut from "./services/loginservice";
import { useAuth } from './Contexts/AuthContext';
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
import { useSearch } from './SearchContext';
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"

const Navbar = () => {
    const { isLogged, isAdmin, setIsAdmin, setIsLogged, user } = useAuth();
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const navigate = useNavigate();
    const { setProducts } = useSearch();

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

    useEffect(() => {
        if (query.length > 2) {
            handleSearch();
        } else {
            setSearchResults([]);
        }
    }, [query]);

    const handleCategoryChange = (value: string) => {
        setCategory(value);
    };

    const handleSearch = async () => {
        try {
            const response = await axios.get(
                `http://localhost:8000/api/products/search?category=${category}&query=${query}`
            );
            console.log(response.data);
            setProducts(searchResults);
            setSearchResults(response.data);
            
        } catch (error) {
            console.error(error);
        }
    };

    const handleLogout = () => {
        setIsLogged(false);
        logOut();
        navigate("/login");
    };

    return (
        <header className="bg-sky-950 text-white flex h-16 w-full items-center justify-between px-6 shadow-md dark:bg-gray-950 sticky top-0 z-50">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                <Link className="flex items-center gap-2 font-semibold text-lg" to="/">
                    <span>Gebeya Tech</span>
                </Link>
                <div className="flex-1 items-center gap-3 md:flex hidden">
                    <form className="relative hidden w-full max-w-md md:flex">
                        <SearchIcon 
                            className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 dark:text-gray-400"
                            onClick={handleSearch}
                        />
                        <div className="relative  flex items-center ml-10 w-[120px]">
                            <Select onValueChange={handleCategoryChange}>
                            <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Search by category" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                    <SelectLabel>Categories</SelectLabel>
                                        <SelectItem value="all">ALL</SelectItem>
                                        <SelectItem value="phones">PHONES</SelectItem>
                                        <SelectItem value="laptops">LAPTOPS</SelectItem>
                                        <SelectItem value="desktops">DESKTOPS</SelectItem>
                                        <SelectItem value="electronics">ELECTRONICS</SelectItem>
                                        <SelectItem value="tv">TV</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <Input
                            type="search"
                            placeholder="Search products..."
                            className="h-9 w-[300px] ml-10 rounded-md bg-gray-100 pl-9 text-sm focus:bg-white focus:outline-none dark:bg-gray-800 dark:text-gray-50"
                            value={query}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
                        />
                    </form>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button>
                                Our products
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-56">
                            <DropdownMenuLabel>our products</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <Link to="/laptops">
                                <DropdownMenuItem>Laptops</DropdownMenuItem>
                            </Link>
                            <Link to="/phones">
                                <DropdownMenuItem>Phones</DropdownMenuItem>
                            </Link>
                            <Link to="/Accessories">
                                <DropdownMenuItem>Accessories</DropdownMenuItem>
                            </Link>
                            <Link to="/settings">
                                <DropdownMenuItem>Settings</DropdownMenuItem>
                            </Link>
                            <DropdownMenuSeparator />
                            
                        </DropdownMenuContent>
                    </DropdownMenu>

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
                        <DrawerContent className="w-[400px] h-[550px] m-[0px]">
                            <DrawerHeader>
                                <DrawerTitle>Cart</DrawerTitle>
                                <DrawerDescription>
                                    Your shopping cart items.
                                    <CartDropdown items={cartItems} />
                                </DrawerDescription>
                            </DrawerHeader>
                            <DrawerDescription className="w-[700px]"></DrawerDescription>
                            <DrawerFooter className="">
                                <DrawerClose>
                                    <div className="">
                                        <button
                                            onClick={() => navigate("/checkout")}
                                            className="text-center bg-green-500 text-white px-4 py-3 rounded mt-5 hover:bg-green-600 transition-colors duration-300"
                                        >
                                            Proceed to Checkout
                                        </button>
                                    </div>
                                </DrawerClose>
                            </DrawerFooter>
                        </DrawerContent>
                    </Drawer>
                    <div className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-400 text-white md:hidden">
                        <LocateIcon className="h-5 w-5" />
                        <span>Ethiopia</span>
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Avatar className="h-8 w-8 border border-gray-200 dark:border-gray-800 text-black">
                                <AvatarImage
                                    alt={user?.full_name}
                                    src="https://imgs.search.brave.com/ww5k7GZKu3CaMGwAsbPlFlyM7ogaHe2ZnHdOvxrz9kE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA0Lzk4LzcyLzQz/LzM2MF9GXzQ5ODcy/NDMyM19Gb25BeThM/WVlmRDFCVUMwYmNL/NTZhb1l3dUxISjJH/ZS5qcGc"
                                />
                                <AvatarFallback>U</AvatarFallback>
                            </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-56">
                            <DropdownMenuLabel>{user?.email}</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <Link to="/profile">
                                <DropdownMenuItem>Profile</DropdownMenuItem>
                            </Link>
                            <Link to="/cart">
                                <DropdownMenuItem>mycart</DropdownMenuItem>
                            </Link>
                            <Link to="/addproduct">
                                <DropdownMenuItem>Add Product</DropdownMenuItem>
                            </Link>
                            <Link to="/settings">
                                <DropdownMenuItem>Settings</DropdownMenuItem>
                            </Link>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <Button onClick={handleLogout}>Logout</Button>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <nav className="flex items-center gap-6 text-white">
                    
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="inline-flex justify-center w-full">
           Menu
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel>Menu</DropdownMenuLabel>
          <DropdownMenuSeparator />
          
          <Link to="/" className="block" onClick={() => setOpen(false)}>
            <DropdownMenuItem>Home</DropdownMenuItem>
          </Link>
          <Link to="/productList" className="block" onClick={() => setOpen(false)}>
            <DropdownMenuItem>Shop</DropdownMenuItem>
          </Link>
          <Link to="/about" className="block" onClick={() => setOpen(false)}>
            <DropdownMenuItem>About</DropdownMenuItem>
          </Link>
          <Link to="/contact" className="block" onClick={() => setOpen(false)}>
            <DropdownMenuItem>Contact</DropdownMenuItem>
          </Link>
          <DropdownMenuSeparator />
          {isLogged ? (
            <DropdownMenuItem>
              <Button onClick={() => { handleLogout(); }}>Logout</Button>
            </DropdownMenuItem>
          ) : (
            <Link to="/login" className="block" onClick={() => setOpen(false)}>
              <DropdownMenuItem>Login</DropdownMenuItem>
            </Link>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    
                </nav>
                    <Sheet >
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">

          
              <div className="flex flex-col gap-4 p-4 bg-sky-950">
                <form className="relative">
                  <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
                  <Input
                    type="search"
                    placeholder="Search products..."
                    className="h-9 w-full rounded-md bg-gray-100 pl-9 text-sm focus:bg-white focus:outline-none dark:bg-gray-800 dark:text-gray-50"
                  />
                  
     
                </form>
        
              </div>


              <nav className="bg-sky-950 h-full flex flex-col items-start space-y-4 p-4 ">
              <Link
                        className=" text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                        to="/"
                    >
                    
                        Home
                    </Link>
                    <Link
                        className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                        to="/productList"
                    >
                        Shop
                    </Link>
                    <Link
                        className=" text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                        to="/about"
                    >
                        About
                    </Link>
                    {isLogged ? (
                        <button
                            className=" text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    ) : (
                        <Link
                            className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                            to="/login"
                        >
                            Login
                        </Link>
                    )}
                    <Link
                        className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                        to="/contact"
                    >
                        Contact
                    </Link>
    </nav>
             
            </SheetContent>
          </Sheet>
                </div>
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







function HeadphonesIcon(props) {
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
        <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
      </svg>
    )
  }
  
  
  function LaptopIcon(props) {
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
        <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
      </svg>
    )
  }
  
  
  function MenuIcon(props) {
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
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="18" y2="18" />
      </svg>
    )
  }
  
  
  function PhoneIcon(props) {
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
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    )
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
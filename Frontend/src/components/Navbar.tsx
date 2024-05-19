
import {Link} from 'react-router-dom';

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenu, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { DrawerTrigger, DrawerTitle, DrawerDescription, DrawerHeader, DrawerFooter, DrawerContent, Drawer } from "@/components/ui/drawer"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"

export default function Navbar() {
  return (
    <header className="bg-dark-500 flex h-16 w-full items-center justify-between px-6 shadow-md dark:bg-gray-950">
      <Link className="flex items-center gap-2 font-semibold text-lg" to="/">
        <GlobeIcon className="h-6 w-6" />
        <span>Gebeya Tech</span>
      </Link>
      <div className="flex-1 max-w-[400px]">
        <form>
          <div className="relative">
            <SearchIcon className="absolute left-1 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-grey-200" />
            <Input
              className="w-full rounded-md bg-gray-100 pl-50 pr-1 py-2 text-sm focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary-500 focus:ring-offset-2 dark:bg-gray-800 dark:text-gray-50 dark:focus:ring-offset-gray-950"
              placeholder="        Search products ..."
              type="search"
            />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="absolute right-2 top-1/2 -translate-y-1/2" size="icon" variant="ghost">
                  <FilterIcon className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>Filter Products</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem>
                  <span className="flex items-center gap-2">
                    <CatIcon className="h-4 w-4" />
                    Category
                  </span>
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>
                  <span className="flex items-center gap-2">
                    <SearchIcon className="h-4 w-4" />
                    Price
                  </span>
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>
                  <span className="flex items-center gap-2">
                    <RatioIcon className="h-4 w-4" />
                    Rating
                  </span>
                </DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
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
      <ShoppingCartIcon className="h-6 w-6" />
      <Badge className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white">
        3
      </Badge>
    </Link>
  </DrawerTrigger>
  <DrawerContent className="w-[700px] h-[450px] m-[100px]">
    <DrawerHeader>
      <DrawerTitle>Cart</DrawerTitle>
      <DrawerDescription>Your shopping cart items.</DrawerDescription>
    </DrawerHeader>
    <div className="px-4">
      <div className="grid gap-4 max-h-[200px] overflow-y-auto">
        <div className="flex items-center gap-6">
          <img
            alt="Product Image"
            className="rounded-md object-cover"
            height={40}
            src="/placeholder.svg"
            style={{
              aspectRatio: "80/80",
              objectFit: "cover",
            }}
            width={60}
          />
          <div className="flex-1 justify-between">
            <h4 className="font-medium">Gebeya Gadgets</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">Quantity: 1</p>
          </div>
          <div className="font-medium pr-10">$24.99</div>
        </div>
        <div className="flex items-center gap-6">
          <img
            alt="Product Image"
            className="rounded-md object-cover"
            height={40}
            src="/placeholder.svg"
            style={{
              aspectRatio: "80/80",
              objectFit: "cover",
            }}
            width={60}
          />
          <div className="flex-1 justify-between">
            <h4 className="font-medium">Gebeya Gadgets</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">Quantity: 1</p>
          </div>
          <div className="font-medium pr-10">$24.99</div>
        </div>
        <div className="flex items-center gap-6">
          <img
            alt="Product Image"
            className="rounded-md object-cover"
            height={40}
            src="/placeholder.svg"
            style={{
              aspectRatio: "80/80",
              objectFit: "cover",
            }}
            width={60}
          />
          <div className="flex-1 justify-between">
            <h4 className="font-medium">Gebeya Gadgets</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">Quantity: 1</p>
          </div>
          <div className="font-medium pr-10">$24.99</div>
        </div>
        <div className="flex items-center gap-6">
          <img
            alt="Product Image"
            className="rounded-md object-cover"
            height={40}
            src="/placeholder.svg"
            style={{
              aspectRatio: "80/80",
              objectFit: "cover",
            }}
            width={60}
          />
          <div className="flex-1 justify-between">
            <h4 className="font-medium">Gebeya Gadgets</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">Quantity: 1</p>
          </div>
          <div className="font-medium pr-10">$24.99</div>
        </div>
        <div className="flex items-center gap-6">
          <img
            alt="Product Image"
            className="rounded-md object-cover"
            height={40}
            src="/placeholder.svg"
            style={{
              aspectRatio: "80/80",
              objectFit: "cover",
            }}
            width={60}
          />
          <div className="flex-1 justify-between">
            <h4 className="font-medium">Gebeya Gadgets</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">Quantity: 1</p>
          </div>
          <div className="font-medium pr-10">$24.99</div>
        </div>
      </div>
    </div>
    <DrawerFooter>
      <div className="flex items-center justify-between">
        <span className="font-medium">Total:</span>
        <span className="font-medium bg-blue pr-12">$104.97</span>
      </div>
      <div className="flex gap-2 mt-4">
        <Button>Checkout</Button>
        <Button variant="outline">Continue Shopping</Button>
      </div>
    </DrawerFooter>
  </DrawerContent>
</Drawer>





        <div className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-400">
          <LocateIcon className="h-5 w-5" />
          <span>Addis Ababa</span>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="h-8 w-8 border border-gray-200 dark:border-gray-800">
              <AvatarImage alt="@shadcn" src="/placeholder-user.jpg" />
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
              <Link to="/settings">Settings</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link to="/home">Logout</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <nav className="flex items-center gap-6">
          <Link
            className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            to="/home"
          >
            Home
          </Link>
          <Link
            className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            to="/shop"
          >
            Shop
          </Link>
          <Link
            className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            to="/about"
          >
            About
          </Link>

          <Link
            className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            to="/login"
          >
            Login
          </Link>
          <Link
            className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            to="/contact"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}

function CatIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z" />
      <path d="M8 14v.5" />
      <path d="M16 14v.5" />
      <path d="M11.25 16.25h1.5L12 17l-.75-.75Z" />
    </svg>
  )
}


function FilterIcon(props: React.SVGProps<SVGSVGElement>) {
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
  )
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
  )
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
  )
}


function RatioIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <rect width="12" height="20" x="6" y="2" rx="2" />
      <rect width="20" height="12" x="2" y="6" rx="2" />
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
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
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
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  )
}

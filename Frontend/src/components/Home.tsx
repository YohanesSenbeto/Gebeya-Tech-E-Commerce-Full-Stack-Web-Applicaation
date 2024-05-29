//Home.tsx

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ProductList from "./gebeyacart/ProductList";
export default function Home() {
    return (
        <div className="flex flex-col min-h-[100dvh] dark:bg-[#0B1D38] text-white">
            <main className="flex-1">
                <section className="w-full ">
                    <img
                        alt="Top Banner"
                        className="w-full object-fit"
                        height={900}
                        src="https://ideogram.ai/api/images/direct/vo9iBXvaTqyZpBrbn9xRag.png"
                        style={{
                            aspectRatio: "1920/900",
                            objectFit: "cover",
                        }}
                        width={1920}
                    />
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-[#0B1D38]">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg bg-[#0B1D38] px-3 py-1 text-sm">
                                    Featured Products
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                    Explore Our Tech Essentials
                                </h2>
                                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    From the latest smartphones and laptops to
                                    cutting-edge smart home devices and gaming
                                    consoles, Gebeya Tech has it all. Browse our
                                    curated selection and find the perfect tech
                                    companion for your lifestyle.
                                </p>
                            </div>
                        </div>

                        <div className="container mx-auto p-4">
                            <h1 className="text-3xl font-bold text-center mb-8 text-white">
                                Product Listings
                            </h1>
                          
                        </div>

                    </div>
                    <ProductList />
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-[#0B1D38]">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg bg-[#0B1D38] px-3 py-1 text-sm">
                                    Why Choose Gebeya Tech?
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                    Unparalleled Quality and Service
                                </h2>
                                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    At Gebeya Tech, we are committed to
                                    providing our customers with the best
                                    possible experience. From our rigorous
                                    quality assurance process to our competitive
                                    pricing and fast, secure shipping, we strive
                                    to exceed your expectations every step of
                                    the way.
                                </p>
                            </div>
                            <div className="grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                <div className="group flex flex-col items-center justify-center gap-4 rounded-lg border border-[#0B1D38] bg-[#0B1D38] p-6 shadow-lg transition-all hover:bg-[#0B1D38]/90">
                                    <CheckIcon className="h-8 w-8 fill-primary" />
                                    <h3 className="text-lg font-medium">
                                        Quality Assurance
                                    </h3>
                                    <p className="text-center text-gray-300">
                                        All our products undergo rigorous
                                        testing to ensure the highest standards
                                        of quality and durability.
                                    </p>
                                </div>
                                <div className="group flex flex-col items-center justify-center gap-4 rounded-lg border border-[#0B1D38] bg-[#0B1D38] p-6 shadow-lg transition-all hover:bg-[#0B1D38]/90">
                                    <WalletIcon className="h-8 w-8 fill-primary" />
                                    <h3 className="text-lg font-medium">
                                        Competitive Pricing
                                    </h3>
                                    <p className="text-center text-gray-300">
                                        We offer the best prices on the market,
                                        ensuring you get unbeatable value for
                                        your money.
                                    </p>
                                </div>
                                <div className="group flex flex-col items-center justify-center gap-4 rounded-lg border border-[#0B1D38] bg-[#0B1D38] p-6 shadow-lg transition-all hover:bg-[#0B1D38]/90">
                                    <TruckIcon className="h-8 w-8 fill-primary" />
                                    <h3 className="text-lg font-medium">
                                        Fast Shipping
                                    </h3>
                                    <p className="text-center text-gray-300">
                                        We offer fast, secure shipping to ensure
                                        your products arrive quickly and safely.
                                    </p>
                                </div>
                                <div className="group flex flex-col items-center justify-center gap-4 rounded-lg border border-[#0B1D38] bg-[#0B1D38] p-6 shadow-lg transition-all hover:bg-[#0B1D38]/90">
                                    <ShieldIcon className="h-8 w-8 fill-primary" />
                                    <h3 className="text-lg font-medium">
                                        Secure Payments
                                    </h3>
                                    <p className="text-center text-gray-300">
                                        We use the latest encryption technology
                                        to ensure your payments are safe and
                                        secure.
                                    </p>
                                </div>
                                <div className="group flex flex-col items-center justify-center gap-4 rounded-lg border border-[#0B1D38] bg-[#0B1D38] p-6 shadow-lg transition-all hover:bg-[#0B1D38]/90">
                                    <HeadphonesIcon className="h-8 w-8 fill-primary" />
                                    <h3 className="text-lg font-medium">
                                        Excellent Support
                                    </h3>
                                    <p className="text-center text-gray-300">
                                        Our knowledgeable support team is
                                        available to assist you with any
                                        questions or concerns.
                                    </p>
                                </div>
                                <div className="group flex flex-col items-center justify-center gap-4 rounded-lg border border-[#0B1D38] bg-[#0B1D38] p-6 shadow-lg transition-all hover:bg-[#0B1D38]/90">
                                    <WrenchIcon className="h-8 w-8 fill-primary" />
                                    <h3 className="text-lg font-medium">
                                        Comprehensive Warranty
                                    </h3>
                                    <p className="text-center text-gray-300">
                                        All our products come with a warranty to
                                        ensure your satisfaction.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-[#0B1D38]">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg bg-[#0B1D38] px-3 py-1 text-sm">
                                    Featured Brands
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                    Top Brands You Can Trust
                                </h2>
                                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Gebeya Tech partners with the leading brands
                                    in the industry to bring you the best
                                    products and services. Explore our selection
                                    of top-tier brands and find the perfect fit
                                    for your needs.
                                </p>
                            </div>
                            <div className="grid max-w-5xl grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
                                <div className="flex items-center justify-center">
                                    <img
                                        alt="Brand Logo"
                                        className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                                        height="70"
                                        src="/placeholder.svg"
                                        width="140"
                                    />
                                </div>
                                <div className="flex items-center justify-center">
                                    <img
                                        alt="Brand Logo"
                                        className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                                        height="70"
                                        src="/placeholder.svg"
                                        width="140"
                                    />
                                </div>
                                <div className="flex items-center justify-center">
                                    <img
                                        alt="Brand Logo"
                                        className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                                        height="70"
                                        src="/placeholder.svg"
                                        width="140"
                                    />
                                </div>
                                <div className="flex items-center justify-center" />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

function CheckIcon(props) {
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
            <path d="M20 6 9 17l-5-5" />
        </svg>
    );
}

function GlobeIcon(props) {
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
    );
}

function LogOutIcon(props) {
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
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" x2="9" y1="12" y2="12" />
        </svg>
    );
}

function MoveVerticalIcon(props) {
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
            <polyline points="8 18 12 22 16 18" />
            <polyline points="8 6 12 2 16 6" />
            <line x1="12" x2="12" y1="2" y2="22" />
        </svg>
    );
}

function SettingsIcon(props) {
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
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    );
}

function ShieldIcon(props) {
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
            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
        </svg>
    );
}

function ShoppingCartIcon(props) {
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
    );
}

function TruckIcon(props) {
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
            <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
            <path d="M15 18H9" />
            <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
            <circle cx="17" cy="18" r="2" />
            <circle cx="7" cy="18" r="2" />
        </svg>
    );
}

function UserIcon(props) {
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
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
        </svg>
    );
}

function WalletIcon(props) {
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
            <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
            <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
        </svg>
    );
}

function WrenchIcon(props) {
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
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
    );
}

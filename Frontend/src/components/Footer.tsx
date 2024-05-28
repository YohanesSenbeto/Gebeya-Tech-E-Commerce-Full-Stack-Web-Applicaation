import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-[#1E293B] py-12 text-white">
            <div className="container mx-auto flex flex-col items-center justify-center space-y-8 px-4 md:px-6">
                <div className="flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-4">
                    <h3 className="text-2xl font-bold">
                        Welcome to Gebeya Tech: Your Ultimate Destination for
                        Electronics and Tech Gadgets
                    </h3>
                    <br></br>
                    <p className="max-w-[700px] text-center text-sm md:text-base">
                        Gebeya Tech is more than just an online store. It's a
                        gateway to the world of cutting-edge technology and
                        innovation. We cater to tech enthusiasts, gadget gurus,
                        and anyone in search of the latest electronics. Explore
                        our wide range of products and discover the future of
                        technology.
                    </p>
                </div>
                <div className="flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-4">
                    <Link
                        className="inline-flex h-10 items-center justify-center rounded-md bg-[#0EA5E9] px-6 text-sm font-medium text-white shadow transition-colors hover:bg-[#0284C7] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#0284C7] disabled:pointer-events-none disabled:opacity-50"
                        to="/ProductList"
                    >
                        Shop Now
                    </Link>
                    <Link
                        className="inline-flex h-10 items-center justify-center rounded-md border border-[#0EA5E9] bg-transparent px-6 text-sm font-medium text-[#0EA5E9] shadow-sm transition-colors hover:bg-[#0EA5E9] hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#0EA5E9] disabled:pointer-events-none disabled:opacity-50"
                        to="/about"
                    >
                        Learn More
                    </Link>
                </div>
                <div className="flex items-center space-x-4">
                    <Link
                        className="text-[#0EA5E9] hover:text-[#0284C7] transition-colors"
                        to="https://www.facebook.com/photo/?fbid=505230648292765&set=a.416406837175147"
                    >
                        <FacebookIcon className="h-6 w-6" />
                        <span className="sr-only">Facebook</span>
                    </Link>
                    <Link
                        className="text-[#0EA5E9] hover:text-[#0284C7] transition-colors"
                        to=""
                    >
                        <TwitterIcon className="h-6 w-6" />
                        <span className="sr-only">Twitter</span>
                    </Link>
                    <Link
                        className="text-[#0EA5E9] hover:text-[#0284C7] transition-colors"
                        href="#"
                    >
                        <InstagramIcon className="h-6 w-6" />
                        <span className="sr-only">Instagram</span>
                    </Link>
                    <Link
                        className="text-[#0EA5E9] hover:text-[#0284C7] transition-colors"
                        href="#"
                    >
                        <LinkedinIcon className="h-6 w-6" />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link
                        className="text-[#0EA5E9] hover:text-[#0284C7] transition-colors"
                        href="#"
                    >
                        <YoutubeIcon className="h-6 w-6" />
                        <span className="sr-only">YouTube</span>
                    </Link>
                    <Link
                        className="text-[#0EA5E9] hover:text-[#0284C7] transition-colors"
                        href="#"
                    >
                        <GithubIcon className="h-6 w-6" />
                        <span className="sr-only">GitHub</span>
                    </Link>
                </div>
                <div className="flex flex-col items-center space-y-2 text-sm md:flex-row md:space-y-0 md:space-x-4">
                    <Link
                        className="text-[#0EA5E9] hover:text-[#0284C7] transition-colors"
                        href="#"
                    >
                        Terms of Service
                    </Link>
                    <Link
                        className="text-[#0EA5E9] hover:text-[#0284C7] transition-colors"
                        href="#"
                    >
                        Privacy Policy
                    </Link>
                    <Link
                        className="text-[#0EA5E9] hover:text-[#0284C7] transition-colors"
                        to="/contact"
                    >
                        Contact Us
                    </Link>
                    <Link
                        className="text-[#0EA5E9] hover:text-[#0284C7] transition-colors"
                        to="/about"
                    >
                        About Us
                    </Link>
                    <Link
                        className="text-[#0EA5E9] hover:text-[#0284C7] transition-colors"
                        href="#"
                    >
                        FAQs
                    </Link>
                    <Link
                        className="text-[#0EA5E9] hover:text-[#0284C7] transition-colors"
                        href="#"
                    >
                        Shipping & Returns
                    </Link>
                </div>
                <div className="flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-4">
                    <div className="flex items-center space-x-2">
                        <LocateIcon className="h-6 w-6 text-[#0EA5E9]" />
                        <p className="text-sm">Addis Ababa Ethiopia</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <PhoneIcon className="h-6 w-6 text-[#0EA5E9]" />
                        <p className="text-sm">+251-911505050</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <MailIcon className="h-6 w-6 text-[#0EA5E9]" />
                        <p className="text-sm">info@gebeyatech.com</p>
                    </div>
                </div>
                <p className="text-sm text-[#0EA5E9]">
                    © 2024 Gebeya Tech. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

function FacebookIcon(props) {
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
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
    );
}

function GithubIcon(props) {
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
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
    );
}

function InstagramIcon(props) {
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
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
    );
}

function LinkedinIcon(props) {
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
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
        </svg>
    );
}

function LocateIcon(props) {
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

function MailIcon(props) {
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
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
    );
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
    );
}

function TwitterIcon(props) {
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
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
    );
}

function YoutubeIcon(props) {
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
            <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
            <path d="m10 15 5-3-5-3z" />
        </svg>
    );
}

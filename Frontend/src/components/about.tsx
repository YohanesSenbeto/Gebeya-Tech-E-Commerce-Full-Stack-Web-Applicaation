/**
 * v0 by Vercel.
 * @see https://v0.dev/t/U3xB7VF8RJD
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function about() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            About Gebeya Tech
                        </h2>
                        <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            Gebeya Tech is a leading e-commerce platform
                            dedicated to providing high-quality electronics and
                            tech devices to customers in Ethiopia. Our mission
                            is to make the latest technology accessible and
                            affordable, empowering individuals and businesses to
                            stay connected and productive.
                        </p>
                        <ul className="grid gap-4">
                            <li className="flex items-center gap-2">
                                <CheckIcon className="h-5 w-5 text-gray-900 dark:text-gray-50" />
                                Wide selection of smartphones, laptops, and
                                gadgets
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckIcon className="h-5 w-5 text-gray-900 dark:text-gray-50" />
                                Fast and reliable delivery across Ethiopia
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckIcon className="h-5 w-5 text-gray-900 dark:text-gray-50" />
                                Competitive prices and frequent sales
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckIcon className="h-5 w-5 text-gray-900 dark:text-gray-50" />
                                Dedicated customer support and warranty services
                            </li>
                        </ul>
                    </div>
                    <img
                        alt="About Gebeya Tech"
                        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                        height="500"
                        src="https://ideogram.ai/api/images/direct/rmr9erPBS3K7wBVnbQEcJg.png"
                        width="1000"
                    />
                </div>
            </div>
        </section>
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

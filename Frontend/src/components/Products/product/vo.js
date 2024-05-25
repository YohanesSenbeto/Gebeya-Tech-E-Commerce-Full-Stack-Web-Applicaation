/**
 * v0 by Vercel.
 * @see https://v0.dev/t/q3uiR3kixYp
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <section className="bg-[#0B2D5F] text-white py-12">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">View</span>
            </Link>
            <img
              alt="Product 1"
              className="object-cover w-full aspect-[3/2] group-hover:opacity-50 transition-opacity"
              height={300}
              src="/placeholder.svg"
              width={450}
            />
            <div className="bg-[#0B2D5F] p-4">
              <h3 className="font-bold text-xl">Cutting-Edge Laptop</h3>
              <p className="text-sm text-gray-400">Experience the ultimate in performance and portability.</p>
              <div className="flex flex-col items-start justify-between mt-4">
                <div className="text-2xl font-bold">$1,499.99</div>
                <div className="flex items-center gap-4 mt-4">
                  <Button
                    className="bg-[#FBBF24] text-[#0B2D5F] hover:bg-[#0B2D5F] hover:text-[#FBBF24] transition-colors"
                    size="sm"
                  >
                    Add to Cart
                  </Button>
                  <Link
                    className="inline-flex items-center justify-center rounded-md bg-[#FBBF24] text-[#0B2D5F] hover:bg-[#0B2D5F] hover:text-[#FBBF24] px-4 py-2 text-sm font-medium shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#0B2D5F] disabled:pointer-events-none disabled:opacity-50"
                    href="#"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">View</span>
            </Link>
            <img
              alt="Product 2"
              className="object-cover w-full aspect-[3/2] group-hover:opacity-50 transition-opacity"
              height={300}
              src="/placeholder.svg"
              width={450}
            />
            <div className="bg-[#0B2D5F] p-4">
              <h3 className="font-bold text-xl">Cutting-Edge Laptop</h3>
              <p className="text-sm text-gray-400">Experience the ultimate in performance and portability.</p>
              <div className="flex flex-col items-start justify-between mt-4">
                <div className="text-2xl font-bold">$1,499.99</div>
                <div className="flex items-center gap-4 mt-4">
                  <Button
                    className="bg-[#FBBF24] text-[#0B2D5F] hover:bg-[#0B2D5F] hover:text-[#FBBF24] transition-colors"
                    size="sm"
                  >
                    Add to Cart
                  </Button>
                  <Link
                    className="inline-flex items-center justify-center rounded-md bg-[#FBBF24] text-[#0B2D5F] hover:bg-[#0B2D5F] hover:text-[#FBBF24] px-4 py-2 text-sm font-medium shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#0B2D5F] disabled:pointer-events-none disabled:opacity-50"
                    href="#"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">View</span>
            </Link>
            <img
              alt="Product 3"
              className="object-cover w-full aspect-[3/2] group-hover:opacity-50 transition-opacity"
              height={300}
              src="/placeholder.svg"
              width={450}
            />
            <div className="bg-[#0B2D5F] p-4">
              <h3 className="font-bold text-xl">Cutting-Edge Laptop</h3>
              <p className="text-sm text-gray-400">Experience the ultimate in performance and portability.</p>
              <div className="flex flex-col items-start justify-between mt-4">
                <div className="text-2xl font-bold">$1,499.99</div>
                <div className="flex items-center gap-4 mt-4">
                  <Button
                    className="bg-[#FBBF24] text-[#0B2D5F] hover:bg-[#0B2D5F] hover:text-[#FBBF24] transition-colors"
                    size="sm"
                  >
                    Add to Cart
                  </Button>
                  <Link
                    className="inline-flex items-center justify-center rounded-md bg-[#FBBF24] text-[#0B2D5F] hover:bg-[#0B2D5F] hover:text-[#FBBF24] px-4 py-2 text-sm font-medium shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#0B2D5F] disabled:pointer-events-none disabled:opacity-50"
                    href="#"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

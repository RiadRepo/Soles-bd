import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function ProductPreview({ product }) {
  const router = useRouter();
  if (!product || !product.imageSrc) {
    // Handle the case where product or imageSrc is missing
    return null; // Skip rendering the card
  }
  const { imageSrc, productName, rating, price, addToCartLink, discount } =
    product;

  const Checkout = () => {
    router.push("/checkout");
  };

  return (
    <section class="overflow-hidden">
      <div class="mx-auto max-w-5xl px-5 py-24 sm:py-0 xs:py-0">
        <div class="mx-auto flex flex-wrap items-center lg:w-4/5">
          <img
            alt={productName}
            class="h-64 w-full rounded object-cover lg:h-96 lg:w-1/2"
            src={imageSrc}
          />
          <div class=" w-full lg:mt-0 lg:w-1/2 lg:pl-10">
            <h2 class="text-sm font-semibold tracking-widest text-gray-500">
              Tshirt
            </h2>
            <h1 class="my-4 text-3xl font-semibold text-black">
              {productName}
            </h1>
            {/* <div class="my-4 flex items-center">
              <span class="flex items-center space-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="text-yellow-500"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="text-yellow-500"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="text-yellow-500"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="text-yellow-500"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="text-yellow-500"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <span class="ml-3 inline-block text-xs font-semibold">
                  4 Reviews
                </span>
              </span>
            </div> */}
            <p class="leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
              rem amet repudiandae neque adipisci eum enim, natus illo inventore
              totam?
            </p>
            <span class="title-font text-xl font-bold text-gray-900">
              Tk : {price}
            </span>
            <div class=" flex items-center border-b-2 border-gray-100 ">
              {/* <div class="flex items-center">
                <span class="mr-3 text-sm font-semibold">Color</span>
                <button class="h-6 w-6 rounded-full border-2 border-gray-300 focus:outline-none"></button>
                <button class="ml-1 h-6 w-6 rounded-full border-2 border-gray-300 bg-gray-700 focus:outline-none"></button>
                <button class="ml-1 h-6 w-6 rounded-full border-2 border-gray-300 bg-green-200 focus:outline-none"></button>
              </div> */}
              <div class="space-s-4 3xl:pr-48 flex items-center gap-2  py-8 ">
                <span class="mr-3 text-sm font-semibold">Size</span>
                <div class="relative">
                  <select class="appearance-none rounded border border-gray-300 py-2 pl-3 pr-10 text-sm focus:border-black focus:outline-none focus:ring-2 focus:ring-black">
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                    <option>XXL</option>
                  </select>
                  <span class="pointer-events-none absolute right-0 top-0 flex h-full w-10 items-center justify-center text-center text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-chevron-down"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </div>

                {/* <div class="mb-4">
                  <h3 class="text-heading mb-2.5 text-base font-semibold capitalize md:text-lg">
                    size
                  </h3>
                  <ul class="colors -mr-3 flex ">
                    <li class="text-heading mb-2 mr-2 flex h-8 w-8 cursor-pointer items-center justify-center rounded border border-gray-100 p-1 text-xs font-semibold uppercase transition duration-200 ease-in-out hover:border-black md:mb-3 md:mr-3 md:h-11 md:w-11 md:text-sm ">
                      S
                    </li>
                    <li class="text-heading mb-2 mr-2 flex h-8 w-8 cursor-pointer items-center justify-center rounded border border-gray-100 p-1 text-xs font-semibold uppercase transition duration-200 ease-in-out hover:border-black md:mb-3 md:mr-3 md:h-11 md:w-11 md:text-sm ">
                      M
                    </li>
                    <li class="text-heading mb-2 mr-2 flex h-8 w-8 cursor-pointer items-center justify-center rounded border border-gray-100 p-1 text-xs font-semibold uppercase transition duration-200 ease-in-out hover:border-black md:mb-3 md:mr-3 md:h-11 md:w-11 md:text-sm ">
                      L
                    </li>
                    <li class="text-heading mb-2 mr-2 flex h-8 w-8 cursor-pointer items-center justify-center rounded border border-gray-100 p-1 text-xs font-semibold uppercase transition duration-200 ease-in-out hover:border-black md:mb-3 md:mr-3 md:h-11 md:w-11 md:text-sm ">
                      XL
                    </li>
                  </ul>
                </div> */}
                {/* <button
                  type="button"
                  class="h-11 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Add to cart
                </button> */}
              </div>
              <div class="ml-auto flex items-center">
                <div class="group flex h-10 flex-shrink-0 items-center justify-between overflow-hidden rounded-md border border-gray-300 md:h-12">
                  <button
                    class="text-heading hover:bg-heading flex h-full w-12  flex-shrink-0 items-center justify-center border-e border-gray-300 transition duration-300 ease-in-out focus:outline-none md:w-12"
                    disabled=""
                  >
                    +
                  </button>
                  <span class="duration-250 text-heading flex h-full w-14  flex-shrink-0 cursor-default items-center justify-center text-base font-semibold transition-colors ease-in-out  md:w-20 xl:w-24">
                    1
                  </span>
                  <button class="text-heading hover:bg-heading flex h-full w-12  flex-shrink-0 items-center justify-center border-s border-gray-300 transition duration-300 ease-in-out focus:outline-none md:w-12">
                    -
                  </button>
                </div>
                {/* <span class="mr-3 text-sm font-semibold">Size</span>
                <div class="relative">
                  <select class="appearance-none rounded border border-gray-300 py-2 pl-3 pr-10 text-sm focus:border-black focus:outline-none focus:ring-2 focus:ring-black">
                    <option>8 UK</option>
                    <option>9 UK</option>
                    <option>10 UK</option>
                  </select>
                  <span class="pointer-events-none absolute right-0 top-0 flex h-full w-10 items-center justify-center text-center text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-chevron-down"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </div> */}
              </div>
            </div>
            <div>
              <button
                type="button"
                class="w-full h-full my-2 rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Add to Cart
              </button>
              <button
                type="button"
                onClick={Checkout}
                class="w-full h-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Buy Now
              </button>
            </div>
            <div className="flex my-4 mb-10">
              <Link href="/products" className="leading-relaxed">
                View Full Details
              </Link>
              <svg
                class="w-6 h-3 text-gray-800 dark:text-white my-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

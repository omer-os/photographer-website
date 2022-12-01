import Link from "next/link";
import React from "react";

export default function Contact() {
  return (
    <div className="container mt-20 mx-auto sm:px-20">
      <div>
        <div className="relative max-w-xl p-8 mx-auto mb-8 bg-stone-900 rounded-md shadow-2xl">
          <div className="items-center text-center xs:flex xs:text-left xs:space-x-10 !text-white">
            <img
              className="w-24 mx-auto mb-4 -mt-12 transform -translate-y-2 object-cover xs:mb-0 xs:mt-0 xs:mx-none h-24 rounded md:w-32"
              src="/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2FQVXxbLl3SzuKzX0vgzD3&w=640&q=75"
              alt="John Doe"
              height="122"
              width="116"
            />
            <div className="flex-1 leading-chillaxed">
              <div className="mb-4 text-sm">
                <strong className="block text-xl">sadiq ghazi</strong>
                Photographer
              </div>
              <ul className="flex flex-col items-center">
                <li className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    className="fill-zinc-500"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>

                  <Link
                    className="inline-block my-3 sm:my-1  xs:h-auto underline hover:no-underline"
                    href="http://instagram.com/sadiqghazi"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    instagram
                  </Link>
                </li>
                <li>
                  <Link
                    href="tel:+9647700080820"
                    className="inline-block my-3 sm:my-1  xs:h-auto underline hover:no-underline"
                  >
                    <svg
                      className="inline-block w-4 h-4 mr-3 opacity-40"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      ></path>
                    </svg>
                    +9647700080820
                  </Link>
                </li>
                <li>
                  <svg
                    className="inline-block w-4 h-4 mr-3 opacity-40"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                  <Link
                    className="inline-block my-3 sm:my-1  xs:h-auto underline hover:no-underline"
                    href="mailto:sadiq_g@yahoo.com"
                  >
                    sadiq_g@yahoo.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-2 bg-green-600 "></div>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="p-4 shadow flex sm:flex-row flex-col-reverse items-center md:justify-between md:p-6 bg-stone-900">
      <span className="sm:text-sm text-xs sm:mt-0 mt-6 text-gray-500 sm:text-center dark:text-gray-400">
        © 2022{" "}
        <Link
          href="https://github.com/omer-os"
          className="hover:underline"
          target="_blank"
        >
          Morris
        </Link>
        . All Rights Reserved.
      </span>
      <ul className="flex  flex-col sm:flex-row items-center mt-3 sm:mt-0 sm:gap-0 gap-3 ">
        <li>
          <Link
            href="/"
            className="sm:mr-4 sm:text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400"
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            href="/portfolio"
            className="sm:mr-4 sm:text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400"
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="sm:text-sm text-gray-500 hover:underline dark:text-gray-400"
          >
            Contact Me
          </Link>
        </li>
      </ul>
    </footer>
  );
}

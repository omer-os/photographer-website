import Image from "next/image";
import Link from "next/link";
import React from "react";
import { urlFor } from "../../../data";

export default function Hero({ data }) {
  return (
    <section className="flex items-center h-[90vh] mt-[5em] gap-10">
      <div className="flex">
        <div className="flex ml-20 z-20 relative flex-col gap-5">
          <div className="text-3xl sm:text-black text-white max-w-[9em] font-bold">
            {data.heroText}
          </div>
          <Link
            href="/portfolio"
            className="py-3 w-max px-4 bg-gradient-to-br from-green-900 text-white to-green-700 "
          >
            View Gallery
          </Link>
          <div className="line absolute -left-10 top-2 w-2 h-[6em] bg-gradient-to-r from-green-900 to-green-600"></div>

          <div className="absolute top-0 -left-10 h-full w-2 bg-gradient-to-b from-green-900 to-green-600"></div>
        </div>
      </div>
      <div className="object-cover absolute z-10 h-screen left-0 right-0 top-0">
        {data && (
          <Image
            fill
            priority={true}
            className="w-full h-full object-cover"
            src={urlFor(data.heroImage).url()}
            alt="Hero Image"
          />
        )}
      </div>
    </section>
  );
}

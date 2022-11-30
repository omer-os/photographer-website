import Link from "next/link";
import React from "react";

export default function Err() {
  return (
    <div className="h-screen mt-20 px-10 flex justify-center">
      <div className="flex mt-32 flex-col">
        <div className="text-center font-bold text-3xl">
          Sorry This Page Doesnt Exit Yet
        </div>
        <Link
          href="/"
          className="bg-blue-800 py-2 px-3 rounded-xl mt-10 w-max capitalize mx-auto"
        >
          click to go back to home page
        </Link>
      </div>
    </div>
  );
}

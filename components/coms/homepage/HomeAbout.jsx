import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Contact from "../common/Contact";
export default function HomeAbout() {
  return (
    <section className="lg:w-4/6 md:w-5/6 mx-5 transition-all md:mx-auto">
      <div className="flex flex-col md:flex-row mt-10 items-center gap-10">
        <div className="flex items-center">
          <div className="w-full transition-all md:w-[20em] h-[25em]">
            <img
              src="https://mosa-khudur.github.io/olla/img/sadiq123.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <h2 className="capitalize font-bold text-4xl">about me </h2>
          <h3 className="mt-2">
            My name is Sadiq <br /> "I was born in 1999. since I was young
            worked with my father in his grandfather's shop [qutub photography]
            who was the first photographer in the city (khanaqin) In 2014 I got
            my own first camera and in this year I started my journey with
            photography after some online course I start to shoot for deferent
            fields (Portrait, Wedding, Graduate, Parties, Model, Promotion
            Videos). we present best for you with Sadiq Ghazi team"{" "}
          </h3>
          <Link
            className="bg-stone-700/50 w-max py-2 px-3 mt-5 sm:mt-10 border border-stone-600 active:scale-95 transition-all scale-1"
            href="/portfolio"
          >
            my projects
          </Link>
        </div>
      </div>

      <Contact />
    </section>
  );
}

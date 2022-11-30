import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function NavBar() {
  const [OpenSideBar, setOpenSideBar] = useState(false);
  const [ScrollTop, setScrollTop] = useState(0);

  const router = useRouter();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollTop(window.pageYOffset);
    });
  }, []);

  return (
    <motion.nav
      dir="ltr"
      className="flex z-40 justify-between items-center px-7 py-4 fixed right-0 top-0 transition-all sm:bg-white/0 left-0 w-full"
    >
      <motion.div
        animate={{
          top: ScrollTop === 0 ? "-100%" : "",
        }}
        className="w-full h-full absolute inset-0  transition-all bg-stone-800/20 backdrop-blur-lg -z-10"
      ></motion.div>

      <Link
        href="/"
        className="text-md:xl  font-extrabold relative z-50 capitalize text-first w-[6em]"
      >
        <img src="/images/sadiq-logo.png" alt="" />
      </Link>

      <div
        className={`flex flex-col sm:flex-row gap-5 sm:relative fixed sm:w-max sm:h-max w-full h-full z-40 top-0 items-center transition-all duration-300 justify-center ${
          OpenSideBar && "!left-0"
        } left-full font-bolScrollTop && "!left-0 bg-stone-800 sm:bg-transparent visible !opacity-100 capitalize"
        }  opacity-0 sm:opacity-100 sm:left-0`}
      >
        {[
          {
            name: "home",
            link: "/",
          },
          {
            name: "about",
            link: "/about",
          },
          // {
          //   name: "services",
          //   link: "/services",
          // },
          {
            name: "portfolio",
            link: "/portfolio",
          },
        ].map((i, index) => (
          <Link
            className={`${
              router.pathname === i.link && "!font-bold scale-[1.09]"
            } scale-1 transition-all font-normal`}
            key={index}
            onClick={() => setOpenSideBar(false)}
            href={i.link}
          >
            {i.name}
          </Link>
        ))}

        <div className="flex items-center sm:hidden flex-col-reverse mt-1 text-sm gap-3">
          <Link
            onClick={() => setOpenSideBar(false)}
            href="/contact"
            className="bg-green-500 text-white active:scale-95 transition-all py-2 px-3 z-20 rounded"
          >
            contact with me
          </Link>
        </div>

        <div className="sm:hidden absolute items-center gap-3 bottom-2 flex flex-col">
          <div className="flex items-center gap-5">
            <img src="/icons/facebook.svg" alt="" />
            <img src="/icons/twitter.svg" alt="" />
            <img src="/icons/instagram.svg" alt="" />
          </div>
          <div className="text-center capitalize text-zinc-600 font-normal">
              Morris ©2020{" "}
          </div>
        </div>
      </div>

      <div className="sm:flex hidden gap-3">
        <Link
          href="/contact"
          className="bg-gradient-to-br from-green-700 active:scale-95 transition-all to-green-600 text-white  py-2 px-3 rounded"
        >
          contact with me
        </Link>
      </div>

      <div
        onClick={() => setOpenSideBar(!OpenSideBar)}
        className="burger-btn sm:hidden"
      >
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={`line line-${i} ${OpenSideBar && "active"}`}
          />
        ))}
      </div>
    </motion.nav>
  );
}

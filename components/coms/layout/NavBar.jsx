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
      className="flex z-50 justify-between items-center px-7 py-4 fixed right-0 top-0 transition-all sm:bg-white/0 left-0 w-full"
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
            name: "gallery",
            link: "/portfolio",
          },
        ].map((i, index) => (
          <Link
            className={`${
              router.pathname === i.link && "!font-bold scale-[1.09]"
            } scale-1 capitalize transition-all font-normal relative`}
            key={index}
            onClick={() => setOpenSideBar(false)}
            href={i.link}
          >
            {i.name}
            {router.pathname === i.link && (
              <motion.div
                layoutId="link-border"
                className="absolute -bottom-[.5] w-full h-[.08em] bg-green-500"
              />
            )}
          </Link>
        ))}

        <div className="flex items-center sm:hidden flex-col-reverse mt-1 text-sm gap-3">
          <Link
            onClick={() => setOpenSideBar(false)}
            href="/contact"
            className="bg-green-500 text-white active:scale-95 transition-all py-2 px-3 z-20 rounded"
          >
            contact me
          </Link>
        </div>

        <div className="sm:hidden absolute items-center gap-3 bottom-2 flex flex-col">
          <div className="flex items-center gap-5">
            <Link href="http://youtube.com/sadiqghazi">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  className="fill-zinc-500"
                  viewBox="-35.20005 -41.33325 305.0671 247.9995"
                >
                  <path
                    d="M229.763 25.817c-2.699-10.162-10.65-18.165-20.748-20.881C190.716 0 117.333 0 117.333 0S43.951 0 25.651 4.936C15.553 7.652 7.6 15.655 4.903 25.817 0 44.236 0 82.667 0 82.667s0 38.429 4.903 56.85C7.6 149.68 15.553 157.681 25.65 160.4c18.3 4.934 91.682 4.934 91.682 4.934s73.383 0 91.682-4.934c10.098-2.718 18.049-10.72 20.748-20.882 4.904-18.421 4.904-56.85 4.904-56.85s0-38.431-4.904-56.85"
                  />
                  <path
                    d="M93.333 117.559l61.333-34.89-61.333-34.894z"
                    className="fill-stone-800"
                  />
                </svg>
              </span>{" "}
            </Link>
            <Link href="https://www.pinterest.com/sadiqghazi">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  id="Capa_1"
                  x="0px"
                  y="0px"
                  width={20}
                  height={20}
                  className="fill-zinc-500"
                  viewBox="0 0 480.666 480.666"
                >
                  <g id="pinterest_2_">
                    <g>
                      <path d="M240.35,0.008C107.612,0.008,0,107.605,0,240.31c0,98.431,59.168,182.967,143.867,220.133    c-0.717-16.795-0.157-36.918,4.145-55.17c4.646-19.522,30.957-130.976,30.957-130.976s-7.669-15.345-7.669-38.009    c0-35.623,20.637-62.215,46.323-62.215c21.885,0,32.421,16.429,32.421,36.076c0,21.962-13.996,54.85-21.198,85.283    c-6.016,25.5,12.781,46.301,37.907,46.301c45.545,0,76.221-58.506,76.221-127.781c0-52.66-35.478-92.087-100.006-92.087    c-72.916,0-118.305,54.359-118.305,115.077c0,20.949,6.142,35.702,15.837,47.127c4.428,5.268,5.051,7.388,3.43,13.405    c-1.154,4.427-3.773,15.072-4.895,19.28c-1.592,6.096-6.516,8.262-12.033,6.033c-33.573-13.733-49.192-50.471-49.192-91.814    c0-68.279,57.578-150.125,171.736-150.125c91.773,0,152.189,66.377,152.189,137.654c0,94.277-52.434,164.723-129.713,164.723    c-25.937,0-50.346-14.045-58.701-29.975c0,0-13.965,55.389-16.894,66.065c-5.113,18.517-15.089,37.058-24.193,51.491    c21.605,6.375,44.454,9.85,68.116,9.85c132.736,0,240.316-107.595,240.316-240.348C480.666,107.605,373.086,0.008,240.35,0.008z" />
                    </g>
                  </g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                </svg>
              </span>
            </Link>
            <Link href="http://instagram.com/sadiqghazi">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M10 1.80723C12.6506 1.80723 13.0121 1.80723 14.0964 1.80723C15.0602 1.80723 15.5422 2.04819 15.9036 2.16868C16.3855 2.40964 16.747 2.53012 17.1084 2.89157C17.4699 3.25301 17.7108 3.61446 17.8313 4.09639C17.9518 4.45783 18.0723 4.93976 18.1928 5.90362C18.1928 6.98795 18.1928 7.22892 18.1928 10C18.1928 12.7711 18.1928 13.0121 18.1928 14.0964C18.1928 15.0602 17.9518 15.5422 17.8313 15.9036C17.5904 16.3855 17.4699 16.747 17.1084 17.1084C16.747 17.4699 16.3855 17.7108 15.9036 17.8313C15.5422 17.9518 15.0602 18.0723 14.0964 18.1928C13.0121 18.1928 12.7711 18.1928 10 18.1928C7.22892 18.1928 6.98795 18.1928 5.90362 18.1928C4.93976 18.1928 4.45783 17.9518 4.09639 17.8313C3.61446 17.5904 3.25301 17.4699 2.89157 17.1084C2.53012 16.747 2.28916 16.3855 2.16868 15.9036C2.04819 15.5422 1.92771 15.0602 1.80723 14.0964C1.80723 13.0121 1.80723 12.7711 1.80723 10C1.80723 7.22892 1.80723 6.98795 1.80723 5.90362C1.80723 4.93976 2.04819 4.45783 2.16868 4.09639C2.40964 3.61446 2.53012 3.25301 2.89157 2.89157C3.25301 2.53012 3.61446 2.28916 4.09639 2.16868C4.45783 2.04819 4.93976 1.92771 5.90362 1.80723C6.98795 1.80723 7.3494 1.80723 10 1.80723ZM10 0C7.22892 0 6.98795 0 5.90362 0C4.81928 0 4.09639 0.240965 3.49398 0.481928C2.89157 0.722892 2.28916 1.08434 1.68675 1.68675C1.08434 2.28916 0.843374 2.77109 0.481928 3.49398C0.240965 4.09639 0.120482 4.81928 0 5.90362C0 6.98795 0 7.3494 0 10C0 12.7711 0 13.0121 0 14.0964C0 15.1807 0.240965 15.9036 0.481928 16.506C0.722892 17.1084 1.08434 17.7108 1.68675 18.3133C2.28916 18.9157 2.77109 19.1566 3.49398 19.5181C4.09639 19.759 4.81928 19.8795 5.90362 20C6.98795 20 7.3494 20 10 20C12.6506 20 13.0121 20 14.0964 20C15.1807 20 15.9036 19.759 16.506 19.5181C17.1084 19.2771 17.7108 18.9157 18.3133 18.3133C18.9157 17.7108 19.1566 17.2289 19.5181 16.506C19.759 15.9036 19.8795 15.1807 20 14.0964C20 13.0121 20 12.6506 20 10C20 7.3494 20 6.98795 20 5.90362C20 4.81928 19.759 4.09639 19.5181 3.49398C19.2771 2.89157 18.9157 2.28916 18.3133 1.68675C17.7108 1.08434 17.2289 0.843374 16.506 0.481928C15.9036 0.240965 15.1807 0.120482 14.0964 0C13.0121 0 12.7711 0 10 0Z"
                    fill="#737373"
                  />
                  <path
                    d="M10 4.81928C7.10843 4.81928 4.81928 7.10843 4.81928 10C4.81928 12.8916 7.10843 15.1807 10 15.1807C12.8916 15.1807 15.1807 12.8916 15.1807 10C15.1807 7.10843 12.8916 4.81928 10 4.81928ZM10 13.3735C8.19277 13.3735 6.62651 11.9277 6.62651 10C6.62651 8.19277 8.07229 6.62651 10 6.62651C11.8072 6.62651 13.3735 8.07229 13.3735 10C13.3735 11.8072 11.8072 13.3735 10 13.3735Z"
                    fill="#737373"
                  />
                  <path
                    d="M15.3012 5.90362C15.9666 5.90362 16.506 5.3642 16.506 4.6988C16.506 4.03339 15.9666 3.49398 15.3012 3.49398C14.6358 3.49398 14.0964 4.03339 14.0964 4.6988C14.0964 5.3642 14.6358 5.90362 15.3012 5.90362Z"
                    fill="#737373"
                  />
                </svg>
              </span>
            </Link>
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
          contact me
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

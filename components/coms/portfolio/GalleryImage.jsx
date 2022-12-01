import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function GalleryImage({ i }) {
  const [ZoomedIn, setZoomedIn] = useState(false);

  return (
    <motion.div
      whileInView={{
        scale: [0.8, 1],
        opacity: [0, 1],
      }}
      exit={{
        opacity: [1, 0],
        scale: [1, 0.8],
      }}
      className={`relative cursor-pointer`}
      layout
    >
      <div className="relative w-full h-full">
        <motion.div
          onClick={() => {
            setZoomedIn(!ZoomedIn);
          }}
          className="relative w-full h-full"
        >
          <Image
            src={i.url}
            fill
            alt="project image"
            className="object-cover rounded-xl w-full h-full"
            priority={true}
          />
        </motion.div>

        <div
          onClick={() => {
            navigator.clipboard.writeText(
              `https://www.sadiqghazi.com/portfolio/image?url=${i.url}`
            );
          }}
          className="absolute w-[3em] bottom-5 right-5 h-[3em] active:scale-95 transition-all z-20 flex items-center justify-center bg-white/20 rounded-xl"
        >
          <svg
            className="fill-zinc-200 w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            viewBox="0 0 227.216 227.216"
          >
            <path d="M175.897,141.476c-13.249,0-25.11,6.044-32.98,15.518l-51.194-29.066c1.592-4.48,2.467-9.297,2.467-14.317  c0-5.019-0.875-9.836-2.467-14.316l51.19-29.073c7.869,9.477,19.732,15.523,32.982,15.523c23.634,0,42.862-19.235,42.862-42.879  C218.759,19.229,199.531,0,175.897,0C152.26,0,133.03,19.229,133.03,42.865c0,5.02,0.874,9.838,2.467,14.319L84.304,86.258  c-7.869-9.472-19.729-15.514-32.975-15.514c-23.64,0-42.873,19.229-42.873,42.866c0,23.636,19.233,42.865,42.873,42.865  c13.246,0,25.105-6.042,32.974-15.513l51.194,29.067c-1.593,4.481-2.468,9.3-2.468,14.321c0,23.636,19.23,42.865,42.867,42.865  c23.634,0,42.862-19.23,42.862-42.865C218.759,160.71,199.531,141.476,175.897,141.476z M175.897,15  c15.363,0,27.862,12.5,27.862,27.865c0,15.373-12.499,27.879-27.862,27.879c-15.366,0-27.867-12.506-27.867-27.879  C148.03,27.5,160.531,15,175.897,15z M51.33,141.476c-15.369,0-27.873-12.501-27.873-27.865c0-15.366,12.504-27.866,27.873-27.866  c15.363,0,27.861,12.5,27.861,27.866C79.191,128.975,66.692,141.476,51.33,141.476z M175.897,212.216  c-15.366,0-27.867-12.501-27.867-27.865c0-15.37,12.501-27.875,27.867-27.875c15.363,0,27.862,12.505,27.862,27.875  C203.759,199.715,191.26,212.216,175.897,212.216z" />
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
        </div>
      </div>

      <AnimatePresence>
        {ZoomedIn && (
          <div
            onClick={() => {
              setZoomedIn(!ZoomedIn);
            }}
            className="fixed z-50 inset-0 flex items-center justify-center"
          >
            <motion.div
              animate={{
                opacity: [0, 1],
              }}
              exit={{
                opacity: 0,
              }}
              className="w-full h-full absolute inset-0 bg-black/20"
            ></motion.div>
            <motion.div
              animate={{
                scale: [0.9, 1],
                opacity: [0, 1],
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
              }}
              className="w-[50%] min-w-[20em] sm:h-[90vh] h-[80vh] bg-white relative rounded-xl"
            >
              <Image
                src={i.url}
                fill
                alt="project image"
                className="object-cover w-full h-full rounded-xl"
                priority={true}
              />{" "}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

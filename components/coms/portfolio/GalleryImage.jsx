import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function GalleryImage({ i }) {
  const [ZoomedIn, setZoomedIn] = useState(false);

  return (
    <motion.div
      onClick={() => {
        setZoomedIn(!ZoomedIn);
      }}
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
        <motion.div className="relative w-full h-full">
          <Image
            src={i.url}
            fill
            alt="project image"
            className="object-cover rounded-xl w-full h-full"
            priority={true}
          />
        </motion.div>
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

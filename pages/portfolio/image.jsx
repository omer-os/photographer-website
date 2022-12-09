import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function ImageFullSize() {
  const router = useRouter();
  const { url } = router.query;
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
      className={`relative m-10 mt-20 h-[30em] max-w-[20em] sm:h-[30em] w-50 mx-auto`}
      layout
    >
      
      <div className="w-full h-full absolute top-0 left-0 animate-pulse -z-10"></div>
      <Link
        href="/portfolio"
        className="absolute top-4 left-4 z-30 bg-black/60 p-2 rounded-full "
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>
      </Link>
      <motion.div>
        <Image
          priority={true}
          src={`${url}`}
          fill
          alt="project image"
          className="object-cover w-full h-full"
        />
      </motion.div>
    </motion.div>
  );
}

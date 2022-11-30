import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function GalleryImage({ i }) {
  const [isLoaded, setIsLoaded] = useState(false);

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
      className={`relative`}
      layout
    >
      {!isLoaded && <div className="animate-pulse bg-zinc-200"></div>}
      <Link href={`/portfolio/image?url=${i.url}`}>
        <motion.div layoutId={i.url}>
          <Image
            src={i.url}
            fill
            alt="project image"
            className="object-cover"
            onLoad={() => setIsLoaded(true)}
          />
        </motion.div>
      </Link>
    </motion.div>
  );
}

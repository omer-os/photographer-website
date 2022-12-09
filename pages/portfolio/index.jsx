import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import GalleryImage from "../../components/coms/portfolio/GalleryImage";
import Head from "next/head";
import { SanityClient } from "../../data";
export default function Index({ data }) {
  const [Category, setCategory] = useState("wedding");

  return (
    <motion.div
      animate={{
        opacity: [0, 1],
      }}
      className="mb-20 mt-24"
    >
      <Head>
        <title>Gallery</title>
      </Head>
      <div className="text-center text-2xl font-bold">My Gallery</div>

      <div className="bg-stone-800 py-2 mx-auto max-w-full overflow-x-scroll w-max sm:static sticky rounded-xl top-16 z-40 px-2 scroll-snap-none">
        <div className="bg-stone-700 flex gap-2 p-2 rounded-xl w-max">
          {data.category.map((i, index) => (
            <div
              key={index}
              className="relative py-2 px-3 cursor-pointer"
              onClick={() => setCategory(i.title)}
            >
              <span className="relative z-20">{i.title}</span>

              {Category === i.title && (
                <motion.div
                  layoutId="box"
                  className="absolute w-full h-full left-0 rounded-xl bg-stone-900 top-0 z-10"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[70em] mt-6 px-3 transition-all sm:px-10 mx-auto w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 auto-rows-[20em] gap-4">
        <AnimatePresence>
          {data.gallery
            .filter((i) => i.categories.title === Category)
            .map((i) => (
              <GalleryImage key={i.title} i={i} />
            ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export async function getStaticProps() {
  const data = await SanityClient.fetch(`*[_type in ["category", "gallery"]][0]{
    "category":*[_type == 'category']{_id,title},
    "gallery":*[_type == 'gallery']{title,slug,Image,categories->
  {title}}
  }
  `);

  return {
    props: {
      data,
    },
    revalidate: 10,
  };
}

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import client from "../../data";
import { gql } from "@apollo/client";
import GalleryImage from "../../components/coms/portfolio/GalleryImage";
import { useRouter } from "next/router";
export default function Index({ data }) {
  const [Category, setCategory] = useState("wedding");
  const router = useRouter();
  const { category } = router.query;
  useEffect(() => {
    if (category) {
      setCategory(category);
    }
  }, []);

  return (
    <div className="mb-20 mt-24">
      <div className="text-center text-2xl font-bold">My Gallery</div>

      <div className="bg-stone-800 py-2 mx-auto max-w-full overflow-x-scroll w-max sm:static sticky rounded-xl top-16 z-20 px-2 scroll-snap-none">
        <div className="bg-stone-700 flex gap-2 p-2 rounded-xl w-max">
          {["wedding", "portrait", "baby", "promotion", "all"].map(
            (i, index) => (
              <div
                key={i}
                className="relative py-2 px-3 cursor-pointer"
                onClick={() => setCategory(i)}
              >
                <span className="relative z-20">{i}</span>

                {Category === i && (
                  <motion.div
                    layoutId="box"
                    className="absolute w-full h-full left-0 rounded-xl bg-stone-900 top-0 z-10"
                  />
                )}
              </div>
            )
          )}
        </div>
      </div>

      <div className="max-w-[70em] mt-6 px-3 transition-all sm:px-10 mx-auto w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 auto-rows-[20em] gap-4">
        <AnimatePresence>
          {data.gallerieImages
            .filter((i) => i.category === Category)[0]
            .images.map((i, index) => (
              <GalleryImage key={i.id} i={i} />
            ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      {
        gallerieImages {
          category
          images {
            url
            id
          }
        }
      }
    `,
  });

  return {
    props: {
      data: data,
    },
    revalidate: 60,
  };
}

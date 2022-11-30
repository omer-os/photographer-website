import { motion } from "framer-motion";
import Link from "next/link";

export default function HomeGrid({ wedding, portrait, baby, promotion }) {
  return (
    <motion.section
      animate={{
        opacity: [0, 1],
      }}
      className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 md:h-[80vh] h-[100em] sm:mt-0 mt-5 md:gap-0 gap-1"
    >
      {[
        {
          name: "Wedding section",
          image: wedding,
          link: "/portfolio?category=wedding",
        },
        {
          name: "portrait section",
          image: portrait,
          link: "/portfolio?category=portrait",
        },
        {
          name: "baby section",
          image: baby,
          link: "/portfolio?category=baby",
        },
        {
          name: "promotion section",
          image: promotion,
          link: "/portfolio?category=promotion",
        },
      ].map((i, index) => (
        <Link className="h-full" key={index} href={i.link}>
          <motion.div
            whileHover={{
              top: [0, -15],
              transition: {
                duration: 0.2,
                type: "spring",
              },
            }}
            className="flex h-full flex-col justify-end group relative top-0 left-0"
          >
            <img
              src={i.image}
              className="w-full h-full object-cover  absolute top-0 left-0"
              alt="the mountains"
            />

            <div className="flex flex-col mb-16 mx-5 gap-2 z-20">
              <div
                className="capitalize text-white"
                style={{
                  letterSpacing: 2,
                }}
              >
                {i.name}
              </div>

              <div className="w-full h-[.08em] bg-zinc-300"></div>
            </div>
            <div className="absolute bottom-0 h-full w-full  left-0 bg-black/30 z-10"></div>

            <div className="bg-gradient-to-l absolute w-full h-2 from-green-500 duration-300 -bottom-2 opacity-0  group-hover:opacity-100 transition-all"></div>
          </motion.div>
        </Link>
      ))}
    </motion.section>
  );
}

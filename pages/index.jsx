import React from "react";
import { Hero, HomeAbout, HomeGrid } from "../components";
import { motion } from "framer-motion";
import Head from "next/head";
import SanityClient from "../data";
export default function Index({ data }) {
  return (
    <>
      <Head>
        <title>home</title>
      </Head>
      <motion.div
        animate={{
          opacity: [0, 1],
        }}
      >
        <Hero data={data.website} />

        <HomeGrid data={data.categories} />

        <HomeAbout data={data} />
        
      </motion.div>
    </>
  );
}

export async function getStaticProps() {
  const data =
    await SanityClient.fetch(`*[_type in ["categories", "website"]][0]{
    "categories":*[_type == 'categories']{title, coverImage},
    "website":*[_type == 'website'][0]
  }
  `);

  return {
    props: {
      data,
    },
    revalidate: 10,
  };
}

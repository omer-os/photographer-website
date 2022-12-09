import React from "react";
import { Hero, HomeAbout, HomeGrid } from "../components";
import client from "../data";
import { gql } from "@apollo/client";
import { motion } from "framer-motion";
import Head from "next/head";
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
        <Hero HeroImage={data.homePageData[0].heroImage.url} />

        <HomeGrid
          wedding={data.homePageData[0].wedding.url}
          portrait={data.homePageData[0].portrait.url}
          baby={data.homePageData[0].baby.url}
          promotion={data.homePageData[0].promotion.url}
        />

        <HomeAbout />
      </motion.div>
    </>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      {
        homePageData {
          heroImage {
            url
          }
          wedding {
            url
          }
          portrait {
            url
          }
          promotion {
            url
          }
          baby {
            url
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

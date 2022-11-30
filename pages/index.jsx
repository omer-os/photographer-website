import React from "react";
import {
  Footer,
  Hero,
  HomeAbout,
  HomeGrid,
  HomeShowCase,
  Layout,
  NavBar,
} from "../components";
import client from "../data";
import { gql } from "@apollo/client";
import { motion } from "framer-motion";
export default function Index({ data }) {
  return (
    <>
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

        {/* <HomeShowCase /> */}

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
    revalidate: 10,
  };
}

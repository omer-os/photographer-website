import React from "react";
import {
  Footer,
  Hero,
  HomeAbout,
  HomeGrid,
  Layout,
  NavBar,
} from "../components";
import client from "../data";
import { gql } from "@apollo/client";

export default function Index({ data }) {
  return (
    <Layout>
      <div className="">
        {/* <Hero heroImage={data.homePageData[0].heroImage.url} /> */}
        <Hero
          HeroImage={"https://mosa-khudur.github.io/olla/img/sadiq123.jpg"}
        />

        <HomeGrid
          wedding={data.homePageData[0].wedding.url}
          portrait={data.homePageData[0].portrait.url}
          baby={data.homePageData[0].baby.url}
          promotion={data.homePageData[0].promotion.url}
        />

        <HomeAbout />

        




        
      </div>
    </Layout>
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

import React from "react";
import { Footer, Hero, HomeGrid, Layout, NavBar } from "../components";
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

        <section id="bottum" className="bottum">
          <div className="about-me">
            <h2>about me </h2>
            <h3>
              My name is Sadiq <br /> "I was born in 1999. since I was young
              worked with my father in his grandfather's shop [qutub
              photography] who was the first photographer in the city (khanaqin)
              In 2014 I got my own first camera and in this year I started my
              journey with photography after some online course I start to shoot
              for deferent fields (Portrait, Wedding, Graduate, Parties, Model,
              Promotion Videos). we present best for you with Sadiq Ghazi team"{" "}
            </h3>
            <span>-Sadiq Ghazi-</span>
          </div>
        </section>

        <div id="harverd" className="harverd"></div>
        <section className="text-black mt-[.2em] flex p-10 bg-stone-800 justify-center  ">
          <div className="flex sm:flex-row flex-col-reverse transition-all sm:items-center gap-10">
            <div className="flex-1 flex flex-col">
              <div className="text-3xl font-bold">Contact Us</div>
              <div className="mt-10 text-white items-center flex gap-2">
                <svg viewBox="0 0 122.88 122.27" className="w-3 h-3">
                  <g>
                    <path d="M33.84,50.25c4.13,7.45,8.89,14.6,15.07,21.12c6.2,6.56,13.91,12.53,23.89,17.63c0.74,0.36,1.44,0.36,2.07,0.11 c0.95-0.36,1.92-1.15,2.87-2.1c0.74-0.74,1.66-1.92,2.62-3.21c3.84-5.05,8.59-11.32,15.3-8.18c0.15,0.07,0.26,0.15,0.41,0.21 l22.38,12.87c0.07,0.04,0.15,0.11,0.21,0.15c2.95,2.03,4.17,5.16,4.2,8.71c0,3.61-1.33,7.67-3.28,11.1 c-2.58,4.53-6.38,7.53-10.76,9.51c-4.17,1.92-8.81,2.95-13.27,3.61c-7,1.03-13.56,0.37-20.27-1.69 c-6.56-2.03-13.17-5.38-20.39-9.84l-0.53-0.34c-3.31-2.07-6.89-4.28-10.4-6.89C31.12,93.32,18.03,79.31,9.5,63.89 C2.35,50.95-1.55,36.98,0.58,23.67c1.18-7.3,4.31-13.94,9.77-18.32c4.76-3.84,11.17-5.94,19.47-5.2c0.95,0.07,1.8,0.62,2.25,1.44 l14.35,24.26c2.1,2.72,2.36,5.42,1.21,8.12c-0.95,2.21-2.87,4.25-5.49,6.15c-0.77,0.66-1.69,1.33-2.66,2.03 c-3.21,2.33-6.86,5.02-5.61,8.18L33.84,50.25L33.84,50.25L33.84,50.25z"></path>
                  </g>
                </svg>
                +9647700080820
              </div>
              <div className="text-white items-center flex gap-2">
                <svg
                  className="w-4 h-4"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 122.88 122.88"
                >
                  <title>email-round</title>
                  <path d="M61.44,0A61.46,61.46,0,1,1,18,18,61.21,61.21,0,0,1,61.44,0ZM32.22,79.39,52.1,59.46,32.22,43.25V79.39ZM54.29,61.24,33.79,81.79H88.91L69.33,61.24l-6.46,5.51h0a1.42,1.42,0,0,1-1.8,0l-6.78-5.53Zm17.18-1.82L90.66,79.55V43.07L71.47,59.42ZM34,41.09l27.9,22.76L88.65,41.09Zm65.4-17.64a53.72,53.72,0,1,0,15.74,38,53.56,53.56,0,0,0-15.74-38Z"></path>
                </svg>
                sadiq_g@yahoo.com
              </div>
            </div>
          </div>
        </section>
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

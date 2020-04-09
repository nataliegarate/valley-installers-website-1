import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Layout from "../components/layout";
import Head from "next/head";

let images = [
  "/valley2.jpg",
  "/valley3.jpg",
  "/valley1.jpg",
  "/valley4.jpg",
  "/valley5.jpg",
  "/valley6.jpg",
  "/valley7.jpg",
  "/valley8.jpg",
  "/valley9.jpg",
  "/valley10.jpg",
  "/valley11.jpg",
  "/valley12.jpg",
];

function GalleryView(props) {
  return (
    <Layout>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Header />
      <div className="content-view">
        <div className="gallery-container">
          {images.map((image) => (
            <img src={image} />
          ))}
        </div>
      </div>
      <Footer />
      <style jsx>
        {`
          .gallery-container {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            width: 1000px;
            justify-content: center;
            align-content: center;
          }
          .gallery-container img {
            margin: 10px;
            width: 480px;
          }
          @media only screen and (max-width: 1070px) {
            .gallery-container img {
              width: 380px;
            }
            .gallery-container {
              width: 800px;
            }
          }

          @media only screen and (max-width: 870px) {
            .gallery-container {
              flex-direction: column;
              width: 470px;
            }
            .gallery-container img {
              width: 450px;
            }
          }
          @media only screen and (max-width: 460px) {
            .gallery-container img {
              width: 300px;
            }
            .gallery-container {
              width: 320px;
            }
          }
        `}
      </style>
    </Layout>
  );
}

export default GalleryView;

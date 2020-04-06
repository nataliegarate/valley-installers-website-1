import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Layout from "../components/layout";
import Head from "next/head";

let images = [
  "https://dummyimage.com/480x390/ededed/fcfcfc.jpg",
  "https://dummyimage.com/480x390/ededed/fcfcfc.jpg",
  "https://dummyimage.com/480x390/ededed/fcfcfc.jpg",
  "https://dummyimage.com/480x390/ededed/fcfcfc.jpg",
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
          .gallery - container {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            width: 1000px;
            justify-content: center;
            align-content: center;
          }
          .gallery-container img {
            margin: 10px;
          }
          @media only screen and (max-width: 1070px) {
            .gallery - container img {
              width: 380px;
            }
            .gallery-container {
              width: 800px;
            }
          }

          @media only screen and (max-width: 870px) {
            .gallery - container {
              flex-direction: column;
              width: 470px;
            }
            .gallery-container img {
              width: 450px;
            }
          }
          @media only screen and (max-width: 460px) {
            .gallery - container img {
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

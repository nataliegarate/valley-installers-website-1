import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import Head from "next/head";

// 4 width
// 3 height
// x * .57 =  300

let images = [
  "/valley8.jpg",
  "/valley3.jpg",
  "/valley1.jpg",
  "/valley5.jpg",
  "/valley4.jpg",

  "/valley6.jpg",
  "/valley7.jpg",
  "/valley9.jpg",
  "/valley10.jpg",
  "/valley11.jpg",
  "/valley12.jpg",
  "/valley2.jpg",
];

function GalleryView() {
  return (
    <Layout>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Header page={"Gallery"} />
      <div className="content-view-gallery">
        <div className="gallery-container">
          {images.map((image, index) => (
            <img key={index} src={image} />
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
            margin: 50px 10px 0px 10px;
            width: 480px;
            height: 362px;
          }

          .content-view-gallery {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            margin: 10px 0px 60px 0px;
          }

          @media only screen and (max-width: 1070px) {
            .gallery-container img {
              width: 380px;
              height: 290px;
              margin: 40px 10px 0px 10px;

            }
            .gallery-container {
              width: 820px;
            }
          }

          .content-view-gallery {
            margin: 0px 0px 40px 0px;
          }
          }

          @media only screen and (max-width: 870px) {
            .gallery-container {
              flex-direction: column;
            }
              

            .gallery-container img {
              width: 450px;
              height: 330px;
              margin: 30px 10px 0px 10px;

            }
            .content-view-gallery {
            margin: 0px 0px 30px 0px;
          }
          }
          @media only screen and (max-width: 460px) {
            .gallery-container img {
              width: 300px;
               height: 226px;
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

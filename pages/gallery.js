import React from "react";
import Header from "../components/Header/Header";
// import Header from "../components/Footer/Footer";

let images = [
  "https://dummyimage.com/480x390/ededed/fcfcfc.jpg",
  "https://dummyimage.com/480x390/ededed/fcfcfc.jpg",
  "https://dummyimage.com/480x390/ededed/fcfcfc.jpg",
  "https://dummyimage.com/480x390/ededed/fcfcfc.jpg"
];

function GalleryView(props) {
  return (
    <>
      <Header />
      <div className="content-view">
        <div className="gallery-container">
          {images.map(image => (
            <img src={image} />
          ))}
        </div>
      </div>
      <Footer />
      <style jsx>
        {" "}
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
    </>
  );
}

export default GalleryView;

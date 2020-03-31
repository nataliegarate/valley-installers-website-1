// import React from "react";
import Header from "../components/Header/Header";
// import Footer from "../Footer/Footer";
// import "./AboutView.css";

function About() {
  return (
    <>
      <Header />

      <div className="content-view">
        <img
          className="col-1"
          alt="placeholder"
          src="https://wearemortar.com/wp-content/uploads/2019/09/placeholder.png"
        />
        <div id="about-text-container" className="col-2">
          <h2>About Us</h2>
          <p>
            Valley Installers attention to detail and unsurpassed quality has
            made us the first and only choice for cabinet installation. Laminate
            countertops are our what we specialize in. Rigo can build just about
            any project you can come up with. Call us today to discuss your
            projects.
          </p>
          <p>Valley Installers are licensed and insured.</p>
        </div>
      </div>
      {/* <Footer /> */}
      <style jsx>{`
        #about-text-container {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        #about-text-container p:nth-child(3) {
          font-weight: bold;
          text-align: center;
        }

        .about-address {
          margin-bottom: 60px;
        }

        .about-address p {
          font-size: 20px;
          text-align: center;
          margin: 0px;
        }

        @media only screen and (max-width: 870px) {
          #about-text-container p {
            margin-top: 0;
          }
        }
      `}</style>
    </>
  );
}

export default About;

import Header from "../components/Header";
import Footer from "../components/Footer";
import Layout from "../components/layout";
import Head from "next/head";

function Custom404() {
  return (
    <Layout>
      <div id="error-page-container">
        <Header error={true} page={"Home"} />
        <div id="error-container">
          <h1> 404 </h1>
          <p> PAGE NOT FOUND</p>
        </div>
        <Footer />
      </div>
      <style jsx>{`
        #error-page-container {
          height: 100vh;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        .image-container-header {
          display: none;
        }
        #error-container {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        #error-container h1 {
          font-size: 150px;
          margin: 0;
        }
        #error-container p {
          font-size: 35px;
          text-align: center;
        }
        @media only screen and (max-width: 460px) {
          #error-container h1 {
            font-size: 75px;
            margin: 0;
          }
          #error-container p {
            font-size: 20px;
            text-align: center;
          }
        }
      `}</style>
    </Layout>
  );
}

export default Custom404;

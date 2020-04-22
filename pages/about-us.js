import Header from "../components/Header";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import Head from "next/head";

function About() {
  return (
    <Layout>
      <Head>
        <title>About Valley Installers</title>
        <meta
          name="description"
          content="Valley Installers attention to detail and unsurpassed quality has
            made them the first and only choice for laminate countertop installation"
        ></meta>
        <meta
          name="keywords"
          content="laminate countertops, countertop installation, kitchen, kalispell, whitefish, coulmbia falls, flathead, bigfork"
        ></meta>
        <link rel="canonical" href="https://valleyinstallers.com" />
        <meta name="robots" content="index, follow" />

        <meta property="og:type" content="website" />

        <meta property="og:title" content="About Valley Installers" />
        <meta
          property="og:description"
          content="Valley Installers attention to detail and unsurpassed quality has
            made them the first and only choice for laminate countertop installation"
        />

        <meta property="og:image" content="/valley10.jpg" />

        <meta
          property="og:url"
          alt="Kitchen with laminate countertops"
          content="https://valleyinstallers.com/about"
        />

        <meta property="og:site_name" content="Valley Installers" />
      </Head>

      <Header page={"About"} />

      <div className="content-view">
        <img
          className="col-1"
          id="about-image"
          alt="Kitchen with laminate countertops"
          src="/valley10.jpg"
        />
        <div id="about-text-container" className="col-2">
          <h2>About Us</h2>
          <p>
            Valley Installers attention to detail and unsurpassed quality has
            made us the first and only choice for laminate countertop
            installation. Laminate countertops are our what we specialize in.
            Rigo can build just about any project you can come up with. Call us
            today to discuss your projects.
          </p>
          <p>Valley Installers are licensed and insured.</p>
        </div>
      </div>
      <Footer />
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
          #about-image {
            order: 2;
            margin-top: 10px;
          }
          #about-text-container {
            order: 1;
          }
          #about-text-container h2 {
            margin-top: 0px;
          }
        }
      `}</style>
    </Layout>
  );
}

export default About;

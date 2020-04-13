import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Layout from "../components/layout";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompass,
  faMapMarkerAlt,
  faUser,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

function HomeView(props) {
  return (
    <div>
      <Head>
        <title>Valley Installers Quality Countertop Installation</title>
        <meta
          name="description"
          content="Hire Valley Installers for quality laminate countertop installation"
        ></meta>
        <meta
          name="keywords"
          content="laminate countertops, countertop installation, kitchen, bathroom, kalispell, whitefish, coulmbia falls, flathead, bigfork"
        ></meta>
        <link rel="canonical" href="https://valleyinstallers.com" />
        <meta name="robots" content="index, follow" />

        <meta property="og:type" content="website" />

        <meta
          property="og:title"
          content="Valley Installers Quality Laminate Countertop Installation"
        />
        <meta
          property="og:description"
          content="Hire Valley Installers for quality cabinet and laminate countertop installation"
        />

        <meta property="og:image" content="/valley7.jpg" />

        <meta property="og:url" content="https://valleyinstallers.com" />

        <meta property="og:site_name" content="Valley Installers" />
      </Head>
      <Layout>
        <Header page={"Home"} />
        <div className="content-view">
          <div id="countertop-text" className="col-1">
            <h2> Laminate Countertops</h2>
            <p className="countertop-sub-text">
              We specialize in laminate countertops. We use Wilsonart, Formica
              or Nevamar laminate giving you a wide range of selection. We also
              offer you a variety of edging, from a standard square edge to a
              beveled edge.
            </p>
            <p className="countertop-sub-text">
              With the Wilsonart HD and the Formica FX lines, your laminate
              countertops can look like traditional hardsurface tops at a
              fraction of the cost.
            </p>
            <p className="countertop-sub-text">
              There are more benefits to laminate that just the price. They are
              more bacterial and scratch resistant than hardsurface. And you
              have a greater variety of colors and patterns to choose from.
            </p>
            <p className="countertop-sub-text">
              We are also proud to introduce you to our process of installing
              undermount sink in laminate. So yes you can have an undermount
              sink with a laminate top!
            </p>

            <p className="countertop-sub-text" id="see-photos">
              <Link href="/gallery">
                <a id="see-gallery" title="See All Photos">
                  See All Photos →
                </a>
              </Link>
            </p>
          </div>
          <div className="col-2">
            <img
              className="countertops-photo"
              src="/valley7.jpg"
              alt="Kitchen with laminate countertop[s"
            />
          </div>
        </div>
        <Footer />
        <style>{`
        .col-2 img {
            width: inherit;
        }

        .countertop-sub-text {
            text-align: start;
            margin: 10px 0px;
        }

        #countertop-text h2 {
            text-align: start;
            width: inherit;
                        margin-top: 0px;

        }

        #see-gallery {
            text-align: center;
            width: inherit;
            font-size: 16px;
            color: #4285f4;
            font-weight: bold;
            letter-spacing: 1px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        @media only screen and (max-width: 870px) {
        #see-photos {
            padding: 15px 0px;
        }
        #countertop-text h2 {
            margin-top: 0px;
        }
    }
`}</style>
      </Layout>
    </div>
  );
}

export default HomeView;

import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faCaretDown,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [showDropDownContent, setShowDropDownContent] = useState(false);

  function handleNavClick() {
    if (showDropDownContent) {
      setShowDropDownContent(false);
    } else {
      setShowDropDownContent(true);
    }
  }
  return (
    <>
      <Head>
        <script
          src="https://kit.fontawesome.com/709bddccc9.js"
          crossorigin="anonymous"
        ></script>
      </Head>
      <header>
        <div className="nav">
          <div id="text-container">
            <Link href="/">
              <p id="name-header">Valley Installers</p>
            </Link>
            <div id="right-header">
              <Link href="/about-us">
                <a id="about-header" title="About">
                  About
                </a>
              </Link>
              <Link href="/gallery">
                <a id="about-header" title="About">
                  Gallery
                </a>
              </Link>
              <a
                id="contact-container"
                href="mailto:valleyinstallers@yahoo.com"
              >
                <FontAwesomeIcon
                  id="contact-icon"
                  style={{ width: "15px" }}
                  icon={faEnvelope}
                  size="xs"
                />
                <p>Contact Us</p>
              </a>
            </div>

            <div
              onClick={handleNavClick}
              className="navbar"
              style={{
                borderBottomRightRadius: showDropDownContent ? "0px" : "7px",
                borderBottomLeftRadius: showDropDownContent ? "0px" : "7px",
              }}
            >
              <div className="dropdown">
                <button className="dropbtn">
                  <p>About</p>
                  <div id="icon-container">
                    <div id="icon-border"></div>
                    <FontAwesomeIcon
                      style={{
                        display: showDropDownContent ? "none" : "inline",
                        width: "8px",
                        color: "#999",
                        padding: "0 5px",
                      }}
                      id="contact-icon"
                      icon={faCaretDown}
                    />
                    <FontAwesomeIcon
                      style={{
                        display: showDropDownContent ? "inline" : "none",
                        width: "8px",
                        color: "#999",
                        padding: "0 5px",
                      }}
                      id="contact-icon"
                      icon={faCaretUp}
                    />
                  </div>
                </button>
                <div id="dropdown-content-container">
                  {showDropDownContent && (
                    <div className="dropdown-content">
                      <Link href="/about-us">
                        <a>About</a>
                      </Link>
                      <Link href="/about-us">
                        <a>Gallery</a>
                      </Link>
                      <a href="mailto:valleyinstallers@yahoo.com">Contact Us</a>
                      <p></p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="image-container-header">
          <div id="image-text">
            <h1>Quality Laminte Countertops Serving The Flathead Valley</h1>
            <Link href="/about-us">
              <a>Learn More About Us →</a>
            </Link>
          </div>
        </div>
      </header>

      <style jsx>{`
        header h1 {
          color: #ffffff;
          text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.99);
        }
        header p {
          color: #ffffff;
        }
        .nav {
          background-color: black;
          height: 70px;
          display: flex;
          align-items: center;
        }

        #text-container {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          margin: 0 auto;
          width: 960px;
        }

        #name-header {
          font-size: 30px;
          display: flex;
          justify-content: left;
          flex-wrap: nowrap;
        }

        #contact-container {
          display: flex;
          flex-wrap: nowrap;
          align-items: center;
          margin-left: 20px;
          border: 2px solid white;
          border-radius: 3px;
          padding: 10px;
          text-decoration: none;
          color: #ffffff;
        }

        #contact-container p {
          padding: 0px;
          margin: 0px;
        }

        #about-header {
          border-radius: 1px;
        }

        #about-header {
          padding: 13px;
        }

        #contact-container:hover,
        #about-header:hover {
          color: black;
          background-color: white;
        }

        #contact-icon:hover {
          color: black;
        }

        #about-header:hover {
          color: black;
        }

        #contact-container p {
          color: inherit;
        }

        #contact-container p {
          margin-left: 10px;
        }

        #right-header {
          display: flex;
          align-items: center;
        }

        #right-header a,
        #contact-container p {
          text-transform: uppercase;
          font-size: 14px;
        }

        .image-container-header {
          background-image: url("https://i.imgur.com/t1vXRIW.jpg");
          height: 376px;
          width: 100%;
          font-weight: bold;
        }

        .image-container-header h1 {
          font-size: 42px;
          text-transform: uppercase;
          letter-spacing: 2px;
          text-align: center;
          line-height: 71px;
          width: 940px;
          margin: 0;
        }

        #image-text {
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
          height: 100%;
        }

        .image-container-header a {
          font-size: 20px;
          border: 2px solid #ffffff;
          border-radius: 2px;
          width: 260px;
          padding: 10px 0px;
          text-align: center;
        }

        .image-container-header a:hover {
          background-color: rgb(255, 255, 255, 0.2);
        }

        a {
          text-decoration: none;
          color: #ffffff;
        }

        .navbar {
          display: none;
          overflow: hidden;
          background-color: rgba(255, 255, 255, 0.8);
          border-radius: 7px;
        }

        .navbar p {
          color: #333;
          font-size: 12px;
          font-weight: 700;
        }

        .dropdown {
          overflow: hidden;
          flex-direction: row;
          justify-content: space-between;
        }

        .dropdown .dropbtn {
          color: white;
          background-color: #dedede;
          width: 300px;
          height: 34px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          padding: 0px;
        }

        .dropdown .dropbtn p {
          margin: 0;
          padding-left: 10px;
        }

        .dropdown-content {
          position: absolute;
          background-color: #f9f9f9;
          min-width: 160px;
          box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
          z-index: 1;
          border-bottom-left-radius: 7px;
          border-bottom-right-radius: 7px;
        }

        .dropdown-content a {
          text-decoration: none;
          display: block;
          text-align: left;
          width: 288px;
          height: 20px;
          padding-left: 12px;
          margin: 0;
          font-weight: 400;
          color: #333;
          font-size: 12px;
          padding-top: 6px;
          border-bottom: 2px solid #f2f2f2;
        }

        .dropdown-content a:hover {
          background-color: #f2f2f2;
        }

        .dropdown-content p:last-child {
          margin: 5px;
        }

        .fa-caret-down:before {
          color: #999;
          padding: 0 5px;
          margin-top: 10px;
        }

        .fa-caret-up:before {
          color: #999;
          padding: 0 5px;
        }

        #icon-border {
          border-left: 1px solid #999;
          height: 30px;
        }

        #icon-container {
          display: flex;
          flex-direction: row;
        }

        .fa.fa-caret-down {
          margin-top: 10px;
        }

        .fa.fa-caret-up {
          margin-top: 10px;
        }

        @media only screen and (max-width: 1070px) {
          .image-container-header h1 {
            width: 700px;
          }

          .image-container-header a {
            width: 800px;
          }

          #text-container {
            width: 800px;
          }
          .navbar {
            display: inline;
          }

          #right-header {
            display: none;
          }
        }

        @media only screen and (max-width: 870px) {
          .image-container-header h1 {
            width: 420px;
            font-size: 36px;
            line-height: 55px;
          }

          #text-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 0 auto;
          }

          .nav {
            height: 110px;
          }

          #name-header {
            margin: 0 0 5px 0;
          }

          #image-text a {
            display: none;
          }
        }

        @media only screen and (max-width: 460px) {
          .image-container-header h1 {
            font-size: 30px;
            width: 320px;
            line-height: 40px;
          }
        }
      `}</style>
    </>
  );
}

export default Header;

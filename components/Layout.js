import React from "react";

export default ({ children, settings = {} }) => (
  <div>
    <div className="util__container">{children}</div>

    <style jsx global>
      {`
        body {
          text-align: center;
          font-family: "Lato", sans-serif;
          margin: 0;
        }

        a {
          text-decoration: none;
        }

        .App-logo {
          height: 40vmin;
          pointer-events: none;
        }

        p {
          font-weight: 300;
          line-height: 1.6em;
          font-size: 18px;
          color: #4e4e4e;
          text-align: left;
        }

        h2 {
          font-size: 24px;
          font-weight: bold;
          letter-spacing: 1px;
        }

        .content-view {
          margin: 60px 0px;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
        }

        .content-view img {
          box-shadow: 0 0 8px rgba(0, 0, 0, 0.33);
        }

        .col-1 {
          width: 500px;
          margin-right: 20px;
        }
        .col-2 {
          width: 500px;
          margin-left: 20px;
        }

        @media only screen and (max-width: 1070px) {
          .col-1 {
            width: 400px;
            margin-right: 20px;
          }
          .col-2 {
            width: 400px;
            margin-left: 20px;
          }
          .content-view {
            margin: 40px 0px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
          }

          #right-header {
            display: none;
          }
        }

        @media only screen and (max-width: 870px) {
          .col-1 {
            width: 450px;
            margin-right: 0px;
          }
          .col-2 {
            width: 450px;
            margin-left: 0px;
          }
          .content-view {
            margin: 30px 0px;
            flex-direction: column;
          }
        }
        @media only screen and (max-width: 460px) {
          .col-1 {
            width: 300px;
            margin-right: 0px;
          }
          .col-2 {
            width: 300px;
            margin-left: 0px;
          }
          .content-view {
            margin: 20px 0px;
            flex-direction: column;
          }
        }

        /// PUT THE REST OF STYLING HERE
      `}
    </style>
  </div>
);

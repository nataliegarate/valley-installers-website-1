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

        /// PUT THE REST OF STYLING HERE
      `}
    </style>
  </div>
);

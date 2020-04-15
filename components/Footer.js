import React from "react";

export default function footer() {
  return (
    <div className="footer">
      <div className="contact-footer">
        <h2> CONTACT US: VALLEYINSTALLERS@YAHOO.COM | 406.892.4871</h2>
      </div>
      <div className="author-footer">
        <div id="space"></div>
        <div id="text">Website Built by Natalie Garate and Lillian Gales</div>
      </div>
      <style>
        {`
        .contact-footer {
            padding: 25px 0px;
            background-color: #fafafa;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            width: 100%;
        }

        .contact-footer h2 {
            font-size: 20px;
            font-style: normal;
            font-weight: 300;
            letter-spacing: 2px;
            text-shadow: 1px 1px 0px rgba(255, 255, 255, 0.5);
            text-align: center;
            margin: 0px;
            overflow: hidden;
        }

        .author-footer {
            background-color: #282828;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 70px;
            width: 100%;
        }       

        .author-footer #text {
            display: flex;
            color: #a6a6a6;
            font-size: 14px;
            text-shadow: none;
            font-weight: 300;
            flex-basis: 95%;
            align-items: center;
            justify-content: flex-start;
        }

        .author-footer #space {
            flex-basis: 5%;
        }
        @media only screen and (max-width: 460px) {
          .contact-footer h2 {
            font-size: 14px;
        }
        }
    `}
      </style>
    </div>
  );
}

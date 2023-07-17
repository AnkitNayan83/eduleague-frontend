import React from "react";
import "./helpAndSupport.scss";
import { Navbar2 } from "../../components/navbar2/Navbar2";

export const HelpAndSupport = () => {
  const handleMail = () => {
    const mailtoUrl = "info@eduleague.in";
    window.open(mailtoUrl);
  };
  const handleChat = () => {
    const phoneNumber = "+917895759572";
    const whatsappUrl = `whatsapp://send?phone=${phoneNumber}`;
    window.open(whatsappUrl);
  };
  return (
    <div className="HAS">
      <Navbar2 pageName={"Help And Support"} />
      <div className="wrapper">
        <div className="container">
          <div className="top">
            <p>
              Hello, Need Help? <br /> Feel free to contact us. Will make sure
              to resolve your queries as soon as possible
            </p>
          </div>
          <div className="bottom">
            <div className="left">
              <img src="./images/has.png" alt="" />
            </div>
            <div className="right">
              <div className="HAS-options">
                <div className="HAS-option" onClick={handleMail}>
                  <img src="./images/Mail.png" className="ml" alt="" />
                  <span>Send Us Email</span>
                  <img src="./images/vc.png" alt="" />
                </div>
                <div className="HAS-option" onClick={handleChat}>
                  <img src="./images/cm.png" className="ml" alt="" />
                  <span>Chat With Us</span>
                  <img src="./images/vc.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

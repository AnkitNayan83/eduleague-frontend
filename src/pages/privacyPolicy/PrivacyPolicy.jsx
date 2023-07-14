import React from "react";
import "./privacyPolicy.scss";
import { Navbar } from "../../components/navbar/Navbar";
import { TAndC } from "../../components/tAndc/TAndC";
import { Newsletter } from "../../components/newsletter/Newsletter";
import { Footer } from "../../components/footer/Footer";

export const PrivacyPolicy = () => {
  return (
    <div className="PP">
      <Navbar />
      <div className="PP-container">
        <TAndC />
        <Newsletter />
      </div>
      <Footer />
    </div>
  );
};

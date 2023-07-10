import React, { useState } from "react";
import "./privacyPolicy.scss";
import { Navbar } from "../../components/navbar/Navbar";
import { TAndC } from "../../components/tAndc/TAndC";
import { Newsletter } from "../../components/newsletter/Newsletter";
import { Footer } from "../../components/footer/Footer";

export const PrivacyPolicy = () => {
  const [showTc, setShowTc] = useState(true);
  return (
    <div className="PP">
      <Navbar />
      <div className="PP-container">
        <TAndC showTc={showTc} setShowTc={setShowTc} />
        <Newsletter />
      </div>
      <Footer />
    </div>
  );
};

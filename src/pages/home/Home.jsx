import React from "react";
import "./home.scss";
import { Navbar } from "../../components/navbar/Navbar";
import { Header } from "../../components/header/Header";
import { About } from "../../components/About/About";
import { Footer } from "../../components/footer/Footer";
import { MobileAdd } from "../../components/mobileAdd/MobileAdd";
import { Faq } from "../../components/faq/Faq";
import { Newsletter } from "../../components/newsletter/Newsletter";

export const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Header />
      <About />
      <MobileAdd />
      <Faq />
      <Newsletter />
      <Footer />
    </div>
  );
};

import React from "react";
import "./home.scss";
import { Navbar } from "../../components/navbar/Navbar";
import { Header } from "../../components/header/Header";
import { About } from "../../components/About/About";
import { Footer } from "../../components/footer/Footer";
import { MobileAdd } from "../../components/mobileAdd/MobileAdd";
import { Faq } from "../../components/faq/Faq";
import { Newsletter } from "../../components/newsletter/Newsletter";
import { Helmet } from "react-helmet-async";
import { Laptop } from "../../components/laptop/Laptop";
import { Knowledge } from "../../components/knowledge/Knowledge";

export const Home = () => {
  return (
    <div className="home">
      <Helmet>
        <title>{"Eduleague"}</title>
        <meta
          name="description"
          content={
            "Eduleague is a quiz game where you can earn money by playing quiz"
          }
        />
        <meta property="og:title" content={"Eduleague"} />
        <meta
          property="og:description"
          content={
            "Eduleague is a quiz game where you can earn money by playing quiz"
          }
        />
        <meta property="og:image" content={"./images/logo.png"} />
        <meta property="og:url" content={"URL of your page"} />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content={"Eduleague"} />
        <meta
          name="twitter:description"
          content={
            "Eduleague is a quiz game where you can earn money by playing quiz"
          }
        />
        <meta name="twitter:image" content={"./images/logo.png"} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <Navbar />
      <Header />
      <About />
      <Laptop />
      <MobileAdd />
      <Knowledge />
      <Faq />
      <Newsletter />
      <Footer />
    </div>
  );
};

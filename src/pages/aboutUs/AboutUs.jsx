import React from "react";
import "./aboutUs.scss";
import { Navbar } from "../../components/navbar/Navbar";
import { Footer } from "../../components/footer/Footer";
import { Newsletter } from "../../components/newsletter/Newsletter";
import { Helmet } from "react-helmet-async";
const AboutUs = () => {
  return (
    <div className="aboutUs">
      <Helmet>
        <title>{"Eduleague | AboutUs"}</title>
        <meta
          name="description"
          content={
            "Eduleague is a quiz game where you can earn money by playing quiz"
          }
        />
        <meta property="og:title" content={"Eduleague | AboutUs"} />
        <meta
          property="og:description"
          content={
            "Eduleague is a quiz game where you can earn money by playing quiz"
          }
        />
        <meta property="og:image" content={"./images/logo.png"} />
        <meta property="og:url" content={"URL of your page"} />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content={"Eduleague | AboutUs"} />
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
      <div className="about-container">
        <h2 className="about-heading">About Us</h2>
        <p className="about-para">
          Through EduLeague, we are committed to transforming education by
          enriching knowledge, empowering learners, and bridging financial gaps.
          Our user-friendly app provides a secure and inclusive space where
          users can create and join quizzes, explore various subjects, and
          engage in healthy competition. Join us on this educational journey and
          unlock a world of opportunities for learning, growth, and achievement.
          Together, let's redefine education and shape a brighter future for
          learners worldwide.
        </p>
        <div className="img-container">
          <img src="./images/clg.png" alt="" />
        </div>
      </div>

      <div className="mission-container">
        <div className="left">
          <h2 className="about-heading">Our Mission</h2>
          <p className="about-para">
            Our mission at EduLeague is to revolutionize education by providing
            a dynamic and interactive platform where users can enhance their
            knowledge, challenge themselves, and win exciting rewards. We aim to
            create an inclusive learning community that fosters intellectual
            growth and encourages a passion for continuous education.
          </p>
        </div>

        <div className="img-container">
          <img src="./images/lap.png" alt="" />
        </div>
      </div>

      <div className="vision-container">
        <div className="img-container">
          <img src="./images/search.png" alt="" />
        </div>
        <div className="right">
          <h2 className="about-heading">Our Vision</h2>
          <p className="about-para">
            Our mission at EduLeague is to revolutionize education by providing
            a dynamic and interactive platform where users can enhance their
            knowledge, challenge themselves, and win exciting rewards. We aim to
            create an inclusive learning community that fosters intellectual
            growth and encourages a passion for continuous education.
          </p>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default AboutUs;

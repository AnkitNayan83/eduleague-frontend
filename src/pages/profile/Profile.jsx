import React from "react";
import "./profile.scss";
import { Helmet } from "react-helmet-async";
import { Navbar2 } from "../../components/navbar2/Navbar2";
export const Profile = () => {
  return (
    <div className="wallet-wrapper">
      <Helmet>
        <title>{"Eduleague | Profile"}</title>
        <meta
          name="description"
          content={
            "Eduleague is a quiz game where you can earn money by playing quiz"
          }
        />
        <meta property="og:title" content={"Eduleague | Profile"} />
        <meta
          property="og:description"
          content={
            "Eduleague is a quiz game where you can earn money by playing quiz"
          }
        />
        <meta property="og:image" content={"./images/logo.png"} />
        <meta property="og:url" content={"URL of your page"} />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content={"Eduleague | Profile"} />
        <meta
          name="twitter:description"
          content={
            "Eduleague is a quiz game where you can earn money by playing quiz"
          }
        />
        <meta name="twitter:image" content={"./images/logo.png"} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* <Navbar2 pageName={"profile"} /> */}

      <div className="profile-container">
        <div className="left-part">
          <h4>Basic Information</h4>
        </div>
        <>
          <div className="right-part2">
            <div className="img-wrappper">
              <img src="./images/prof.png" alt="" />
            </div>
            <div className="info-tab">
              <div className="content">
                <h4>First Name</h4>
                <input type="text" placeholder="Enter your First Name" />
              </div>
              <div className="content">
                <h4>Last Name</h4>
                <input type="text" placeholder="Enter your Last Name" />
              </div>

              <div className="content">
                <h4>Phone Number</h4>
                <input type="text" placeholder="Enter your Phone no." />
              </div>

              <div className="btn-wrapper">
                <button className="btn">Save Changes</button>
              </div>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

import React, { useState } from "react";
import "./profile.scss";
import { Helmet } from "react-helmet-async";
import { Navbar2 } from "../../components/navbar2/Navbar2";
import { EditProfile } from "../../components/editProfile/EditProfile";
import { Kyc } from "../../components/kyc/Kyc";


export const Profile = () => {
  const [profile, setProfile] = useState(true);

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
          <h4 onClick={()=>setProfile(true)}>Basic Information</h4>
          <h4 onClick={()=>setProfile(false)}>KYC Verification</h4>
        </div>
        <>
          <div className="right-part2">
            {profile ?
              <EditProfile/>
            :<Kyc/>}
          </div>
        </>
      </div>
    </div>
  );
};

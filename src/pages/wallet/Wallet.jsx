import React, { useState } from "react";
import "./wallet.scss";
import { Helmet } from "react-helmet-async";
export const Wallet = () => {
  const [wallet, setWallet] = useState(true);
  return (
    <div className="wallet-wrapper">
      <Helmet>
        <title>{"Eduleague | Wallet"}</title>
        <meta
          name="description"
          content={
            "Eduleague is a quiz game where you can earn money by playing quiz"
          }
        />
        <meta property="og:title" content={"Eduleague | Wallet"} />
        <meta
          property="og:description"
          content={
            "Eduleague is a quiz game where you can earn money by playing quiz"
          }
        />
        <meta property="og:image" content={"./images/logo.png"} />
        <meta property="og:url" content={"URL of your page"} />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content={"Eduleague | Wallet"} />
        <meta
          name="twitter:description"
          content={
            "Eduleague is a quiz game where you can earn money by playing quiz"
          }
        />
        <meta name="twitter:image" content={"./images/logo.png"} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="wallet-container">
        <div className="left-part">
          <h5
            onClick={() => setWallet(true)}
            className={wallet ? "active" : ""}
          >
            My earning
          </h5>
          {/* <h4>Add Money</h4> */}
          <h5
            onClick={() => setWallet(false)}
            className={wallet ? "" : "active"}
          >
            Transaction
          </h5>
        </div>
        {wallet ? (
          <>
            <div className="center-part">
              <div className="content">
                <h3>Total Earning</h3>
                <h2>₹ 50</h2>
              </div>
            </div>
            <div className="right-part">
              <h4>Add amount</h4>
              <input type="text" placeholder="Your Name" />
              <button>Withdraw</button>
            </div>
          </>
        ) : (
          <>
            <div className="right-part2">
              <div className="transaction-conatiner">
                <div className="left">
                  <h4>English</h4>
                  <p className="date">22/02/23</p>
                </div>
                <div className="right">
                  <h2>₹50</h2>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

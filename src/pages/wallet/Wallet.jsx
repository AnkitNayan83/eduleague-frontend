import React, { useState } from "react";
import "./wallet.scss";
import { Helmet } from "react-helmet-async";
import { Transaction } from "../../components/trasaction/Transaction";
import {Navbar2} from "../../components/navbar2/Navbar2"
export const Wallet = () => {
  const [wallet, setWallet] = useState(true);
  return (
    <div className="wallet-container">
    <Navbar2/>

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
                <Transaction/>
                <Transaction/>
            </div>
          </>
        )}
      </div>
    </div>
    </div>
  );
};

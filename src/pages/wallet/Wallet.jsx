import React, { useEffect, useState } from "react";
import "./wallet.scss";
import { Helmet } from "react-helmet-async";
import { Transaction } from "../../components/trasaction/Transaction";
import { Navbar2 } from "../../components/navbar2/Navbar2";
import { axiosRequest } from "../../axiosInstance";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading } from "../../redux/slice/alertSlice";
import { PropagateLoader } from "react-spinners";
export const Wallet = () => {
  const [wallet, setWallet] = useState(true);
  const [walletData, setWalletData] = useState({});
  const loading = useSelector((state) => state.alerts.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    const getWallet = async () => {
      try {
        dispatch(showLoading());
        const res = await axiosRequest.get("/user/get-wallet", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        dispatch(hideLoading());
        setWalletData(res.data);
      } catch (error) {
        dispatch(hideLoading());
        console.log(error);
      }
    };
    getWallet();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="wallet-container">
      <Navbar2 pageName={"wallet"} />
      <div className="wallet-wrapper2">
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
        <div className="wallet-container2">
         
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
                  {loading && (
                  <div className="spin">
                      <PropagateLoader color="#fff" />
                  </div>
                  )}
                  <h3>Total Earning</h3>
                  <h2>{walletData?.balance}</h2>
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
                {walletData?.log?.map((item, i) => (
                  <Transaction log={item} key={i} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

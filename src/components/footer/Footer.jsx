import React from "react";
import "./footer.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footer">
        <div className="fLists">
          <ul className="fList">
            <li className="fListItem">
              <h2>Eduleague</h2>
            </li>
            <li className="fListItem2">Play, learn and earn with our</li>
            <li className="fListItem2">interactive gamified quiz platform</li>
          </ul>
          <ul className="fList ">
            <li className="fListItem">
              <h3>Quick Links </h3>
            </li>
            <li className="fListItem">Join Quiz</li>
            <li className="fListItem">Create Quiz </li>
          </ul>
          <ul className="fList f2">
            <li className="fListItem">
              <h3>Other</h3>{" "}
            </li>
            <Link to={"/privacyPolicy"}>
              <li className="fListItem">Privacy Policy & TC</li>
            </Link>
            <li className="fListItem">About Us</li>
            <li className="fListItem">Help and Support</li>
          </ul>
          <ul className="fList">
            <li className="fListItem">
              <h4>Social Media Links</h4>
            </li>
            <li className="fListItem f3">
              <FacebookIcon className="icon" /> <TwitterIcon className="icon" />{" "}
              <InstagramIcon className="icon" />{" "}
            </li>
          </ul>
        </div>
        <div className="fText">Copyright © 2023</div>
      </div>
    </div>
  );
};

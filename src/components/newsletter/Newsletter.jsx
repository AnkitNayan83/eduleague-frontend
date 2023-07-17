import React from "react";
import "./newsletter.scss";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Newsletter = () => {
  const navigate = useNavigate();
  const handelClick = (e) => {
    e.preventDefault();
    navigate("/");
    toast.success("Thanks for subscribing");
  };
  return (
    <div className="newsletter">
      <div className="container">
        <div className="middle">
          <h1>Subscribe Us for Newsletter</h1>
          <p>stay updated with our upcoming features.</p>
          <p>Subscribe now</p>
          <form>
            <input type="text" placeholder="Enter your email" />
            <button onClick={handelClick}>Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
};

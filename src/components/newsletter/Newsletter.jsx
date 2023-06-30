import React from "react";
import "./newsletter.scss";

export const Newsletter = () => {
  return (
    <div className="newsletter">
      <div className="container">
        <div className="middle">
          <h1>Subscribe Us for Newsletter</h1>
          <p>stay updated with our upcoming features.</p>
          <p>Subscribe now</p>
          <form>
            <input type="text" placeholder="Enter your email" />
            <button>Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
};

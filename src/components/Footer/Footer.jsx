import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <>
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <h1 className="footer-name">Vishal</h1>
          <span>
          Our vision is to provide the best homes <br />
           to everyone associated with us.
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="footer-text">Information</span>
          <span>MMMUT Gorakhpur , CSE Dept , 273010</span>
        </div>
      </div>
    </div>

    </>
    
  );
};

export default Footer;

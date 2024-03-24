import React from "react";
import "./footer.scss";

const Footer = () => {  
  return (
    <div id='contact' className="footer-container">
      <div className="footer">
        <h3 className="title"> Contact Information</h3>
        <small> Email: info@adgi.com </small> <br />
        {/* <small>Phone: +254 702549165</small> <br /> */}
        {/* <small>P.O BOX 7552-40100,</small><br />
        <small>Kisumu, Kenya.</small><br /> */}

        <small>&copy; {new Date().getFullYear().toString()} ADGI. All rights reserved.</small>
      </div>
    </div>
  );
};

export default Footer;
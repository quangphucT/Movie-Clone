import "./index.scss";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SlSocialTwitter } from "react-icons/sl";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__top">
        <h1>Terms Of Use</h1>
        <h1>Privacy-Policy</h1>
        <h1>About</h1>
        <h1>Blog</h1>
        <h1>FAQ</h1>
      </div>
      <div className="footer__para">
      
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
     
      </div>
      <div className="footer__icons">
        <span>
          <FaFacebookF />
        </span>
        <span>
          <FaInstagram />
        </span>
        <span>
          <SlSocialTwitter />
        </span>
      </div>
    </div>
  );
};

export default Footer;

import "./Footer.css";
import IMG from "../../assets/ezpoz.png";
import FooterLinks from "./FooterLinks";
import { OutletTypes, POSData, Resources } from "./footerData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-regular-svg-icons";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-links'>
        <FooterLinks itemList={POSData} itemTitle={"POS"} />
        <FooterLinks itemList={OutletTypes} itemTitle={"Outlets"} />
        <FooterLinks itemList={Resources} itemTitle={"Resources"} />
        <div className='footer-address'>
          <h4>
            EazyPosy Infotech <br />
            Private Limited
          </h4>
          <p>
            5E, Maple High Street, Narmadapuram Rd, Bawaria Kalan, Bhopal,
            Madhya Pradesh 462026
          </p>
        </div>
      </div>
      <div className='logo-section'>
        <img src={IMG} alt='Company Logo' width={"200px"} />
        <div className='media-icons'>
          <a className='btn-anonymous'>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a className='btn-anonymous'>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a className='btn-anonymous'>
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a className='btn-anonymous'>
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </div>
        <a className='btn-anonymous media-icons'>
          <FontAwesomeIcon icon={faPhone} />
          <p>+91 9876543210</p>
        </a>
        <a className='btn-anonymous media-icons'>
          <FontAwesomeIcon icon={faMessage} />
          <p>thakur.raxit@gmail.com</p>
        </a>
      </div>
      <div className='footer-copyright'>
        <p>COPYRIGHT © 2024 - EazyPosy Infotech Pvt. Ltd., India •</p>
        <a href='/privacy'> Privacy</a>
        <p>•</p>
        <a href='/terms'> Terms </a>
        <p>•</p>
        <a href='/cancellation&refund'> Cancellation & Refund </a>
        <p>•</p>
        <a> Corporate Information</a>
      </div>
    </footer>
  );
};

export default Footer;

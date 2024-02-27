import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../Shared/Card/Card";
import "./PreFeature.css";
import {
  faBarsProgress,
  faCartShopping,
  faMoneyBill,
  faMoneyCheckDollar,
} from "@fortawesome/free-solid-svg-icons";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const PreFeature = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".prefeature", {
      opacity: 0,
      y: 100,
      scrollTrigger: {
        trigger: ".prefeature",
        start: "-20% center",
        end: "20% center",
        scrub: true,
      },
    });
  });
  return (
    <div className='prefeature'>
      <div className='prefeature-content'>
        <h1>
          Empowering Restaurants: EazyPOSy’s Four Pillars Revolutionize Sales,
          Management, Billing, and Ordering as Your Trusted Tech Partner.
        </h1>
        <p className='pre-para'>
          These pillars encompass sales, management, billing, and seamless
          ordering, ensuring restaurants thrive in today’s dynamic landscape.
        </p>
      </div>

      <div className='card-holder'>
        <Card
          cardTitle={"Billing"}
          cardDescription={
            "Bill is the money owed by a customer for a purchase transaction whereas an invoice is a detailed document of a goods or service transaction."
          }
          icon={
            <FontAwesomeIcon
              icon={faMoneyBill}
              style={{ fontSize: "30px" }}
              className='subtitle'
            />
          }
        />
        <Card
          cardTitle={"Management"}
          cardDescription={
            "Bill is the money owed by a customer for a purchase transaction whereas an invoice is a detailed document of a goods or service transaction."
          }
          icon={
            <FontAwesomeIcon
              icon={faBarsProgress}
              style={{ fontSize: "30px" }}
              className='subtitle'
            />
          }
        />
        <Card
          cardTitle={"Ordering"}
          cardDescription={
            "Bill is the money owed by a customer for a purchase transaction whereas an invoice is a detailed document of a goods or service transaction."
          }
          icon={
            <FontAwesomeIcon
              icon={faCartShopping}
              style={{ fontSize: "30px" }}
              className='subtitle'
            />
          }
        />
        <Card
          cardTitle={"Sales"}
          cardDescription={
            "Bill is the money owed by a customer for a purchase transaction whereas an invoice is a detailed document of a goods or service transaction."
          }
          icon={
            <FontAwesomeIcon
              icon={faMoneyCheckDollar}
              style={{ fontSize: "30px" }}
              className='subtitle'
            />
          }
        />
      </div>
    </div>
  );
};

export default PreFeature;

import "./Partner.css";
import PartnerLogos from "./PartnerLogos";
import CCA from "../../assets/ccAvenue.png";
import PhonePe from "../../assets/phonepe.svg";
import Zomato from "../../assets/zomato.jpg";
import Swiggy from "../../assets/swiggy.svg";
import RazorPay from "../../assets/razorpay.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Partner = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".partner", {
      opacity: 0,
      y: 100,
      scrollTrigger: {
        trigger: ".partner",
        start: "-20% center",
        end: "20% center",
        scrub: true,
      },
    });
    gsap.from(".logo-wrapper", {
      opacity: 0,
      x: 200,
      stagger: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".partner",
        start: "0% center",
        end: "center center",
        scrub: true,
      },
    });
  });
  return (
    <section className='partner'>
      <p>EazyPOSy INTEGRATIONS</p>
      <h6>Sturdy Integrating Ecosystem</h6>
      <p>
        Our open & secure API enables seamless communication across
        integrations. With more than 400 interfaces with international food
        aggregators, payment gateways, accounting software, staff scheduling
        tools, logistics partners, and other services.
      </p>
      <div className='logos-partner'>
        <PartnerLogos logo={CCA} logoAlt={"CC Avenue"} />
        <PartnerLogos logo={PhonePe} logoAlt={"PhonePe"} />
        <PartnerLogos logo={Zomato} logoAlt={"Zomato"} />
        <PartnerLogos logo={Swiggy} logoAlt={"Swiggy"} />
        <PartnerLogos logo={RazorPay} logoAlt={"RazorPay"} />
      </div>
    </section>
  );
};

export default Partner;

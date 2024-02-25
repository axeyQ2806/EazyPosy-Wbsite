import { useGSAP } from "@gsap/react";
import IMG from "../../assets/ctaIMG.png";
import "./CTA.css";
import Form from "./Form";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
const CTA = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".cta", {
      opacity: 0,
      y: 200,
      scrollTrigger: {
        trigger: ".cta",
        start: "-50% center",
        end: "20% center",
        scrub: true,
      },
    });
  });
  return (
    <div className='cta'>
      <div className='cta-content'>
        <h5>Lets Get Started</h5>
        <h6>Accelerate your digital transformation with Posist</h6>
        <Form />
      </div>
      <img src={IMG} width='450px' alt='CTA Image' />
    </div>
  );
};

export default CTA;

import Accordion from "../Shared/Accordion/Accordion";
import IMG from "../../assets/front-of-house-mob.webp";
// import IMG1 from "../../assets/african-american-supermarket-employee-poses-smiling-with-arms-crossed.jpg";
import "./Features.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Features = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".features h2", {
      opacity: 0,
      y: 100,
      scrollTrigger: {
        trigger: ".features",
        start: "-20% center",
        end: "20% center",
        scrub: true,
      },
    });
    gsap.from(".features-content", {
      opacity: 0,
      y: 100,
      scrollTrigger: {
        trigger: ".features",
        start: "top center",
        end: "center center",
        scrub: true,
      },
    });
    gsap.from(".accordion-item", {
      opacity: 0,
      x: 100,
      stagger: 0.5,

      scrollTrigger: {
        trigger: ".features",
        start: "top center",
        end: "40% center",
        scrub: true,
      },
    });
  });
  return (
    <div className='features'>
      <h2>Features</h2>
      <div className='features-content'>
        <Accordion />
        <img
          src={IMG}
          width='500px'
          alt='feature-image'
          className='feature-img'
          id='image-first'
        />
        {/* <img
          src={IMG}
          width='500px'
          alt='feature-image'
          className='feature-img'
          id='image-second'
        />
        <img
          src={IMG}
          width='500px'
          alt='feature-image'
          className='feature-img'
          id='image-third'
        />
        <img
          src={IMG}
          width='500px'
          alt='feature-image'
          className='feature-img'
          id='image-fourth'
        />
        <img
          src={IMG}
          width='500px'
          alt='feature-image'
          className='feature-img'
          id='image-fifth'
        /> */}
      </div>
    </div>
  );
};

export default Features;

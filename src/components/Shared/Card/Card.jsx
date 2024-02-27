import "./Card.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Card = ({ cardTitle, cardDescription, icon }) => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      ".card",
      { x: 200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        stagger: 0.5,
        ease: "ease-in",
        scrollTrigger: {
          trigger: ".prefeature",
          start: "35% center",
          end: "70% center",
          scrub: true,
        },
      }
    );
  });
  return (
    <div className='card'>
      <div className='content'>
        <div className='front'>
          {icon}
          <h3 className='title'>{cardTitle}</h3>
        </div>

        <div className='back'>
          <p className='description'>{cardDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;

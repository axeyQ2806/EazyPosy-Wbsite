import "./Resources.css";
import IMG from "../../assets/Top-Restro-tech-Trends-To-Look-Out-For-In-2022.webp";
import IMG1 from "../../assets/USER-ELE.webp";
import IMG2 from "../../assets/FB-image-1.webp";
import IMG3 from "../../assets/USER-E.webp";

import ResourcesContent from "./ResourcesContent";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Resources = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".resources", {
      opacity: 0,
      y: 100,
      scrollTrigger: {
        trigger: ".resources",
        start: "-20% center",
        end: "20% center",
        scrub: true,
      },
    });

    gsap.from(".resourcesContent-div", {
      opacity: 0,
      x: 100,
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".resources",
        start: "top center",
        end: "45% center",
        scrub: true,
      },
    });
  });
  return (
    <div className='resources'>
      <h5>Resources</h5>
      <h6>Looking for more? You might like these resources.</h6>
      <div className='resources-content'>
        <div className='resources-content_left'>
          <img src={IMG} width='700px' />
          <h5>Latest Artical</h5>
          <h3>The 5 top trends to shape the future of restaurants in 2022</h3>
          <p>
            A look at some of the tech trends expected to reshape the F&B
            industry.
          </p>
        </div>
        <div className='resources-content_left'>
          <ResourcesContent
            IMG={IMG1}
            content={"Setting up a cloud kitchen? All that you need to know"}
            contentType={"Guide"}
          />
          <ResourcesContent
            IMG={IMG2}
            content={
              "Watch Nicolas Budzynski of LPM Restaurant on building brand love"
            }
            contentType={"F&B Talk"}
          />
          <ResourcesContent
            IMG={IMG3}
            content={
              "Download the PRIME Report to build a winning strategy for 2022."
            }
            contentType={"Research"}
          />
        </div>
      </div>
    </div>
  );
};

export default Resources;

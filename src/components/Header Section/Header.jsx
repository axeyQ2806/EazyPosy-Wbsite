import NavbarComponent from "../Shared/Navbar Shared Component/NavbarComponent";
import PrimaryButton from "../Shared/Primary button/PrimaryButton";

import "./Header.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import NavShare from "../Shared/Navbar Share Component 2/NavShare";

const Header = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".header", {
      opacity: 0,
      scrollTrigger: {
        trigger: ".prefeature",
        start: "35% center",
        end: "50% center",
        scrub: true,
      },
    });
    gsap.from(".navbar-component", {
      x: 20,
      scrollTrigger: {
        trigger: ".prefeature",
        start: "35% center",
        end: "50% center",
        scrub: true,
      },
    });
    gsap.from(".nav-main-links", {
      x: -20,
      scrollTrigger: {
        trigger: ".features",
        start: "40% center",
        end: "60% center",
        scrub: true,
      },
    });
  });
  return (
    <div className='header'>
      <NavbarComponent />
      <div className='nav-main-links'>
        {/* <div className='nav-media'>
          <SpecialButton buttonContent={<Instagram />} />
          <SpecialButton buttonContent={<Twitter />} />
          <SpecialButton buttonContent={<LinkedIn />} />
          <SpecialButton buttonContent={<Google />} />
          <SpecialButton buttonContent={<Whatsapp />} />
        </div> */}
        <NavShare />
        <PrimaryButton
          scrollTo={() => window.scrollTo({ top: 2950, behavior: "smooth" })}
        />
      </div>
    </div>
  );
};

export default Header;

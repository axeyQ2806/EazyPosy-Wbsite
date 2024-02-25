import PrimaryButton from "../Shared/Primary button/PrimaryButton";
import NavbarComponent from "../Shared/Navbar Shared Component/NavbarComponent";
import "./Hero.css";
import IMG1 from "../../assets/beautiful-smiling-young-brunette-chef-white-shirt-blank-white-apron-restaurant-background.webp";
import IMG2 from "../../assets/mirror.webp";
import IMG3 from "../../assets/female-chef-with-her-arms-crossed-standing-restaurant-kitchen.webp";
import IMG4 from "../../assets/photo-portrait-two-smiling-asian-entrepreneurs-standing-welcomingly-together-cafe.webp";
import LOGO from "../../assets/ezpoz.png";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import SwiperSlider from "../Shared/Swiper Slider/SwiperSlider";
const Hero = () => {
  const [typeEffect] = useTypewriter({
    words: ["Billing", "Management", "Ordering", "Sales"],
    loop: false,
    typeSpeed: 100,
    deleteSpeed: 40,
  });
  return (
    <>
      <main className='hero'>
        <img src={LOGO} width='200px' className='hero-logo' />
        <div className='hero-content'>
          <h1 className='animated-text'>
            <span className='animated-text-1'>
              Empowering
              <br />
              Restaurants
            </span>
            <span className='animated-text-2'>
              {" "}
              with <span className='animate-text-4'>easiest</span>
            </span>
            <br />
            <span className='animated-text-3' style={{}}>
              {typeEffect}
              <Cursor cursorColor='#ffa200' />
            </span>
          </h1>

          <PrimaryButton
            scrollTo={() => window.scrollTo({ top: 2950, behavior: "smooth" })}
          />
        </div>
        <div className='nav-component-wrapper'>
          <NavbarComponent />
        </div>
        <SwiperSlider IMG1={IMG1} IMG2={IMG2} IMG3={IMG3} IMG4={IMG4} />
      </main>
    </>
  );
};

export default Hero;

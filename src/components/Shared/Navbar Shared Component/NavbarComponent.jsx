import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SecondaryButton from "../Secondary Button/SecondaryButton";
import "./NavbarComponent.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const NavbarComponent = () => {
  return (
    <div className='navbar-component'>
      <h6>
        Click to know more <FontAwesomeIcon icon={faArrowRight} />
      </h6>
      <div className='navbar-comp_button'>
        <SecondaryButton
          btnName={"Features"}
          scrollTo={() => window.scrollTo({ top: 850, behavior: "smooth" })}
        />
        <SecondaryButton
          btnName={"Integrations"}
          scrollTo={() => window.scrollTo({ top: 1650, behavior: "smooth" })}
        />
        <SecondaryButton
          btnName={"Resources"}
          scrollTo={() => window.scrollTo({ top: 2300, behavior: "smooth" })}
        />
      </div>
    </div>
  );
};

export default NavbarComponent;

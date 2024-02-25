import { ReactImageAccordion } from "react-image-accordion";
import "./ImageAccordion.css";
const ImageAccordion = ({ accordionData, onclick }) => {
  return (
    <ReactImageAccordion
      accordionData={accordionData}
      AccordionWidth={"80vw"}
      AccordionHeight={"70vh"}
      ShowButton={false}
      onClick={onclick}
    />
  );
};

export default ImageAccordion;

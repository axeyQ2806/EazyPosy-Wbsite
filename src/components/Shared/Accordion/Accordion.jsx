import "@coreui/coreui/dist/css/coreui.min.css";
import {
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
} from "@coreui/react";
import "./Accordion.css";
import AccordionItem from "./AccordionItem";
const Accordion = () => {
  return (
    <CAccordion activeItemKey={1}>
      <CAccordionItem itemKey={1}>
        <CAccordionHeader id='first'>Front of the House</CAccordionHeader>
        <CAccordionBody>
          Front-of-house solutions to let your staff focus on guest delight and
          leave the rest to us.
        </CAccordionBody>
      </CAccordionItem>
      <br />
      <AccordionItem
        itemId={2}
        itemHeader={"Back of the House"}
        itemBody={
          "Solutions to simplify your kitchen operations, inventory, menu management, and more."
        }
        id='second'
      />{" "}
      <AccordionItem
        itemId={3}
        itemHeader={"Out of the House"}
        itemBody={
          "Flexible API  manages multiple integrations to automate your operations at scale."
        }
        id='third'
      />{" "}
      <AccordionItem
        itemId={4}
        itemHeader={"Restaurant Analytics"}
        itemBody={
          "No more data blindness, make smarter data-driven decisions to improve bottom-line efficiency."
        }
        id='fourth'
      />{" "}
      <AccordionItem
        itemId={5}
        itemHeader={"Restaurant CRM"}
        itemBody={
          "Make sense of your customer’s likes and dislikes to provide personalized service."
        }
        id='fifth'
      />
    </CAccordion>
  );
};

export default Accordion;

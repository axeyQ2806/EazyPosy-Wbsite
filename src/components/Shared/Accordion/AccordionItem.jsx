import {
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
} from "@coreui/react";

const AccordionItem = ({ itemKey, itemHeader, itemBody, id }) => {
  return (
    <>
      <CAccordionItem itemKey={itemKey}>
        <CAccordionHeader id={id}>{itemHeader}</CAccordionHeader>
        <CAccordionBody>{itemBody}</CAccordionBody>
      </CAccordionItem>
      <br />
    </>
  );
};

export default AccordionItem;

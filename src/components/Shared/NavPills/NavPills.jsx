import { CNav, CNavItem, CNavLink, CTabContent, CTabPane } from "@coreui/react";
import "./NavPills.css";
import { useState } from "react";
import ImageAccordion from "../../Image Accordion/ImageAccordion";
import {
  ManagementAccordionData,
  billingAccordionData,
  salesAccordionData,
} from "../../Image Accordion/AccordionData";
const NavPills = () => {
  const [activeKey, setActiveKey] = useState(1);

  return (
    <>
      <CNav variant='tabs' role='tablist'>
        <CNavItem role='presentation'>
          <CNavLink
            active={activeKey === 1}
            component='button'
            role='tab'
            aria-controls='home-tab-pane'
            aria-selected={activeKey === 1}
            onClick={() => setActiveKey(1)}
          >
            Billing
          </CNavLink>
        </CNavItem>
        <CNavItem role='presentation'>
          <CNavLink
            active={activeKey === 2}
            component='button'
            role='tab'
            aria-controls='profile-tab-pane'
            aria-selected={activeKey === 2}
            onClick={() => setActiveKey(2)}
          >
            Management
          </CNavLink>
        </CNavItem>
        <CNavItem role='presentation'>
          <CNavLink
            active={activeKey === 3}
            component='button'
            role='tab'
            aria-controls='contact-tab-pane'
            aria-selected={activeKey === 3}
            onClick={() => setActiveKey(3)}
          >
            Ordering
          </CNavLink>
        </CNavItem>
        <CNavItem role='presentation'>
          <CNavLink
            active={activeKey === 4}
            component='button'
            role='tab'
            aria-controls='disabled-tab-pane'
            aria-selected={activeKey === 4}
            onClick={() => setActiveKey(4)}
          >
            Sales
          </CNavLink>
        </CNavItem>
      </CNav>
      <CTabContent>
        <CTabPane
          role='tabpanel'
          aria-labelledby='home-tab-pane'
          visible={activeKey === 1}
        >
          <ImageAccordion accordionData={billingAccordionData} />
        </CTabPane>
        <CTabPane
          role='tabpanel'
          aria-labelledby='profile-tab-pane'
          visible={activeKey === 2}
        >
          <ImageAccordion accordionData={ManagementAccordionData} />
        </CTabPane>
        <CTabPane
          role='tabpanel'
          aria-labelledby='contact-tab-pane'
          visible={activeKey === 3}
        >
          <ImageAccordion accordionData={billingAccordionData} />
        </CTabPane>
        <CTabPane
          role='tabpanel'
          aria-labelledby='disabled-tab-pane'
          visible={activeKey === 4}
        >
          <ImageAccordion accordionData={salesAccordionData} />
        </CTabPane>
      </CTabContent>
    </>
  );
};

export default NavPills;

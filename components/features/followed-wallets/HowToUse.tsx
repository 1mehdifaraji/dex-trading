import React from "react";

import { Accordion } from "@/components/ui/accordion";
import HowToUseTrackedWalletAccordionItem from "./HowToUseTrackedWalletAccordionItem";

const HowToUse = () => (
  <Accordion type="single" collapsible className="w-full mt-3">
    <HowToUseTrackedWalletAccordionItem />
  </Accordion>
);

export default HowToUse;

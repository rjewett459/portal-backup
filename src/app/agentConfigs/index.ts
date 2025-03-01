import realEstateAgents from "./realEstateAgents/realEstateAgents";
import ecomAgents from "./ecomAgents/ecomAgents";
import educationAgents from "./educationAgents/educationAgents";
import financeAgents from "./financeAgents/financeAgents";
import healthcareAgents from "./healthcareAgents/healthcareAgents";
import { AllAgentConfigsType } from "@/app/types";



export const allAgentSets: AllAgentConfigsType = {
  "Real Estate": realEstateAgents,
  "E-commerce": ecomAgents,
  "Healthcare": healthcareAgents,
  "Finance": financeAgents,
  "Education": educationAgents,
};

export const defaultAgentSetKey = Object.keys(allAgentSets)[0];


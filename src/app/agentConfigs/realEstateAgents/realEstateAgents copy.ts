// File: src/app/agentConfigs/realEstateAgents/realEstate.ts

import { AgentConfig } from "@/app/types";
import propertyGuide from "./propertyGuide";
import appointmentSetter from "./appointmentSetter";
import mortgageAdvisor from "./mortgageAdvisor";

const realEstate: AgentConfig = {
  name: "realEstate",
  publicDescription:
    "The main real estate AI agent that helps users find homes, book tours, and get mortgage advice.",

  instructions: `
# Identity
You are a professional and highly knowledgeable real estate assistant. You help users navigate the home-buying process and route them to the right expert.

# Tasks
1. **Identify the user's intent**:
   - Are they looking for properties? → Route them to Property Guide.
   - Do they want to book a home tour? → Route them to Appointment Setter.
   - Do they need mortgage advice? → Route them to Mortgage Advisor.
2. Answer **general real estate questions** (e.g., "What are closing costs?").
3. Keep conversations **friendly and professional**.

# Personality & Tone
- Professional yet approachable.
- Provides clear, informative responses.
- Uses simple language to make real estate easy to understand.

# Example Conversation Flow
1️⃣ **User:** "I'm looking to buy a house."  
2️⃣ **Agent:** "Great! Are you looking for listings, booking a tour, or mortgage guidance?"  
3️⃣ **User:** "I want to see available homes in Austin, TX."  
4️⃣ **Agent:** "I'll connect you with our Property Guide to help with your search!"  
`,

  // The tools your agent can call
  tools: [
    {
      type: "function",
      name: "answerGeneralQuestions",
      description: "Provides answers to common real estate questions.",
      parameters: {
        type: "object",
        properties: {
          question: {
            type: "string",
            description: "The user's real estate question.",
          },
        },
        required: ["question"],
      },
    },
  ],

  // Agents that this main agent can delegate to
  downstreamAgents: [propertyGuide, appointmentSetter, mortgageAdvisor],

  // The logic for any tools defined above
  toolLogic: {
    // Answers frequently asked real estate questions
    answerGeneralQuestions: ({ question }: { question: string }) => {
      // Give TypeScript a hint that faq is a string→string map
      const faq: Record<string, string> = {
        "What are closing costs?":
          "Closing costs are fees paid at the end of a real estate transaction. They typically range from 2-5% of the home’s price and include loan origination fees, title insurance, and property taxes.",
        "How much down payment do I need?":
          "A conventional mortgage usually requires 20% down, but FHA loans allow as low as 3.5% down.",
        "What is pre-qualification?":
          "Pre-qualification is an estimate of how much you can borrow. It's based on your income, credit score, and debt levels but isn't a guarantee of loan approval.",
        "What’s the difference between a fixed-rate and adjustable-rate mortgage?":
          "A fixed-rate mortgage has the same interest rate for the entire loan, while an adjustable-rate mortgage (ARM) starts with a lower rate that changes over time.",
      };

      return {
        answer:
          faq[question] ||
          "I'm not sure about that, but I can connect you with a mortgage expert for more details.",
      };
    },
  },
};

export default realEstate;

import { AgentConfig } from "@/app/types";

const mortgageAdvisor: AgentConfig = {
  name: "mortgageAdvisor",
  publicDescription: "A highly trained mortgage expert that helps buyers with home financing and pre-qualification.",
  
  instructions: `
# Identity
You are a knowledgeable and highly trained Mortgage Advisor. You assist home buyers in understanding mortgage options, affordability, and financing strategies.

# Tasks
1. Explain different mortgage types and their benefits.
2. Estimate how much home the buyer can afford based on their income, credit score, and down payment.
3. Assist buyers with pre-qualification.
4. Answer mortgage-related questions, including interest rates and loan terms.
5. Guide buyers through the next steps if they want to proceed with a lender.

# Personality & Tone
- Professional, clear, and confident.
- Provides detailed yet easy-to-understand explanations.
- Supportive and encouraging to first-time homebuyers.

# Example Conversation Flow
1️⃣ **User:** "I'm interested in buying a home but don't know what mortgage is best."  
2️⃣ **Agent:** "I can help! Are you looking for a fixed-rate mortgage, an adjustable-rate mortgage, or something like FHA or VA loans?"  
3️⃣ **User:** "I'm not sure. I have a credit score of 720 and make $80K per year."  
4️⃣ **Agent:** "Based on your income and credit score, you may qualify for a conventional loan with an estimated monthly payment of $2,300. Would you like to explore pre-qualification?"  
5️⃣ **User:** "Yes, please!"  
`,

  tools: [
    {
      type: "function",
      name: "explainMortgageTypes",
      description: "Provides an overview of different mortgage types and their advantages.",
      parameters: {
        type: "object",
        properties: {},
        required: [],
      },
    },
    
    {
      type: "function",
      name: "calculateAffordability",
      description: "Estimates how much home the buyer can afford based on their financial profile.",
      parameters: {
        type: "object",
        properties: {
          annualIncome: { type: "number", description: "Buyer's annual income in USD." },
          creditScore: { type: "number", description: "Buyer's credit score." },
          downPayment: { type: "number", description: "Amount available for a down payment." },
        },
        required: ["annualIncome", "creditScore", "downPayment"],
      },
    },
    {
      type: "function",
      name: "preQualifyBuyer",
      description: "Determines if the buyer qualifies for a mortgage based on basic financial details.",
      parameters: {
        type: "object",
        properties: {
          annualIncome: { type: "number", description: "Buyer's annual income in USD." },
          creditScore: { type: "number", description: "Buyer's credit score." },
          debtToIncomeRatio: { type: "number", description: "Percentage of income used for debt payments." },
          loanAmount: { type: "number", description: "Desired loan amount in USD." },
        },
        required: ["annualIncome", "creditScore", "debtToIncomeRatio", "loanAmount"],
      },
    },
  ],

  toolLogic: {
    explainMortgageTypes: () => {
      return {
        mortgageTypes: [
          {
            type: "Fixed-Rate Mortgage",
            description: "A loan with a consistent interest rate for the entire loan term. Best for buyers who plan to stay in their home long-term.",
          },
          {
            type: "Adjustable-Rate Mortgage (ARM)",
            description: "A loan with an interest rate that changes periodically. Good for buyers who plan to sell or refinance in a few years.",
          },
          {
            type: "FHA Loan",
            description: "A government-backed loan requiring lower down payments, ideal for first-time homebuyers with moderate credit.",
          },
          {
            type: "VA Loan",
            description: "A no-down-payment loan for military veterans, active-duty personnel, and eligible spouses.",
          },
        ],
      };
    },

    calculateAffordability: ({ annualIncome, creditScore, downPayment }) => {
      console.log(`Calculating affordability for income: $${annualIncome}, credit score: ${creditScore}, down payment: $${downPayment}...`);

      const maxLoan = annualIncome * 4; // Rough estimate: 4x income
      const estimatedMonthlyPayment = maxLoan / 30 / 12; // 30-year mortgage estimate

      return {
        maxHomePrice: maxLoan + downPayment,
        estimatedMonthlyPayment: estimatedMonthlyPayment.toFixed(2),
        recommendation: `Based on your income, you may qualify for a home around $${(maxLoan + downPayment).toLocaleString()} with an estimated monthly payment of $${estimatedMonthlyPayment.toFixed(2)}.`,
      };
    },

    preQualifyBuyer: ({ annualIncome, creditScore, debtToIncomeRatio, loanAmount }) => {
      console.log(`Checking pre-qualification for loan amount: $${loanAmount}, income: $${annualIncome}, credit score: ${creditScore}...`);

      const maxLoan = annualIncome * 4; // Rough estimate
      const dtiLimit = 0.43; // Standard debt-to-income (DTI) threshold

      if (loanAmount > maxLoan) {
        return {
          preQualified: false,
          message: `Based on your income, this loan amount may be too high. Consider a lower amount or increasing your down payment.`,
        };
      }

      if (debtToIncomeRatio > dtiLimit) {
        return {
          preQualified: false,
          message: `Your debt-to-income ratio is too high. You may need to lower your existing debt before qualifying.`,
        };
      }

      return {
        preQualified: true,
        message: `You are pre-qualified for a loan of $${loanAmount.toLocaleString()}! Contact a lender for next steps.`,
      };
    },
  },
};

export default mortgageAdvisor;

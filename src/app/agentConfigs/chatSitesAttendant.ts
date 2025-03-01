import { AgentConfig } from "@/app/types";

const chatSitesAttendant: AgentConfig = {
  name: "ChatSites Attendant",
  description: "Your main AI assistant for guiding users through ChatSites.",
  instructions: "Assist users with navigation, answer questions, and help them use the ChatSites portal effectively.",
  tools: ["knowledge_base", "site_navigation", "faq"],
};

export default chatSitesAttendant;

/* eslint-disable @typescript-eslint/no-unused-vars */


import { AgentConfig } from "@/app/types";
import propertyGuide from "./propertyGuide"; // Can route back if needed

const appointmentSetter: AgentConfig = {
  name: "appointmentSetter",
  publicDescription: "Schedules property tours for potential buyers and connects them with real estate agents.",

  instructions: `
# Identity
You are a professional and friendly real estate appointment setter. You help schedule property tours and ensure a smooth booking experience.

# Tasks
1. Ask the user which property they want to tour.
2. Collect preferred **date and time** for the tour.
3. Check availability using the scheduling system.
4. Confirm the booking and send a reminder.
5. Offer to connect the user with a real estate agent if they have further questions.
  `,

  tools: [
    {
      type: "function",
      name: "checkAvailability",
      description: "Checks if a time slot is available for a property tour.",
      parameters: {
        type: "object",
        properties: {
          propertyId: { type: "string", description: "The ID of the property." },
          date: { type: "string", description: "Desired date in YYYY-MM-DD format." },
          time: { type: "string", description: "Desired time in HH:MM format." },
        },
        required: ["propertyId", "date", "time"],
      },
    },
    {
      type: "function",
      name: "bookAppointment",
      description: "Books an appointment for a property tour.",
      parameters: {
        type: "object",
        properties: {
          propertyId: { type: "string", description: "The ID of the property being toured." },
          date: { type: "string", description: "Date of the appointment (YYYY-MM-DD)." },
          time: { type: "string", description: "Time of the appointment (HH:MM format)." },
          userName: { type: "string", description: "The name of the person booking the appointment." },
          phoneNumber: { type: "string", description: "The user's phone number." },
        },
        required: ["propertyId", "date", "time", "userName", "phoneNumber"],
      },
    },
    {
      type: "function",
      name: "sendAppointmentReminder",
      description: "Sends a reminder about an upcoming property tour.",
      parameters: {
        type: "object",
        properties: {
          appointmentId: { type: "string", description: "Unique ID of the appointment." },
          phoneNumber: { type: "string", description: "User's phone number." },
        },
        required: ["appointmentId", "phoneNumber"],
      },
    },
  ],


  toolLogic: {
    checkAvailability: ({ propertyId, date, time }) => {
      console.log(`Checking availability for property ${propertyId} on ${date} at ${time}...`);
      return { available: true };
    },

    bookAppointment: ({ propertyId, date, time, userName, phoneNumber }) => {
      console.log(`Booking tour for ${userName} at ${propertyId} on ${date} at ${time}...`);
      return {
        appointmentId: `APT-${Date.now()}`,
        confirmationMessage: `✅ Appointment confirmed! ${userName}, your property tour is booked for ${date} at ${time}.`,
      };
    },

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
sendAppointmentReminder: ({ appointmentId, phoneNumber }) => {
  return {
    success: true,
    message: `📅 Reminder sent for your upcoming property tour.`,
  };
},

    
  },
};

export default appointmentSetter;

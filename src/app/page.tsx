import React, { Suspense } from "react";
import { TranscriptProvider } from "@/app/contexts/TranscriptContext";
import { EventProvider } from "@/app/contexts/EventContext";
import App from "./App";

export default function Page() {
  return (
    <main className="container mx-auto p-4 sm:p-6 md:p-8 max-w-screen-lg">
      <TranscriptProvider>
        <EventProvider>
          <Suspense fallback={<div className="text-center text-gray-500">Loading...</div>}>
            <App />
          </Suspense>
        </EventProvider>
      </TranscriptProvider>
    </main>
  );
}

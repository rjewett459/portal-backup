# Project Directory Breakdown

## 📌 1. Configuration & Setup Files  
These files handle project settings, dependencies, and global configurations.  
- **`eslint.config.mjs`** → ESLint rules for code quality  
- **`next.config.ts`** → Next.js configuration (modify if changing build settings or API routing)  
- **`postcss.config.mjs`** → PostCSS settings (used with Tailwind CSS)  
- **`tailwind.config.ts`** → Tailwind CSS configuration (modify for theme changes)  
- **`tsconfig.json`** → TypeScript configuration  
- **`package.json`** → Lists project dependencies and scripts  
- **`package-lock.json`** → Auto-generated; locks dependencies  
- **`README.md`** → Documentation  

## 📌 2. Public Assets (`/public`)
Static assets like images, logos, and icons.  
- Modify **this folder** to update **logos, favicons, and static images**.  

## 📌 3. The Core App (`/src/app`)
This is where most of your work happens.  
- **`/agentConfigs/`** → Where different AI agents are defined.  
  - To add a **new AI agent**, create a folder inside `/agentConfigs/` and add its logic (authentication, responses, etc.).  
- **`/api/`** → Server-side API routes.  
  - Modify if you're handling **custom API requests** (e.g., chat completions).  
- **`/components/`** → UI components (buttons, toolbars, chat interface).  
  - Modify this if you need to change the **layout or add new UI elements**.  
- **`/contexts/`** → React Context API for managing global state.  
  - Modify if you need to **store shared data across components**.  
- **`/hooks/`** → Custom React hooks for handling stateful logic.  
  - Modify if you need to **interact with events or external sources**.  
- **`/lib/`** → Utilities and helper functions.  
  - Modify if you need to **change real-time connections or logic**.  
- **`page.tsx`** → The main entry point for rendering the app.  
  - Modify if you want to **change the overall structure of the homepage**.  
- **`layout.tsx`** → Defines the app's layout and global styling.  
  - Modify if you need to **change the app’s layout structure** (headers, footers, sidebars).  

---

## 📌 Quick Reference: Where to Modify Things
| Task | Files/Folders to Modify |
|------|-------------------------|
| Add a new AI agent | `/src/app/agentConfigs/` (Create a new folder & add logic) |
| Change chat interface UI | `/src/app/components/` (Edit `Transcript.tsx`, `Events.tsx`) |
| Modify API responses | `/src/app/api/` (Edit `chat/completions/route.ts`) |
| Adjust page layout | `/src/app/layout.tsx` |
| Modify homepage structure | `/src/app/page.tsx` |
| Change real-time event handling | `/src/app/hooks/useHandleServerEvent.ts` |
| Update logos, icons, or images | `/public/` |
| Modify global styles | `/src/app/globals.css` |
| Adjust Tailwind theme | `tailwind.config.ts` |


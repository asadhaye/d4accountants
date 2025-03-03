# Component Audit Report

## UI Components (/src/components/ui)
Current components:
- `button.tsx`: Base button component with variants
- `card.tsx`: Card container component
- `scroll-area.tsx`: Custom scrollable area
- `select.tsx`: Dropdown select component
- `dialog.tsx`: Modal dialog component
- `toast.tsx`: Toast notification component

Status: ✅ Already in correct directory, needs style updates

## Layout Components (Currently in /src/components)
Components to move to /layout:
1. `Header.tsx`
   - Current: Navigation implementation
   - Needed: Update with new styling, add animations
   
2. `Footer.tsx`
   - Current: Basic footer implementation
   - Needed: Reorganize with new structure
   
3. `LayoutWrapper.tsx`
   - Current: Basic layout wrapper
   - Needed: Add new layout features

## Section Components (Currently in /src/components)
Components to move to /sections:
1. `Hero.tsx` → `/sections/hero/index.tsx`
   - Current: Static hero section
   - Needed: Add animations, modernize design

2. `ServiceCards.tsx` → `/sections/services/index.tsx`
   - Current: Basic service cards
   - Needed: Enhanced interactive features

## Feature Components (Currently in /src/components)
Components to move to /features:
1. `ChatBot.tsx` → `/features/chatbot/index.tsx`
   - Current: Basic chat interface
   - Needed: Enhanced UI, animations

2. `LeadCaptureForm.tsx` → `/features/lead-capture/index.tsx`
   - Current: Basic form
   - Needed: Multi-step form, animations

3. `CookieConsent.tsx` → `/features/cookie-consent/index.tsx`
   - Current: Basic notice
   - Needed: Interactive elements

4. `PWAInstaller.tsx` → `/features/pwa/index.tsx`
   - Current: Basic installer
   - Needed: Enhanced UX

## Dependencies Analysis
Key dependencies used:
- framer-motion: Animation library
- @radix-ui: UI primitives
- tailwind: Styling
- shadcn/ui: Component library base

## Next Actions
1. Create new directories ✅
2. Move components one by one
3. Update styling according to new guide
4. Add new features and enhancements
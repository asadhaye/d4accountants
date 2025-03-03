# D4 Accountants Website

A modern, professional website for D4 Accountants built with Next.js 13+, featuring an AI-powered chatbot and lead capture system.

## Project Overview

D4 Accountants website serves as a professional online platform offering comprehensive accounting services including tax planning, bookkeeping, and financial advisory. The website combines modern design with advanced features like an AI-powered chatbot for instant customer support and a sophisticated lead capture system for business growth.

## Tech Stack

- **Framework**: Next.js 13+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI
- **AI Model**: Xenova/mistral-7b (Local inference)
- **Database**: MongoDB
- **Form Validation**: Zod
- **State Management**: React Hooks

## Setup Instructions

### Local Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open http://localhost:3000 in your browser

### Testing

The project uses Jest and React Testing Library for testing:

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch
```

Test coverage requirements:
- Branches: 70%
- Functions: 70%
- Lines: 70%
- Statements: 70%

### CI/CD Pipeline

Automated pipeline using GitHub Actions:

1. Triggers on push to main and pull requests
2. Runs linting (ESLint)
3. Checks formatting (Prettier)
4. Executes test suite
5. Builds the application

### Production Deployment

1. Build the application:
   ```bash
   npm run build
   ```
2. Start the production server:
   ```bash
   npm run start
   ```

## AI Chatbot System

### Xenova/transformers Integration

The website uses Xenova/transformers library to run Mistral-7B model locally in the browser:

- **Model**: Mistral-7B, optimized for efficient browser-based inference
- **Implementation**: Integrated via WebAssembly for client-side execution
- **Features**: Real-time chat interface with message history
- **Caching Strategy**: Implements stale-while-revalidate with 60s max-age
- **Performance**: Configurable generation parameters (max_new_tokens: 500, temperature: 0.7)
- **Error Handling**: Comprehensive error management with fallback responses

### Updating AI Models

To switch or update models in the AI pipeline:

1. Update the model configuration in `src/components/ChatBot.tsx`
2. Modify the model initialization parameters as needed
3. Test thoroughly in development environment before deployment

## Progressive Web App (PWA)

The website is implemented as a PWA with the following features:

- Offline functionality
- App-like experience
- Installable on supported devices
- Service worker for caching
- Icons: 192x192 and 512x512 sizes
- Customized manifest.json

## Core Features

### Service-Specific Pages

Service pages are located in `src/app/services/` with dedicated routes for:

- Tax Planning (`/tax-planning`)
- Bookkeeping (`/bookkeeping`)
- Financial Advisory (`/financial-advisory`)

To add/edit services:

1. Create a new page in the services directory
2. Follow the existing component structure
3. Update the navigation and service list accordingly

### Lead Capture System

- **Form Implementation**: Located in `src/components/LeadCaptureForm.tsx`
- **Validation**: Uses Zod schema for robust form validation
- **Data Handling**: Securely stores leads in MongoDB
- **Error Handling**: Comprehensive error management with user feedback

### SEO Optimization

Key meta tags and customization options:

- Dynamic page titles and descriptions
- Open Graph meta tags for social sharing
- Structured data for services
- Sitemap generation

## Logging System

### Log Levels

- **INFO**: General application flow and user actions
- **ERROR**: Application errors and exceptions
- **WARN**: Potential issues or warnings

### Implementation

```typescript
import { Logger } from "@/lib/logger";

// Adding new log entries
Logger.info("event-name", "Event description");
Logger.error("error-event", "Error description");
Logger.warn("warning-event", "Warning description");
```

### Log Management

- **Development**: Console output for immediate feedback
- **Production**: Structured logging for monitoring systems
- **Access**: View logs through your hosting platform's dashboard

## Future Enhancements

### Advanced AI Capabilities

- Integration of multi-modal AI models
- Enhanced context awareness
- Customized responses based on service types

### Analytics Enhancement

- Detailed user interaction tracking
- Service popularity metrics
- Conversion rate optimization

### Client Dashboard

- Secure client portal
- Lead management interface
- Real-time analytics visualization

## Project Structure

```
/
├── public/           # Static assets
├── src/
│   ├── app/         # Next.js 13+ app directory
│   │   ├── api/     # API routes
│   │   └── services/# Service-specific pages
│   ├── components/  # React components
│   │   ├── ui/     # UI components
│   │   └── ChatBot.tsx
│   └── lib/        # Utilities and configurations
└── package.json
```

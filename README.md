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

## Project Structure

```
/
├── .github/          # GitHub Actions workflows
├── public/           # Static assets and images
├── src/
│   ├── app/         # Next.js 13+ app directory
│   │   ├── api/     # API routes for backend functionality
│   │   ├── (auth)/  # Authentication related pages
│   │   ├── services/# Service-specific pages
│   │   └── [...]/   # Other app routes
│   ├── components/  # React components
│   │   ├── sections/# Page sections (hero, features, etc.)
│   │   ├── shared/  # Shared components across pages
│   │   ├── ui/     # Base UI components
│   │   └── forms/  # Form components and validation
│   ├── data/       # Static data and content
│   ├── hooks/      # Custom React hooks
│   ├── lib/        # Core utilities and configurations
│   │   ├── ai/     # AI/ML related utilities
│   │   ├── auth/   # Authentication utilities
│   │   ├── db/     # Database configurations and models
│   │   ├── logger/ # Logging system
│   │   └── utils/  # General utilities
│   ├── styles/     # Global styles and Tailwind config
│   └── types/      # TypeScript type definitions
├── tests/          # Test files and utilities
├── scripts/        # Build and maintenance scripts
├── docs/           # Documentation files
└── package.json    # Project dependencies and scripts
```

## App Directory Structure

```
src/app/
├── (routes)/                    # Main page routes
│   ├── page.tsx                # Home page
│   ├── about/                  # About us page
│   │   └── page.tsx
│   ├── faq/                    # FAQ page
│   │   └── page.tsx
│   ├── resources/             # Resources and blog
│   │   └── page.tsx
│   └── portal/                # Client portal
│       └── page.tsx
│
├── api/                       # API Routes
│   ├── auth/                 # Authentication endpoints
│   │   ├── [...nextauth]/   # NextAuth configuration
│   │   └── register/        # User registration
│   ├── chat/                # Chat API endpoints
│   │   ├── message/        # Message handling
│   │   └── stream/         # Stream processing
│   └── leads/              # Lead management
│       ├── capture/        # Lead capture
│       └── process/        # Lead processing
│
├── services/                 # Service Pages
│   ├── page.tsx             # Services overview
│   ├── bookkeeping/        # Bookkeeping service
│   │   └── page.tsx
│   ├── tax-planning/       # Tax planning service
│   │   └── page.tsx
│   └── financial-advisory/ # Financial advisory
│       └── page.tsx
│
├── (auth)/                  # Auth-related pages
│   ├── login/              # Login page
│   └── register/           # Registration page
│
├── (legal)/                # Legal pages
│   ├── privacy-policy/    # Privacy policy
│   │   └── page.tsx
│   └── terms/             # Terms of service
│       └── page.tsx
│
├── offline/                # Offline functionality
│   ├── page.tsx           # Offline page
│   └── loading.tsx        # Loading state
│
├── layout.tsx             # Root layout
├── metadata.ts            # SEO metadata
├── globals.css           # Global styles
├── service-worker.ts     # Service worker
└── not-found.tsx         # 404 page
```

### Key Components

#### Root Files
- `layout.tsx`: Root layout with common elements (header, footer)
- `page.tsx`: Homepage component
- `metadata.ts`: SEO and metadata configuration
- `globals.css`: Global styles and Tailwind imports
- `not-found.tsx`: Custom 404 error page

#### API Routes (`/api`)
1. **Authentication (`/api/auth`)**
   - NextAuth.js configuration
   - User registration and login endpoints
   - Session management

2. **Chat System (`/api/chat`)**
   - Message handling endpoints
   - Real-time stream processing
   - Chat history management

3. **Lead Management (`/api/leads`)**
   - Lead capture endpoints
   - Lead processing and validation
   - CRM integration

#### Service Pages (`/services`)
- Overview page with service listings
- Individual service pages with:
  - Service description
  - Pricing information
  - Contact forms
  - Case studies

#### Authentication Pages (`/(auth)`)
- Login page with:
  - Email/password login
  - Social authentication
  - Password recovery
- Registration page with:
  - User registration form
  - Email verification
  - Terms acceptance

#### Legal Pages (`/(legal)`)
- Privacy policy
- Terms of service
- Cookie policy
- GDPR compliance information

#### Offline Support (`/offline`)
- Offline page functionality
- Service worker configuration
- Loading states and fallbacks

### Page Organization

Each page directory typically includes:
```
page-name/
├── page.tsx          # Main page component
├── loading.tsx       # Loading state
├── error.tsx         # Error boundary
└── components/       # Page-specific components
```

### Routing Conventions

1. **Dynamic Routes**
   - Use `[param]` for dynamic segments
   - Use `[...slug]` for catch-all routes

2. **Route Groups**
   - Use `(group)` for organizational grouping
   - Doesn't affect URL structure

3. **Private Routes**
   - Protected by authentication middleware
   - Redirect to login if unauthorized

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

### Environment Variables

Create a `.env.local` file with the following variables:

```env
MONGODB_URI=your_mongodb_uri
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
```

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

## Core Features

### AI Chatbot System

- Located in `src/components/chat/`
- Uses Xenova/transformers for local inference
- Configurable in `src/lib/ai/config.ts`

### Lead Capture System

- Forms in `src/components/forms/`
- MongoDB integration via repositories
- Zod validation schemas

### Logging System

```typescript
import { Logger } from "@/lib/logger";

// Usage examples
Logger.info("auth", "User login successful");
Logger.error("api", "API request failed", { statusCode: 500 });
Logger.warn("security", "Invalid access attempt");
```

## Best Practices

### Code Organization

1. Keep components focused and single-responsibility
2. Use TypeScript for type safety
3. Follow the established directory structure
4. Implement proper error handling
5. Write comprehensive tests

### Performance

1. Use proper image optimization
2. Implement caching strategies
3. Lazy load components when possible
4. Optimize API calls and database queries

## Contributing

1. Create a feature branch
2. Follow the established code style
3. Write tests for new features
4. Update documentation as needed
5. Submit a pull request

## License

This project is proprietary and confidential. All rights reserved.

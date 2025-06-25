# KG International Bearings - Corporate Website

## Overview

This is a modern corporate website for KG International, a precision bearings manufacturer. The application is built as a full-stack web application with a React frontend and Express.js backend, featuring a professional industrial design with glass morphism effects, smooth animations, and comprehensive business functionality.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for development and production builds
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Animations**: Framer Motion for smooth transitions and scroll animations
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for client-side routing
- **UI Components**: Comprehensive shadcn/ui component system with custom glass morphism cards

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API endpoints for contact forms and business inquiries
- **Middleware**: Custom logging and error handling middleware

### Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM
- **Connection**: Neon Database serverless PostgreSQL
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Development Storage**: In-memory storage fallback for development environments

## Key Components

### Database Schema (`shared/schema.ts`)
- **Users Table**: Basic user authentication structure
- **Contact Requests Table**: Stores all customer inquiries, brochure requests, and quote requests
- **Validation**: Zod schemas for type-safe data validation

### API Endpoints (`server/routes.ts`)
- `POST /api/contact` - General contact form submissions
- `POST /api/download-brochure` - Brochure download requests with email capture
- `POST /api/request-quote` - Product quote requests

### Frontend Sections
- **Header**: Fixed navigation with scroll-based styling
- **Hero**: Full-screen landing section with call-to-action buttons
- **Company Highlights**: Animated statistics showcase
- **Product Showcase**: Interactive product grid with modal details
- **Market Positioning**: Company values and differentiators
- **Trusted By**: Client logos and testimonials
- **Footer**: Comprehensive company information and links

### Design System
- **Glass Morphism**: Custom glass card components with backdrop blur effects
- **Color Palette**: Navy blue primary (#2C3E50), Red accent (#E74C3C), with neutral grays
- **Typography**: Clean, industrial typography hierarchy
- **Animation**: Smooth scroll animations, hover effects, and page transitions

## Data Flow

1. **Client Requests**: Users interact with contact forms, brochure downloads, and product inquiries
2. **Form Validation**: Client-side validation using Zod schemas from shared directory
3. **API Processing**: Express.js endpoints validate and process requests
4. **Database Storage**: Contact requests stored in PostgreSQL via Drizzle ORM
5. **Response Handling**: Success/error responses with user feedback via toast notifications

## External Dependencies

### Production Dependencies
- **@neondatabase/serverless**: PostgreSQL connection for Neon Database
- **drizzle-orm**: Type-safe database ORM
- **@tanstack/react-query**: Server state management
- **framer-motion**: Animation library
- **@radix-ui/***: Headless UI components
- **tailwindcss**: Utility-first CSS framework
- **wouter**: Lightweight routing
- **zod**: Schema validation

### Development Tools
- **Vite**: Fast development server and build tool
- **TypeScript**: Type safety across the stack
- **Drizzle Kit**: Database schema management
- **esbuild**: Server-side bundling

## Deployment Strategy

### Replit Configuration
- **Runtime**: Node.js 20 with PostgreSQL 16
- **Development**: `npm run dev` serves both frontend and backend
- **Production Build**: Vite builds frontend, esbuild bundles backend
- **Deployment**: Autoscale deployment target with proper port configuration

### Build Process
1. **Frontend Build**: Vite compiles React/TypeScript to static assets
2. **Backend Build**: esbuild bundles Express server with external packages
3. **Asset Serving**: Express serves static files in production
4. **Database Migration**: Drizzle Kit manages schema updates

### Environment Variables
- `DATABASE_URL`: PostgreSQL connection string (required)
- `NODE_ENV`: Environment mode (development/production)

## Changelog

```
Changelog:
- June 25, 2025. Initial setup and complete luxury industrial B2B landing page implementation
- June 25, 2025. Fixed glass morphism text readability issues across all sections
- June 25, 2025. Updated background images for better industrial theme consistency
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```
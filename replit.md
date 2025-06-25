# Portfolio Website - Replit Setup

## Overview

This is a full-stack portfolio website built for Prajyot, an Android & Unity developer. The application is a modern web portfolio showcasing projects, experience, certificates, and contact information. It features a responsive design with dark/light theme support and a professional UI built with React and shadcn/ui components.

## System Architecture

The application follows a full-stack architecture pattern with clear separation between client and server:

- **Frontend**: React-based single-page application with TypeScript
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM (configured but minimal usage)
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Build System**: Vite for client-side bundling, esbuild for server bundling

## Key Components

### Frontend Architecture
- **React Router**: Using Wouter for lightweight client-side routing
- **State Management**: React hooks and TanStack Query for server state
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Styling**: Tailwind CSS with custom theming support
- **Animations**: Framer Motion for smooth transitions and scroll animations

### Backend Architecture
- **Express Server**: RESTful API structure (currently minimal)
- **Database Layer**: Drizzle ORM with PostgreSQL support
- **Storage Interface**: Abstracted storage layer with in-memory implementation
- **Development**: Hot reload with Vite integration in development mode

### Component Structure
- **Sections**: Modular components for different portfolio sections (Hero, About, Projects, Experience, Certificates, Contact)
- **Reusable Components**: Shared UI components like ThemeToggle, ProjectCard, SkillBar
- **Hooks**: Custom hooks for theme management, scroll animations, and mobile detection

## Data Flow

1. **Client Rendering**: React components render the portfolio sections
2. **Theme Management**: Global theme state managed through useTheme hook with localStorage persistence
3. **Animations**: Intersection Observer API for scroll-triggered animations
4. **Contact Form**: Frontend form handling (backend integration pending)
5. **Static Data**: Project and experience data stored in local TypeScript files

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React 18 with TypeScript support
- **UI Library**: Radix UI primitives with shadcn/ui components
- **Animations**: Framer Motion for animations
- **State Management**: TanStack Query for server state
- **Form Handling**: React Hook Form with Zod validation
- **Icons**: Lucide React and React Icons

### Backend Dependencies
- **Express**: Web framework with TypeScript
- **Database**: Drizzle ORM with Neon Database serverless PostgreSQL
- **Session Management**: Connect-pg-simple for PostgreSQL session store

### Development Tools
- **Build Tools**: Vite for frontend, esbuild for backend
- **TypeScript**: Full TypeScript support across stack
- **Linting**: Built-in TypeScript checking
- **Hot Reload**: Vite dev server with Express integration

## Deployment Strategy

The application is configured for Replit deployment with the following setup:

- **Build Process**: `npm run build` creates production builds for both frontend and backend
- **Start Command**: `npm run start` runs the production server
- **Port Configuration**: Server runs on port 5000 (mapped to external port 80)
- **Asset Serving**: Static files served from dist/public in production
- **Environment**: NODE_ENV-based configuration switching

### Replit Configuration
- **Modules**: Node.js 20, Web, PostgreSQL 16
- **Autoscale Deployment**: Configured for automatic scaling
- **Database**: PostgreSQL integration with connection string environment variable

## Changelog

- June 25, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.
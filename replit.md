# Digital Romantic Scrapbook

## Overview

This is a romantic digital scrapbook web application designed to tell a couple's love story through interactive pages. The application mimics a handmade scrapbook aesthetic with paper textures, polaroid frames, sticky notes, and handwritten fonts. Users can navigate through multiple themed pages including "How We Met," "Favorite Memories," "Reasons I Love You," a love letter page, and a forever page, all accompanied by optional background music.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript and Vite for build tooling

**Routing**: Wouter for lightweight client-side routing

**UI Component Library**: Radix UI primitives with custom shadcn/ui components styled using Tailwind CSS

**Design System**:
- Custom romantic color palette with soft beige, blush pink, cream, and pastel tones
- Three font families: Poppins (sans-serif), Dancing Script (handwritten), and Indie Flower (playful)
- CSS variables for theming with extensive Radix UI component customization
- Animations and transitions for scrapbook page effects (page flips, polaroid pops, sticky note floats)

**State Management**: React hooks (useState, useEffect) for local component state

**Page Structure**: Single-page application with six distinct scrapbook pages:
1. Cover page with entry animation
2. "How We Met" page with polaroid photo frames
3. "Favorite Memories" page with photo grid
4. "Reasons I Love You" page with sticky notes
5. Love letter page with envelope interaction
6. Forever page with music controls

**Audio Playback**: Custom useAudio hook managing HTML5 Audio API with play/pause controls and error handling

**Responsive Design**: Mobile-first approach with Tailwind breakpoints and useIsMobile hook

### Backend Architecture

**Server Framework**: Express.js running on Node.js with TypeScript

**Development Mode**: Vite middleware integration for HMR (Hot Module Replacement)

**Production Mode**: Static file serving from compiled Vite build output

**Storage Interface**: Abstract IStorage interface with in-memory MemStorage implementation for user data (currently minimal backend logic as this is primarily a frontend-focused application)

**API Routes**: Minimal API surface - designed for potential future expansion

**Build Process**: 
- Frontend: Vite bundles React application
- Backend: esbuild compiles TypeScript server code to ESM format

### Data Storage Solutions

**Database ORM**: Drizzle ORM configured for PostgreSQL

**Current Schema**: Simple users table with id, username, and password fields

**Database Provider**: Configured for Neon serverless PostgreSQL (via @neondatabase/serverless)

**Migration System**: Drizzle Kit for schema migrations stored in /migrations directory

**Note**: Database is provisioned but minimally utilized in current implementation - the scrapbook is primarily client-side with customization done through code/assets rather than database storage

### Design Pattern Decisions

**Component Organization**: 
- Page components in `/client/src/components/scrapbook/`
- Reusable UI primitives in `/client/src/components/ui/`
- Clear separation between presentation and business logic

**Styling Approach**: 
- Utility-first CSS with Tailwind
- Component-scoped styles using CSS-in-JS patterns where needed
- CSS custom properties for dynamic theming

**Asset Management**: 
- Public folder for static assets (photos, music)
- Assets referenced via public URLs (e.g., `/photos/image.jpg`)
- Vite alias configuration for convenient imports (`@/`, `@shared/`, `@assets/`)

**Customization Strategy**: 
- Content customization through direct code editing (as documented in SCRAPBOOK_CUSTOMIZATION_GUIDE.md)
- Photo replacement via public folder
- Music URL configuration via constant

## External Dependencies

### UI and Component Libraries
- **Radix UI**: Comprehensive suite of accessible, unstyled React components (@radix-ui/react-*)
- **shadcn/ui**: Pre-built component implementations using Radix UI primitives
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **class-variance-authority**: Component variant management
- **cmdk**: Command menu component
- **embla-carousel-react**: Carousel/slider functionality
- **lucide-react**: Icon library

### Form and Data Management
- **React Hook Form**: Form state management (@hookform/resolvers)
- **Zod**: Schema validation (used with drizzle-zod)
- **TanStack Query**: Server state management and data fetching (@tanstack/react-query)
- **date-fns**: Date manipulation utilities

### Database and Backend
- **Drizzle ORM**: Type-safe database ORM with PostgreSQL dialect
- **@neondatabase/serverless**: Neon PostgreSQL serverless driver
- **connect-pg-simple**: PostgreSQL session store for Express

### Build and Development Tools
- **Vite**: Frontend build tool and dev server
- **esbuild**: Fast JavaScript/TypeScript bundler for backend
- **TypeScript**: Type safety across the application
- **@vitejs/plugin-react**: React support for Vite
- **@replit/vite-plugin-***: Replit-specific development plugins

### Fonts
- **Google Fonts**: Dancing Script, Indie Flower, Poppins loaded via CDN

### Audio
- **HTML5 Audio API**: Native browser audio playback (no external library)

### Potential External Services
- **File Hosting**: Users may need services like Dropbox, Google Drive, or cloud storage for hosting music files and photos
- **Neon Database**: PostgreSQL database hosting service
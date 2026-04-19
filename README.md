

# Next.js Developer Portfolio

A modern portfolio web application built with Next.js 15, React 19, TypeScript, and Tailwind CSS.

## Tech Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Gray Matter (content parsing)

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 3. Start development server

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Available Scripts

- `npm run dev` - start the development server with Turbopack
- `npm run build` - build the project for production
- `npm run start` - start the production server
- `npm run lint` - run ESLint

## Project Structure

```text
src/
	app/         # App Router routes and metadata files
	components/  # Reusable UI sections (Hero, Navbar, Projects, etc.)
	appData/     # Static app-level content/config
	hooks/       # Custom React hooks
	services/    # Data/service access layer
	utils/       # Utility helpers for icons/images/indexes
content/
	projects/    # Project JSON content
```

## Production

Build and run locally in production mode:

```bash
npm run build
npm run start
```

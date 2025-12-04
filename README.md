# Seok-young Koo Portfolio

A modern, responsive portfolio website for UI/UX designer Seok-young Koo (구석영).

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **UI:** React 19
- **Styling:** CSS with custom properties (design tokens)

## Getting Started

```bash
cd portfolio-next
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
portfolio-next/
├── src/
│   ├── app/                 # Next.js pages
│   │   ├── layout.tsx       # Root layout with metadata
│   │   └── page.tsx         # Home page
│   ├── components/          # React components
│   │   ├── Header.tsx       # Navigation with mobile menu
│   │   ├── Hero.tsx         # Hero section
│   │   ├── About.tsx        # Bio section
│   │   ├── Timeline.tsx     # Experience & education
│   │   ├── Portfolio.tsx    # Project showcase
│   │   ├── Contact.tsx      # Contact information
│   │   └── Footer.tsx       # Footer
│   ├── data/                # Content data
│   │   ├── about.ts         # Bio & contact info
│   │   ├── projects.ts      # Portfolio projects
│   │   └── experience.ts    # Work & education history
│   └── styles/
│       └── globals.css      # Global styles & design system
└── public/
    ├── images/              # Portfolio images
    ├── cv.pdf               # Resume download
    └── favicons/            # App icons
```

## Features

- Responsive design with mobile-first approach
- Smooth scroll navigation
- Project modal previews
- Bilingual content (Korean/English)
- Optimized images with Next.js Image component

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Design Credits

Original template design by [StyleShout](https://www.styleshout.com) (Luther template).

## License

Personal portfolio project.

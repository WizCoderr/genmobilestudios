# GenMobi.Studio

A modern React + TypeScript landing page for GenMobi.Studio, an AI-powered platform that builds full Flutter apps using autonomous engineering agents.

## Overview

GenMobi.Studio enables users to deploy a fleet of autonomous engineering agents that can plan, architect, and generate production-ready Flutter code from a single text prompt. This landing page showcases the product's features, workflow, use cases, and includes a waitlist signup.

## Features

- **Hero Section**: Eye-catching introduction with animated elements
- **Interactive Demo**: Showcases the AI agent capabilities
- **Feature Highlights**: Detailed breakdown of platform capabilities
- **Workflow Visualization**: Step-by-step process explanation
- **Use Cases**: Real-world application examples
- **FAQ Section**: Common questions and answers
- **Waitlist Modal**: Email collection for early access
- **Responsive Design**: Optimized for all device sizes

## Tech Stack

- **Frontend**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: Custom CSS with modern design patterns
- **Icons**: Material Symbols Outlined
- **Fonts**: Space Grotesk and Inter

## Development

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## Project Structure

```
src/
├── components/
│   ├── Hero.tsx          # Main hero section
│   ├── Demo.tsx          # Interactive demo component
│   ├── Features.tsx      # Feature highlights
│   ├── Workflow.tsx      # Process visualization
│   ├── UseCases.tsx      # Application examples
│   ├── FAQ.tsx           # Frequently asked questions
│   ├── FinalCTA.tsx      # Call-to-action section
│   ├── Footer.tsx        # Site footer
│   ├── Navbar.tsx        # Navigation bar
│   ├── Pricing.tsx       # Pricing information
│   ├── SocialProof.tsx   # Testimonials/social proof
│   └── WaitlistModal.tsx # Email signup modal
├── App.tsx               # Main application component
├── main.tsx              # Application entry point
└── assets/               # Static assets
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting: `npm run lint`
5. Test your changes
6. Submit a pull request

## License

This project is private and proprietary to GenMobi Studios.

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

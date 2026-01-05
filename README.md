# Therapeutic Devotional - Digital Book Landing Page

A modern, responsive landing page for the **Therapeutic Devotional** digital book. This website showcases the product and guides visitors through a conversion funnel to purchase the book.

## About the Project

This landing page is designed to promote the Therapeutic Devotional, a digital book that combines faith-based teachings with practical therapeutic applications. The website features:

- **Hero Section**: Eye-catching introduction with call-to-action
- **Problem Section**: Addresses the pain points of the target audience
- **Awakening Section**: Presents the solution and its benefits
- **Method Section**: Explains the methodology behind the devotional
- **Video Section**: Engaging video content
- **Final CTA Section**: Purchase section with pricing details
- **Author Section**: Information about the author
- **FAQ Section**: Frequently asked questions
- **Footer**: Contact and additional links

## Tech Stack

- **React** - Frontend library
- **Vite** - Build tool and development server
- **CSS** - Styling with custom properties and modern CSS features
- **ESLint** - Code linting

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```
src/
├── assets/         # Static assets
├── components/     # Reusable components
├── sections/       # Page sections
│   ├── HeroSection.jsx
│   ├── ProblemSection.jsx
│   ├── AwakeningSection.jsx
│   ├── MethodSection.jsx
│   ├── VideoSection.jsx
│   ├── FinalCTASection.jsx
│   ├── AuthorSection.jsx
│   ├── FAQSection.jsx
│   └── Footer.jsx
├── App.jsx         # Main App component
├── main.jsx        # Entry point
└── index.css       # Global styles
```

## License

All rights reserved.

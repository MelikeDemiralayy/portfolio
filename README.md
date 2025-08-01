# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Inspired by clean, professional designs from reference sites.

## Features

- 🎨 Modern, clean design inspired by professional portfolios
- 📱 Fully responsive design
- ⚡ Fast performance with Next.js 15
- 🎯 TypeScript for better development experience
- 🎨 Tailwind CSS for styling
- 🔧 Modular component architecture
- 📧 Contact section with email integration
- 🚀 Easy to customize and deploy

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization Guide

### 1. Personal Information

Update your personal information in `src/app/page.tsx`:

```typescript
// Update the hero section
<h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
  Hi, I'm <span className="text-gradient">Your Name</span>
</h1>

// Update the about section
<p className="text-lg text-gray-600 mb-6">
  // Your personal description here
</p>

// Update skills array
const skills = [
  "Your", "Skills", "Here"
];
```

### 2. Projects

Update the projects array in `src/app/page.tsx`:

```typescript
const projects = [
  {
    id: 1,
    title: "Your Project Title",
    description: "Your project description",
    image: "/projects/your-project.jpg",
    tags: ["React", "Next.js", "TypeScript"],
    link: "https://your-project-url.com"
  },
  // Add more projects...
];
```

### 3. Contact Information

Update contact links in the contact section:

```typescript
<Link 
  href="mailto:your.email@example.com"
  className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
>
  Send Email
</Link>
<Link 
  href="https://github.com/yourusername"
  target="_blank"
  rel="noopener noreferrer"
  className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:border-gray-400 transition-colors font-medium"
>
  View GitHub
</Link>
```

### 4. Styling

The project uses Tailwind CSS. You can customize colors, fonts, and other styles in:

- `src/app/globals.css` - Global styles and custom utilities
- `tailwind.config.ts` - Tailwind configuration
- Individual component files for component-specific styles

### 5. Adding Images

1. Place your images in the `public/` directory
2. Reference them in your components using Next.js Image component:

```typescript
import Image from 'next/image';

<Image
  src="/your-image.jpg"
  alt="Description"
  width={400}
  height={300}
/>
```

### 6. Adding New Sections

To add new sections, create new components in `src/components/` and import them in `src/app/page.tsx`.

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/
│   ├── Navigation.tsx       # Navigation component
│   └── ProjectCard.tsx      # Project card component
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The project can be deployed to any platform that supports Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Technologies Used

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first CSS framework
- **React 19** - UI library

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help customizing your portfolio, feel free to open an issue or contact me.

---

Built with ❤️ using Next.js and Tailwind CSS

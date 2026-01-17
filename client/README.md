# Image Library API - Documentation Website

A modern, interactive documentation site for the Image Library API built with React, Tailwind CSS, and Vite.

## Features

- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- 🌙 **Dark Mode** - GitHub-inspired dark aesthetic
- 🎨 **Interactive UI** - Navigation sidebar with active state management
- 🔌 **Live API Demos** - Test endpoints directly in the browser
- 💻 **Code Examples** - Multiple language implementations (JavaScript, Python, cURL, React)
- ⚡ **Fast Development** - Built with Vite for instant HMR
- 🎯 **SEO Ready** - Structured for discoverability

## Project Structure

```
docs/
├── src/
│   ├── components/
│   │   ├── Layout.jsx         # Main layout wrapper with sidebar
│   │   └── Sidebar.jsx        # Navigation sidebar component
│   ├── pages/
│   │   ├── Introduction.jsx   # Getting started guide
│   │   ├── Authentication.jsx # API key setup guide
│   │   ├── LiveDemos.jsx      # Interactive API testing
│   │   └── CodeExamples.jsx   # Code samples
│   ├── App.jsx                # Router configuration
│   ├── main.jsx               # React entry point
│   └── index.css              # Global styles with Tailwind
├── index.html                 # HTML entry point
├── vite.config.js             # Vite configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── postcss.config.js          # PostCSS configuration
└── package.json               # Dependencies
```

## Setup & Development

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
cd docs
npm install
```

### Development Server

```bash
npm run dev
```

The site will open automatically at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Sections

### 📖 Introduction
- Overview of the API
- Key features list
- Quick start guide
- Endpoint summary

### 🔐 Authentication
- How to get an API key
- Using the API key in requests
- Best practices and security tips
- Troubleshooting guide

### 🎬 Live Demos
- Interactive API tester
- Real-time category browsing
- Live image grid display
- Configuration for custom base URLs

### 💾 Code Examples
- JavaScript/Fetch examples
- Python requests examples
- cURL commands
- React hooks implementation
- Backend proxy patterns
- Error handling samples

## Customization

### Colors
Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  'github-dark': '#0d1117',
  'github-text': '#c9d1d9',
  // ... customize as needed
}
```

### Add New Sections
1. Create a new file in `src/pages/`
2. Add a route in `src/App.jsx`
3. Add a navigation item in `src/components/Sidebar.jsx`

### Fonts
The documentation includes:
- **Inter** - Main body text
- **Fira Code** - Code blocks

Modify `index.html` to change fonts from Google Fonts.

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

```bash
npm run build
netlify deploy --prod --dir=dist
```

### GitHub Pages

```bash
npm run build
# Commit and push the dist/ folder
```

## Environment Variables

If using a Live Demos section with a custom API endpoint, create a `.env.local` file:

```
VITE_API_BASE_URL=https://your-api-url.com
VITE_API_KEY=your_default_key_for_demo
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

ISC

## Contributing

Found a bug or want to improve the docs? Open an issue on the [main repository](https://github.com/parthamk/image-library-api)!

<!-- Quick Reference: Image Library API Docs -->
# 🚀 Quick Start Guide

## Installation & Running the Docs

### 1. Install Dependencies
```bash
cd docs
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
The documentation site will open automatically at `http://localhost:3000`

### 3. Navigate the Docs

- **Introduction** - Overview of the API and key features
- **Authentication** - How to get and use your API key
- **Live Demos** - Test the API directly in your browser
- **Code Examples** - Integration examples in HTML, React, and Node.js

---

## 🎬 Using the Live Demos

1. **Enter your API key** in the Configuration panel
2. **Click "Fetch Categories"** to load available image categories
3. **Click a category** to see its images
4. **Switch between Grid and Slider** views:
   - **Grid View** - All images at once
   - **Slider View** - Auto-cycling carousel with navigation

---

## 💻 Code Examples

Three complete implementations are available:

### Static HTML + Vanilla JavaScript
- Copy the code and paste into your HTML file
- Works in any browser without build tools
- Use for simple web pages or static sites

### React with Hooks
- Perfect for React applications
- Includes state management and error handling
- Copy the component and customize as needed

### Node.js Backend
- Use for server-side image fetching
- Includes Express example
- Great for hiding API keys securely

---

## 🔑 API Key Setup

1. Fork: https://github.com/parthamk/image-library-api
2. Create issue: "I need API key to test it"
3. Get your key from the maintainer
4. Use in the Live Demos section to test

---

## 📋 Main Endpoints

```
GET /api/directories
→ Get all categories

GET /api/images/:category
→ Get images in a category

GET /api/images/:category/:subfolder
→ Get images in a subfolder
```

All endpoints require header: `x-api-key: YOUR_KEY`

---

## 🎨 Components & Features

### ImageGrid Component
Responsive grid showing images with hover effects
```jsx
<ImageGrid images={imagesArray} />
```

### ImageSlider Component
Auto-cycling carousel with navigation
```jsx
<ImageSlider images={imagesArray} autoplay={true} interval={3000} />
```

---

## 🏗️ Building for Production

```bash
npm run build
```

This creates an optimized `dist/` folder ready for deployment.

### Deploy to Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
netlify deploy --prod --dir=dist
```

---

## 📚 Documentation Files

- `README.md` - Project overview and setup
- `IMPLEMENTATION.md` - Detailed implementation guide
- `src/pages/` - Individual page components
- `src/components/` - Reusable components

---

## ❓ Common Questions

**Q: Do I expose my API key in the browser?**
A: No! For production, proxy requests through your backend. The Live Demos section is for testing only.

**Q: Can I customize the styling?**
A: Yes! Edit `tailwind.config.js` to change colors and other theme settings.

**Q: Can I add more pages?**
A: Yes! Create new files in `src/pages/` and add routes in `src/App.jsx`.

**Q: Is this responsive?**
A: Yes! Full mobile, tablet, and desktop support with collapsible sidebar.

---

## 🔗 Useful Links

- [Main API Repository](https://github.com/parthamk/image-library-api)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Vite Documentation](https://vitejs.dev)

---

**Happy coding! 🎉**

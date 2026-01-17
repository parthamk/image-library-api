import { useState } from 'react'

const snippets = {
  html: {
    title: 'Static HTML + Vanilla JavaScript',
    description: 'How it works: Vanilla JavaScript fetches the API and inserts images directly into the DOM.',
    code: `<!-- HTML -->
<div id="gallery" class="image-grid"></div>

<script>
  const API_KEY = 'YOUR_API_KEY_HERE';
  const BASE_URL = 'https://image-library-api.vercel.app';

  async function loadGallery(category) {
    try {
      const response = await fetch(
        \`\${BASE_URL}/api/images/\${category}\`,
        {
          headers: {
            'x-api-key': API_KEY,
          },
        }
      );

      if (!response.ok) throw new Error(\`Error: \${response.status}\`);

      const data = await response.json();
      const gallery = document.getElementById('gallery');
      
      gallery.innerHTML = data.images
        .map(img => \`
          <div class="image-card">
            <img src="\${img.url}" alt="\${img.name}" loading="lazy">
            <p>\${img.name}</p>
          </div>
        \`)
        .join('');
    } catch (error) {
      console.error('Failed to load gallery:', error);
      document.getElementById('gallery').innerHTML = 
        \`<p>Error loading images: \${error.message}</p>\`;
    }
  }

  // Load images from seasons category
  loadGallery('seasons');
</script>

<style>
  .image-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
  }

  .image-card {
    border: 1px solid #30363d;
    border-radius: 8px;
    overflow: hidden;
    transition: border-color 0.3s;
  }

  .image-card:hover {
    border-color: #3b82f6;
  }

  .image-card img {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }
</style>`,
  },
  react: {
    title: 'ReactJS with Hooks',
    description: 'How it works: useState manages the image list and loading state, useEffect fetches data on component mount.',
    code: `import { useState, useEffect } from 'react';

export function ImageGallery({ category = 'seasons' }) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          \`https://image-library-api.vercel.app/api/images/\${category}\`,
          {
            headers: {
              'x-api-key': 'YOUR_API_KEY_HERE',
            },
          }
        );

        if (!response.ok) throw new Error(\`HTTP \${response.status}\`);

        const data = await response.json();
        setImages(data.images || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [category]);

  if (loading) return <div className="text-center py-8">Loading images...</div>;
  if (error) return <div className="text-red-500">Error: {error}</div>;

  return (
    <div>
      <h2>Category: {category}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((img) => (
          <div 
            key={img.name} 
            className="border border-gray-700 rounded-lg overflow-hidden hover:border-blue-500"
          >
            <img 
              src={img.url} 
              alt={img.name} 
              className="w-full h-40 object-cover"
            />
            <p className="p-2 text-sm text-gray-300">{img.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Usage: <ImageGallery category="seasons" />`,
  },
  nodejs: {
    title: 'Node.js Backend',
    description: 'How it works: Node.js server fetches data server-side, exposing a cleaner endpoint for the frontend.',
    code: `const express = require('express');
const app = express();

const API_KEY = process.env.IMAGE_API_KEY;
const EXTERNAL_API = 'https://image-library-api.vercel.app';

// Endpoint to get images (frontend-facing)
app.get('/api/gallery/:category', async (req, res) => {
  try {
    const { category } = req.params;

    // Fetch from external API server-side
    const response = await fetch(
      \`\${EXTERNAL_API}/api/images/\${category}\`,
      {
        headers: {
          'x-api-key': API_KEY,
        },
      }
    );

    if (!response.ok) {
      throw new Error(\`API returned \${response.status}\`);
    }

    const data = await response.json();

    // Transform data if needed, add caching, etc.
    res.json({
      category,
      imageCount: data.images?.length || 0,
      images: data.images || [],
      cachedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Gallery API error:', error);
    res.status(500).json({ 
      error: 'Failed to fetch gallery',
      message: error.message 
    });
  }
});

// Endpoint to get all categories
app.get('/api/categories', async (req, res) => {
  try {
    const response = await fetch(
      \`\${EXTERNAL_API}/api/directories\`,
      {
        headers: {
          'x-api-key': API_KEY,
        },
      }
    );

    if (!response.ok) throw new Error(\`API returned \${response.status}\`);

    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});`,
  },
}

export default function CodeExamples() {
  const [activeSnippet, setActiveSnippet] = useState('html')


  return (
    <div>
      <h1>Code Examples & Integration Patterns</h1>

      <p>
        Learn how to integrate the Image Library API into your projects. Choose your preferred
        technology stack below to see real-world implementation examples.
      </p>

      {/* Snippet Selection Buttons */}
      <div className="flex flex-wrap gap-2 mb-6 pb-3 border-b border-github-border">
        {Object.entries(snippets).map(([key, snippet]) => (
          <button
            key={key}
            onClick={() => setActiveSnippet(key)}
            className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
              activeSnippet === key
                ? 'bg-blue-600 text-white'
                : 'bg-github-subtle border border-github-border text-github-text hover:border-github-text'
            }`}
          >
            {snippet.title.split(' ')[0]}
          </button>
        ))}
      </div>

      {/* Active Snippet */}
      {Object.entries(snippets).map(([key, snippet]) => (
        activeSnippet === key && (
          <div key={key} className="mb-8">
            {/* Title and Description */}
            <div className="mb-4">
              <h2 className="mb-2">{snippet.title}</h2>
              <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-3">
                <p className="text-sm text-blue-300">
                  ℹ️ {snippet.description}
                </p>
              </div>
            </div>

            {/* Code Block */}
            <div className="code-block mb-6 max-h-96 overflow-y-auto">
              <pre>
                <code>{snippet.code}</code>
              </pre>
            </div>
          </div>
        )
      ))}

      <h2>Common Patterns</h2>

      {/* Fetching All Categories */}
      <div className="bg-github-subtle border border-github-border rounded-lg p-4 mb-4">
        <h3 className="text-blue-400 font-semibold mb-2">📚 Fetching All Categories</h3>
        <div className="code-block text-sm">
          <pre><code>{`// All languages use the same endpoint with same auth header
GET /api/directories
Header: x-api-key: YOUR_API_KEY_HERE

Response: 
{
  "summary": { "totalCategories": 2, "totalSubfolders": 5 },
  "categories": [
    { "name": "seasons", "path": "images/seasons", "subfolderCount": 2 },
    { "name": "animals", "path": "images/animals", "subfolderCount": 3 }
  ]
}`}</code></pre>
        </div>
      </div>

      {/* Error Handling */}
      <div className="bg-github-subtle border border-github-border rounded-lg p-4 mb-4">
        <h3 className="text-blue-400 font-semibold mb-2">⚠️ Error Handling Best Practices</h3>
        <div className="code-block text-sm">
          <pre><code>{`// Always include error handling
try {
  const response = await fetch(endpoint, { headers });
  
  if (!response.ok) {
    throw new Error(\`HTTP Error \${response.status}\`);
  }
  
  const data = await response.json();
  // Process data
} catch (error) {
  if (error instanceof TypeError) {
    console.error('Network error:', error);
  } else {
    console.error('API error:', error.message);
  }
  // Show user-friendly error message
}`}</code></pre>
        </div>
      </div>

      {/* Caching Strategy */}
      <div className="bg-github-subtle border border-github-border rounded-lg p-4 mb-4">
        <h3 className="text-blue-400 font-semibold mb-2">💾 Caching Strategy</h3>
        <p className="text-sm text-github-text/90 mb-2">
          Reduce API calls by caching responses:
        </p>
        <div className="code-block text-sm">
          <pre><code>{`const cache = new Map();

async function getCachedImages(category, ttl = 3600000) {
  const key = \`images-\${category}\`;
  const cached = cache.get(key);
  
  if (cached && Date.now() - cached.timestamp < ttl) {
    return cached.data;
  }
  
  const response = await fetch(\`..../api/images/\${category}\`, {
    headers: { 'x-api-key': API_KEY }
  });
  
  const data = await response.json();
  cache.set(key, { data, timestamp: Date.now() });
  
  return data;
}`}</code></pre>
        </div>
      </div>

      {/* Environment Variables */}
      <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-4 mb-4">
        <h3 className="text-yellow-400 font-semibold mb-2">🔐 Always Use Environment Variables</h3>
        <p className="text-sm text-yellow-300 mb-2">
          Never hardcode API keys. Use environment variables instead:
        </p>
        <div className="code-block text-sm">
          <pre><code>{`.env (Local - Add to .gitignore)
REACT_APP_API_KEY=your_api_key_here
REACT_APP_API_BASE_URL=https://image-library-api.vercel.app

// In your code
const apiKey = process.env.REACT_APP_API_KEY;
const baseUrl = process.env.REACT_APP_API_BASE_URL;`}</code></pre>
        </div>
      </div>

      <h2>Next Steps</h2>
      <ol className="space-y-2 list-decimal list-inside mb-4">
        <li>Choose your preferred implementation from the tabs above</li>
        <li>Replace <code className="bg-github-subtle px-1 py-0.5 rounded">YOUR_API_KEY_HERE</code> with your actual key</li>
        <li>Test with the <a href="/live-demos" className="text-blue-400 hover:text-blue-300">Live Demos</a> section</li>
        <li>Integrate into your project and deploy!</li>
      </ol>

      <div className="bg-green-900/20 border border-green-700/50 rounded-lg p-4">
        <p className="text-sm text-green-300">
          ✅ <strong>Pro Tip:</strong> Check out the Live Demos section to test your API key and see real data before implementing.
        </p>
      </div>
    </div>
  )
}

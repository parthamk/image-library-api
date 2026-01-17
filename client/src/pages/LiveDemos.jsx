import { useState, useEffect } from 'react'
import ImageGrid from '../components/ImageGrid'
import ImageSlider from '../components/ImageSlider'

export default function LiveDemos() {
  const [apiKey, setApiKey] = useState('')
  const [baseUrl, setBaseUrl] = useState('https://image-library-api.vercel.app')
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [categoryImages, setCategoryImages] = useState(null)
  const [demoTab, setDemoTab] = useState('grid')

  const fetchCategories = async () => {
    if (!apiKey) {
      setError('Please enter your API key')
      return
    }

    setLoading(true)
    setError('')

    try {
      const response = await fetch(`${baseUrl}/api/directories`, {
        headers: {
          'x-api-key': apiKey,
        },
      })

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`)
      }

      const data = await response.json()
      setCategories(data.categories || [])
    } catch (err) {
      setError(`Error fetching categories: ${err.message}`)
      setCategories([])
    } finally {
      setLoading(false)
    }
  }

  const fetchCategoryImages = async (category) => {
    setLoading(true)
    setError('')
    setSelectedCategory(category)

    try {
      const response = await fetch(
        `${baseUrl}/api/images/${category}`,
        {
          headers: {
            'x-api-key': apiKey,
          },
        }
      )

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`)
      }

      const data = await response.json()
      setCategoryImages(data)
    } catch (err) {
      setError(`Error fetching images: ${err.message}`)
      setCategoryImages(null)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <h1>Live API Demos</h1>
      
      <p>
        Test the API endpoints directly from your browser. Enter your API key and
        explore the image library in real-time.
      </p>

      {/* Configuration */}
      <div className="bg-github-subtle border border-github-border rounded-lg p-4 mb-6">
        <h2 className="mb-4">Configuration</h2>
        
        <div className="space-y-3">
          <div>
            <label className="block text-sm font-semibold mb-1">
              API Key <span className="text-red-400">*</span>
            </label>
            <input
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="Enter your API key"
              className="w-full bg-github-dark border border-github-border rounded px-3 py-2 text-github-text focus:outline-none focus:border-blue-500"
            />
            <p className="text-xs text-github-text/60 mt-1">
              Your key is only used in your browser and never sent to external servers
            </p>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Base URL</label>
            <input
              type="text"
              value={baseUrl}
              onChange={(e) => setBaseUrl(e.target.value)}
              className="w-full bg-github-dark border border-github-border rounded px-3 py-2 text-github-text focus:outline-none focus:border-blue-500"
            />
          </div>

          <button
            onClick={fetchCategories}
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 px-4 py-2 rounded font-semibold transition-colors"
          >
            {loading ? 'Loading...' : 'Fetch Categories'}
          </button>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-3 mb-4 text-red-300">
          {error}
        </div>
      )}

      {/* Categories Grid */}
      {categories.length > 0 && (
        <div className="mb-8">
          <h2 className="mb-4">Categories ({categories.length})</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => fetchCategoryImages(cat.name)}
                className={`text-left p-4 border rounded-lg transition-all ${
                  selectedCategory === cat.name
                    ? 'bg-blue-600 border-blue-400'
                    : 'bg-github-subtle border-github-border hover:border-github-text'
                }`}
              >
                <h3 className="font-semibold capitalize">{cat.name}</h3>
                <p className="text-sm text-github-text/70">
                  {cat.subfolderCount} subfolder{cat.subfolderCount !== 1 ? 's' : ''}
                </p>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Category Details with Demo Tabs */}
      {categoryImages && (
        <div className="mb-8">
          <h2 className="mb-4">
            Category: <span className="capitalize text-blue-400">{selectedCategory}</span>
          </h2>

          {/* Demo Type Tabs */}
          {categoryImages.images && categoryImages.images.length > 0 && (
            <div className="mb-6">
              <div className="flex gap-2 mb-4 border-b border-github-border pb-2">
                <button
                  onClick={() => setDemoTab('grid')}
                  className={`px-4 py-2 rounded-t-lg font-semibold transition-colors ${
                    demoTab === 'grid'
                      ? 'bg-blue-600 text-white'
                      : 'bg-github-subtle text-github-text hover:text-white'
                  }`}
                >
                  Grid View
                </button>
                <button
                  onClick={() => setDemoTab('slider')}
                  className={`px-4 py-2 rounded-t-lg font-semibold transition-colors ${
                    demoTab === 'slider'
                      ? 'bg-blue-600 text-white'
                      : 'bg-github-subtle text-github-text hover:text-white'
                  }`}
                >
                  Slider View
                </button>
              </div>

              {/* Grid Demo */}
              {demoTab === 'grid' && (
                <div>
                  <div className="bg-github-subtle border border-github-border rounded-lg p-4 mb-4">
                    <p className="text-sm text-github-text/70 mb-2">
                      📱 <strong>Grid View Demo:</strong> Responsive grid layout showing all images from "{selectedCategory}"
                    </p>
                  </div>
                  <ImageGrid images={categoryImages.images} />
                </div>
              )}

              {/* Slider Demo */}
              {demoTab === 'slider' && (
                <div>
                  <div className="bg-github-subtle border border-github-border rounded-lg p-4 mb-4">
                    <p className="text-sm text-github-text/70 mb-2">
                      🎬 <strong>Slider Demo:</strong> Auto-cycling carousel with navigation controls
                    </p>
                  </div>
                  <ImageSlider images={categoryImages.images} autoplay={true} interval={3000} />
                </div>
              )}
            </div>
          )}

          {/* Subfolders */}
          {categoryImages.subfolders && categoryImages.subfolders.length > 0 && (
            <div className="mb-6">
              <h3>Subfolders ({categoryImages.subfolders.length})</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                {categoryImages.subfolders.map((folder) => (
                  <div
                    key={folder.name}
                    className="bg-github-subtle border border-github-border rounded-lg p-3"
                  >
                    <p className="font-semibold capitalize">{folder.name}</p>
                    <p className="text-sm text-github-text/70">
                      {folder.imageCount} image{folder.imageCount !== 1 ? 's' : ''}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {!apiKey && (
        <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-4">
          <p className="text-sm text-blue-300">
            💡 Enter your API key and click "Fetch Categories" to see live data
          </p>
        </div>
      )}
    </div>
  )
}

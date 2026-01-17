import { useState, useEffect } from 'react'

export default function ImageSlider({ images = [], autoplay = true, interval = 3000 }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (!autoplay || images.length === 0) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, interval)

    return () => clearInterval(timer)
  }, [autoplay, interval, images.length])

  if (images.length === 0) {
    return (
      <div className="bg-github-subtle border border-github-border rounded-lg p-8 text-center text-github-text/60">
        No images to display
      </div>
    )
  }

  const currentImage = images[currentIndex]

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative bg-github-dark border border-github-border rounded-lg overflow-hidden">
        <img
          src={currentImage.url}
          alt={currentImage.name}
          className="w-full h-96 object-cover"
          onError={(e) => {
            e.target.src = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 400%22%3E%3Crect fill=%22%23161b22%22 width=%22400%22 height=%22400%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-family=%22Arial%22 font-size=%2224%22 fill=%22%23c9d1d9%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3EImage not available%3C/text%3E%3C/svg%3E'
          }}
        />

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
          aria-label="Previous image"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
          aria-label="Next image"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Image Counter */}
        <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-mono">
          {currentIndex + 1} / {images.length}
        </div>

        {/* Autoplay Indicator */}
        {autoplay && (
          <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded text-xs font-semibold">
            🔄 Autoplay
          </div>
        )}
      </div>

      {/* Image Info */}
      <div className="bg-github-subtle border border-github-border rounded-lg p-3">
        <p className="text-sm font-mono text-blue-400 truncate">{currentImage.name}</p>
        <p className="text-xs text-github-text/60 mt-1">
          Displaying image {currentIndex + 1} of {images.length}
        </p>
      </div>

      {/* Thumbnail Navigation */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`flex-shrink-0 w-16 h-16 rounded-lg border-2 overflow-hidden transition-all ${
              idx === currentIndex ? 'border-blue-500 ring-2 ring-blue-400' : 'border-github-border hover:border-github-text'
            }`}
            aria-label={`Go to image ${idx + 1}`}
          >
            <img
              src={img.url}
              alt={img.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none'
              }}
            />
          </button>
        ))}
      </div>
    </div>
  )
}

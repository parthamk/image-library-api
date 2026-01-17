import { useEffect, useState } from 'react'

export default function ImageGrid({ images = [] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {images.length === 0 ? (
        <div className="col-span-full text-center py-8 text-github-text/60">
          No images to display
        </div>
      ) : (
        images.map((img) => (
          <div
            key={img.name}
            className="bg-github-subtle border border-github-border rounded-lg overflow-hidden hover:border-blue-500 transition-all group cursor-pointer"
          >
            <div className="relative overflow-hidden bg-github-dark h-40">
              <img
                src={img.url}
                alt={img.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 200 200%22%3E%3Crect fill=%22%23161b22%22 width=%22200%22 height=%22200%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-family=%22Arial%22 font-size=%2214%22 fill=%22%23c9d1d9%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3EImage not found%3C/text%3E%3C/svg%3E'
                }}
              />
            </div>
            <div className="p-3">
              <p className="text-xs text-github-text/70 truncate" title={img.name}>
                {img.name}
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  )
}

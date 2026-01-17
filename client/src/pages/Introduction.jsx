export default function Introduction() {
  return (
    <div>
      <h1>Welcome to Image Library API</h1>
      
      <p>
        The Image Library API is a powerful Node.js/Express service that provides
        structured access to image libraries hosted on GitHub. Organize your images
        into categories and subfolders, then access them programmatically with ease.
      </p>

      <h2>Key Features</h2>
      <ul className="space-y-2 mb-4">
        <li className="flex items-start gap-2">
          <span className="text-blue-400 mt-1">✓</span>
          <span><strong>Organized Categories:</strong> Browse images organized by categories and subfolders</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-blue-400 mt-1">✓</span>
          <span><strong>Rich Metadata:</strong> Get counts of subfolders and images automatically</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-blue-400 mt-1">✓</span>
          <span><strong>API Key Authentication:</strong> Secure access with simple header authentication</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-blue-400 mt-1">✓</span>
          <span><strong>GitHub Powered:</strong> Directly queries your GitHub repository</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-blue-400 mt-1">✓</span>
          <span><strong>Developer Friendly:</strong> Simple REST API with predictable responses</span>
        </li>
      </ul>

      <h2>Quick Start</h2>
      <p>
        To get started with the Image Library API, you'll need:
      </p>
      <ol className="space-y-2 mb-4 list-decimal list-inside">
        <li>An API key (see <a href="/authentication" className="text-blue-400 hover:text-blue-300">Authentication</a> section)</li>
        <li>The base API URL: <code className="bg-github-subtle px-2 py-1 rounded">https://image-library-api.vercel.app</code></li>
        <li>Knowledge of the available endpoints (documented below)</li>
      </ol>

      <h2>Available Endpoints</h2>
      <div className="space-y-4">
        <div className="bg-github-subtle border border-github-border rounded-lg p-4">
          <h3 className="text-blue-400 font-mono">GET /api/directories</h3>
          <p>Retrieve all top-level categories in the image library</p>
          <p className="text-sm text-github-text/70">Returns list of categories with subfolder counts</p>
        </div>

        <div className="bg-github-subtle border border-github-border rounded-lg p-4">
          <h3 className="text-blue-400 font-mono">GET /api/images/:category</h3>
          <p>Get images and subfolders within a specific category</p>
          <p className="text-sm text-github-text/70">Returns images and subfolders with metadata</p>
        </div>

        <div className="bg-github-subtle border border-github-border rounded-lg p-4">
          <h3 className="text-blue-400 font-mono">GET /api/images/:category/:subfolder</h3>
          <p>Get images within a specific subfolder</p>
          <p className="text-sm text-github-text/70">Returns images in the specified subfolder</p>
        </div>
      </div>

      <h2>Next Steps</h2>
      <p>
        Start by reading the <a href="/authentication" className="text-blue-400 hover:text-blue-300">Authentication</a> guide
        to get your API key, then explore the <a href="/live-demos" className="text-blue-400 hover:text-blue-300">Live Demos</a> to
        see the API in action, and check out <a href="/code-examples" className="text-blue-400 hover:text-blue-300">Code Examples</a> for
        implementation details.
      </p>
    </div>
  )
}

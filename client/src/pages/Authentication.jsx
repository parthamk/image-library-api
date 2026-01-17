export default function Authentication() {
  return (
    <div>
      <h1>Authentication</h1>
      
      <p>
        All API requests require authentication using an API key. This guide explains
        how to obtain and use your API key.
      </p>

      <h2>Getting Your API Key</h2>
      <ol className="space-y-3 mb-4 list-decimal list-inside">
        <li>
          <strong>Fork the Repository:</strong> Visit{' '}
          <a
            href="https://github.com/parthamk/image-library-api"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300"
          >
            image-library-api on GitHub
          </a>{' '}
          and click "Fork"
        </li>
        <li>
          <strong>Open an Issue:</strong> In your forked repository, create a new issue
          with the title "I need API key to test it"
        </li>
        <li>
          <strong>Wait for Approval:</strong> The API maintainer will review your request
          and provide you with an API key
        </li>
        <li>
          <strong>Save Your Key:</strong> Store it securely in your environment variables
        </li>
      </ol>

      <h2>Using Your API Key</h2>
      <p>
        Include your API key in the <code className="bg-github-subtle px-2 py-1 rounded">x-api-key</code> header
        of every request:
      </p>

      <div className="code-block">
        <pre><code>{`GET /api/directories
x-api-key: YOUR_API_KEY_HERE`}</code></pre>
      </div>

      <h2>Best Practices</h2>
      <ul className="space-y-2 mb-4">
        <li className="flex items-start gap-2">
          <span className="text-yellow-400 mt-1">⚠</span>
          <span><strong>Never expose your API key:</strong> Don't commit it to public repositories</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-yellow-400 mt-1">⚠</span>
          <span><strong>Use environment variables:</strong> Store your key in .env files on the server side</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-yellow-400 mt-1">⚠</span>
          <span><strong>Backend proxy:</strong> For frontend applications, proxy requests through your backend</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-yellow-400 mt-1">⚠</span>
          <span><strong>Regenerate if compromised:</strong> Request a new key if your current one is exposed</span>
        </li>
      </ul>

      <h2>Example Requests</h2>

      <h3>Using cURL</h3>
      <div className="code-block">
        <pre><code>{`curl -X GET https://api.example.com/api/directories \\
  -H "x-api-key: YOUR_API_KEY_HERE"`}</code></pre>
      </div>

      <h3>Using Fetch (JavaScript)</h3>
      <div className="code-block">
        <pre><code>{`const response = await fetch('https://api.example.com/api/directories', {
  headers: {
    'x-api-key': 'YOUR_API_KEY_HERE'
  }
});
const data = await response.json();`}</code></pre>
      </div>

      <h3>Using Python Requests</h3>
      <div className="code-block">
        <pre><code>{`import requests

headers = {
    'x-api-key': 'YOUR_API_KEY_HERE'
}

response = requests.get(
    'https://api.example.com/api/directories',
    headers=headers
)
data = response.json()`}</code></pre>
      </div>

      <h2>Troubleshooting</h2>
      <div className="bg-github-subtle border border-red-900/30 rounded-lg p-4 mb-4">
        <h3 className="text-red-400 font-semibold mb-2">Error: 403 Forbidden</h3>
        <p>This error means your API key is missing or invalid. Check that:</p>
        <ul className="list-disc list-inside space-y-1 text-sm mt-2">
          <li>The header name is exactly <code>x-api-key</code> (lowercase)</li>
          <li>Your API key is spelled correctly</li>
          <li>You haven't accidentally included extra whitespace</li>
        </ul>
      </div>

      <h2>Contact Support</h2>
      <p>
        If you have issues getting an API key or need help, please{' '}
        <a
          href="https://github.com/parthamk/image-library-api/issues"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300"
        >
          open an issue on GitHub
        </a>.
      </p>
    </div>
  )
}

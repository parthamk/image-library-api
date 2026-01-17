function frontendPage() {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Image Library API</title>
  <style>
    body {
      background: #0d1117;
      color: #c9d1d9;
      font-family: "Fira Code", monospace;
      max-width: 800px;
      margin: 40px auto;
      padding: 20px;
      line-height: 1.6;
    }
    h1, h2, h3 {
      color: #58a6ff;
    }
    a {
      color: #58a6ff;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
    code {
      background: #161b22;
      color: #c9d1d9;
      padding: 3px 6px;
      border-radius: 4px;
    }
    pre {
      background: #161b22;
      padding: 12px;
      border-radius: 6px;
      overflow-x: auto;
    }
    .footer {
      margin-top: 40px;
      border-top: 1px solid #30363d;
      padding-top: 20px;
      font-size: 14px;
      color: #8b949e;
    }
  </style>
</head>
<body>
  <h1>📚 Image Library API</h1>
  <p>
    Welcome to the <strong>Image Library API</strong>.  
    Use this API to explore images categorized into folders and subfolders.  
  </p>

  <h2>🔑 How to Get Access</h2>
  <p>
    Fork the repository and raise an issue with the text:  
  </p>
  <pre><code>I need API key to test it</code></pre>
  <p>
    You will receive your API key after verification.
  </p>

  <h2>🚀 Example Requests</h2>
  <p><strong>Get Directories</strong></p>
  <pre><code>GET /api/directories
Header: x-api-key: YOUR_API_KEY</code></pre>

  <p><strong>Get Images in a Category</strong></p>
  <pre><code>GET /api/images/seasons
Header: x-api-key: YOUR_API_KEY</code></pre>

  <p><strong>Get Images in a Subfolder</strong></p>
  <pre><code>GET /api/images/seasons/autumn
Header: x-api-key: YOUR_API_KEY</code></pre>

  <h2>📌 GitHub</h2>
  <p>
    👉 Follow me on GitHub:  
    <a href="https://github.com/parthamk" target="_blank">github.com/parthamk</a>
  </p>
  <p>
    ⭐ Star &amp; Fork the Repository:  
    <a href="https://github.com/parthamk/image-library-api" target="_blank">
      github.com/parthamk/image-library-api
    </a>
  </p>

  <div class="footer">
    Made with ❤️ by <a href="https://github.com/parthamk">parthamk</a>
  </div>
</body>
</html>
`;
}

module.exports = frontendPage;
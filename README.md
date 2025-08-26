# 🖼️ Image Library API

A simple **Node.js + Express API** hosted on Vercel/Render that serves image library data directly from a GitHub repository.  
This API lets you browse images organized into categories and subfolders, with **counts of subfolders and images**.

---

## 🚀 Purpose

This API was built to:
- Provide a **structured way** to access image libraries stored on GitHub.
- Support **public folders + subfolders** with recursive image lookup.
- Require an **API key** for access (to prevent misuse).
- Offer **developer-friendly routes** for directories and image queries.

---

## 🔑 Getting Access

To request an API key:

1. Fork the repo → [image-library-api](https://github.com/parthamk/image-library-api)  
2. Open a new issue with the text:  

```
I need API key to test it
```

3. You’ll receive your API key after approval.

---

## 📌 API Routes

### 1. **Get all categories (inside `/images/`)**

**Endpoint:**  
```

GET /api/directories

```

**Headers:**  
```

x-api-key: YOUR\_API\_KEY

````

✅ Example Response
```json
{
  "summary": {
    "totalCategories": 2,
    "totalSubfolders": 5
  },
  "categories": [
    { "name": "seasons", "path": "images/seasons", "subfolderCount": 2 },
    { "name": "animals", "path": "images/animals", "subfolderCount": 3 }
  ]
}
````

---

### 2. **Get subfolders + images inside a category**

**Endpoint:**

```
GET /api/images/:category
```

**Headers:**

```
x-api-key: YOUR_API_KEY
```

✅ Example

```
GET /api/images/seasons
```

✅ Example Response

```json
{
  "summary": {
    "totalSubfolders": 1,
    "totalImages": 1
  },
  "currentPath": "images/seasons",
  "subfolders": [
    { "name": "autumn", "path": "images/seasons/autumn", "imageCount": 5 }
  ],
  "images": [
    { "name": "cover.jpg", "path": "images/seasons/cover.jpg", "url": "..." }
  ]
}
```

---

### 3. **Get images inside a subfolder**

**Endpoint:**

```
GET /api/images/:category/:subfolder
```

**Headers:**

```
x-api-key: YOUR_API_KEY
```

✅ Example

```
GET /api/images/seasons/autumn
```

✅ Example Response

```json
{
  "summary": {
    "totalSubfolders": 0,
    "totalImages": 3
  },
  "currentPath": "images/seasons/autumn",
  "subfolders": [],
  "images": [
    { "name": "leaf.jpg", "path": "images/seasons/autumn/leaf.jpg", "url": "..." },
    { "name": "forest.jpg", "path": "images/seasons/autumn/forest.jpg", "url": "..." }
  ]
}
```

---

## 💻 Example Usage

Below is a **switchable code tab section** showing how to use the API in **HTML, React, and Node.js**.

<details>
<summary>🌐 HTML Example</summary>

```html
<!DOCTYPE html>
<html>
<head>
  <title>API Test</title>
</head>
<body>
  <h1>Image Library API Test</h1>
  <pre id="output"></pre>
  <script>
    fetch("https://your-app.vercel.app/api/directories", {
      headers: { "x-api-key": "YOUR_API_KEY" }
    })
    .then(res => res.json())
    .then(data => {
      document.getElementById("output").textContent = JSON.stringify(data, null, 2);
    });
  </script>
</body>
</html>
```

</details>

<details>
<summary>⚛️ React Example</summary>

```jsx
import { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://your-app.vercel.app/api/directories", {
      headers: { "x-api-key": "YOUR_API_KEY" }
    })
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <div style={{ background: "#0d1117", color: "#c9d1d9", padding: "20px" }}>
      <h1>📚 Image Library API</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
```

</details>

<details>
<summary>📜 Node.js Example</summary>

```js
import fetch from "node-fetch";

async function testAPI() {
  const res = await fetch("https://your-app.vercel.app/api/directories", {
    headers: { "x-api-key": "YOUR_API_KEY" }
  });
  const data = await res.json();
  console.log(data);
}

testAPI();
```

</details>

---

## ⭐ Support

* Follow me on GitHub → [@parthamk](https://github.com/parthamk)
* Star & Fork the repo → [image-library-api](https://github.com/parthamk/image-library-api)

---

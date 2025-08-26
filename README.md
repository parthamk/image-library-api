
<pre class="not-prose w-full rounded font-mono text-sm font-extralight"><div class="codeWrapper text-light selection:text-super selection:bg-super/10 bg-offset my-md relative flex flex-col rounded font-mono text-sm font-normal"><div class="translate-y-xs -translate-x-xs bottom-xl mb-xl sticky top-0 flex h-0 items-start justify-end"><button data-testid="copy-code-button" type="button" class="focus-visible:bg-offsetPlus hover:bg-offsetPlus text-quiet  hover:text-foreground dark:hover:bg-offsetPlus font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-out select-none items-center relative group/button font-semimedium justify-center text-center items-center rounded-full cursor-pointer active:scale-[0.97] active:duration-150 active:ease-outExpo origin-center whitespace-nowrap inline-flex text-sm h-8 aspect-square"><div class="flex items-center min-w-0 gap-two justify-center"><div class="flex shrink-0 items-center justify-center size-4"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7999999999999998" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-copy "><path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z"></path><path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1"></path></svg></div></div></button></div><div class="-mt-xl"><div><div data-testid="code-language-indicator" class="text-quiet bg-offsetPlus py-xs px-sm inline-block rounded-br rounded-tl-[3px] font-thin">text</div></div><div class="pr-lg"><span><code><span><span># 🖼️ Image Library API
</span></span><span>
</span><span>A simple **Node.js + Express API** hosted on Vercel/Render that serves image library data directly from a GitHub repository.  
</span><span>This API lets you browse images organized into categories and subfolders, with **counts of subfolders and images**.
</span><span>
</span><span>---
</span><span>
</span><span>## 🚀 Purpose
</span><span>
</span><span>This API was built to:
</span><span>- Provide a **structured way** to access image libraries stored on GitHub.
</span><span>- Support **public folders + subfolders** with recursive image lookup.
</span><span>- Require an **API key** for access (to prevent misuse).
</span><span>- Offer **developer-friendly routes** for directories and image queries.
</span><span>
</span><span>---
</span><span>
</span><span>## 🔑 Getting Access
</span><span>
</span><span>To request an API key:
</span><span>1. Fork the repo: [image-library-api](https://github.com/parthamk/image-library-api)
</span><span>2. Open a new issue with the text:
</span><span>
</span><span></span></code></span></div></div></div></pre>

I need API key to test it

<pre class="not-prose w-full rounded font-mono text-sm font-extralight"><div class="codeWrapper text-light selection:text-super selection:bg-super/10 bg-offset my-md relative flex flex-col rounded font-mono text-sm font-normal"><div class="translate-y-xs -translate-x-xs bottom-xl mb-xl sticky top-0 flex h-0 items-start justify-end"><button data-testid="copy-code-button" type="button" class="focus-visible:bg-offsetPlus hover:bg-offsetPlus text-quiet  hover:text-foreground dark:hover:bg-offsetPlus font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-out select-none items-center relative group/button font-semimedium justify-center text-center items-center rounded-full cursor-pointer active:scale-[0.97] active:duration-150 active:ease-outExpo origin-center whitespace-nowrap inline-flex text-sm h-8 aspect-square"><div class="flex items-center min-w-0 gap-two justify-center"><div class="flex shrink-0 items-center justify-center size-4"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7999999999999998" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-copy "><path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z"></path><path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1"></path></svg></div></div></button></div><div class="-mt-xl"><div><div data-testid="code-language-indicator" class="text-quiet bg-offsetPlus py-xs px-sm inline-block rounded-br rounded-tl-[3px] font-thin">text</div></div><div class="pr-lg"><span><code><span><span>
</span></span><span>3. You’ll receive your API key after approval.
</span><span>
</span><span>---
</span><span>
</span><span>## 📌 API Routes
</span><span>
</span><span>### 1. **Get all categories (inside `/images/`)**
</span><span>
</span><span></span></code></span></div></div></div></pre>

GET /api/directories

Headers:

x-api-key: YOUR_API_KEY

<pre class="not-prose w-full rounded font-mono text-sm font-extralight"><div class="codeWrapper text-light selection:text-super selection:bg-super/10 bg-offset my-md relative flex flex-col rounded font-mono text-sm font-normal"><div class="translate-y-xs -translate-x-xs bottom-xl mb-xl sticky top-0 flex h-0 items-start justify-end"><button data-testid="copy-code-button" type="button" class="focus-visible:bg-offsetPlus hover:bg-offsetPlus text-quiet  hover:text-foreground dark:hover:bg-offsetPlus font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-out select-none items-center relative group/button font-semimedium justify-center text-center items-center rounded-full cursor-pointer active:scale-[0.97] active:duration-150 active:ease-outExpo origin-center whitespace-nowrap inline-flex text-sm h-8 aspect-square"><div class="flex items-center min-w-0 gap-two justify-center"><div class="flex shrink-0 items-center justify-center size-4"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7999999999999998" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-copy "><path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z"></path><path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1"></path></svg></div></div></button></div><div class="-mt-xl"><div><div data-testid="code-language-indicator" class="text-quiet bg-offsetPlus py-xs px-sm inline-block rounded-br rounded-tl-[3px] font-thin">text</div></div><div class="pr-lg"><span><code><span><span>
</span></span><span>✅ Example Response
</span><span></span></code></span></div></div></div></pre>

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

<pre class="not-prose w-full rounded font-mono text-sm font-extralight"><div class="codeWrapper text-light selection:text-super selection:bg-super/10 bg-offset my-md relative flex flex-col rounded font-mono text-sm font-normal"><div class="translate-y-xs -translate-x-xs bottom-xl mb-xl sticky top-0 flex h-0 items-start justify-end"><button data-testid="copy-code-button" type="button" class="focus-visible:bg-offsetPlus hover:bg-offsetPlus text-quiet  hover:text-foreground dark:hover:bg-offsetPlus font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-out select-none items-center relative group/button font-semimedium justify-center text-center items-center rounded-full cursor-pointer active:scale-[0.97] active:duration-150 active:ease-outExpo origin-center whitespace-nowrap inline-flex text-sm h-8 aspect-square"><div class="flex items-center min-w-0 gap-two justify-center"><div class="flex shrink-0 items-center justify-center size-4"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7999999999999998" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-copy "><path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z"></path><path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1"></path></svg></div></div></button></div><div class="-mt-xl"><div><div data-testid="code-language-indicator" class="text-quiet bg-offsetPlus py-xs px-sm inline-block rounded-br rounded-tl-[3px] font-thin">text</div></div><div class="pr-lg"><span><code><span><span>
</span></span><span>---
</span><span>
</span><span>### 2. **Get subfolders + images inside a category**
</span><span>
</span><span></span></code></span></div></div></div></pre>

GET /api/images/:category

Headers:

x-api-key: YOUR_API_KEY

<pre class="not-prose w-full rounded font-mono text-sm font-extralight"><div class="codeWrapper text-light selection:text-super selection:bg-super/10 bg-offset my-md relative flex flex-col rounded font-mono text-sm font-normal"><div class="translate-y-xs -translate-x-xs bottom-xl mb-xl sticky top-0 flex h-0 items-start justify-end"><button data-testid="copy-code-button" type="button" class="focus-visible:bg-offsetPlus hover:bg-offsetPlus text-quiet  hover:text-foreground dark:hover:bg-offsetPlus font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-out select-none items-center relative group/button font-semimedium justify-center text-center items-center rounded-full cursor-pointer active:scale-[0.97] active:duration-150 active:ease-outExpo origin-center whitespace-nowrap inline-flex text-sm h-8 aspect-square"><div class="flex items-center min-w-0 gap-two justify-center"><div class="flex shrink-0 items-center justify-center size-4"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7999999999999998" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-copy "><path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z"></path><path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1"></path></svg></div></div></button></div><div class="-mt-xl"><div><div data-testid="code-language-indicator" class="text-quiet bg-offsetPlus py-xs px-sm inline-block rounded-br rounded-tl-[3px] font-thin">text</div></div><div class="pr-lg"><span><code><span><span>
</span></span><span>✅ Example  
</span><span></span></code></span></div></div></div></pre>

GET /api/images/seasons

<pre class="not-prose w-full rounded font-mono text-sm font-extralight"><div class="codeWrapper text-light selection:text-super selection:bg-super/10 bg-offset my-md relative flex flex-col rounded font-mono text-sm font-normal"><div class="translate-y-xs -translate-x-xs bottom-xl mb-xl sticky top-0 flex h-0 items-start justify-end"><button data-testid="copy-code-button" type="button" class="focus-visible:bg-offsetPlus hover:bg-offsetPlus text-quiet  hover:text-foreground dark:hover:bg-offsetPlus font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-out select-none items-center relative group/button font-semimedium justify-center text-center items-center rounded-full cursor-pointer active:scale-[0.97] active:duration-150 active:ease-outExpo origin-center whitespace-nowrap inline-flex text-sm h-8 aspect-square"><div class="flex items-center min-w-0 gap-two justify-center"><div class="flex shrink-0 items-center justify-center size-4"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7999999999999998" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-copy "><path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z"></path><path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1"></path></svg></div></div></button></div><div class="-mt-xl"><div><div data-testid="code-language-indicator" class="text-quiet bg-offsetPlus py-xs px-sm inline-block rounded-br rounded-tl-[3px] font-thin">text</div></div><div class="pr-lg"><span><code><span><span>
</span></span><span>✅ Example Response
</span><span></span></code></span></div></div></div></pre>

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

<pre class="not-prose w-full rounded font-mono text-sm font-extralight"><div class="codeWrapper text-light selection:text-super selection:bg-super/10 bg-offset my-md relative flex flex-col rounded font-mono text-sm font-normal"><div class="translate-y-xs -translate-x-xs bottom-xl mb-xl sticky top-0 flex h-0 items-start justify-end"><button data-testid="copy-code-button" type="button" class="focus-visible:bg-offsetPlus hover:bg-offsetPlus text-quiet  hover:text-foreground dark:hover:bg-offsetPlus font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-out select-none items-center relative group/button font-semimedium justify-center text-center items-center rounded-full cursor-pointer active:scale-[0.97] active:duration-150 active:ease-outExpo origin-center whitespace-nowrap inline-flex text-sm h-8 aspect-square"><div class="flex items-center min-w-0 gap-two justify-center"><div class="flex shrink-0 items-center justify-center size-4"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7999999999999998" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-copy "><path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z"></path><path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1"></path></svg></div></div></button></div><div class="-mt-xl"><div><div data-testid="code-language-indicator" class="text-quiet bg-offsetPlus py-xs px-sm inline-block rounded-br rounded-tl-[3px] font-thin">text</div></div><div class="pr-lg"><span><code><span><span>
</span></span><span>---
</span><span>
</span><span>### 3. **Get images inside a subfolder**
</span><span>
</span><span></span></code></span></div></div></div></pre>

GET /api/images/:category/:subfolder

Headers:

x-api-key: YOUR_API_KEY

<pre class="not-prose w-full rounded font-mono text-sm font-extralight"><div class="codeWrapper text-light selection:text-super selection:bg-super/10 bg-offset my-md relative flex flex-col rounded font-mono text-sm font-normal"><div class="translate-y-xs -translate-x-xs bottom-xl mb-xl sticky top-0 flex h-0 items-start justify-end"><button data-testid="copy-code-button" type="button" class="focus-visible:bg-offsetPlus hover:bg-offsetPlus text-quiet  hover:text-foreground dark:hover:bg-offsetPlus font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-out select-none items-center relative group/button font-semimedium justify-center text-center items-center rounded-full cursor-pointer active:scale-[0.97] active:duration-150 active:ease-outExpo origin-center whitespace-nowrap inline-flex text-sm h-8 aspect-square"><div class="flex items-center min-w-0 gap-two justify-center"><div class="flex shrink-0 items-center justify-center size-4"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7999999999999998" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-copy "><path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z"></path><path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1"></path></svg></div></div></button></div><div class="-mt-xl"><div><div data-testid="code-language-indicator" class="text-quiet bg-offsetPlus py-xs px-sm inline-block rounded-br rounded-tl-[3px] font-thin">text</div></div><div class="pr-lg"><span><code><span><span>
</span></span><span>✅ Example  
</span><span></span></code></span></div></div></div></pre>

GET /api/images/seasons/autumn

<pre class="not-prose w-full rounded font-mono text-sm font-extralight"><div class="codeWrapper text-light selection:text-super selection:bg-super/10 bg-offset my-md relative flex flex-col rounded font-mono text-sm font-normal"><div class="translate-y-xs -translate-x-xs bottom-xl mb-xl sticky top-0 flex h-0 items-start justify-end"><button data-testid="copy-code-button" type="button" class="focus-visible:bg-offsetPlus hover:bg-offsetPlus text-quiet  hover:text-foreground dark:hover:bg-offsetPlus font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-out select-none items-center relative group/button font-semimedium justify-center text-center items-center rounded-full cursor-pointer active:scale-[0.97] active:duration-150 active:ease-outExpo origin-center whitespace-nowrap inline-flex text-sm h-8 aspect-square"><div class="flex items-center min-w-0 gap-two justify-center"><div class="flex shrink-0 items-center justify-center size-4"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7999999999999998" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-copy "><path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z"></path><path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1"></path></svg></div></div></button></div><div class="-mt-xl"><div><div data-testid="code-language-indicator" class="text-quiet bg-offsetPlus py-xs px-sm inline-block rounded-br rounded-tl-[3px] font-thin">text</div></div><div class="pr-lg"><span><code><span><span>
</span></span><span>✅ Example Response
</span><span></span></code></span></div></div></div></pre>

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

<pre class="not-prose w-full rounded font-mono text-sm font-extralight"><div class="codeWrapper text-light selection:text-super selection:bg-super/10 bg-offset my-md relative flex flex-col rounded font-mono text-sm font-normal"><div class="translate-y-xs -translate-x-xs bottom-xl mb-xl sticky top-0 flex h-0 items-start justify-end"><button data-testid="copy-code-button" type="button" class="focus-visible:bg-offsetPlus hover:bg-offsetPlus text-quiet  hover:text-foreground dark:hover:bg-offsetPlus font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-out select-none items-center relative group/button font-semimedium justify-center text-center items-center rounded-full cursor-pointer active:scale-[0.97] active:duration-150 active:ease-outExpo origin-center whitespace-nowrap inline-flex text-sm h-8 aspect-square"><div class="flex items-center min-w-0 gap-two justify-center"><div class="flex shrink-0 items-center justify-center size-4"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7999999999999998" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-copy "><path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z"></path><path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1"></path></svg></div></div></button></div><div class="-mt-xl"><div><div data-testid="code-language-indicator" class="text-quiet bg-offsetPlus py-xs px-sm inline-block rounded-br rounded-tl-[3px] font-thin">text</div></div><div class="pr-lg"><span><code><span><span>
</span></span><span>---
</span><span>
</span><span>## 💻 Example Usage
</span><span>
</span><span>Below is a **switchable code tab section** showing how to use the API in **HTML, React, and Node.js**.
</span><span>
</span><span><details>
</span><span><summary>🌐 HTML Example</summary>
</span><span>
</span><span></span></code></span></div></div></div></pre>

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
<pre class="not-prose w-full rounded font-mono text-sm font-extralight"><div class="codeWrapper text-light selection:text-super selection:bg-super/10 bg-offset my-md relative flex flex-col rounded font-mono text-sm font-normal"><div class="translate-y-xs -translate-x-xs bottom-xl mb-xl sticky top-0 flex h-0 items-start justify-end"><button data-testid="copy-code-button" type="button" class="focus-visible:bg-offsetPlus hover:bg-offsetPlus text-quiet  hover:text-foreground dark:hover:bg-offsetPlus font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-out select-none items-center relative group/button font-semimedium justify-center text-center items-center rounded-full cursor-pointer active:scale-[0.97] active:duration-150 active:ease-outExpo origin-center whitespace-nowrap inline-flex text-sm h-8 aspect-square"><div class="flex items-center min-w-0 gap-two justify-center"><div class="flex shrink-0 items-center justify-center size-4"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7999999999999998" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-copy "><path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z"></path><path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1"></path></svg></div></div></button></div><div class="-mt-xl"><div><div data-testid="code-language-indicator" class="text-quiet bg-offsetPlus py-xs px-sm inline-block rounded-br rounded-tl-[3px] font-thin">text</div></div><div class="pr-lg"><span><code><span><span>import { useEffect, useState } from "react";
</span></span><span>
</span><span>export default function App() {
</span><span>  const [data, setData] = useState(null);
</span><span>
</span><span>  useEffect(() => {
</span><span>    fetch("https://your-app.vercel.app/api/directories", {
</span><span>      headers: { "x-api-key": "YOUR_API_KEY" }
</span><span>    })
</span><span>      .then(res => res.json())
</span><span>      .then(setData);
</span><span>  }, []);
</span><span>
</span><span>  return (
</span><span>    <div style={{ background: "#0d1117", color: "#c9d1d9", padding: "20px" }}>
</span><span>      <h1>📚 Image Library API</h1>
</span><span>      <pre>{JSON.stringify(data, null, 2)}</pre>
</span><span>    </div>
</span><span>  );
</span><span>}
</span><span></span></code></span></div></div></div></pre>

</details>
<details>
<summary>📜 Node.js Example</summary>
<pre class="not-prose w-full rounded font-mono text-sm font-extralight"><div class="codeWrapper text-light selection:text-super selection:bg-super/10 bg-offset my-md relative flex flex-col rounded font-mono text-sm font-normal"><div class="translate-y-xs -translate-x-xs bottom-xl mb-xl sticky top-0 flex h-0 items-start justify-end"><button data-testid="copy-code-button" type="button" class="focus-visible:bg-offsetPlus hover:bg-offsetPlus text-quiet  hover:text-foreground dark:hover:bg-offsetPlus font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-out select-none items-center relative group/button font-semimedium justify-center text-center items-center rounded-full cursor-pointer active:scale-[0.97] active:duration-150 active:ease-outExpo origin-center whitespace-nowrap inline-flex text-sm h-8 aspect-square"><div class="flex items-center min-w-0 gap-two justify-center"><div class="flex shrink-0 items-center justify-center size-4"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7999999999999998" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-copy "><path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z"></path><path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1"></path></svg></div></div></button></div><div class="-mt-xl"><div><div data-testid="code-language-indicator" class="text-quiet bg-offsetPlus py-xs px-sm inline-block rounded-br rounded-tl-[3px] font-thin">text</div></div><div class="pr-lg"><span><code><span><span>import fetch from "node-fetch";
</span></span><span>
</span><span>async function testAPI() {
</span><span>  const res = await fetch("https://your-app.vercel.app/api/directories", {
</span><span>    headers: { "x-api-key": "YOUR_API_KEY" }
</span><span>  });
</span><span>  const data = await res.json();
</span><span>  console.log(data);
</span><span>}
</span><span>
</span><span>testAPI();
</span><span></span></code></span></div></div></div></pre>

</details>
---

## ⭐ Support

* Follow me on GitHub → [@parthamk](https://github.com/parthamk)
* Star & Fork the repo → [image-library-api](https://github.com/parthamk/image-library-api)

---

# Image Library API - Server

Backend API built with Node.js and Express. Serves image library data from GitHub.

## Setup

```bash
npm install
npm run dev
```

## Environment Variables

Create a `.env` file:

```
OWNER=your-github-username
REPO=image-library-api
API_KEY=your-api-key
PORT=5000
```

## Endpoints

- `GET /api/directories` - Get all categories
- `GET /api/images/:category` - Get images in category
- `GET /api/images/:category/:subfolder` - Get images in subfolder

All endpoints require `x-api-key` header.

## Deployment

Deploy to Vercel:

```bash
vercel --prod
```

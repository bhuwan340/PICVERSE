# Picverse

Picverse is a full-stack image-sharing application. Users can create posts with an image and caption, then browse the posts in a feed.

## Features

- Create an image post with a caption
- Upload images to ImageKit
- Save post details in MongoDB
- View posts in the feed

## Technology

- **Frontend:** React, Vite, React Router, Axios
- **Backend:** Node.js, Express, Multer
- **Database:** MongoDB with Mongoose
- **Image storage:** ImageKit

## Project structure

```text
PICVERSE/
├── BACKEND/
│   ├── src/
│   │   ├── db/              # MongoDB connection
│   │   ├── models/          # Mongoose models
│   │   └── services/        # ImageKit upload service
│   └── server.js            # Backend entry point
└── FRONTEND/
    └── src/
        ├── pages/           # Feed and create-post pages
        └── App.jsx          # Frontend routes
```

## Prerequisites

- Node.js and npm
- A MongoDB connection string
- An ImageKit account and private API key

## Getting started

### 1. Configure the backend

Open a terminal in `BACKEND` and install the dependencies:

```bash
cd BACKEND
npm install
```

Create a `BACKEND/.env` file with your credentials:

```env
MONGO_URI=your_mongodb_connection_string
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
```

Keep this file private and do not commit real credentials.

### 2. Start the backend

From the `BACKEND` directory, run:

```bash
node server.js
```

The API listens on `http://localhost:3000`.

### 3. Start the frontend

In a second terminal, install dependencies and start the development server:

```bash
cd FRONTEND
npm install
npm run dev
```

Open the local URL printed by Vite in your browser. The app's routes are:

- `/feed` — view posts
- `/create-post` — submit an image and caption

## API

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/posts` | Returns the posts in the feed |
| `POST` | `/create-post` | Uploads an image and creates a post |

`POST /create-post` expects `multipart/form-data` with:

| Field | Type | Description |
| --- | --- | --- |
| `image` | File | Image to upload |
| `caption` | String | Post caption |

## Available frontend scripts

Run these commands from `FRONTEND`:

```bash
npm run dev      # Start the Vite development server
npm run build    # Build the frontend for production
npm run preview  # Preview the production build locally
npm run lint     # Run ESLint
```
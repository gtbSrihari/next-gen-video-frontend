# Next-Gen Video Frontend

A Next.js-based video sharing and messaging app with authentication, recording, and chat features, styled with Tailwind CSS and hosted on Vercel.

## Features
- User authentication with login/logout
- Video recording via MediaRecorder API
- Video feed grid on homepage
- Mock chat interface
- Protected routes
- Responsive design

## Tech Stack
- Next.js 14
- React
- TypeScript
- Tailwind CSS v3
- Vercel

## Prerequisites
- Node.js 18.x+
- npm 8.x+

## Installation
```bash
git clone https://github.com/gtbSrihari/next-gen-video-frontend.git
cd next-gen-video-frontend
npm install
npm run dev
```
Open `http://localhost:3000`.

## Usage
- Login at `/login` (auto-fills `user@example.com`/`password123` on focus).
- Access Home (`/`), Record (`/record`), Chat (`/chat`).
- Logout via nav bar.

## Structure
- `src/app/`: Pages (e.g., `login`, `record`, `chat`, `layout`).
- `src/components/`: Components (e.g., `Nav`, `ProtectedRoute`).
- `src/context/`: `AuthContext` for state.
- `src/app/globals.css`: Tailwind styles.

## Deployment
1. Push to GitHub.
2. Import to [Vercel](https://vercel.com) and deploy.
3. Access via Vercel URL.

## Contributing
Fork, branch, and submit a pull request.

## License
MIT
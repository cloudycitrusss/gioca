# Gioca Soccer Academy

React + Firebase web app for Gioca Soccer Academy.

## Stack

- **Frontend:** React 19, TypeScript, Vite, React Router
- **Backend / hosting:** Firebase (Auth, Firestore, Storage, Hosting)

## Getting started

```bash
npm install
cp .env.example .env.local   # then add your Firebase web app keys
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Project structure

```
src/
  components/layout/   # Navbar, Footer, page shell
  contexts/            # AuthContext (Firebase Auth)
  firebase/            # Firebase app init
  pages/               # Home, Programs, About, Contact, Tryouts, Login
  types/               # Shared TypeScript types
```

## Firebase setup

1. Use project **giocasocceracademy-a20cc** (already linked in `.firebaserc`).
2. In the [Firebase console](https://console.firebase.google.com/), open the web app config and copy values into `.env.local`.
3. Enable **Authentication → Email/Password** if you need login.
4. Create a **Firestore** database (and Storage if you need media uploads).

The UI runs without Firebase keys; login stays disabled until `.env.local` is filled in.

## Deploy to Firebase Hosting

Requires the Firebase CLI (`firebase-tools`) and login:

```bash
firebase login
npm run deploy
```

That builds the Vite app into `dist/` and deploys Hosting only.

- Live URL (default): `https://giocasocceracademy-a20cc.web.app`
- Also: `https://giocasocceracademy-a20cc.firebaseapp.com`

Custom domain (optional): Firebase console → Hosting → Add custom domain.

## Scripts

| Command               | Description                         |
| --------------------- | ----------------------------------- |
| `npm run dev`         | Start local dev server              |
| `npm run build`       | Production build                    |
| `npm run preview`     | Preview production build locally    |
| `npm run deploy`      | Build + deploy to Firebase Hosting  |
| `npm run deploy:hosting` | Deploy existing `dist/` to Hosting |
| `npm run lint`        | Run oxlint                          |

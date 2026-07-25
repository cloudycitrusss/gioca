# Gioca Soccer Academy

React + Firebase skeleton for the Gioca Soccer Academy web app.

## Stack

- **Frontend:** React 19, TypeScript, Vite, React Router
- **Backend:** Firebase (Auth, Firestore, Storage) — configure via env

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
  pages/               # Home, Programs, About, Contact, Login
  types/               # Shared TypeScript types
```

## Firebase setup

1. Create a project in the [Firebase console](https://console.firebase.google.com/).
2. Add a **Web** app and copy the config values into `.env.local`.
3. Enable **Authentication → Email/Password**.
4. Create a **Firestore** database (and Storage if you need media uploads).

The UI runs without Firebase keys; login stays disabled until `.env.local` is filled in.

## Scripts

| Command        | Description              |
| -------------- | ------------------------ |
| `npm run dev`  | Start local dev server   |
| `npm run build`| Production build         |
| `npm run preview` | Preview production build |
| `npm run lint` | Run oxlint               |

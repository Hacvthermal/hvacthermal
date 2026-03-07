# Deploy HVACThermal to GitHub and Vercel

Follow these steps to push the project to GitHub and deploy on Vercel.

---

## Prerequisites

- **Git** – If you don’t have it: [Download Git for Windows](https://git-scm.com/download/win), install it, then **restart Cursor** (or your terminal) so `git` is in your PATH.
- **GitHub account** – [Sign up](https://github.com/join) if needed.
- **Vercel account** – [Sign up](https://vercel.com/signup) (you can use “Continue with GitHub”).

---

## Part 1: Push to GitHub

### Step 1: Open a terminal in the project

In Cursor, open the integrated terminal (**Terminal → New Terminal** or `` Ctrl+` ``) and ensure you’re in the project folder:

```powershell
cd C:\Users\z0040n3s\hvacthermal
```

### Step 2: Initialize Git and create the first commit

Run these commands one at a time:

```powershell
git init
git add .
git status
```

Check that the listed files look correct (you should see `app/`, `package.json`, etc., and **not** `node_modules` or `.next`). Then:

```powershell
git commit -m "Initial commit: HVACThermal calculator site"
```

### Step 3: Create the repository on GitHub

1. Go to [https://github.com/new](https://github.com/new).
2. **Repository name:** `hvacthermal` (or any name you prefer).
3. **Description (optional):** e.g. `Global HVAC calculators – BTU, boiler size, heat pump size`.
4. Choose **Public**.
5. **Do not** check “Add a README”, “Add .gitignore”, or “Choose a license” (the project already has these).
6. Click **Create repository**.

### Step 4: Connect your local repo and push

GitHub will show “Quick setup” with a URL. Use it in your terminal (replace `YOUR_USERNAME` with your GitHub username):

```powershell
git remote add origin https://github.com/YOUR_USERNAME/hvacthermal.git
git branch -M main
git push -u origin main
```

If GitHub shows an SSH URL like `git@github.com:YOUR_USERNAME/hvacthermal.git`, you can use that instead:

```powershell
git remote add origin git@github.com:YOUR_USERNAME/hvacthermal.git
git branch -M main
git push -u origin main
```

- You may be asked to sign in (browser or credential manager).
- If you use 2FA, you may need a **Personal Access Token** as the password: [GitHub → Settings → Developer settings → Personal access tokens](https://github.com/settings/tokens).

After a successful push, your code will be on GitHub.

---

## Part 2: Deploy on Vercel

### Step 1: Import the project

1. Go to [https://vercel.com](https://vercel.com) and sign in (preferably with **Continue with GitHub**).
2. Click **Add New… → Project**.
3. Find **hvacthermal** in the list of repositories and click **Import**.

### Step 2: Configure the project

- **Framework Preset:** Vercel should detect **Next.js**.
- **Root Directory:** Leave as `.` (project root).
- **Build Command:** `npm run build` (default).
- **Output Directory:** leave default (e.g. `.next`).
- **Install Command:** `npm install` (default).

Click **Deploy**.

### Step 3: Wait for the build

Vercel will clone the repo, run `npm install` and `npm run build`, and deploy. When it finishes, you’ll get a URL like `https://hvacthermal-xxxx.vercel.app`.

### Step 4: Optional – custom domain

In the Vercel project dashboard: **Settings → Domains** to add a custom domain (e.g. `hvacthermal.com`).

---

## Updating the site later

After you change code:

```powershell
cd C:\Users\z0040n3s\hvacthermal
git add .
git commit -m "Describe your changes"
git push
```

Vercel will automatically build and deploy when you push to `main`.

---

## Quick reference – commands summary

| Step              | Commands |
|-------------------|----------|
| Init & first commit | `git init` → `git add .` → `git commit -m "Initial commit: HVACThermal calculator site"` |
| Add remote        | `git remote add origin https://github.com/YOUR_USERNAME/hvacthermal.git` |
| Push              | `git branch -M main` → `git push -u origin main` |

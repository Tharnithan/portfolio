# 🚀 Portfolio Deployment Guide

## Overview
This guide will help you deploy both your **frontend** (HTML/CSS/JS) and **backend** (Node.js server) to make your portfolio accessible online.

---

## 📋 Prerequisites

Before deploying, make sure:
- ✅ Contact form works locally
- ✅ Backend server runs without errors
- ✅ Gmail App Password is configured in `.env`
- ✅ All files are saved

---

## 🎯 Recommended Deployment Strategy

### Frontend: **GitHub Pages** (Free)
### Backend: **Render.com** (Free tier available)

---

## 🌐 Option 1: Deploy Frontend to GitHub Pages (Recommended - FREE)

### Step 1: Create a GitHub Repository

1. **Go to:** https://github.com/new
2. **Repository name:** `portfolio` or `tharnithan-portfolio`
3. **Description:** "Professional portfolio showcasing my software development and creative work"
4. **Make it:** Public
5. **Don't initialize** with README (we already have files)
6. **Click:** Create repository

### Step 2: Push Your Code to GitHub

Open PowerShell in your portfolio folder and run:

```powershell
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio deployment"

# Add remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select: `main` branch and `/root` folder
4. Click **Save**
5. Wait 2-3 minutes
6. Your site will be live at: `https://YOUR_USERNAME.github.io/portfolio/`

### Step 4: Update API URL for Production

After deploying the backend (see below), update `js/script.js`:

```javascript
// Change this line (around line 221):
const API_URL = 'http://localhost:3000/api/contact';

// To your deployed backend URL:
const API_URL = 'https://your-backend-app.onrender.com/api/contact';
```

---

## ⚙️ Option 2: Deploy Backend to Render.com (FREE)

### Step 1: Sign Up for Render

1. **Go to:** https://render.com
2. **Sign up** with GitHub account (recommended)
3. Click **"New +"** → **"Web Service"**

### Step 2: Connect Your Repository

1. **Select** your portfolio repository from GitHub
2. If not connected, click **"Connect account"** and authorize Render

### Step 3: Configure the Web Service

Fill in these settings:

- **Name:** `portfolio-backend` (or any name you like)
- **Region:** Choose closest to you (Singapore for Sri Lanka)
- **Branch:** `main`
- **Root Directory:** Leave empty
- **Runtime:** `Node`
- **Build Command:** `npm install`
- **Start Command:** `node server.js`
- **Instance Type:** `Free`

### Step 4: Add Environment Variables

Click **"Advanced"** → **"Add Environment Variable"**

Add these:
```
EMAIL_USER = tharni375@email.com
EMAIL_PASS = ldldfopkblsgwsvd
PORT = 10000
```

**Note:** Render uses port 10000 by default for free tier.

### Step 5: Deploy

1. Click **"Create Web Service"**
2. Wait 3-5 minutes for deployment
3. You'll get a URL like: `https://portfolio-backend.onrender.com`

### Step 6: Update Frontend API URL

Update `js/script.js` with your Render backend URL:

```javascript
const API_URL = 'https://portfolio-backend.onrender.com/api/contact';
```

Then commit and push:
```powershell
git add js/script.js
git commit -m "Update API URL for production"
git push
```

---

## 🔧 Option 3: Deploy to Vercel (Alternative - FREE)

### Frontend + Backend Together

1. **Install Vercel CLI:**
```powershell
npm install -g vercel
```

2. **Login:**
```powershell
vercel login
```

3. **Deploy:**
```powershell
vercel
```

4. **Add Environment Variables:**
   - Go to Vercel Dashboard → Your Project → Settings → Environment Variables
   - Add: `EMAIL_USER`, `EMAIL_PASS`

5. **Redeploy:**
```powershell
vercel --prod
```

---

## 🔒 Security Checklist Before Deploying

### ✅ Make sure `.gitignore` includes:

```
node_modules/
.env
.DS_Store
```

### ✅ Verify `.env` is NOT committed:

```powershell
git status
```

If you see `.env` listed, remove it:
```powershell
git rm --cached .env
git commit -m "Remove .env from tracking"
```

---

## 🧪 Testing Your Deployed Portfolio

### 1. Test Frontend:
- Visit: `https://YOUR_USERNAME.github.io/portfolio/`
- Check all sections load correctly
- Test navigation
- Check all links work

### 2. Test Backend API:
```powershell
# Test health endpoint
curl https://your-backend-app.onrender.com/api/health
```

Should return:
```json
{"status":"OK","message":"Portfolio backend is running!"}
```

### 3. Test Contact Form:
- Fill out the form on your live site
- Check if you receive email at `tharni375@email.com`
- Check if sender receives auto-reply

---

## 📊 Deployment Summary

| Component | Platform | Cost | URL Format |
|-----------|----------|------|------------|
| Frontend | GitHub Pages | FREE | `username.github.io/portfolio` |
| Backend | Render.com | FREE | `app-name.onrender.com` |
| Alternative | Vercel | FREE | `project-name.vercel.app` |

---

## 🐛 Common Issues & Solutions

### Issue: "CORS Error" in Browser Console
**Solution:** Update `server.js` CORS settings:
```javascript
app.use(cors({
    origin: 'https://YOUR_USERNAME.github.io'
}));
```

### Issue: Backend Sleeps on Render Free Tier
**Solution:** 
- Free tier sleeps after 15 minutes of inactivity
- First request will be slow (30 seconds)
- Consider upgrading to paid tier ($7/month) for always-on

### Issue: Environment Variables Not Working
**Solution:**
- Double-check spelling in Render dashboard
- Redeploy after adding variables
- Check logs in Render dashboard

---

## 📈 Next Steps After Deployment

1. ✅ **Custom Domain** (Optional)
   - Buy domain from Namecheap/GoDaddy
   - Connect to GitHub Pages or Vercel

2. ✅ **Analytics**
   - Add Google Analytics
   - Track visitor statistics

3. ✅ **SEO Optimization**
   - Add meta descriptions
   - Submit to Google Search Console

4. ✅ **Performance**
   - Enable Cloudflare CDN
   - Optimize images

---

## 🆘 Need Help?

If you encounter issues:
1. Check Render/Vercel logs
2. Check browser console (F12)
3. Test backend health endpoint
4. Verify environment variables

---

## 🎉 Congratulations!

Once deployed, your portfolio will be:
- ✅ Accessible worldwide 24/7
- ✅ Professional and impressive
- ✅ Fully functional contact form
- ✅ Fast and secure

Share your portfolio URL on:
- LinkedIn
- GitHub profile
- Resume/CV
- Social media

---

**Your Portfolio URLs:**
- Frontend: `https://YOUR_USERNAME.github.io/portfolio/`
- Backend: `https://your-app.onrender.com`

Good luck! 🚀

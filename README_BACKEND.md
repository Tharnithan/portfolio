# Portfolio Backend Setup Guide

## 📋 Overview
This is the backend server for your portfolio website's contact form. It handles email submissions using Node.js, Express, and Nodemailer.

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm (Node Package Manager)
- Gmail account for sending emails

### Installation Steps

1. **Open Terminal in Portfolio Folder**
   ```powershell
   cd "c:\Users\hp\Desktop\My CV (Tharani)\portfolio"
   ```

2. **Install Dependencies**
   ```powershell
   npm install
   ```

3. **Configure Email Settings**
   - Open `.env` file
   - Replace `your-gmail-app-password-here` with your actual Gmail App Password

### How to Get Gmail App Password

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable **2-Step Verification** (if not already enabled)
3. Search for "App Passwords" in the search bar
4. Click on "App Passwords"
5. Select:
   - App: **Mail**
   - Device: **Other (Custom name)** → Enter "Portfolio Backend"
6. Click **Generate**
7. Copy the 16-character password (format: `xxxx xxxx xxxx xxxx`)
8. Paste it in `.env` file as `EMAIL_PASS` (remove spaces)

Example `.env`:
```env
EMAIL_USER=tharni375@email.com
EMAIL_PASS=abcdabcdabcdabcd
PORT=3000
```

### Running the Backend

**For Development (with auto-reload):**
```powershell
npm run dev
```

**For Production:**
```powershell
npm start
```

You should see:
```
✅ Server running on port 3000
🌐 API endpoint: http://localhost:3000/api/contact
```

## 🧪 Testing the Backend

### Test with Browser
Open: http://localhost:3000/api/health

You should see:
```json
{
  "status": "OK",
  "message": "Portfolio backend is running!"
}
```

### Test Contact Form
1. Make sure backend is running
2. Open `index.html` in browser
3. Fill out the contact form
4. Click "Send Message"
5. Check your email (tharni375@email.com) for the message
6. The sender should receive an auto-reply

## 📁 File Structure

```
portfolio/
├── server.js           # Main backend server
├── package.json        # Node.js dependencies
├── .env               # Environment variables (KEEP SECRET!)
├── .env.example       # Example environment file
├── js/
│   └── script.js      # Frontend JavaScript (updated)
├── index.html         # Portfolio website
└── README_BACKEND.md  # This file
```

## 🔒 Security Notes

⚠️ **IMPORTANT:**
- Never commit `.env` file to GitHub
- Keep your App Password secret
- The `.env` file contains sensitive information

If deploying to GitHub:
1. Add `.env` to `.gitignore`
2. Only commit `.env.example`
3. Set environment variables in your hosting platform

## 🌐 Deploying to Production

### Option 1: Heroku
1. Create Heroku account
2. Install Heroku CLI
3. Run:
   ```bash
   heroku create your-portfolio-backend
   heroku config:set EMAIL_USER=tharni375@email.com
   heroku config:set EMAIL_PASS=your-app-password
   git push heroku main
   ```
4. Update `API_URL` in `js/script.js` to your Heroku URL

### Option 2: Render.com (Recommended - Free Tier)
1. Create account at [Render.com](https://render.com)
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Set environment variables in dashboard
5. Deploy
6. Update `API_URL` in `js/script.js`

### Option 3: Vercel
1. Create account at [Vercel.com](https://vercel.com)
2. Install Vercel CLI: `npm i -g vercel`
3. Run: `vercel`
4. Set environment variables in Vercel dashboard
5. Update `API_URL` in `js/script.js`

## 🐛 Troubleshooting

### "Error: Invalid login"
- Check if your Gmail App Password is correct
- Make sure 2-Step Verification is enabled
- Try generating a new App Password

### "Port 3000 already in use"
- Change PORT in `.env` to another number (e.g., 3001)
- Or stop the process using port 3000

### Contact form not sending
- Check if backend server is running
- Open browser console (F12) for error messages
- Verify `API_URL` in `script.js` matches your backend URL
- Check CORS settings if backend and frontend are on different domains

## 📧 Contact

If you have issues, contact:
- **Email**: tharni375@email.com
- **Phone**: +94 76 661 5954

## ✅ Features

✨ **Email Features:**
- ✅ Professional HTML email template
- ✅ Auto-reply to message sender
- ✅ Email validation
- ✅ Beautiful formatted emails
- ✅ Timestamp on emails
- ✅ Reply-to functionality

🔐 **Security:**
- ✅ CORS protection
- ✅ Input validation
- ✅ Environment variables
- ✅ Error handling

## 📝 Next Steps

1. ✅ Install dependencies: `npm install`
2. ✅ Configure `.env` with Gmail App Password
3. ✅ Run backend: `npm start`
4. ✅ Test contact form
5. ⬜ Deploy to hosting platform
6. ⬜ Update API_URL in production

Good luck with your portfolio! 🚀

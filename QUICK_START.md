# 🚀 QUICK START - Portfolio Setup

## ⚡ 5-Minute Setup Guide

Follow these steps to get your portfolio up and running quickly!

---

## ✅ STEP 1: Verify File Structure (30 seconds)

Your portfolio folder should look like this:

```
portfolio/
├── index.html
├── README.md
├── BLUEPRINT.md
├── IMAGE_GUIDE.md
├── QUICK_START.md (this file)
├── css/
│   └── style.css
├── js/
│   └── script.js
└── images/
    ├── profile.jpg (ADD THIS)
    ├── about.jpg (ADD THIS)
    └── portfolio/
        ├── project1.jpg (ADD THIS)
        ├── project2.jpg (ADD THIS)
        ├── project3.jpg (ADD THIS)
        ├── project4.jpg (ADD THIS)
        ├── project5.jpg (ADD THIS)
        └── project6.jpg (ADD THIS)
```

**Action:** Create the `images` and `images/portfolio` folders if they don't exist.

---

## 🖼️ STEP 2: Add Images (2 minutes)

### Option A: Use Your Own Images
1. Add your profile photo as `images/profile.jpg`
2. Add your about photo as `images/about.jpg`
3. Add 6 portfolio project images as `images/portfolio/project1.jpg` through `project6.jpg`

### Option B: Use Temporary Placeholders
If you don't have images ready, temporarily edit `index.html`:

Find these lines and replace image sources:
```html
<!-- Line ~62 - Hero image -->
<img src="https://via.placeholder.com/600x600" alt="Tharnithan Tharmakulasingam">

<!-- Line ~115 - About image -->
<img src="https://via.placeholder.com/500x700" alt="About Tharnithan">

<!-- Line ~250+ - Portfolio images -->
<img src="https://via.placeholder.com/800x600" alt="Project 1">
```

---

## 🔗 STEP 3: Update Social Media Links (1 minute)

Open `index.html` and find & replace these (3 locations):

**Search for:** `https://instagram.com/yourprofile`  
**Replace with:** Your actual Instagram URL

**Search for:** `https://tiktok.com/@yourprofile`  
**Replace with:** Your actual TikTok URL

**Search for:** `https://facebook.com/yourprofile`  
**Replace with:** Your actual Facebook URL (or remove if not needed)

**Shortcut:** Use Ctrl+H (Windows) or Cmd+H (Mac) to find and replace

---

## 📧 STEP 4: Verify Contact Information (30 seconds)

Confirm these are correct in `index.html`:

- **Email:** tharni375@email.com ✓
- **Phone:** +94 76 661 5954 ✓
- **Location:** Point Pedro, Sri Lanka ✓

If anything needs changing, search for the value in index.html and update it.

---

## 🧪 STEP 5: Test Locally (1 minute)

1. **Open index.html** in your web browser (double-click the file)
2. **Check these:**
   - [ ] Page loads without errors
   - [ ] All sections are visible
   - [ ] Images show (or placeholders if used)
   - [ ] Navigation links work
   - [ ] Animations play smoothly
   - [ ] Contact form fields work

3. **Test Responsive Design:**
   - Press F12 to open Developer Tools
   - Click device toggle icon (or Ctrl+Shift+M)
   - Test on different screen sizes

---

## 🎨 STEP 6: Customize (Optional - 5 minutes)

### Change Colors
Open `css/style.css` and edit lines 8-14:

```css
:root {
    --primary-color: #667eea;      /* Change this to your brand color */
    --secondary-color: #764ba2;
    --accent-color: #f093fb;
}
```

**Color Picker Tool:** https://htmlcolorcodes.com/

### Update Skills Percentages
Open `index.html`, find Skills section, update these:

```html
<div class="skill-progress" data-progress="95"></div>  <!-- Change 95 to your level -->
```

### Modify Text Content
Simply find the text you want to change in `index.html` and edit it!

---

## 🌐 STEP 7: Deploy Your Portfolio (5 minutes)

### Option A: GitHub Pages (Recommended - FREE)

1. **Create GitHub Account** (if you don't have one): https://github.com/signup

2. **Create New Repository:**
   - Click "+" → "New repository"
   - Name: `portfolio` or `your-name.github.io`
   - Public
   - Click "Create repository"

3. **Upload Files:**
   - Click "uploading an existing file"
   - Drag all your portfolio files
   - Click "Commit changes"

4. **Enable GitHub Pages:**
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: main → / (root)
   - Save

5. **Your site is live!** 🎉
   - URL: `https://yourusername.github.io/portfolio/`
   - Wait 2-3 minutes for deployment

### Option B: Netlify (Alternative - FREE)

1. Go to https://www.netlify.com/
2. Sign up with GitHub
3. Click "Add new site" → "Deploy manually"
4. Drag your entire portfolio folder
5. Your site is live instantly!

### Option C: Vercel (Alternative - FREE)

1. Go to https://vercel.com/
2. Sign up with GitHub
3. Click "Add New Project"
4. Import your portfolio repository
5. Deploy!

---

## 📝 POST-LAUNCH CHECKLIST

After deploying, verify:

- [ ] Live site loads correctly
- [ ] All images show properly
- [ ] Links work on live site
- [ ] Mobile version works
- [ ] Contact form displays
- [ ] Social media links go to right profiles
- [ ] No console errors (F12 → Console tab)

---

## 🎯 WHAT'S NEXT?

### Immediate Actions:
1. **Share your portfolio!**
   - Add to your CV
   - Update LinkedIn
   - Share on social media

2. **Get feedback**
   - Ask friends/colleagues
   - Test with different devices
   - Make improvements

### Future Improvements:
1. **Connect Contact Form**
   - Use EmailJS: https://www.emailjs.com/
   - Or Formspree: https://formspree.io/

2. **Add Google Analytics**
   - Track visitors
   - Understand audience
   - Improve content

3. **SEO Optimization**
   - Add meta descriptions
   - Submit to Google Search Console
   - Create sitemap

4. **Custom Domain** (Optional)
   - Buy domain (Namecheap, GoDaddy)
   - Connect to GitHub Pages/Netlify
   - Professional email: yourname@yourdomain.com

---

## 🆘 TROUBLESHOOTING

### Images Not Showing?
```
✓ Check filename spelling (case-sensitive)
✓ Verify file is in correct folder
✓ Check file extension (.jpg not .jpeg)
✓ Try refreshing with Ctrl+F5
```

### Site Not Deploying?
```
✓ Check all files uploaded
✓ Verify index.html is in root folder
✓ Wait 2-3 minutes for GitHub Pages
✓ Check deployment status in Settings
```

### Animations Not Working?
```
✓ Check browser console for errors (F12)
✓ Verify internet connection (for CDN libraries)
✓ Clear browser cache
✓ Try different browser
```

### Contact Form Not Sending?
```
✓ Current version shows messages only
✓ Integrate EmailJS for real functionality
✓ Follow EmailJS setup guide in README.md
```

---

## 💡 PRO TIPS

1. **Before Job Applications:**
   - Update portfolio with latest work
   - Check all links work
   - Test on mobile device
   - Ensure fast loading

2. **Regular Maintenance:**
   - Update monthly with new projects
   - Keep skills section current
   - Refresh experience section
   - Check for broken links

3. **Stand Out:**
   - Add case studies for projects
   - Include testimonials
   - Show process, not just results
   - Keep it current and active

---

## 📞 NEED HELP?

### Resources:
- **Full Documentation:** See README.md
- **Detailed Blueprint:** See BLUEPRINT.md
- **Image Guide:** See IMAGE_GUIDE.md

### Learning Resources:
- HTML/CSS: https://www.w3schools.com/
- JavaScript: https://javascript.info/
- Web Design: https://www.youtube.com/c/DesignCourse

### Community Support:
- Stack Overflow: https://stackoverflow.com/
- GitHub Discussions
- Web Dev Discord servers

---

## 🎉 CONGRATULATIONS!

You now have a professional portfolio website ready to showcase your skills as a Social Media Marketer & Content Creator!

**Your portfolio includes:**
✅ Responsive design (works on all devices)  
✅ Modern animations and effects  
✅ Professional layout  
✅ Optimized performance  
✅ Easy to maintain  

**Next step:** Start applying for jobs and sharing your portfolio! 🚀

---

**Made with ❤️ for Tharnithan Tharmakulasingam**  
*Last Updated: February 2026*

# ✨ Our Little Universe — Birthday Keepsake Website

> A personal, emotional, dreamy, and responsive digital scrapbook and love-letter collection created especially for her birthday. Built with semantic HTML5, modern CSS3, and clean vanilla JavaScript.

---

## 📁 Project Structure

```text
our-little-universe/
├── index.html          # Main HTML structure with all sections and semantic landmarks
├── styles.css          # Romantic design system, CSS variables, responsive layout, animations
├── script.js           # Central configuration (APP_CONFIG), interactive modals, audio player, confetti
├── README.md           # Setup, customization, testing, and free hosting guide
└── assets/             # Images, SVGs, and optional audio files
    ├── memory-1.svg        # Placeholder illustration for First Favorite Memory
    ├── memory-2.svg        # Placeholder illustration for A Funny Moment
    ├── memory-3.svg        # Placeholder illustration for A Day I Felt Grateful
    ├── memory-4.svg        # Placeholder illustration for An Everyday Moment
    ├── memory-5.svg        # Placeholder illustration for A Memory Never Forgotten
    ├── scrapbook-1.svg     # Scrapbook Polaroid photo 1
    ├── scrapbook-2.svg     # Scrapbook Polaroid photo 2
    ├── scrapbook-3.svg     # Scrapbook Polaroid photo 3
    ├── scrapbook-4.svg     # Scrapbook Polaroid photo 4
    ├── scrapbook-5.svg     # Scrapbook Polaroid photo 5
    ├── scrapbook-6.svg     # Scrapbook Polaroid photo 6
    ├── placeholder-cake.svg# Cake decoration asset
    └── our-song.mp3        # (Optional) Your personal MP3 audio file
```

---

## 🚀 Quick Start: How to Open & Test Locally

You do not need to install Node.js, npm, or any build system.

### Option 1: Direct Browser Launch (Simplest)
1. Open the `our-little-universe` folder in your file explorer.
2. Double-click `index.html`.
3. It will open directly in Google Chrome, Microsoft Edge, Safari, or Firefox.

### Option 2: Local HTTP Server (Recommended for audio testing)
Modern browsers occasionally restrict local audio playback from `file://` URLs. Running a simple local server ensures audio, fonts, and local assets work seamlessly:

**Using Python (pre-installed on most systems):**
```bash
# Navigate into the project directory
cd path/to/our-little-universe

# Start a lightweight local server
python -m http.server 8000
```
Then visit `http://localhost:8000` in your web browser.

**Using VS Code Live Server extension:**
Right-click `index.html` inside VS Code and choose **"Open with Live Server"**.

---

## 🎨 Step-by-Step Personalization Guide

All personal customization is centralized in **`script.js`** inside the `APP_CONFIG` object right at the top of the file, making it beginner-friendly and clean.

### 1. Pre-configured Names & Birthday Date
In `script.js`, your names and her birthday are already pre-filled:
```javascript
const APP_CONFIG = {
  herName: "Nikila",               // Girlfriend's name
  myName: "Jay Shivendra",         // Boyfriend's name
  birthdayDate: "20th December",   // Her birthday
  // ...
```

---

### 2. Customizing Memory Timeline Cards & Adding Your Photos
In `script.js`, find the `memories` array:
```javascript
memories: [
  {
    id: "memory-1",
    category: "First Favorite Memory",
    date: "October 14, 2023",
    title: "The Coffee Shop In The Rain",
    image: "assets/our-first-date.jpg", // Copy your JPG to assets/ and reference it here
    alt: "Photo of us sharing coffee during autumn rain",
    caption: "The evening where our story quietly began.",
    fullStory: "We met on a crisp autumn evening. I was so nervous, but the moment you smiled, all of that melted away..."
  },
  // Repeat for memory-2 through memory-5
]
```
> **Tip for adding photos:**
> 1. Export your photo as a `.jpg` or `.png` (around 800×600 to 1200×900 pixels for best loading speed).
> 2. Copy the file into the `assets/` folder (e.g. `assets/memory-1.jpg`).
> 3. Update the `image` path in `script.js` and in `index.html`.

---

### 3. Customizing the Digital Scrapbook Polaroids
In `script.js`, find the `scrapbook` array:
```javascript
scrapbook: [
  {
    id: "scrapbook-1",
    title: "Beach Sunset Walk",
    date: "June 2024",
    image: "assets/beach-trip.jpg",
    alt: "Walking along the coast at sunset",
    caption: "Salty breeze, warm hands, and golden sunlight."
  },
  // Customize scrapbook-2 through scrapbook-6
]
```

---

### 4. Customizing "Open When..." Letters
In `script.js`, locate `openWhenLetters`. There are 6 thoughtful categories:
1. `miss-me`: Open when you miss me
2. `feel-sad`: Open when you feel sad
3. `need-smile`: Open when you need a smile
4. `difficult-day`: Open when you had a difficult day
5. `need-encouragement`: Open when you need encouragement
6. `remember-us`: Open when you want to remember us

Edit the letter texts directly. Line breaks (`\n\n`) are preserved when rendered in the letter paper modal.

---

### 5. Customizing "Little Things I Love About You" (Reasons Deck)
In `script.js`, locate `reasonsSpecial`. You can edit the 10 reasons or add more! They focus on character, humor, and appreciation.

---

### 6. Adding Your Song to the Music Player
1. Name your favorite song `our-song.mp3` and place it in the `assets/` directory.
2. In `script.js`, your favorite song is already configured:
   ```javascript
   music: {
     songTitle: "Rehbara",
     artist: "Abhijeet Srivastava",
     audioSrc: "assets/our-song.mp3"
   }
   ```
3. In `index.html`, you can also update the direct links to your shared Spotify or Apple Music playlist.
> **Note:** The website will never autoplay music (which disrupts user experience). If no MP3 is found, the website displays a graceful tip and external links without any errors.

---

### 7. Customizing the Birthday Cake & Surprise Letter
In `script.js`, locate `birthdaySurprise`:
- Customize the heartfelt paragraphs and sign-off.
- When she clicks **"Make a wish & blow out candles"**, the candle flames extinguish with an animation, a romantic confetti shower bursts across the screen, and the Birthday Wish card smoothly scrolls into view.

---

### 8. Customizing the Secret Surprise & Passcode
In `script.js`, locate `secret`:
```javascript
secret: {
  secretCode: "birthday", // Change to anniversary date (e.g. "1014") or nickname
  voucherTitle: "Official Birthday Voucher: Weekend Trip",
  voucherDetails: "Redeemable at any time for: a full weekend getaway planned completely by me...",
  validFor: "[HER NAME]",
  issuedBy: "[MY NAME]"
}
```
> **Security Note:** A client-side code is a fun interactive game, not bank-grade cryptographic security. There is also a friendly "Or click here to reveal without code" button so she will never get stuck.

---

### 9. (Optional) Real-Life Treasure Hunt Clues
If you want to leave 3 physical gifts around the house (e.g. in a coffee mug, under a pillow, behind a book), update the clues in `index.html` or `script.js`.
If you do not want a physical treasure hunt, simply delete or comment out the `<section id="clues">` block in `index.html` and remove its link from the navbar.

---

## 🌐 Free Hosting & Privacy Guide

You can publish this website online for free so she can open it on her phone, tablet, or laptop.

### Option A: Netlify Drop (Easiest & Most Private)
Netlify Drop allows you to upload the folder without a public GitHub repository.

1. Go to [Netlify Drop](https://app.netlify.com/drop).
2. Sign in with a free account.
3. Drag and drop the whole `our-little-universe` folder into the browser window.
4. Netlify will generate a live URL (e.g., `https://our-little-universe-2024.netlify.app`).
5. In Site Settings, you can rename the subdomain to something cute (e.g., `for-sophia-universe.netlify.app`).
6. **Privacy tip:** Netlify allows you to set site-level password protection on paid plans, or you can keep the custom URL unlisted so only she has the link.

---

### Option B: GitHub Pages
1. Create a **Private** or **Public** repository on [GitHub](https://github.com).
   > ⚠️ **Important Privacy Limitation:** On free GitHub accounts, GitHub Pages only works from **Public** repositories (unless you have GitHub Pro/Student). If your repository is public, anyone who knows your GitHub username can view the code and photos.
   > **Recommendation:** If you are including private, intimate personal photos, use **Netlify Drop** (Option A) or keep the photos stored locally for an in-person birthday reveal.
2. Push your files to the `main` branch.
3. In GitHub, go to **Settings** > **Pages**.
4. Under **Branch**, select `main` and root `/`, then click **Save**.
5. Your website will be live in 1–2 minutes at `https://<your-username>.github.io/<repo-name>/`.

---

## ✅ Pre-Flight Birthday Launch Checklist

Before sharing this with your girlfriend on her birthday, verify the following:

- [ ] All occurrences of `[HER NAME]` and `[MY NAME]` have been replaced in `script.js` and `index.html`.
- [ ] Memory dates and personal captions reflect your genuine shared moments.
- [ ] Real photos placed in `assets/` and corresponding file paths updated.
- [ ] All 6 "Open When..." letters have warm, personalized messages.
- [ ] The 10 "Reasons" cards are customized with details specific to her personality.
- [ ] (Optional) Music file added to `assets/our-song.mp3` or streaming links verified.
- [ ] Birthday cake wish interaction tested (candles blow out, confetti launches).
- [ ] Bucket list items tailored to your shared dreams.
- [ ] Secret surprise code or voucher details personalized.
- [ ] Website tested on mobile phone screen (portrait orientation).
- [ ] Tested in Dark/Light mode and with smooth scrolling.

---

## 💡 Accessibility & Best Practices Built-In

- **Keyboard Accessible:** Modals close with the `Escape` key; tab focus is trapped inside open modals and returned smoothly when closed.
- **Reduced Motion Support:** Respects user accessibility preferences (`prefers-reduced-motion: reduce`) by disabling particle confetti and continuous rotation for sensitive users.
- **Safe DOM Handling:** Uses `textContent` for inserting personalized strings to prevent injection bugs.
- **Zero Third-Party Trackers:** No analytics, no tracking cookies, and 100% private to your browser session.

*Happy Birthday to her from the team at Antigravity! May your memories bring countless smiles.*

# A Little Universe Made for You ♡
### A Personalized Romantic Birthday Website & Digital Keepsake

Welcome to your girlfriend's birthday website! This project is crafted with a soft, dreamy scrapbook aesthetic, emotional storytelling, and interactive surprises.

---

## 📁 File Structure

```
girlfriend-birthday-website/
├── index.html     # Semantic HTML5 layout, timeline, museum, cake & letters
├── style.css      # Dreamy blush & soft pink scrapbook styling, 3D CSS cake
├── script.js      # Interactive features, music box, confetti & personalization
└── README.md      # Customization guide & deployment instructions
```

---

## 🚀 How to Run & Preview

1. **Quickest Way**: Simply double-click `index.html` in your file explorer to open it in any modern browser (Chrome, Edge, Safari, Firefox).
2. **Local Server (Recommended)**:
   - With VS Code: Right-click `index.html` and click **"Open with Live Server"**.
   - With Python in terminal:
     ```bash
     python -m http.server 8000
     ```
     Then open `http://localhost:8000` in your browser.

---

## 🎨 How to Personalize

### 1. Change Names & Dates (`script.js` & `index.html`)
At the very top of `script.js` (lines 13–27):
```javascript
const CONFIG = {
  girlfriendName: "Her Name / Nickname",
  boyfriendName: "Your Name",
  specialDate: "2023-06-18T00:00:00", // Your anniversary / meeting date
  enableAmbientMusic: true
};
```
In `index.html`:
- Search for `[Her Name]` and replace with her real name or pet name.
- Search for `[Your Name]` in the final birthday letter.

### 2. Replace Photos in the Museum & Timeline
- In `script.js`, edit the `photoMuseumData` array:
  ```javascript
  {
    id: 1,
    title: "Our Trip to the Beach",
    caption: "The sunlight was competing with your smile ♡",
    category: "adventures", // radiance, cute, adventures, or candid
    image: "images/beach.jpg", // local path or image URL
    date: "July 2024"
  }
  ```
- In `index.html`, replace the `src="..."` URLs on the timeline items with your own favorite photos.

### 3. Personalize Open-When Letters
In `script.js`, scroll to `lettersData`. You can freely modify the text for any of the 8 letters:
- *Open When You Miss Me*
- *Open When You're Feeling Down or Stressed*
- *Open When You Can't Sleep*
- *Open When You Doubt Yourself*
- *Open When We Had A Silly Disagreement*
- *Open On Your Birthday Today!*
- *Open When You Need A Warm Hug*
- *Open When You Did Something Amazing*

### 4. Background Music
- By default, the website uses a **built-in romantic music-box synthesizer (Web Audio API)** that plays a sweet, gentle melody without needing any audio file!
- If you prefer playing your actual "shared song" (e.g. an MP3 file):
  1. Place `our-song.mp3` in the folder.
  2. Add an `<audio id="bg-audio" src="our-song.mp3" loop></audio>` in `index.html`.

---

## 🌐 How to Send It to Her (Free Hosting)

1. **GitHub Pages (Free)**:
   - Create a free GitHub repository.
   - Upload `index.html`, `style.css`, and `script.js`.
   - Go to **Settings > Pages > Branch: main > Save**.
   - Share the generated link with her on her birthday! 💌
2. **Netlify or Vercel (Drag-and-Drop Free)**:
   - Go to [netlify.com/drop](https://app.netlify.com/drop).
   - Drag and drop this folder.
   - You get an instant custom link (e.g., `happy-birthday-my-love.netlify.app`).

---

Made with love ♡

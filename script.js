/**
 * ==============================================================================
 * OUR LITTLE UNIVERSE — JavaScript Application
 * ==============================================================================
 * 
 * PERSONALIZATION GUIDE FOR BEGINNERS:
 * To customize this website for your girlfriend's birthday:
 * 1. Modify the values inside the `APP_CONFIG` object below.
 * 2. Replace any placeholders marked with [HER NAME], [MY NAME], [DATE], etc.
 * 3. Place your real photos in the `assets/` folder (e.g. `assets/memory-1.jpg`).
 *    Then change `image: 'assets/memory-1.svg'` to `image: 'assets/memory-1.jpg'`.
 * 4. Add your personal song to `assets/our-song.mp3` (optional).
 * 
 * Everything is fully editable, beginner-friendly, and safe.
 * ==============================================================================
 */

'use strict';

/* ==============================================================================
   1. CENTRAL CONFIGURATION & PLACEHOLDERS
   ============================================================================== */
const APP_CONFIG = {
  // --- Personal Names & Key Dates ---
  herName: "Nikila",         // Girlfriend's name
  myName: "Jay Shivendra",   // Boyfriend's name
  birthdayDate: "20th December",

  // --- Hero Welcome Letter ---
  welcomeLetter: {
    heading: "Dearest Nikila,",
    body: "Happy Birthday! I built this quiet corner of the internet just for you — to hold our favorite laughs, quiet afternoons, adventures, and all the reasons you mean the world to me. Take your time wandering through it, smile at the memories, and remember how deeply you are loved today and every day.",
    signature: "Forever yours,\nJay Shivendra"
  },

  // --- Memory Timeline (Chapter One) ---
  // Replace the placeholder descriptions and images with your real moments!
  memories: [
    {
      id: "memory-1",
      category: "First Favorite Memory",
      date: "[DATE - e.g., October 14, 2023]",
      title: "[MEMORY TITLE - The Day We Met]",
      image: "assets/memory-1.svg", // Replace with "assets/memory-1.jpg"
      alt: "Photo of our first favorite memory together",
      caption: "The evening where our story quietly began.",
      fullStory: "[WHAT HAPPENED - Write the full story of this memory here. For example: 'We met on a crisp autumn evening. I was so nervous, but the moment you smiled, all of that melted away. We ended up talking for hours until the cafe closed, and I knew right then that you were someone truly special.']"
    },
    {
      id: "memory-2",
      category: "A Funny Moment",
      date: "[DATE - e.g., December 3, 2023]",
      title: "[MEMORY TITLE - That Time We Couldn't Stop Laughing]",
      image: "assets/memory-2.svg", // Replace with "assets/memory-2.jpg"
      alt: "Photo of a funny, playful moment we shared",
      caption: "Still laughing every time I think of this day.",
      fullStory: "[WHAT HAPPENED - Share a silly or hilarious memory here. For example: 'That rainy afternoon we tried to bake together and completely mismatched the ingredients. Flour was everywhere, the cookies looked questionable, but we laughed until our stomachs hurt. Those imperfect moments are my favorites.']"
    },
    {
      id: "memory-3",
      category: "A Day I Felt Grateful",
      date: "[DATE - e.g., February 18, 2024]",
      title: "[MEMORY TITLE - A Quiet Golden Afternoon]",
      image: "assets/memory-3.svg", // Replace with "assets/memory-3.jpg"
      alt: "Photo of a peaceful day together",
      caption: "Realizing how deeply lucky I am to have you.",
      fullStory: "[WHAT HAPPENED - Describe a time you felt deep appreciation. For example: 'We were just sitting on the park bench during sunset, not saying much, just watching the sky turn rose and amber. In that quiet moment, looking over at you, I felt this overwhelming wave of gratitude for having you in my life.']"
    },
    {
      id: "memory-4",
      category: "A Small Everyday Moment",
      date: "[DATE - e.g., May 27, 2024]",
      title: "[MEMORY TITLE - Sunday Morning Coffee & Quiet Smiles]",
      image: "assets/memory-4.svg", // Replace with "assets/memory-4.jpg"
      alt: "Photo of cozy morning coffee together",
      caption: "Ordinary mornings made extraordinary by you.",
      fullStory: "[WHAT HAPPENED - Share an appreciation for simple daily life. For example: 'Nothing fancy happened — just brewing our favorite coffee, listening to the morning birds, and reading side by side. It reminded me that the simplest routines feel like magic when they're shared with you.']"
    },
    {
      id: "memory-5",
      category: "A Memory Never Forgotten",
      date: "[DATE - e.g., August 12, 2024]",
      title: "[MEMORY TITLE - Starlight & Soft Conversations]",
      image: "assets/memory-5.svg", // Replace with "assets/memory-5.jpg"
      alt: "Photo of an unforgettable milestone or trip",
      caption: "A night etched into my heart forever.",
      fullStory: "[WHAT HAPPENED - Celebrate a milestone or trip. For example: 'Under a blanket of clear country stars, we stayed up talking about our childhood dreams, our worries, and everything we hope for in the future. I felt closer to you than I ever thought possible.']"
    }
  ],

  // --- Digital Scrapbook Polaroids (Chapter Two) ---
  scrapbook: [
    {
      id: "scrapbook-1",
      title: "[PHOTO TITLE - Golden Coast Walk]",
      date: "[DATE]",
      image: "assets/scrapbook-1.svg", // Replace with "assets/scrapbook-1.jpg"
      alt: "Scrapbook photo of a coastal sunset walk",
      caption: "Salty breeze, warm hands, and golden sunlight."
    },
    {
      id: "scrapbook-2",
      title: "[PHOTO TITLE - Road Trip Playlist]",
      date: "[DATE]",
      image: "assets/scrapbook-2.svg",
      alt: "Scrapbook photo of a road trip adventure",
      caption: "Singing off-key to all our favorite anthems."
    },
    {
      id: "scrapbook-3",
      title: "[PHOTO TITLE - Pastry & Laughter]",
      date: "[DATE]",
      image: "assets/scrapbook-3.svg",
      alt: "Scrapbook photo from our favorite cafe date",
      caption: "Sweet treats and even sweeter conversation."
    },
    {
      id: "scrapbook-4",
      title: "[PHOTO TITLE - Sunny Blanket Day]",
      date: "[DATE]",
      image: "assets/scrapbook-4.svg",
      alt: "Scrapbook photo of a peaceful picnic in the park",
      caption: "Lying in the grass, pointing out shapes in the clouds."
    },
    {
      id: "scrapbook-5",
      title: "[PHOTO TITLE - City Night Walks]",
      date: "[DATE]",
      image: "assets/scrapbook-5.svg",
      alt: "Scrapbook photo of city skyline lights at night",
      caption: "The city lights were bright, but you shone brighter."
    },
    {
      id: "scrapbook-6",
      title: "[PHOTO TITLE - Star Wishes]",
      date: "[DATE]",
      image: "assets/scrapbook-6.svg",
      alt: "Scrapbook photo of a stargazing evening",
      caption: "Every shooting star reminded me I already got my wish."
    }
  ],

  // --- "Open When..." Interactive Letters (Chapter Three) ---
  // Stored in a clean, easily editable data object
  openWhenLetters: {
    "miss-me": {
      title: "Open when you miss me",
      category: "When miles feel long",
      body: `Dearest Nikila,\n\nWhenever there are miles or busy hours between us, please remember that my thoughts are never far from you.\n\nClose your eyes for three seconds, take a slow breath, and know that I'm sending you the warmest, tightest hug right now. You are in every song I listen to, every quiet sunset, and in everything good in my world.\n\nI can't wait until I get to hold your hand again soon.`
    },
    "feel-sad": {
      title: "Open when you feel sad",
      category: "Gentle comfort",
      body: `My love,\n\nIt is completely okay to have heavy days. You don't have to be smiling all the time, and you don't have to carry everything by yourself.\n\nPlease wrap yourself in your softest blanket, pour a warm drink, and be gentle with your precious heart today. Whatever is weighing on you right now will pass, and you don't have to figure it all out today.\n\nI am always in your corner, listening whenever you need me.`
    },
    "need-smile": {
      title: "Open when you need a smile",
      category: "Pure sunshine",
      body: `Hey sunshine!\n\nHere is your official reminder that you have the most beautiful, crinkly-eyed smile in the universe — the kind that lights up an entire room without you even trying.\n\nThink about the silly things that made us laugh until our stomachs ached. Remember that you are deeply loved, wonderfully funny, and that someone right now is smiling just thinking about how special you are (hint: it's me).`
    },
    "difficult-day": {
      title: "Open when you had a difficult day",
      category: "Deep breath",
      body: `Dearest Nikila,\n\nYou made it through today. Now drop your shoulders away from your ears, unclench your jaw, and take a long, deep breath.\n\nToday might have been exhausting, frustrating, or overwhelming, but it does not define your worth or your tomorrow. You handled it with so much grace, even when it was hard.\n\nTonight, rest well. You did more than enough, and tomorrow is a fresh page.`
    },
    "need-encouragement": {
      title: "Open when you need encouragement",
      category: "Your biggest fan",
      body: `My favorite person,\n\nIn case nobody told you today: you are capable, resilient, and extraordinarily talented.\n\nWhenever self-doubt creeps in, remember all the obstacles you've already conquered in the past. Trust your instincts and your kind heart. I have seen you work so hard and care so deeply — there is nothing you cannot handle.\n\nI believe in you with every fiber of my being. Go show them what you're made of!`
    },
    "remember-us": {
      title: "Open when you want to remember us",
      category: "Our world",
      body: `Dearest Nikila,\n\nLook at how far we have walked together. Through the quiet walks, the late-night talks, the silly kitchen disasters, and all the sweet ordinary moments in between.\n\nWhat we have built is full of respect, warmth, safety, and laughter. Thank you for choosing to share your heart and your days with me.\n\nNo matter what the future brings, having you in my life is the greatest adventure I could ever ask for.`
    }
  },

  // --- Reasons You Are Special (Chapter Four) ---
  // Thoughtful, respectful appreciation notes focusing on personality and character
  reasonsSpecial: [
    {
      title: "Your Gentle Kindness",
      text: "The thoughtful, natural way you treat the people around you, always noticing when someone needs a warm word or a listening ear."
    },
    {
      title: "Your Infectious Laughter",
      text: "The pure joy when you genuinely laugh at something funny — it instantly turns any ordinary day into my favorite memory."
    },
    {
      title: "Your Quiet Determination",
      text: "How quietly hardworking and resilient you are, pursuing your goals with dedication while staying humble and true to yourself."
    },
    {
      title: "How Safe You Make Me Feel",
      text: "Being with you feels like home. I can be completely, unfiltered myself around you without fear of judgment."
    },
    {
      title: "Your Thoughtful Perspective",
      text: "The way you see beauty and meaning in small things others overlook — from pretty clouds to thoughtful little gestures."
    },
    {
      title: "Your Sense of Humor",
      text: "Our inside jokes and the playful banter that only the two of us understand. Nobody makes me laugh quite like you do."
    },
    {
      title: "How You Handle Hard Days",
      text: "Even when life gets stressful, you face challenges with courage, thoughtfulness, and an admirable inner strength."
    },
    {
      title: "Your Endless Creativity",
      text: "Your unique ideas, your aesthetic sense, and the special spark of curiosity you bring to everything you touch."
    },
    {
      title: "How You Celebrate Others",
      text: "The genuine happiness you feel for other people's successes and the way you always uplift and cheer on your friends."
    },
    {
      title: "Simply Being You",
      text: "You don't have to do anything extraordinary to be cherished. Just existing and sharing this life with me is the greatest gift."
    }
  ],

  // --- Music Section (Chapter Five) ---
  music: {
    songTitle: "Rehbara",
    artist: "Abhijeet Srivastava",
    audioSrc: "assets/our-song.mp3" // Local audio file path (place your mp3 here)
  },

  // --- Birthday Surprise (Chapter Seven) ---
  birthdaySurprise: {
    wishTitle: "My Birthday Wish For You",
    paragraphs: [
      "Happy Birthday, my love! When I reflect on this past year, what shines brightest is simply having you in my days. You bring so much genuine calm, laughter, and warmth into my world.",
      "I hope this coming year grants you every dream you're quietly reaching for, peaceful mornings with coffee, spontaneous adventures, and countless moments that make you smile that genuine, crinkly-eyed smile of yours.",
      "Thank you for being my favorite person, my greatest adventure, and my favorite home."
    ],
    signoff: "With all my love,\nJay Shivendra"
  },

  // --- Our Future Bucket List (Chapter Eight) ---
  bucketList: [
    "Go on a late-night stargazing picnic with warm cider",
    "Try cooking a super complicated new recipe together from scratch",
    "Take a spontaneous weekend road trip with zero strict itinerary",
    "Have an all-day cozy rainy day movie and blanket fort marathon",
    "Take silly photobooth pictures in every city we visit",
    "Watch the sunrise together wrapped in our warmest coats"
  ],

  // --- Optional Real-Life Treasure Hunt Clues (Chapter Nine) ---
  treasureHunt: {
    enabled: true,
    clues: [
      {
        title: "Where Morning Begins",
        text: "Check inside your favorite coffee/tea mug in the kitchen cupboard for a sweet little surprise."
      },
      {
        title: "Your Coziest Sanctuary",
        text: "Look underneath the softest pillow on your favorite reading chair or sofa."
      },
      {
        title: "Where We Keep Our Memories",
        text: "Peek right behind the bookshelf or next to your favorite scented candle for your birthday gift!"
      }
    ]
  },

  // --- Secret Final Surprise (Chapter Ten) ---
  secret: {
    // Playful passcode (case-insensitive) — e.g. "birthday", "iloveyou", or her nickname!
    secretCode: "birthday",
    voucherTitle: "Official Birthday Voucher: Weekend Getaway",
    voucherDetails: "Redeemable at any time for: a full weekend getaway planned completely by me, your favorite dinners, zero chores, and unlimited warm hugs.",
    validFor: "Nikila",
    issuedBy: "Jay Shivendra"
  }
};


/* ==============================================================================
   2. INITIALIZATION & DOM HYDRATION
   ============================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  // 1. Populate custom names across the entire page
  hydratePlaceholders();

  // 2. Setup Navigation & Mobile Hamburger
  setupNavigation();

  // 3. Setup Welcome Envelope Reveal
  setupHeroEnvelope();

  // 4. Setup Timeline & Scrapbook Modals (Lightbox)
  setupLightbox();

  // 5. Setup "Open When..." Letters Modal
  setupOpenWhenLetters();

  // 6. Setup Reasons You Are Special Deck
  setupReasonsDeck();

  // 7. Setup Audio Player (Graceful error handling without autoplay)
  setupAudioPlayer();

  // 8. Setup Virtual Birthday Cake & Confetti
  setupBirthdayCake();

  // 9. Setup Bucket List with LocalStorage
  setupBucketList();

  // 10. Setup Real-Life Treasure Hunt Clues
  setupTreasureHunt();

  // 11. Setup Secret Final Surprise
  setupSecretSurprise();
});


/* ==============================================================================
   3. HYDRATE PLACEHOLDERS & TEXT
   ============================================================================== */
function hydratePlaceholders() {
  // Replace Her Name
  const herNameElements = document.querySelectorAll('.placeholder-her-name');
  herNameElements.forEach(el => {
    el.textContent = APP_CONFIG.herName;
  });

  // Replace My Name
  const myNameElements = document.querySelectorAll('.placeholder-my-name');
  myNameElements.forEach(el => {
    el.textContent = APP_CONFIG.myName;
  });

  // Update document title if needed
  if (APP_CONFIG.herName !== "[HER NAME]") {
    document.title = `Our Little Universe — Happy Birthday ${APP_CONFIG.herName}`;
  }
}


/* ==============================================================================
   4. NAVIGATION & MOBILE DRAWER
   ============================================================================== */
function setupNavigation() {
  const header = document.getElementById('header');
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Sticky navbar shadow on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });

  // Toggle mobile drawer
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!isExpanded));
      navMenu.classList.toggle('is-active');
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('is-active');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !navToggle.contains(e.target) && navMenu.classList.contains('is-active')) {
        navToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('is-active');
      }
    });
  }
}


/* ==============================================================================
   5. HERO WELCOME ENVELOPE
   ============================================================================== */
function setupHeroEnvelope() {
  const toggleBtn = document.getElementById('btn-toggle-welcome-letter');
  const envelopeCard = document.getElementById('welcome-envelope-card');

  if (toggleBtn && envelopeCard) {
    toggleBtn.addEventListener('click', () => {
      const isHidden = envelopeCard.hasAttribute('hidden');
      if (isHidden) {
        envelopeCard.removeAttribute('hidden');
        toggleBtn.setAttribute('aria-expanded', 'true');
        toggleBtn.innerHTML = '<span>✉️ Close letter</span>';
      } else {
        envelopeCard.setAttribute('hidden', '');
        toggleBtn.setAttribute('aria-expanded', 'false');
        toggleBtn.innerHTML = '<span>✉️ Open welcome letter</span>';
      }
    });
  }
}


/* ==============================================================================
   6. LIGHTBOX MODAL (For Timeline & Scrapbook Photos)
   ============================================================================== */
function setupLightbox() {
  const modal = document.getElementById('lightbox-modal');
  const closeBtn = document.getElementById('lightbox-close');
  const imgEl = document.getElementById('lightbox-img');
  const dateEl = document.getElementById('lightbox-date');
  const titleEl = document.getElementById('lightbox-title');
  const captionEl = document.getElementById('lightbox-caption');
  const counterEl = document.getElementById('lightbox-counter');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');

  if (!modal || !imgEl) return;

  let activeGallery = [];
  let currentIndex = 0;
  let previousActiveElement = null;

  // Compile galleries from APP_CONFIG
  const timelineGallery = APP_CONFIG.memories.map(m => ({
    title: m.title,
    date: m.date,
    image: m.image,
    alt: m.alt,
    caption: m.fullStory
  }));

  const scrapbookGallery = APP_CONFIG.scrapbook.map(s => ({
    title: s.title,
    date: s.date,
    image: s.image,
    alt: s.alt,
    caption: s.caption
  }));

  // Bind click handlers for timeline "View photo & note" buttons
  document.querySelectorAll('.view-memory-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-index') || '0', 10);
      openLightbox(timelineGallery, idx, btn);
    });
  });

  // Bind click handlers for scrapbook polaroid buttons & cards
  document.querySelectorAll('.view-scrapbook-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const idx = parseInt(btn.getAttribute('data-index') || '0', 10);
      openLightbox(scrapbookGallery, idx, btn);
    });
  });

  document.querySelectorAll('.polaroid-card').forEach(card => {
    card.addEventListener('click', () => {
      const idx = parseInt(card.getAttribute('data-scrapbook-index') || '0', 10);
      openLightbox(scrapbookGallery, idx, card);
    });
  });

  function openLightbox(gallery, index, triggerEl) {
    activeGallery = gallery;
    currentIndex = index;
    previousActiveElement = triggerEl || document.activeElement;

    updateLightboxContent();
    modal.removeAttribute('hidden');
    modal.classList.add('is-open');
    document.body.classList.add('modal-open');

    // Focus close button for accessibility
    closeBtn.focus();
  }

  function closeLightbox() {
    modal.classList.remove('is-open');
    document.body.classList.remove('modal-open');
    modal.setAttribute('hidden', '');

    if (previousActiveElement && typeof previousActiveElement.focus === 'function') {
      previousActiveElement.focus();
    }
  }

  function updateLightboxContent() {
    const item = activeGallery[currentIndex];
    if (!item) return;

    imgEl.src = item.image;
    imgEl.alt = item.alt || item.title;
    dateEl.textContent = item.date;
    titleEl.textContent = item.title;
    captionEl.textContent = item.caption;
    counterEl.textContent = `${currentIndex + 1} / ${activeGallery.length}`;
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % activeGallery.length;
    updateLightboxContent();
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + activeGallery.length) % activeGallery.length;
    updateLightboxContent();
  }

  // Event Listeners for Lightbox
  closeBtn.addEventListener('click', closeLightbox);
  nextBtn.addEventListener('click', showNext);
  prevBtn.addEventListener('click', showPrev);

  // Close on backdrop click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeLightbox();
    }
  });

  // Keyboard navigation (Escape, Left, Right arrows)
  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('is-open')) return;

    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowRight') {
      showNext();
    } else if (e.key === 'ArrowLeft') {
      showPrev();
    }
  });
}


/* ==============================================================================
   7. "OPEN WHEN..." LETTERS MODAL
   ============================================================================== */
function setupOpenWhenLetters() {
  const modal = document.getElementById('letter-modal');
  const closeBtn = document.getElementById('modal-letter-close');
  const doneBtn = document.getElementById('btn-letter-done');
  const titleEl = document.getElementById('modal-letter-title');
  const bodyEl = document.getElementById('modal-letter-body');

  if (!modal || !titleEl || !bodyEl) return;

  let previousActiveElement = null;

  // Bind click on all "Read letter" buttons
  const letterButtons = document.querySelectorAll('.btn-open-letter');
  letterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const letterId = btn.getAttribute('data-letter-id');
      const letterData = APP_CONFIG.openWhenLetters[letterId];

      if (letterData) {
        previousActiveElement = btn;
        
        // Insert text safely using textContent
        titleEl.textContent = letterData.title;
        // Replace placeholders if any in body
        let processedBody = letterData.body
          .replaceAll('[HER NAME]', APP_CONFIG.herName)
          .replaceAll('[MY NAME]', APP_CONFIG.myName);
        
        bodyEl.textContent = processedBody;

        // Open modal
        modal.removeAttribute('hidden');
        modal.classList.add('is-open');
        document.body.classList.add('modal-open');

        // Focus close button for accessibility
        closeBtn.focus();
      }
    });
  });

  function closeLetterModal() {
    modal.classList.remove('is-open');
    document.body.classList.remove('modal-open');
    modal.setAttribute('hidden', '');

    if (previousActiveElement && typeof previousActiveElement.focus === 'function') {
      previousActiveElement.focus();
    }
  }

  closeBtn.addEventListener('click', closeLetterModal);
  doneBtn.addEventListener('click', closeLetterModal);

  // Close on backdrop click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeLetterModal();
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (modal.classList.contains('is-open') && e.key === 'Escape') {
      closeLetterModal();
    }
  });
}


/* ==============================================================================
   8. REASONS YOU ARE SPECIAL DECK
   ============================================================================== */
function setupReasonsDeck() {
  const counterEl = document.getElementById('reason-counter');
  const progressFill = document.getElementById('reason-progress-fill');
  const titleEl = document.getElementById('reason-title');
  const textEl = document.getElementById('reason-text');
  const cardEl = document.getElementById('reason-card');
  const prevBtn = document.getElementById('btn-prev-reason');
  const nextBtn = document.getElementById('btn-next-reason');
  const resetBtn = document.getElementById('btn-reset-reasons');

  if (!cardEl || !APP_CONFIG.reasonsSpecial.length) return;

  let currentIndex = 0;
  const reasons = APP_CONFIG.reasonsSpecial;
  const total = reasons.length;

  function updateReasonCard(index) {
    currentIndex = index;
    const reason = reasons[currentIndex];

    // Smooth subtle card fade
    cardEl.style.opacity = '0';
    cardEl.style.transform = 'translateY(6px)';

    setTimeout(() => {
      titleEl.textContent = reason.title;
      textEl.textContent = reason.text;
      counterEl.textContent = `Reason ${currentIndex + 1} of ${total}`;

      // Update progress bar
      const pct = Math.round(((currentIndex + 1) / total) * 100);
      progressFill.style.width = `${pct}%`;

      cardEl.style.opacity = '1';
      cardEl.style.transform = 'translateY(0)';
    }, 150);
  }

  nextBtn.addEventListener('click', () => {
    const nextIdx = (currentIndex + 1) % total;
    updateReasonCard(nextIdx);
  });

  prevBtn.addEventListener('click', () => {
    const prevIdx = (currentIndex - 1 + total) % total;
    updateReasonCard(prevIdx);
  });

  resetBtn.addEventListener('click', () => {
    updateReasonCard(0);
  });

  // Initialize first reason
  updateReasonCard(0);
}


/* ==============================================================================
   9. OUR SPECIAL SONG / MUSIC PLAYER
   ============================================================================== */
function setupAudioPlayer() {
  const audio = document.getElementById('audio-player');
  const playBtn = document.getElementById('btn-audio-play');
  const playIcon = document.getElementById('play-icon');
  const playText = document.getElementById('play-text');
  const progressBar = document.getElementById('audio-progress');
  const timeCurrent = document.getElementById('time-current');
  const timeDuration = document.getElementById('time-duration');
  const vinylDisc = document.getElementById('vinyl-disc');
  const musicNotice = document.getElementById('music-notice');
  const titleEl = document.getElementById('song-title');
  const artistEl = document.getElementById('song-artist');

  if (!audio || !playBtn) return;

  // Hydrate configured title and artist
  if (APP_CONFIG.music) {
    if (titleEl) titleEl.textContent = APP_CONFIG.music.songTitle;
    if (artistEl) artistEl.textContent = APP_CONFIG.music.artist;
    if (APP_CONFIG.music.audioSrc) {
      audio.src = APP_CONFIG.music.audioSrc;
    }
  }

  let isPlaying = false;

  // Toggle Play / Pause
  playBtn.addEventListener('click', () => {
    if (isPlaying) {
      pauseAudio();
    } else {
      playAudio();
    }
  });

  function playAudio() {
    const playPromise = audio.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          isPlaying = true;
          playBtn.setAttribute('aria-pressed', 'true');
          playIcon.textContent = '❚❚';
          playText.textContent = 'Pause Song';
          vinylDisc.classList.add('playing');
        })
        .catch(err => {
          // Graceful handling when no audio file is provided
          console.warn("Audio file not found or browser blocked playback:", err.message);
          isPlaying = false;
          vinylDisc.classList.remove('playing');
          playIcon.textContent = '▶';
          playText.textContent = 'Play Song';

          if (musicNotice) {
            musicNotice.innerHTML = `
              <p class="notice-text">
                <span aria-hidden="true">💡</span> 
                <strong>Audio note:</strong> To play music here, place an MP3 file at <code>assets/our-song.mp3</code>, 
                or listen together on Spotify / Apple Music using the links below.
              </p>
            `;
          }
        });
    }
  }

  function pauseAudio() {
    audio.pause();
    isPlaying = false;
    playBtn.setAttribute('aria-pressed', 'false');
    playIcon.textContent = '▶';
    playText.textContent = 'Play Song';
    vinylDisc.classList.remove('playing');
  }

  // Audio Time Updates
  audio.addEventListener('timeupdate', () => {
    if (!isNaN(audio.duration) && audio.duration > 0) {
      const progressPercent = (audio.currentTime / audio.duration) * 100;
      progressBar.value = progressPercent;
      timeCurrent.textContent = formatTime(audio.currentTime);
      timeDuration.textContent = formatTime(audio.duration);
    }
  });

  audio.addEventListener('loadedmetadata', () => {
    timeDuration.textContent = formatTime(audio.duration);
  });

  audio.addEventListener('ended', () => {
    pauseAudio();
    progressBar.value = 0;
    timeCurrent.textContent = '0:00';
  });

  // Slider Seeking
  progressBar.addEventListener('input', () => {
    if (!isNaN(audio.duration) && audio.duration > 0) {
      const seekTime = (progressBar.value / 100) * audio.duration;
      audio.currentTime = seekTime;
    }
  });

  function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  }
}


/* ==============================================================================
   10. VIRTUAL BIRTHDAY CAKE & CONFETTI CELEBRATION
   ============================================================================== */
function setupBirthdayCake() {
  const wishBtn = document.getElementById('btn-make-wish');
  const wishStatus = document.getElementById('wish-status');
  const surpriseBox = document.getElementById('birthday-surprise-box');
  const flames = document.querySelectorAll('.flame');

  if (!wishBtn) return;

  let candlesBlownOut = false;

  wishBtn.addEventListener('click', () => {
    if (!candlesBlownOut) {
      // 1. Extinguish candle flames
      flames.forEach(f => {
        f.classList.remove('flame-lit');
        f.classList.add('flame-blown-out');
      });

      // 2. Update status and button
      wishStatus.textContent = "✨ The candles are blown out! Your wish has been sent to the universe. ✨";
      wishBtn.innerHTML = '<span>🎉 Re-light Candles</span>';
      candlesBlownOut = true;

      // 3. Launch celebration confetti
      triggerConfetti();

      // 4. Smoothly scroll into view if needed
      setTimeout(() => {
        surpriseBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 400);

    } else {
      // Re-light candles
      flames.forEach(f => {
        f.classList.remove('flame-blown-out');
        f.classList.add('flame-lit');
      });

      wishStatus.textContent = "Candles are re-lit! Make another wish anytime.";
      wishBtn.innerHTML = '<span>🎂 Make a wish & blow out candles!</span>';
      candlesBlownOut = false;
    }
  });
}

/**
 * Lightweight, dependency-free celebration confetti engine
 * Respects `prefers-reduced-motion`
 */
function triggerConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  if (!canvas) return;

  // Check reduced motion preference
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    return; // Do not launch particle explosion for reduced motion
  }

  const ctx = canvas.getContext('2d');
  const width = canvas.width = window.innerWidth;
  const height = canvas.height = window.innerHeight;

  const particles = [];
  const particleCount = 90;
  const colors = ['#d65b7a', '#e88299', '#fbe3e8', '#d4a359', '#ff9ebb', '#ffffff'];

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: width / 2 + (Math.random() * 200 - 100),
      y: height / 2 + 50,
      radius: Math.random() * 6 + 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: (Math.random() - 0.5) * 12,
      vy: Math.random() * -14 - 6,
      gravity: 0.38,
      rotation: Math.random() * 360,
      vRotation: (Math.random() - 0.5) * 8,
      opacity: 1,
      isHeart: Math.random() > 0.6
    });
  }

  let animationFrameId;
  const startTime = Date.now();
  const maxDurationMs = 4500;

  function render() {
    ctx.clearRect(0, 0, width, height);

    let activeParticles = 0;

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.rotation += p.vRotation;

      // Gentle fade out toward bottom
      if (p.y > height * 0.6) {
        p.opacity -= 0.015;
      }

      if (p.opacity > 0 && p.y < height + 50) {
        activeParticles++;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = Math.max(0, p.opacity);
        ctx.fillStyle = p.color;

        if (p.isHeart) {
          // Draw small heart particle
          ctx.beginPath();
          const s = p.radius * 0.8;
          ctx.moveTo(0, s / 2);
          ctx.bezierCurveTo(-s, -s, -s * 1.5, s / 3, 0, s * 1.5);
          ctx.bezierCurveTo(s * 1.5, s / 3, s, -s, 0, s / 2);
          ctx.fill();
        } else {
          // Draw circular or rectangular confetti
          ctx.fillRect(-p.radius, -p.radius, p.radius * 2, p.radius * 1.4);
        }

        ctx.restore();
      }
    });

    const elapsed = Date.now() - startTime;
    if (activeParticles > 0 && elapsed < maxDurationMs) {
      animationFrameId = requestAnimationFrame(render);
    } else {
      ctx.clearRect(0, 0, width, height);
      cancelAnimationFrame(animationFrameId);
    }
  }

  render();
}


/* ==============================================================================
   11. BUCKET LIST WITH LOCALSTORAGE
   ============================================================================== */
function setupBucketList() {
  const listContainer = document.getElementById('bucket-items-list');
  const addForm = document.getElementById('bucket-add-form');
  const addInput = document.getElementById('new-bucket-input');
  const resetBtn = document.getElementById('btn-reset-bucket');

  if (!listContainer) return;

  const STORAGE_KEY = 'our_universe_bucket_list_v1';

  // Load saved state or default
  function loadBucketList() {
    let saved = null;
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (data) saved = JSON.parse(data);
    } catch (e) {
      console.warn("LocalStorage access failed:", e);
    }

    if (!saved || !Array.isArray(saved) || saved.length === 0) {
      // Initialize with default items from APP_CONFIG
      saved = APP_CONFIG.bucketList.map(text => ({ text, checked: false }));
    }
    return saved;
  }

  function saveBucketList(items) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      console.warn("Unable to save to localStorage:", e);
    }
  }

  let items = loadBucketList();

  function renderList() {
    listContainer.innerHTML = '';

    items.forEach((item, index) => {
      const li = document.createElement('li');
      li.className = 'bucket-item';

      const label = document.createElement('label');
      label.className = 'bucket-label';

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.className = 'bucket-checkbox';
      checkbox.checked = Boolean(item.checked);
      checkbox.setAttribute('data-index', String(index));

      const customBox = document.createElement('span');
      customBox.className = 'custom-checkbox';
      customBox.setAttribute('aria-hidden', 'true');
      customBox.textContent = '♥';

      const spanText = document.createElement('span');
      spanText.className = 'bucket-text';
      spanText.textContent = item.text;

      checkbox.addEventListener('change', () => {
        items[index].checked = checkbox.checked;
        saveBucketList(items);
      });

      label.appendChild(checkbox);
      label.appendChild(customBox);
      label.appendChild(spanText);
      li.appendChild(label);
      listContainer.appendChild(li);
    });
  }

  // Add custom idea
  if (addForm && addInput) {
    addForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const val = addInput.value.trim();
      if (val) {
        items.push({ text: val, checked: false });
        saveBucketList(items);
        renderList();
        addInput.value = '';
      }
    });
  }

  // Reset progress
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (confirm("Reset all checked items on your bucket list?")) {
        items.forEach(item => { item.checked = false; });
        saveBucketList(items);
        renderList();
      }
    });
  }

  renderList();
}


/* ==============================================================================
   12. REAL-LIFE TREASURE HUNT CLUES
   ============================================================================== */
function setupTreasureHunt() {
  const clueButtons = document.querySelectorAll('.btn-reveal-clue');

  clueButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-clue-target');
      const textEl = document.getElementById(`clue-text-${targetId}`);

      if (textEl) {
        textEl.classList.add('revealed');
        btn.setAttribute('disabled', 'true');
        btn.innerHTML = '<span>Clue Revealed ✓</span>';
      }
    });
  });
}


/* ==============================================================================
   13. SECRET FINAL SURPRISE
   ============================================================================== */
function setupSecretSurprise() {
  const form = document.getElementById('secret-form');
  const input = document.getElementById('secret-code-input');
  const revealAnywayBtn = document.getElementById('btn-reveal-anyway');
  const revealedContainer = document.getElementById('secret-revealed');

  if (!form || !revealedContainer) return;

  function unlockSecret() {
    revealedContainer.removeAttribute('hidden');
    form.style.display = 'none';
    if (revealAnywayBtn) revealAnywayBtn.style.display = 'none';

    // Celebration confetti
    triggerConfetti();

    // Smooth scroll down to voucher
    setTimeout(() => {
      revealedContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 300);
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const entered = (input.value || '').trim().toLowerCase();
    const correctCode = (APP_CONFIG.secret.secretCode || 'birthday').toLowerCase();

    if (entered === correctCode || entered.length > 0) {
      unlockSecret();
    } else {
      alert("Type any word, or click 'Or click here to reveal without code' below! ✨");
    }
  });

  if (revealAnywayBtn) {
    revealAnywayBtn.addEventListener('click', () => {
      unlockSecret();
    });
  }
}

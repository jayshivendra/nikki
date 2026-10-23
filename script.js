/**
 * ==============================================================================
 * A LITTLE UNIVERSE MADE FOR YOU — ROMANTIC BIRTHDAY MEMORY WEBSITE
 * JavaScript Interactive Features & Personalization Engine
 * ==============================================================================
 */

'use strict';

/* ==============================================================================
   1. USER PERSONALIZATION CONFIGURATION
   ============================================================================== */
const CONFIG = {
  // Girlfriend's name
  girlfriendName: "Nikila",

  // Boyfriend's name
  boyfriendName: "Jay Shivendra",

  // The exact life-changing relationship start date and time: July 16, 2026 at 7:45 PM
  specialDate: "2026-07-16T19:45:00",

  // Audio settings (gentle web audio music box chime synthesizer)
  enableAmbientMusic: true,
};

/* ==============================================================================
   2. PHOTO MUSEUM DATA
   Real moments, college food dates, Spider-Man release day & romantic milestones
   ============================================================================== */
const photoMuseumData = [
  {
    id: 1,
    title: "July 16th • 7:45 PM",
    caption: "The exact moment your message popped up and turned my best friend into my whole world ♡",
    category: "radiance",
    image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=800&q=80",
    date: "July 16, 2026 at 7:45 PM"
  },
  {
    id: 2,
    title: "Food Bite Hangouts",
    caption: "Our college food spot: plates of rolls, manchuria, and noodles we shared with so much laughter.",
    category: "cute",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    date: "College Food Bite"
  },
  {
    id: 3,
    title: "Spider-Man: Release Day",
    caption: "Our first movie together on release day! We had so much crazy fun, holding hands in the dark theater.",
    category: "adventures",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80",
    date: "Spider-Man: Brand New Day"
  },
  {
    id: 4,
    title: "October 3rd • Exactly 8 Kisses",
    caption: "That unforgettable, heart-racing day. We kissed exactly 8 times, and neither of us wanted the moment to end.",
    category: "candid",
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=800&q=80",
    date: "October 3, 2026"
  },
  {
    id: 5,
    title: "Biryani & Sweet Talks",
    caption: "Eating biryani together, talking for hours about our dreams, our quirks, and just us.",
    category: "radiance",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
    date: "Our Biryani Dates"
  },
  {
    id: 6,
    title: "Best Friends First",
    caption: "From sharing college notes, teasing each other, to realizing nobody else could ever take your place.",
    category: "cute",
    image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=800&q=80",
    date: "Best Friends to Lovers"
  },
  {
    id: 7,
    title: "Through Every Storm & Tear",
    caption: "We fought, we got emotional, we cried, but through it all, our love only grew deeper and stronger.",
    category: "adventures",
    image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=800&q=80",
    date: "Unbreakable Bond"
  },
  {
    id: 8,
    title: "My Non-Judgmental Sweetheart",
    caption: "You supported me when I was at my lowest, never judging my flaws. You truly have the purest soul.",
    category: "candid",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    date: "My Pure Heart"
  }
];

/* ==============================================================================
   3. OPEN-WHEN LETTERS DATA
   Real, honest, emotional letters reflecting Jay & Nikila's story
   ============================================================================== */
const lettersData = {
  "best-friends": {
    category: "JULY 16TH • 7:45 PM",
    title: "Open When You Remember Where We Started",
    date: "From Best Friends to Lovers",
    body: `
      <p>My Dearest Nikki,</p>
      <p>Do you remember July 16th, 2026 at exactly 7:45 PM? That was the exact minute you sent that text message—the text that quietly changed my entire existence.</p>
      <p>We were best friends before that. We shared our secrets, laughed at college jokes, and hung out without realizing that destiny was preparing us for something so much bigger. But from 7:45 PM that evening, my heart knew it had found its true home.</p>
      <p>Going from your best friend to your boyfriend is the greatest honor of my life. I wouldn't trade that journey for anything in this world.</p>
    `,
    photo: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=600&q=80",
    photoCaption: "July 16th at 7:45 PM — the start of our forever ♡",
    signoff: "Forever your best friend & loving partner, Jay ♡"
  },
  "fights-tears": {
    category: "AFTER THE STORM 🌧️",
    title: "Open When We Fight or When Tears Fall",
    date: "Holding You Through Every Argument",
    body: `
      <p>My sweet girl,</p>
      <p>We have had our share of fights, misunderstandings, and emotional disturbances. There were times both of us broke down and cried because our feelings run so deep. Every tear you’ve shed hurts my heart more than words can say.</p>
      <p>I know I get possessive and jealous when other guys talk to you. I try so hard to control it because you deserve peace and trust, but it comes from this intense fear of losing the most precious thing in my life.</p>
      <p>Whenever we clash, please remember: it is NEVER about wanting to walk away. I fight because I care so deeply. No matter how angry we get, I will always choose you, apologize, and wipe away your tears.</p>
    `,
    photo: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=600&q=80",
    photoCaption: "Through every tear, I'm holding onto you tighter",
    signoff: "Always yours to lean on, Jay ♡"
  },
  "october-3rd": {
    category: "A MAGICAL MILESTONE ✨",
    title: "Open to Relive October 3rd (Our 8 Kisses)",
    date: "October 3, 2026 • 8 Kisses",
    body: `
      <p>Hey my love,</p>
      <p>Can we just talk about October 3rd? What a day that was! My heart still beats fast every time I replay it in my mind.</p>
      <p>We shared our first kisses that day—and we kissed exactly 8 times! Eight sweet, unforgettable moments where the whole outside world completely melted away. Just you, me, and the softest magic I have ever experienced.</p>
      <p>I loved every single second of that day, and I know you loved it just as much. It proved to me that all the waiting, all the emotion, and all the talks were leading to something truly extraordinary.</p>
    `,
    photo: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80",
    photoCaption: "October 3rd — exactly 8 unforgettable kisses ♡",
    signoff: "With all my heart and endless kisses, Jay ♡"
  },
  "food-bite": {
    category: "COLLEGE FOOD MEMORIES 🍜",
    title: "Open When You're Craving Food Bite Dates",
    date: "Our Favorite College Spot",
    body: `
      <p>Nikki,</p>
      <p>Think about all the rolls, munchurias, and plates of noodles we devoured at Food Bite in college! And of course, all our delicious biryani dates.</p>
      <p>Those weren't just meals; they were our little escape from college stress. Watching you enjoy your favorite food, talking endlessly about ourselves, laughing until our stomachs hurt... those simple everyday moments are the ones I treasure most.</p>
      <p>Next time you're free, the rolls, noodles, and biryani are on me. Let's make a hundred more memories at our favorite spots!</p>
    `,
    photo: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
    photoCaption: "Food Bite rolls, noodles & endless laughter",
    signoff: "Your personal food partner in crime, Jay ♡"
  },
  "spider-man": {
    category: "FIRST MOVIE DATE 🎬",
    title: "Open When You Remember Spider-Man Day",
    date: "Release Day Fun & Excitement",
    body: `
      <p>My sweetheart,</p>
      <p>Remember rushing to catch Spider-Man: Brand New Day on the very day of its release? We were so excited, and having you right beside me made the whole experience ten times more thrilling.</p>
      <p>We had so much fun that day. Laughing, reacting to the scenes, sneaking smiles at each other in the theater glow. It was our very first movie together, and it set the tone for all the fun adventures we are destined to share.</p>
      <p>Here’s to watching a million more release-day movies with you, my favorite movie date forever!</p>
    `,
    photo: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=600&q=80",
    photoCaption: "Spider-Man release day with my favorite girl",
    signoff: "Your real-life superhero (or trying to be!), Jay ♡"
  },
  "sorry-promise": {
    category: "SINCERE APOLOGY & PROMISE 💌",
    title: "A Letter of Sincere Apology & My Vow",
    date: "From the Bottom of My Soul",
    body: `
      <p>Dearest Nikila,</p>
      <p>I need to say this from the bottom of my heart: I am so, so sorry for every single mistake I have made. In the heat of our arguments, when jealousy took over or when tempers flared, I sometimes lost my tongue and said harsh things. I feel deeply ashamed of those moments.</p>
      <p>I know I am far from a perfect boyfriend. I have flaws, I get insecure, and I make mistakes. But my love and care for you are 100% real, deep, and pure.</p>
      <p>I promise to keep learning, to control my temper, to trust you more, and to treat your gentle heart with the tenderness and respect you deserve. You are too good to me, and I will spend every day working to be the partner you deserve.</p>
    `,
    photo: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80",
    photoCaption: "I promise to protect your heart, always",
    signoff: "Humbly and truly yours, Jay Shivendra ♡"
  },
  "support-thanks": {
    category: "YOU ARE MY SWEETHEART 🌸",
    title: "Thank You for Never Judging Me",
    date: "For Your Unconditional Support",
    body: `
      <p>Nikila,</p>
      <p>You have no idea how much it means to me that you never judge me. Whenever I am down, when I mess up, or when life feels heavy, you stand beside me as my greatest supporter.</p>
      <p>You are such a genuine sweetheart. In a world where people are quick to criticize or point fingers, you offer understanding, warmth, and patience. That kind of love is so rare, and I am the luckiest guy alive to receive it from you.</p>
      <p>Thank you for seeing the good in me even when I struggle to see it in myself. I cherish you beyond words.</p>
    `,
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    photoCaption: "The sweetest heart I have ever known ♡",
    signoff: "With endless gratitude & love, Jay ♡"
  },
  "birthday-day": {
    category: "HAPPY BIRTHDAY, NIKKI! 🎂",
    title: "Open on Your Birthday Today!",
    date: "Celebrating My Favorite Person",
    body: `
      <p>HAPPY BIRTHDAY, MY BEAUTIFUL NIKILA! 🌸🎉🎂</p>
      <p>Today is the day the universe gave me my best friend, my soulmate, and the girl of my dreams. I hope today brings you all the happiness, laughter, and warm smiles you bring into my life every single day.</p>
      <p>From July 16th at 7:45 PM to our college Food Bite rolls, from Spider-Man on release day to our 8 kisses on October 3rd, every chapter with you has been a blessing. Even through our fights and tears, I would choose you a million times over.</p>
      <p>May this birthday bring you everything you wish for. I'm right here beside you, cheering for you and loving you with everything I have.</p>
    `,
    photo: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=600&q=80",
    photoCaption: "Happy Birthday to my one and only Nikila! 🎂✨",
    signoff: "Forever & always your Jay Shivendra ♡"
  }
};

/* ==============================================================================
   4. REASONS YOU'RE SPECIAL (LOVE JAR CAPSULES)
   Sweet, real, and personal reasons why Jay loves Nikila
   ============================================================================== */
const sweetReasons = [
  { text: "The life-changing text message you sent on July 16th at 7:45 PM that made you mine.", tag: "#July16Forever" },
  { text: "How you never, ever judge me, even when I am at my lowest and messiest.", tag: "#UnconditionalHeart" },
  { text: "That magical day on October 3rd when we shared our first kisses—exactly 8 times!", tag: "#October3rdMagic" },
  { text: "Our Food Bite college canteen dates eating rolls, manchuria, and noodles together.", tag: "#FoodBiteMemories" },
  { text: "The excitement on your face when we watched Spider-Man: Brand New Day on release day.", tag: "#SpiderManDate" },
  { text: "How you always support me through every single situation without second thoughts.", tag: "#MySweetheart" },
  { text: "How we used to be best friends first, and how naturally you became the love of my life.", tag: "#BestFriendsToLovers" },
  { text: "How genuinely happy and giggly we get when we just talk for hours about ourselves.", tag: "#EndlessTalks" },
  { text: "Your pure patience with me when I get emotional, possessive, or scared of losing you.", tag: "#MyAnchor" },
  { text: "The way you forgive me when I lose my tongue in arguments and help us heal.", tag: "#PureGrace" },
  { text: "How adorable you look when we order biryani and enjoy every single bite.", tag: "#BiryaniPartner" },
  { text: "The warmth in your eyes when we look at each other after an emotional cry.", tag: "#StrongerTogether" },
  { text: "How you make an ordinary college day feel like the brightest adventure.", tag: "#EverydaySunshine" },
  { text: "The way you hold onto me and make all my insecurities melt away.", tag: "#SafeInYourArms" },
  { text: "How proud I feel whenever I tell anyone that Nikila is my girlfriend.", tag: "#MyPrideAndJoy" },
  { text: "The way you listen to me with so much empathy and care.", tag: "#GoldenSoul" },
  { text: "Because even after every fight and disagreement, my heart only beats for you.", tag: "#UnshakableLove" },
  { text: "How cute your voice sounds when you tease me about my jealousy.", tag: "#CutestGirl" },
  { text: "The way you believe in me, even when I feel like a poor or imperfect boyfriend.", tag: "#MyBiggestCheerleader" },
  { text: "How we can fight, cry, and yet hug each other tighter because our love is real.", tag: "#RealAndRaw" },
  { text: "The way you smile after we finish eating our favorite rolls and snacks.", tag: "#SimpleJoys" },
  { text: "How every love song and movie suddenly reminds me of you and only you.", tag: "#MyEverything" },
  { text: "Because you are not just my girlfriend—you are my best friend and my future.", tag: "#ForeverNikki" },
  { text: "And simply because loving you, Nikila, is the best decision my heart ever made.", tag: "#AlwaysYoursJay" }
];

/* ==============================================================================
   5. COUPLE QUIZ QUESTIONS
   Real trivia about Jay & Nikila's journey
   ============================================================================== */
const quizQuestions = [
  {
    question: "What was the exact time you sent the text message that started our relationship on July 16th?",
    options: [
      "7:45 PM (The most magical notification of my life ♡)",
      "6:30 PM",
      "Midnight 12:00 AM",
      "8:15 PM"
    ],
    correctIndex: 0,
    reaction: "Yes! July 16th at 7:45 PM—I will never forget that exact minute! 🥰"
  },
  {
    question: "What was our very first movie date that we rushed to watch on release day?",
    options: [
      "Deadpool & Wolverine",
      "Spider-Man: Brand New Day (We had so much crazy fun!)",
      "Avengers: Secret Wars",
      "A romantic Bollywood film"
    ],
    correctIndex: 1,
    reaction: "Spider-Man on release day! Best movie date ever with my favorite girl. 🎬✨"
  },
  {
    question: "What is our legendary, go-to food combo at college Food Bite?",
    options: [
      "Rolls, Manchuria & Noodles (and later Biryani!)",
      "Just plain chips and water",
      "Only black coffee",
      "Green salad"
    ],
    correctIndex: 0,
    reaction: "Haha nailed it! Food Bite rolls, manchuria, noodles, and biryani for life! 🍜😋"
  },
  {
    question: "On October 3rd, how many times did we share our sweet first kisses?",
    options: [
      "Only 2 times",
      "Exactly 8 times ♡ (And each one was pure magic!)",
      "5 times",
      "We lost count after 100"
    ],
    correctIndex: 1,
    reaction: "Exactly 8 times! What an unforgettable, beautiful day that was. 💕"
  },
  {
    question: "Even after all our fights, emotional crying, and tough moments, what is the ultimate truth?",
    options: [
      "I love you more than words can ever describe",
      "You are my sweetheart who never judges me",
      "I will always choose you, apologize, and stand by you",
      "All of the above — I love you endlessly, Nikki! ♡"
    ],
    correctIndex: 3,
    reaction: "All of the above! Through every fight and tear, my heart is yours forever. 💖"
  }
];

/* ==============================================================================
   6. AMBIENT CANVAS: FLOATING SAKURA PETALS & GOLDEN PARTICLES
   ============================================================================== */
class AmbientPetalCanvas {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.maxParticles = window.innerWidth < 768 ? 20 : 38;
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    this.init();
  }

  init() {
    this.resize();
    window.addEventListener('resize', () => this.resize());

    // Generate initial petals
    for (let i = 0; i < this.maxParticles; i++) {
      this.particles.push(this.createParticle(true));
    }

    this.animate();
  }

  resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  }

  createParticle(randomY = false) {
    const isPetal = Math.random() > 0.35;
    return {
      x: Math.random() * this.width,
      y: randomY ? Math.random() * this.height : -20,
      size: isPetal ? (Math.random() * 8 + 8) : (Math.random() * 3 + 2),
      speedY: Math.random() * 0.9 + 0.6,
      speedX: (Math.random() - 0.5) * 0.7,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 1.5,
      opacity: Math.random() * 0.5 + 0.3,
      isPetal: isPetal,
      swing: Math.random() * 2 * Math.PI,
      swingSpeed: Math.random() * 0.02 + 0.01,
      color: isPetal
        ? (Math.random() > 0.5 ? 'rgba(244, 191, 208, ' : 'rgba(248, 221, 232, ')
        : 'rgba(238, 200, 110, ' // golden star
    };
  }

  animate() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      p.swing += p.swingSpeed;
      p.x += p.speedX + Math.sin(p.swing) * 0.5;
      p.y += p.speedY;
      p.rotation += p.rotationSpeed;

      this.ctx.save();
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate((p.rotation * Math.PI) / 180);

      if (p.isPetal) {
        // Draw soft petal curve
        this.ctx.fillStyle = p.color + p.opacity + ')';
        this.ctx.beginPath();
        this.ctx.moveTo(0, 0);
        this.ctx.bezierCurveTo(p.size / 2, -p.size / 2, p.size, 0, 0, p.size);
        this.ctx.bezierCurveTo(-p.size, 0, -p.size / 2, -p.size / 2, 0, 0);
        this.ctx.fill();
      } else {
        // Draw delicate sparkling star
        this.ctx.fillStyle = p.color + p.opacity + ')';
        this.ctx.beginPath();
        this.ctx.arc(0, 0, p.size, 0, Math.PI * 2);
        this.ctx.fill();
      }

      this.ctx.restore();

      // Reset offscreen particles
      if (p.y > this.height + 25 || p.x < -30 || p.x > this.width + 30) {
        this.particles[i] = this.createParticle(false);
      }
    }

    requestAnimationFrame(() => this.animate());
  }
}

/* ==============================================================================
   7. WEB AUDIO API: DREAMY MUSIC BOX SYNTHESIZER
   Plays a calming, romantic, pentatonic lullaby chime melody without external mp3!
   ============================================================================== */
class RomanticMusicBox {
  constructor() {
    this.audioCtx = null;
    this.isPlaying = false;
    this.timer = null;
    this.currentStep = 0;

    // Sweet pentatonic chime notes (F major / D minor romantic melody)
    this.notes = [
      349.23, // F4
      392.00, // G4
      440.00, // A4
      523.25, // C5
      587.33, // D5
      659.25, // E5
      698.46, // F5
      523.25  // C5
    ];

    this.melody = [
      0, 2, 4, 2, 5, 4, 2, 0,
      1, 3, 5, 3, 6, 5, 3, 1,
      2, 4, 6, 4, 7, 6, 4, 2,
      4, 2, 0, 2, 4, 5, 4, 0
    ];
  }

  init() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioContext();
    }
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  playChime(freq) {
    if (!this.audioCtx) return;

    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();
    const filter = this.audioCtx.createBiquadFilter();

    // Warm music box bell timbre
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);

    // Lowpass filter for cozy softness
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1400, this.audioCtx.currentTime);

    // Bell chime ADSR envelope
    gain.gain.setValueAtTime(0.001, this.audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.18, this.audioCtx.currentTime + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + 1.8);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.audioCtx.destination);

    osc.start();
    osc.stop(this.audioCtx.currentTime + 1.85);
  }

  start() {
    this.init();
    this.isPlaying = true;
    this.step();
  }

  step() {
    if (!this.isPlaying) return;

    const noteIndex = this.melody[this.currentStep % this.melody.length];
    const freq = this.notes[noteIndex];
    this.playChime(freq);

    this.currentStep++;
    // Relaxed romantic tempo: note every 680ms
    this.timer = setTimeout(() => this.step(), 680);
  }

  stop() {
    this.isPlaying = false;
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }

  toggle() {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }
}

/* ==============================================================================
   8. CORE APPLICATION LOGIC
   ============================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons if available
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }

  // Initialize background petals canvas
  new AmbientPetalCanvas('ambient-canvas');

  // Music Box Synthesizer
  const musicBox = new RomanticMusicBox();
  const musicToggleBtn = document.getElementById('music-toggle-btn');

  // Update dynamic year
  const currentYearSpan = document.getElementById('current-year');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  /* --------------------------------------------------------------------------
     A. THE BIRTHDAY GATE (OPENING EXPERIENCE)
     -------------------------------------------------------------------------- */
  const birthdayGate = document.getElementById('birthday-gate');
  const openUniverseBtn = document.getElementById('open-universe-btn');
  const skipGateBtn = document.getElementById('skip-gate-btn');
  const mainContent = document.getElementById('main-content');

  function unlockUniverse() {
    if (!birthdayGate) return;

    // Trigger celebration confetti
    triggerRomanticConfetti();

    // Gentle fade out gate
    birthdayGate.classList.add('gate-opened');
    mainContent.classList.remove('is-locked');

    // Auto-start gentle music if enabled
    if (CONFIG.enableAmbientMusic && !musicBox.isPlaying) {
      try {
        musicBox.start();
        if (musicToggleBtn) musicToggleBtn.classList.add('is-playing');
      } catch (e) {
        console.log('Audio autoplay prevented by browser until interaction');
      }
    }
  }

  if (openUniverseBtn) {
    openUniverseBtn.addEventListener('click', unlockUniverse);
  }
  if (skipGateBtn) {
    skipGateBtn.addEventListener('click', unlockUniverse);
  }

  /* --------------------------------------------------------------------------
     B. MUSIC TOGGLE BUTTON
     -------------------------------------------------------------------------- */
  if (musicToggleBtn) {
    musicToggleBtn.addEventListener('click', () => {
      const isPlaying = musicBox.toggle();
      if (isPlaying) {
        musicToggleBtn.classList.add('is-playing');
        musicToggleBtn.setAttribute('title', 'Pause gentle melody');
      } else {
        musicToggleBtn.classList.remove('is-playing');
        musicToggleBtn.setAttribute('title', 'Play gentle melody');
      }
    });
  }

  /* --------------------------------------------------------------------------
     C. NAVIGATION SCROLL & ACTIVE SCROLLSPY
     -------------------------------------------------------------------------- */
  const siteHeader = document.getElementById('site-header');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    // Header shadow on scroll
    if (window.scrollY > 30) {
      siteHeader.classList.add('is-scrolled');
    } else {
      siteHeader.classList.remove('is-scrolled');
    }

    // Scrollspy active indicator
    let currentSectionId = '';
    const scrollPosition = window.scrollY + 180;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  });

  /* --------------------------------------------------------------------------
     D. MOBILE MENU DRAWER
     -------------------------------------------------------------------------- */
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const closeDrawerBtn = document.getElementById('close-drawer-btn');
  const mobileNavDrawer = document.getElementById('mobile-nav-drawer');
  const drawerBackdrop = document.getElementById('drawer-backdrop');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function openMobileDrawer() {
    mobileNavDrawer.classList.add('is-open');
    drawerBackdrop.classList.add('is-visible');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileDrawer() {
    mobileNavDrawer.classList.remove('is-open');
    drawerBackdrop.classList.remove('is-visible');
    document.body.style.overflow = '';
  }

  if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openMobileDrawer);
  if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeMobileDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeMobileDrawer);

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMobileDrawer);
  });

  /* --------------------------------------------------------------------------
     E. LIVE LOVE COUNTER ("Every Second Is A Treasure")
     -------------------------------------------------------------------------- */
  const loveCounterDisplay = document.getElementById('love-counter-display');
  
  function updateLoveCounter() {
    if (!loveCounterDisplay) return;

    const startDate = new Date(CONFIG.specialDate).getTime();
    const now = new Date().getTime();
    const diff = now - startDate;

    if (isNaN(diff) || diff < 0) {
      loveCounterDisplay.textContent = "Every single moment with you is my greatest gift ♡";
      return;
    }

    const seconds = Math.floor((diff / 1000) % 60);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    loveCounterDisplay.innerHTML = `
      <span>${days}</span> days, <span>${hours}</span> hours, <span>${minutes}</span> mins, <span>${seconds}</span> secs
    `;
  }

  updateLoveCounter();
  setInterval(updateLoveCounter, 1000);

  /* --------------------------------------------------------------------------
     F. SECTION 1: TIMELINE IMAGE LIGHTBOX TRIGGER
     -------------------------------------------------------------------------- */
  const imageLightbox = document.getElementById('image-lightbox');
  const lightboxImg = document.getElementById('lightbox-image');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxCounter = document.getElementById('lightbox-counter');
  const lightboxCloseBtn = document.getElementById('lightbox-close-btn');
  const lightboxPrevBtn = document.getElementById('lightbox-prev-btn');
  const lightboxNextBtn = document.getElementById('lightbox-next-btn');

  let activeGallery = [];
  let currentImageIndex = 0;

  function openLightbox(galleryArray, index) {
    activeGallery = galleryArray;
    currentImageIndex = index;
    renderLightboxItem();
    imageLightbox.classList.remove('is-hidden');
    document.body.style.overflow = 'hidden';
  }

  function renderLightboxItem() {
    if (!activeGallery || activeGallery.length === 0) return;
    const item = activeGallery[currentImageIndex];
    lightboxImg.src = item.image;
    lightboxImg.alt = item.title || item.caption || "Enlarged photo";
    lightboxCaption.textContent = item.caption || item.title || "";
    lightboxCounter.textContent = `${currentImageIndex + 1} of ${activeGallery.length}`;
  }

  function closeLightbox() {
    imageLightbox.classList.add('is-hidden');
    document.body.style.overflow = '';
  }

  function prevLightboxItem() {
    currentImageIndex = (currentImageIndex - 1 + activeGallery.length) % activeGallery.length;
    renderLightboxItem();
  }

  function nextLightboxItem() {
    currentImageIndex = (currentImageIndex + 1) % activeGallery.length;
    renderLightboxItem();
  }

  if (lightboxCloseBtn) lightboxCloseBtn.addEventListener('click', closeLightbox);
  if (lightboxPrevBtn) lightboxPrevBtn.addEventListener('click', prevLightboxItem);
  if (lightboxNextBtn) lightboxNextBtn.addEventListener('click', nextLightboxItem);

  // Close when clicking modal backdrop
  imageLightbox.addEventListener('click', (e) => {
    if (e.target === imageLightbox) closeLightbox();
  });

  // Attach click listener to timeline zoomable photos
  const timelinePhotos = document.querySelectorAll('.timeline-photo');
  const timelineGalleryData = Array.from(timelinePhotos).map((img, idx) => ({
    image: img.src,
    caption: img.getAttribute('data-caption') || img.alt,
    title: img.alt
  }));

  timelinePhotos.forEach((img, idx) => {
    img.addEventListener('click', () => {
      openLightbox(timelineGalleryData, idx);
    });
  });

  /* --------------------------------------------------------------------------
     G. SECTION 2: HER LITTLE PHOTO MUSEUM
     -------------------------------------------------------------------------- */
  const museumGrid = document.getElementById('museum-grid');
  const museumFilterBtns = document.querySelectorAll('.museum-filters .filter-btn');

  function renderMuseumCards(filter = 'all') {
    if (!museumGrid) return;
    museumGrid.innerHTML = '';

    const filtered = filter === 'all' 
      ? photoMuseumData 
      : photoMuseumData.filter(item => item.category === filter);

    filtered.forEach((item, index) => {
      const card = document.createElement('div');
      card.className = 'museum-card polaroid-style';
      card.setAttribute('data-category', item.category);

      card.innerHTML = `
        <div class="washi-tape tape-center"></div>
        <div class="museum-media">
          <img src="${item.image}" alt="${item.title}" loading="lazy">
        </div>
        <p class="museum-caption font-handwriting">${item.caption}</p>
        <span class="museum-category-tag font-handwriting">#${item.category} • ${item.date}</span>
      `;

      card.addEventListener('click', () => {
        openLightbox(filtered, index);
      });

      museumGrid.appendChild(card);
    });
  }

  renderMuseumCards('all');

  // Filter click handlers
  museumFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      museumFilterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      const filter = btn.getAttribute('data-filter');
      renderMuseumCards(filter);
    });
  });

  /* --------------------------------------------------------------------------
     H. SECTION 3: OPEN-WHEN LETTERS
     -------------------------------------------------------------------------- */
  const envelopeCards = document.querySelectorAll('.envelope-card');
  const letterModal = document.getElementById('letter-modal');
  const letterCloseBtn = document.getElementById('letter-close-btn');
  const letterCategory = document.getElementById('letter-modal-category');
  const letterDate = document.getElementById('letter-modal-date');
  const letterTitle = document.getElementById('letter-modal-title');
  const letterBody = document.getElementById('letter-modal-body');
  const letterPhotoWrap = document.getElementById('letter-modal-photo-wrap');
  const letterPhoto = document.getElementById('letter-modal-photo');
  const letterPhotoCaption = document.getElementById('letter-modal-photo-caption');
  const letterSignoff = document.getElementById('letter-modal-signoff');

  function openLetter(letterKey) {
    const letter = lettersData[letterKey];
    if (!letter) return;

    letterCategory.textContent = letter.category;
    letterDate.textContent = letter.date;
    letterTitle.textContent = letter.title;
    letterBody.innerHTML = letter.body;

    if (letter.photo) {
      letterPhotoWrap.style.display = 'flex';
      letterPhoto.src = letter.photo;
      letterPhotoCaption.textContent = letter.photoCaption || "A memory to keep close ♡";
    } else {
      letterPhotoWrap.style.display = 'none';
    }

    letterSignoff.textContent = letter.signoff;

    letterModal.classList.remove('is-hidden');
    document.body.style.overflow = 'hidden';

    // Heart celebration for birthday letter
    if (letterKey === 'birthday-day') {
      triggerRomanticConfetti();
    }
  }

  function closeLetter() {
    letterModal.classList.add('is-hidden');
    document.body.style.overflow = '';
  }

  envelopeCards.forEach(card => {
    card.addEventListener('click', () => {
      const letterKey = card.getAttribute('data-letter-id');
      openLetter(letterKey);
    });
    // Keyboard Enter / Space support
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const letterKey = card.getAttribute('data-letter-id');
        openLetter(letterKey);
      }
    });
  });

  if (letterCloseBtn) letterCloseBtn.addEventListener('click', closeLetter);
  letterModal.addEventListener('click', (e) => {
    if (e.target === letterModal) closeLetter();
  });

  /* --------------------------------------------------------------------------
     I. SECTION 4: REASONS YOU'RE SPECIAL (LOVE JAR CAPSULES)
     -------------------------------------------------------------------------- */
  const drawReasonBtn = document.getElementById('draw-reason-btn');
  const capsuleDisplay = document.getElementById('capsule-display');
  const reasonNum = document.getElementById('reason-num');
  const capsuleText = document.getElementById('capsule-text');
  const capsuleTag = document.getElementById('capsule-tag');
  const drawCounter = document.getElementById('draw-counter');
  const jarBody = document.getElementById('jar-body');

  let seenIndices = [0];
  let currentReasonIndex = 0;

  if (drawReasonBtn) {
    drawReasonBtn.addEventListener('click', () => {
      // Pick next unvisited or random index
      if (seenIndices.length < sweetReasons.length) {
        let nextIdx;
        do {
          nextIdx = Math.floor(Math.random() * sweetReasons.length);
        } while (seenIndices.includes(nextIdx));
        seenIndices.push(nextIdx);
        currentReasonIndex = nextIdx;
      } else {
        // All seen, choose random
        currentReasonIndex = Math.floor(Math.random() * sweetReasons.length);
      }

      const reason = sweetReasons[currentReasonIndex];

      // Bounce jar animation
      if (jarBody) {
        jarBody.style.transform = 'scale(1.08) rotate(3deg)';
        setTimeout(() => {
          jarBody.style.transform = 'scale(1) rotate(0deg)';
        }, 300);
      }

      // Re-trigger unfold animation
      capsuleDisplay.innerHTML = `
        <div class="capsule-paper">
          <div class="capsule-stamp font-handwriting">Reason #${currentReasonIndex + 1}</div>
          <p class="capsule-text">"${reason.text}"</p>
          <span class="capsule-tag">${reason.tag}</span>
        </div>
      `;

      drawCounter.textContent = `Discovered: ${seenIndices.length} / ${sweetReasons.length} sweet reasons`;
    });
  }

  /* --------------------------------------------------------------------------
     J. SECTION 5: OUR LITTLE COUPLE QUIZ
     -------------------------------------------------------------------------- */
  let quizStep = 0;
  let quizScore = 0;

  const quizQuestion = document.getElementById('quiz-question');
  const quizOptions = document.getElementById('quiz-options');
  const quizFeedback = document.getElementById('quiz-feedback');
  const quizProgressLabel = document.getElementById('quiz-progress-label');
  const quizProgressFill = document.getElementById('quiz-progress-fill');
  const quizContent = document.getElementById('quiz-content');
  const quizResultScreen = document.getElementById('quiz-result-screen');
  const resultScoreText = document.getElementById('result-score-text');
  const retakeQuizBtn = document.getElementById('retake-quiz-btn');

  function renderQuizQuestion() {
    if (quizStep >= quizQuestions.length) {
      showQuizResults();
      return;
    }

    const q = quizQuestions[quizStep];
    quizQuestion.textContent = q.question;
    quizProgressLabel.textContent = `Question ${quizStep + 1} of ${quizQuestions.length}`;
    quizProgressFill.style.width = `${((quizStep + 1) / quizQuestions.length) * 100}%`;
    quizFeedback.innerHTML = '';
    quizOptions.innerHTML = '';

    q.options.forEach((optText, idx) => {
      const btn = document.createElement('button');
      btn.className = 'quiz-option-btn';
      btn.innerHTML = `<span>${optText}</span> <span class="opt-icon">♡</span>`;

      btn.addEventListener('click', () => handleQuizAnswer(idx, btn));
      quizOptions.appendChild(btn);
    });
  }

  function handleQuizAnswer(selectedIndex, clickedBtn) {
    const q = quizQuestions[quizStep];
    const optionButtons = quizOptions.querySelectorAll('.quiz-option-btn');

    // Disable all options once an answer is chosen
    optionButtons.forEach(btn => btn.disabled = true);

    if (selectedIndex === q.correctIndex) {
      clickedBtn.classList.add('correct');
      quizScore++;
      quizFeedback.innerHTML = `<span style="color: #2E7D32;">✔ ${q.reaction}</span>`;
    } else {
      clickedBtn.classList.add('incorrect');
      optionButtons[q.correctIndex].classList.add('correct');
      quizFeedback.innerHTML = `<span style="color: var(--color-deep-rose);">Aww! But truth is: ${q.reaction}</span>`;
    }

    // Advance to next after 2 seconds
    setTimeout(() => {
      quizStep++;
      renderQuizQuestion();
    }, 2000);
  }

  function showQuizResults() {
    quizContent.classList.add('is-hidden');
    quizResultScreen.classList.remove('is-hidden');
    resultScoreText.textContent = `You scored ${quizScore} out of ${quizQuestions.length}!`;
    triggerRomanticConfetti();
  }

  function resetQuiz() {
    quizStep = 0;
    quizScore = 0;
    quizContent.classList.remove('is-hidden');
    quizResultScreen.classList.add('is-hidden');
    renderQuizQuestion();
  }

  if (retakeQuizBtn) retakeQuizBtn.addEventListener('click', resetQuiz);
  renderQuizQuestion();

  /* --------------------------------------------------------------------------
     K. SECTION 6: OUR FUTURE BUCKET LIST
     -------------------------------------------------------------------------- */
  const bucketCheckboxes = document.querySelectorAll('.bucket-checkbox');
  const bucketCompletedCount = document.getElementById('bucket-completed-count');
  const bucketTotalCount = document.getElementById('bucket-total-count');
  const addBucketForm = document.getElementById('add-bucket-form');
  const bucketItemsGrid = document.getElementById('bucket-items-grid');

  function updateBucketTracker() {
    const all = document.querySelectorAll('.bucket-checkbox');
    const checked = document.querySelectorAll('.bucket-checkbox:checked');
    if (bucketCompletedCount) bucketCompletedCount.textContent = checked.length;
    if (bucketTotalCount) bucketTotalCount.textContent = all.length;
  }

  function attachBucketItemEvents(item) {
    const checkbox = item.querySelector('.bucket-checkbox');
    const tag = item.querySelector('.bucket-status-tag');
    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        item.classList.add('completed');
        if (tag) {
          tag.textContent = "Completed! ♡";
          tag.className = "bucket-status-tag";
        }
      } else {
        item.classList.remove('completed');
        if (tag) {
          tag.textContent = "Coming Soon ✨";
          tag.className = "bucket-status-tag future";
        }
      }
      updateBucketTracker();
    });
  }

  document.querySelectorAll('.bucket-item').forEach(attachBucketItemEvents);
  updateBucketTracker();

  // Add new bucket item form handler
  if (addBucketForm) {
    addBucketForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const titleInput = document.getElementById('bucket-input-title');
      const catInput = document.getElementById('bucket-input-category');

      const title = titleInput.value.trim();
      const category = catInput.value.trim() || "Romantic Dream";

      if (!title) return;

      const newItem = document.createElement('div');
      newItem.className = 'bucket-item';
      newItem.innerHTML = `
        <label class="bucket-checkbox-label">
          <input type="checkbox" class="bucket-checkbox">
          <span class="custom-checkbox"></span>
        </label>
        <div class="bucket-content">
          <span class="bucket-category">💖 ${category}</span>
          <h4 class="bucket-title">${title}</h4>
          <p class="bucket-desc">Added to our dream journal with love.</p>
        </div>
        <span class="bucket-status-tag future">Coming Soon ✨</span>
      `;

      bucketItemsGrid.appendChild(newItem);
      attachBucketItemEvents(newItem);
      updateBucketTracker();

      titleInput.value = '';
    });
  }

  /* --------------------------------------------------------------------------
     L. SECTION 7: GRAND BIRTHDAY CAKE & CANDLE BLOWING
     -------------------------------------------------------------------------- */
  const blowCandlesBtn = document.getElementById('blow-candles-btn');
  const birthdayCake = document.getElementById('birthday-cake');
  const cakeStatusText = document.getElementById('cake-status-text');
  const unlockedWishBox = document.getElementById('unlocked-wish-box');
  const replayCelebrationBtn = document.getElementById('replay-celebration-btn');
  const printKeepsakeBtn = document.getElementById('print-keepsake-btn');

  let candlesBlown = false;

  function blowOutCandles() {
    if (candlesBlown) {
      triggerRomanticConfetti();
      return;
    }

    candlesBlown = true;

    // Extinguish flames with smoke
    const flames = document.querySelectorAll('.flame');
    const smokes = document.querySelectorAll('.smoke');

    flames.forEach(flame => flame.classList.add('is-blown'));
    smokes.forEach(smoke => smoke.classList.add('active'));

    // Status text update
    cakeStatusText.textContent = "✨ YOUR WISH IS SENT STRAIGHT TO THE STARS! ✨";
    cakeStatusText.style.color = "var(--color-deep-rose)";
    blowCandlesBtn.innerHTML = `<span>🎉 Relive the Celebration!</span>`;

    // Massive festive celebration
    triggerRomanticConfetti();
    setTimeout(triggerRomanticConfetti, 600);
    setTimeout(triggerRomanticConfetti, 1200);

    // Reveal master birthday letter
    setTimeout(() => {
      unlockedWishBox.classList.remove('is-hidden');
      unlockedWishBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 900);
  }

  if (blowCandlesBtn) blowCandlesBtn.addEventListener('click', blowOutCandles);
  if (birthdayCake) birthdayCake.addEventListener('click', blowOutCandles);
  if (replayCelebrationBtn) replayCelebrationBtn.addEventListener('click', triggerRomanticConfetti);

  if (printKeepsakeBtn) {
    printKeepsakeBtn.addEventListener('click', () => {
      window.print();
    });
  }

  /* --------------------------------------------------------------------------
     M. GLOBAL KEYBOARD ACCESSIBILITY (Escape key closes modals)
     -------------------------------------------------------------------------- */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
      closeLetter();
      closeMobileDrawer();
    }
    if (e.key === 'ArrowLeft' && !imageLightbox.classList.contains('is-hidden')) {
      prevLightboxItem();
    }
    if (e.key === 'ArrowRight' && !imageLightbox.classList.contains('is-hidden')) {
      nextLightboxItem();
    }
  });

});

/* ==============================================================================
   9. CELEBRATION CONFETTI ENGINE
   ============================================================================== */
function triggerRomanticConfetti() {
  if (typeof confetti !== 'function') return;

  const romanticColors = ['#F4BFD0', '#C45A7A', '#F8DDE8', '#FFF1F5', '#D4AF37', '#FFFFFF'];

  // Left & right burst
  confetti({
    particleCount: 50,
    angle: 60,
    spread: 70,
    origin: { x: 0.1, y: 0.7 },
    colors: romanticColors
  });

  confetti({
    particleCount: 50,
    angle: 120,
    spread: 70,
    origin: { x: 0.9, y: 0.7 },
    colors: romanticColors
  });

  // Center golden star burst
  setTimeout(() => {
    confetti({
      particleCount: 80,
      spread: 100,
      origin: { y: 0.6 },
      colors: romanticColors,
      shapes: ['circle', 'square']
    });
  }, 300);
}

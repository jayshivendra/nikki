/**
 * ==============================================================================
 * A LITTLE UNIVERSE MADE FOR YOU — ROMANTIC BIRTHDAY MEMORY WEBSITE
 * JavaScript Interactive Features & Personalization Engine
 * ==============================================================================
 */

'use strict';

/* ==============================================================================
   1. USER PERSONALIZATION CONFIGURATION
   Customize these details easily to make this website 100% personal!
   ============================================================================== */
const CONFIG = {
  // Your girlfriend's name (displayed in letters, headings, and greetings)
  girlfriendName: "Nikila",

  // Your name (displayed as the sign-off in letters)
  boyfriendName: "Jay Shivendra",

  // Relationship start date or special anniversary date (YYYY-MM-DD format)
  // Used for the live "Every Second Is A Treasure" counter
  specialDate: "2023-06-18T00:00:00",

  // Audio settings (gentle web audio music box chime synthesizer)
  enableAmbientMusic: true,
};

/* ==============================================================================
   2. PHOTO MUSEUM DATA
   Add, change, or remove photos here.
   Categories available: 'radiance', 'cute', 'adventures', 'candid'
   ============================================================================== */
const photoMuseumData = [
  {
    id: 1,
    title: "Golden Hour Glow",
    caption: "The sunlight was competing with your smile, and it definitely lost ♡",
    category: "radiance",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    date: "A sunny afternoon"
  },
  {
    id: 2,
    title: "Coffee & Giggles",
    caption: "Trying to look serious with latte foam on your upper lip 😂",
    category: "cute",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
    date: "Sunday morning date"
  },
  {
    id: 3,
    title: "Lost in the Woods",
    caption: "Our weekend getaway when we got lost and loved every second.",
    category: "adventures",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    date: "Mountain trip"
  },
  {
    id: 4,
    title: "Sleepy Sunday Morning",
    caption: "Oversized sweater, messy bun, and the prettiest face in the world.",
    category: "candid",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
    date: "Cozy at home"
  },
  {
    id: 5,
    title: "Pure Starlight",
    caption: "Dressed up for dinner, making everyone in the room look twice ✨",
    category: "radiance",
    image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=800&q=80",
    date: "Anniversary night"
  },
  {
    id: 6,
    title: "Ice Cream Emergency",
    caption: "Refusing to share even one scoop, but offering a bite anyway 🍦",
    category: "cute",
    image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=800&q=80",
    date: "Summer boardwalk"
  },
  {
    id: 7,
    title: "Ocean Breeze",
    caption: "Watching waves wash over our bare feet until the sun went down.",
    category: "adventures",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    date: "Beach escape"
  },
  {
    id: 8,
    title: "Caught in the Act",
    caption: "Sneaking a late-night snack when you thought I was already asleep!",
    category: "candid",
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=800&q=80",
    date: "Midnight kitchen raid"
  }
];

/* ==============================================================================
   3. OPEN-WHEN LETTERS DATA
   Heartfelt letters for different emotional states & special days
   ============================================================================== */
const lettersData = {
  "miss-me": {
    category: "POSTCARD FROM THE HEART",
    title: "Open When You Miss Me",
    date: "Whenever Distance Feels Too Loud",
    body: `
      <p>My sweetheart,</p>
      <p>If you're reading this, your heart is feeling a little far from mine right now. Take a slow, deep breath. Look up at the sky wherever you are.</p>
      <p>Remember that no matter how many miles or hours stand between us, we are looking at the exact same moon and stars. Every beat of my heart is carrying love toward you.</p>
      <p>Close your eyes for three seconds and imagine my arms wrapped around your waist, pulling you close, with my chin resting on your head. I am always carrying you with me, in every thought and every quiet moment.</p>
      <p>Call or text me as soon as you finish reading this—I cannot wait to hear your voice.</p>
    `,
    photo: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=600&q=80",
    photoCaption: "My favorite place to be is beside you ♡",
    signoff: "Forever your biggest fan and your safe haven ♡"
  },
  "down-stressed": {
    category: "A GENTLE REASSURANCE",
    title: "Open When You're Feeling Down or Stressed",
    date: "For Heavy Shoulders & Tired Days",
    body: `
      <p>Hey my darling,</p>
      <p>First of all, unclench your jaw. Drop your shoulders away from your ears. Take a deep, slow breath right now. Hold it... and let it out.</p>
      <p>You carry so much on your shoulders, and you do it with such grace that people sometimes forget you are human too. It is completely okay to feel exhausted, overwhelmed, or tired today. You don't have to have everything figured out right this second.</p>
      <p>You have overcome 100% of the hardest days of your life up to this point. You are brilliant, capable, resilient, and deeply loved. Drink a glass of water, curl up under a soft blanket, and let me take care of you today.</p>
    `,
    photo: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=600&q=80",
    photoCaption: "Always here to hold your hand through the storm",
    signoff: "With all the comfort in my heart ♡"
  },
  "cant-sleep": {
    category: "MIDNIGHT LULLABY",
    title: "Open When You Can't Sleep",
    date: "Under the Midnight Stars",
    body: `
      <p>Hello my late-night angel,</p>
      <p>Is your brain doing that thing where it replays a thousand thoughts at 2:00 AM? Put your phone face-down after this, turn off the bright lights, and listen to the stillness.</p>
      <p>Imagine us lying side by side in a cool, dark room. The fan is whispering softly, the blankets are heavy and warm, and you have your head resting right over my chest. Hear that steady rhythm? That heartbeat belongs to you.</p>
      <p>Let all the worries of tomorrow wait until tomorrow. Tonight is only for resting. Close your lovely eyes, dream sweet dreams, and know that you are safe and cherished.</p>
    `,
    photo: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80",
    photoCaption: "Wishing I was there to cuddle you to sleep",
    signoff: "Goodnight, my dream come true ♡"
  },
  "need-reminder": {
    category: "TRUTH IN THE MIRROR",
    title: "Open When You Doubt Yourself",
    date: "A Gentle Reminder of Who You Are",
    body: `
      <p>My gorgeous girl,</p>
      <p>If you ever look in the mirror and forget how extraordinary you are, let me be your eyes for a moment.</p>
      <p>You have a mind that is quick and brilliant. You have a heart that feels things so deeply and loves so generously. You light up every room you walk into simply by being yourself—unfiltered, genuine, and kind.</p>
      <p>Never let a bad day, an unfair critique, or a fleeting insecurity trick you into thinking you are anything less than a masterpiece. You are rare, you are precious, and you are everything to me.</p>
    `,
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    photoCaption: "Breathtaking in every single way ♡",
    signoff: "Your number one admirer, forever ♡"
  },
  "silly-argument": {
    category: "PEACE & LOVE",
    title: "Open When We Had A Silly Disagreement",
    date: "Always On Your Team",
    body: `
      <p>My favorite person,</p>
      <p>If we just had a disagreement or things felt a bit tense, I want you to read this and remember one fundamental truth:</p>
      <p>It is always you and me together against the problem—never, ever you against me. I love you far more than any ego, stubbornness, or petty misunderstanding.</p>
      <p>If I said something clumsy or made you feel unheard, I am truly sorry. Nothing matters more to me than your smile and your peace of mind. Come find me, let me give you a tight hug, and let's laugh about how silly it was over some good food.</p>
    `,
    photo: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80",
    photoCaption: "We always find our way back to each other",
    signoff: "Yours through thick and thin ♡"
  },
  "birthday-day": {
    category: "BIRTHDAY BLESSING 🎂",
    title: "Open On Your Birthday Today!",
    date: "The Most Special Day of the Year",
    body: `
      <p>HAPPY BIRTHDAY, MY ENTIRE WORLD! 🌸🎉</p>
      <p>Today, the universe celebrates the day you arrived on this earth, and I celebrate the greatest gift life has ever handed me.</p>
      <p>Thank you for existing. Thank you for your warm hugs, your infectious laugh, your patience, and the unconditional love you give so freely. Being your partner is the greatest adventure of my life.</p>
      <p>I hope this year brings you wild success, peace of mind, endless laughter, and countless unforgettable moments. I promise to do everything in my power to make you feel loved not just today, but every single day of our lives.</p>
    `,
    photo: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=600&q=80",
    photoCaption: "Today is all about celebrating you! 🎂✨",
    signoff: "Happy Birthday, my forever love ♡"
  },
  "need-hug": {
    category: "VIRTUAL EMBRACE",
    title: "Open When You Need A Warm Hug",
    date: "Whenever You Need To Be Held",
    body: `
      <p>Hey baby,</p>
      <p>Consider this envelope a coupon for unlimited, tight, warm, warm hugs with zero expiration date.</p>
      <p>Put your hands on your shoulders right now and give yourself a gentle squeeze. Imagine that my arms are wrapped securely around you, shielding you from the rest of the noisy world.</p>
      <p>Whenever you are tired, you can always lean your head on my chest. I've got you. Always have, always will.</p>
    `,
    photo: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=600&q=80",
    photoCaption: "You will always have my shoulder to lean on",
    signoff: "Holding you tight, even in spirit ♡"
  },
  "proud-achievement": {
    category: "STAND & CHEER 🥂",
    title: "Open When You Did Something Amazing",
    date: "For Big Wins & Little Triumphs",
    body: `
      <p>YOU DID IT! 🌟🥂</p>
      <p>I knew you could! Even when you had moments of doubt or stress, I never doubted you for a single millisecond.</p>
      <p>Look at what your hard work, dedication, and heart created. You deserve every ounce of recognition and happiness you are feeling right now. I am so ridiculously proud to stand beside you and call you mine.</p>
      <p>Get ready, because tonight dinner and dessert are on me, and we are celebrating you properly!</p>
    `,
    photo: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=600&q=80",
    photoCaption: "Nobody shines brighter than you! ✨",
    signoff: "Cheering for you always and forever ♡"
  }
};

/* ==============================================================================
   4. REASONS YOU'RE SPECIAL (LOVE JAR CAPSULES)
   30+ sweet, endearing, funny reasons
   ============================================================================== */
const sweetReasons = [
  { text: "The way your eyes crinkle at the corners when you laugh genuinely hard.", tag: "#PureRadiance" },
  { text: "How you remember the smallest random facts about the people you love.", tag: "#YourThoughtfulSoul" },
  { text: "The adorable happy little dance you do when good food arrives at our table.", tag: "#CutestThingEver" },
  { text: "How safe and calm my heart feels the instant I hold your hand.", tag: "#MySafeHaven" },
  { text: "The sweet, sleepy little sigh you make right before you drift off to sleep.", tag: "#PreciousMoments" },
  { text: "How you look at stray animals with so much empathy and compassion.", tag: "#GoldenHeart" },
  { text: "Your passion when you talk about things that genuinely excite you.", tag: "#InspiringMe" },
  { text: "How you somehow make even the most boring grocery store trip feel fun.", tag: "#EverydayMagic" },
  { text: "The smell of your perfume lingering on my hoodie long after you leave.", tag: "#SweetReminders" },
  { text: "The way you always know when I need a hug, even before I say a word.", tag: "#SoulConnection" },
  { text: "How you sing along to songs in the car with 100% confidence, even with made-up lyrics.", tag: "#MyRockstar" },
  { text: "How gorgeous you look first thing in the morning with messy hair and no makeup.", tag: "#NaturalBeauty" },
  { text: "The determination in your eyes when you set your mind to a new goal.", tag: "#StrongAndFierce" },
  { text: "How you make me want to be the best version of myself every single day.", tag: "#MyInspiration" },
  { text: "The way your laugh can instantly turn around even my worst days.", tag: "#InstantSunshine" },
  { text: "Your warm forehead kisses when we are saying goodbye.", tag: "#TenderLove" },
  { text: "How cute you look when you're super focused with that slight brow furrow.", tag: "#AdorableConcentration" },
  { text: "The way we can communicate an entire inside joke with just one glance across the room.", tag: "#Telepathy" },
  { text: "How patiently you listen when I vent about my day.", tag: "#MyAnchor" },
  { text: "The fact that in a room full of people, my eyes will always search for you first.", tag: "#OnlyYou" },
  { text: "How you curl up into a tiny ball when you're cozy under blankets.", tag: "#MyPocketAngel" },
  { text: "How you believe in my dreams, even when I feel unsure of them myself.", tag: "#MyBiggestCheerleader" },
  { text: "Your gentle touch that can soothe away any headache or worry.", tag: "#HealingPresence" },
  { text: "How you look in my oversized jackets—1000 times cuter than on me.", tag: "#SheWoreItBetter" },
  { text: "The sweet notes and texts you leave that make my heart skip a beat.", tag: "#LittleTreasures" },
  { text: "How fiercely loyal and protective you are of the people you care about.", tag: "#LionHeart" },
  { text: "The way you hold onto my arm when we're walking down the street.", tag: "#RightWhereYouBelong" },
  { text: "How you make any house feel like a warm, loving home.", tag: "#HomeIsYou" },
  { text: "Because you are you—unapologetically, wonderfully, uniquely you.", tag: "#MyOneAndOnly" },
  { text: "And simply because loving you is the easiest, most natural thing I have ever done.", tag: "#ForeverAndAlways" }
];

/* ==============================================================================
   5. COUPLE QUIZ QUESTIONS
   Customizable romantic trivia questions
   ============================================================================== */
const quizQuestions = [
  {
    question: "What is my absolute favorite thing about your smile?",
    options: [
      "The way your entire face lights up",
      "The cute crinkle around your eyes",
      "How it makes my heart skip every single time",
      "All of the above (and a million more reasons!)"
    ],
    correctIndex: 3,
    reaction: "Spot on! There's no single reason—your smile is pure magic to me! 🥰"
  },
  {
    question: "If we had an entire free Sunday with zero obligations, what would we do?",
    options: [
      "Sleep in, make pancakes, and binge-watch movies in bed",
      "Go on a spontaneous road trip with windows down",
      "Try that cute cafe we saved months ago",
      "Anything, as long as we're doing it together"
    ],
    correctIndex: 3,
    reaction: "Exactly right! It never matters what we do, as long as I'm with you. 💕"
  },
  {
    question: "Who is more likely to steal the blankets in the middle of the night?",
    options: [
      "Definitely you (wrapped up like a human burrito)",
      "Me (accusing you falsely)",
      "The blanket magically falls off the bed",
      "We share equally like angels (lies!)"
    ],
    correctIndex: 0,
    reaction: "Haha guilty as charged! You burrito yourself every single time! 🌯😂"
  },
  {
    question: "What song or melody always instantly makes me think of you?",
    options: [
      "That romantic song playing on our first road trip",
      "The silly song we always sing together in the car",
      "Every single love song on the radio now",
      "All our shared playlist favorites"
    ],
    correctIndex: 2,
    reaction: "Truth! Ever since I met you, every love song suddenly made complete sense. 🎶"
  },
  {
    question: "What is the official verdict on how much I love you?",
    options: [
      "To the moon and back",
      "More than yesterday, less than tomorrow",
      "More than words could ever possibly explain",
      "An infinite amount that keeps growing every single second"
    ],
    correctIndex: 3,
    reaction: "A million percent! My love for you has no borders or end. Happy Birthday! 💖"
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

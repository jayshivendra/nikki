/* ==============================================================================
   CENTRALIZED PERSONALIZATION CONFIGURATION FOR JAY & NIKKI
   Easily replace photographs, messages, dates, and voice recordings here!
   ============================================================================== */
const NIKKI_CONFIG = {
  girlfriendName: "Nikki",
  fullName: "Nikila",
  birthdayDate: "27/10", // DD/MM format
  voiceMessageAudio: "audio/birthday-message.mp3", // Replaceable with assets/audio/birthday-message.mp3

  // Feature 3: Our Memories, Unfiltered ("The Photos That Didn't Make It to Instagram")
  unfilteredMemories: [
    {
      id: 1,
      image: "assets/memories/photo-01.jpg",
      fallback: "images/wall/wall-7.jpg",
      title: "The Unstoppable Giggles",
      caption: "Resting your chin on your hand with that goofy little smirk that instantly melts my heart ♡",
      tag: "Pure Joy • Candid"
    },
    {
      id: 2,
      image: "assets/memories/photo-02.jpg",
      fallback: "images/wall/wall-10.jpg",
      title: "Caught You Smiling",
      caption: "Looking away with that shy, knowing smile of yours. You always know how to make my heart flutter! 🌸",
      tag: "Caught on Camera"
    },
    {
      id: 3,
      image: "assets/memories/photo-03.jpg",
      fallback: "images/wall/wall-14.jpg",
      title: "Wind in Your Curls",
      caption: "Sunglasses resting on your head with leaves all around. Out in the breeze, you are the brightest view ✨",
      tag: "Summer Breeze"
    },
    {
      id: 4,
      image: "assets/memories/photo-04.jpg",
      fallback: "images/wall/wall-25.jpg",
      title: "The Silly Food Bite Face",
      caption: "Mid-laugh while teasing each other over snacks. These goofy moments are my favorite treasures 💖",
      tag: "Unfiltered Giggles"
    },
    {
      id: 5,
      image: "assets/memories/photo-05.jpg",
      fallback: "images/wall/wall-32.jpg",
      title: "Comfy & Real",
      caption: "No filters, no posing, just your honest, loving face. You are the kindest soul I will ever know 🏡",
      tag: "Cozy Afternoons"
    },
    {
      id: 6,
      image: "assets/memories/photo-06.jpg",
      fallback: "images/wall/wall-49.jpg",
      title: "Sweet Toddler Nostalgia",
      caption: "Round cheeks and sweet curious eyes in your pink hoodie! Born to be loved with all my heart ♡",
      tag: "Sweet & Real"
    }
  ],

  // Feature 4: The Mystery Gift Room (3 Surprises)
  mysteryGifts: {
    1: {
      title: "A Little Reminder",
      text: "You are the most genuinely kind, beautiful, and thoughtful soul I have ever known. Never forget how much warmth, laughter, and light you bring into my world just by being you ♡"
    },
    2: {
      title: "A Beautiful Memory",
      image: "images/wall/wall-13.jpg",
      text: "Standing together under the tall green trees in your gorgeous red suit. My favorite place in the whole wide universe will always be right next to you ♡"
    },
    3: {
      title: "Something From Me",
      text: "Recorded in my own voice, straight from my heart, just for your birthday. Press play below whenever you are ready ♡"
    }
  },

  // Feature 2: The Secret Final Letter
  secretLetter: {
    heading: "Nikki, there's something I've never properly told you...",
    text: "Nikki, when I first met you, I never imagined that one person could become my entire universe. In a world that is always rushing, you are my quiet peace, my sweetest comfort, and my brightest laughter. Thank you for listening to my stories, for holding my hand when things get hard, for your radiant smile that cures any bad day, and for choosing to love me. There is no one else like you, Nikila. Today, on your birthday, my only wish is for your eyes to always shine with joy, for your dreams to blossom, and for our journey together to keep growing more beautiful with every passing year. Happy Birthday, my sweetheart. Forever and always."
  },

  // Feature 5: The Night Sky of Our Memories (Constellation Map)
  constellationStars: [
    {
      id: "star-1",
      x: 15, // percent from left
      y: 35, // percent from top
      title: "College Food Bite Canteen",
      date: "Where Our Story Began",
      photo: "images/wall/wall-1.jpg",
      caption: "Sharing snacks and endless laughs in the college canteen, completely unaware our story was starting ♡"
    },
    {
      id: "star-2",
      x: 32,
      y: 20,
      title: "July 16th • The First Spark",
      date: "July 16, 7:45 PM",
      photo: "images/wall/wall-4.jpg",
      caption: "The life-changing text message that turned my whole world upside down in the sweetest way ✨"
    },
    {
      id: "star-3",
      x: 48,
      y: 42,
      title: "Spider-Man Premiere Date",
      date: "Movie Night Magic",
      photo: "images/wall/wall-14.jpg",
      caption: "Popcorn, holding hands in the dark, and smiling at each other more than looking at the screen 🍿"
    },
    {
      id: "star-4",
      x: 64,
      y: 25,
      title: "River Stream Adventure",
      date: "Mountain Waterways",
      photo: "images/wall/wall-42.jpg",
      caption: "Walking by the rushing mountain waters in your straw sun hat. Nature was beautiful, but you stole the show 🌊"
    },
    {
      id: "star-5",
      x: 78,
      y: 52,
      title: "October 3rd • 8 Sweet Kisses",
      date: "October 3",
      photo: "images/wall/wall-13.jpg",
      caption: "Under the gentle sky together. Exactly 8 tender kisses that I will treasure for the rest of my life 💋"
    },
    {
      id: "star-6",
      x: 90,
      y: 30,
      title: "Today • Your Birthday Constellation",
      date: "October 27, 2026",
      photo: "images/hero-1.jpg",
      caption: "Celebrating the most extraordinary girl under the stars. Happy Birthday, Nikila! 🎂✨"
    }
  ],

  // Feature 8: Our Next Chapters (Bucket List Activities)
  nextChaptersList: [
    { id: 1, title: "Try a new food place", desc: "Hunting down the crispiest biryani, waffles, and street chaat together.", icon: "🍜" },
    { id: 2, title: "Watch another movie premiere", desc: "Late-night popcorn, big screen, and sneaking giggles in the dark.", icon: "🎬" },
    { id: 3, title: "Take 100 cute candid photos", desc: "A spontaneous photoshoot where neither of us can stop laughing.", icon: "📸" },
    { id: 4, title: "Explore a new hill station", desc: "Morning mountain mist, cozy sweaters, and hot tea in your hand.", icon: "🌲" },
    { id: 5, title: "Bake or cook something silly", desc: "Messy kitchen, flour on our noses, and delicious homemade treats.", icon: "🧁" },
    { id: 6, title: "Stargazing on a quiet rooftop", desc: "Blankets, cold night air, and talking about our future until 3 AM.", icon: "🌌" },
    { id: 7, title: "Celebrate your next birthday", desc: "Being right by your side to make next year even more magical than this one.", icon: "🎂" },
    { id: 8, title: "Create another unforgettable memory", desc: "Every single day with you is already my favorite page in life.", icon: "💖" }
  ]
};

const allWallPhotosData = [
  { id: 1, src: "images/wall/wall-1.jpg", title: "My Favorite Smile in the World", caption: "Sitting in your room with that sweet, gentle smile that instantly makes everything in my life feel so calm and complete ♡", category: "cute", tag: "🌸 Sweet Smile" },
  { id: 2, src: "images/wall/wall-2.jpg", title: "Baby Nikki in Pink", caption: "The cutest little angel in her pink hoodie! Who knew this tiny baby would grow up into the sweetest love of my entire life? 💖", category: "nostalgia", tag: "🧸 Childhood Days" },
  { id: 3, src: "images/wall/wall-3.jpg", title: "Breathtaking in Red Saree", caption: "Mirror selfie in your rich red saree and delicate jhumkas. Every time you wear a saree, my heart skips ten beats in a row ✨", category: "traditional", tag: "✨ Saree Grace" },
  { id: 4, src: "images/wall/wall-4.jpg", title: "Sunlit Hallway Glow", caption: "Walking down the hall with natural sunlight falling softly across your face. You look so effortlessly radiant, my love ♡", category: "cute", tag: "☀️ Sunlit Radiance" },
  { id: 5, src: "images/wall/wall-5.jpg", title: "Doodle Sparkle Princess", caption: "Little hand-drawn sparkles and hearts framing your beaming face. Playful, charming, and the purest soul I will ever know ✨", category: "cute", tag: "💫 Doodle Magic" },
  { id: 6, src: "images/wall/wall-6.jpg", title: "Those Gorgeous Eyes", caption: "I could look into those deep, beautiful brown eyes for hours and never want to look at anything else in this world ♡", category: "cute", tag: "👀 Beautiful Eyes" },
  { id: 7, src: "images/wall/wall-7.jpg", title: "The Chin-Resting Pose", caption: "Resting your chin on your hand with that charming little smirk. This is officially one of my all-time favorite photos of you 🌸", category: "cute", tag: "🌸 Cute Moments" },
  { id: 8, src: "images/wall/wall-8.jpg", title: "Timeless Monochrome Beauty", caption: "Black and white portrait where your soft curls and gentle gaze look like a vintage romantic film still. Pure elegance 🎞️", category: "cute", tag: "🎞️ Classic Romance" },
  { id: 9, src: "images/wall/wall-9.jpg", title: "Quiet Peace at Home", caption: "A candid glimpse of you in your quiet comfort. Even in black and white, your warmth fills up the entire room ♡", category: "cute", tag: "🏡 Cozy Moments" },
  { id: 10, src: "images/wall/wall-10.jpg", title: "That Soft Subtle Grin", caption: "Looking slightly away with that shy, knowing smile of yours. You always know exactly how to make my heart flutter 💕", category: "cute", tag: "💕 Sweet Nikki" },
  { id: 11, src: "images/wall/wall-11.jpg", title: "A Glimpse into Your Soul", caption: "A close-up of your expressive eyes and tiny black bindi. There is so much kindness, innocence, and wonder held in your gaze ✨", category: "cute", tag: "✨ Soulful Eyes" },
  { id: 12, src: "images/wall/wall-12.jpg", title: "Little Nikki's First Steps", caption: "Toddler Nikki in little yellow pants holding her favorite toy! Look at that proud little smile destined to steal my heart 🧸", category: "nostalgia", tag: "🧸 Little Nikki" },
  { id: 13, src: "images/wall/wall-13.jpg", title: "Jay & Nikki: Standing Together", caption: "Under the green trees together! You in your gorgeous red suit and me beside you. There is nowhere on earth I would rather be ♡", category: "couple", tag: "💕 Jay & Nikki" },
  { id: 14, src: "images/wall/wall-14.jpg", title: "Summer Shades & Green Leaves", caption: "Sunglasses resting on your head with lush green leaves all around. Out here in the sunshine, you are the brightest view 🌿", category: "adventures", tag: "🌿 Outdoor Days" },
  { id: 15, src: "images/wall/wall-15.jpg", title: "The Park Pathway Walk", caption: "Smiling brightly under the tree canopy. Strolling through the park with you always turns an ordinary day into magic ♡", category: "adventures", tag: "🌿 Garden Stroll" },
  { id: 16, src: "images/wall/wall-16.jpg", title: "Princess in White Lace", caption: "Full-length mirror portrait in your delicate white dress. You look like you just walked right out of a fairytale, Nikila ✨", category: "traditional", tag: "✨ Royal Elegance" },
  { id: 17, src: "images/wall/wall-17.jpg", title: "Botanical Garden Serenity", caption: "Surrounded by garden greenery, looking so peaceful, grounded, and sweet. The flowers in the background have nothing on you 🌷", category: "adventures", tag: "🌷 In Bloom" },
  { id: 18, src: "images/wall/wall-18.jpg", title: "Evening Warmth & Cozy Glow", caption: "Soft evening lamp light catching your smile. Just a simple night at home, but with you, every simple moment is priceless ♡", category: "cute", tag: "🌙 Cozy Evenings" },
  { id: 19, src: "images/wall/wall-19.jpg", title: "Blue Florals & Bright Smiles", caption: "Wearing blue floral patterns with your long curls cascading down. Your smile can genuinely cure any bad day I ever have 💕", category: "cute", tag: "🌸 Sweet Smile" },
  { id: 20, src: "images/wall/wall-20.jpg", title: "Twinkling Little Star", caption: "Playful photo doodles around my favorite person! You bring so much light and joy into my life every single day ✨", category: "cute", tag: "💫 Starry Nikki" },
  { id: 21, src: "images/wall/wall-21.jpg", title: "The Sweetest Head Tilt", caption: "That trademark little head tilt when you are smiling back at me. I could spend a lifetime falling in love with this face ♡", category: "cute", tag: "🌸 Pure Cutie" },
  { id: 22, src: "images/wall/wall-22.jpg", title: "Unfiltered Happiness", caption: "A wide, radiant grin that shows your whole happy soul. When you are this happy, my whole world feels completely at ease 💖", category: "cute", tag: "💖 Radiant Joy" },
  { id: 23, src: "images/wall/wall-23.jpg", title: "Looking Right at Me", caption: "Direct eye contact that makes my pulse race even after all this time. You will always be my absolute favorite view ♡", category: "cute", tag: "👀 Tender Gaze" },
  { id: 24, src: "images/wall/wall-24.jpg", title: "Gentle Shadows & Warm Heart", caption: "Soft shadows falling across the room while your gentle expression warms up my entire screen. So natural, so lovely 🌷", category: "cute", tag: "🌷 Natural Beauty" },
  { id: 25, src: "images/wall/wall-25.jpg", title: "Lost in Sweet Thoughts", caption: "Resting your cheek on your hand, lost in thought. I wonder if you were thinking of our college food dates or our next adventure? ♡", category: "cute", tag: "💭 Sweet Dreams" },
  { id: 26, src: "images/wall/wall-26.jpg", title: "Both Hands Supporting That Smile", caption: "Propping up your chin with both hands like an adorable kid! How can one girl be this cute without even trying? 💕", category: "cute", tag: "🌸 Adorable Nikki" },
  { id: 27, src: "images/wall/wall-27.jpg", title: "Hand on Cheek Perfection", caption: "A classic Nikki pose that melts my heart into a puddle every single time I see it. You are utterly precious to me ♡", category: "cute", tag: "🌸 Melting My Heart" },
  { id: 28, src: "images/wall/wall-28.jpg", title: "Eyes That Sparkle Like Stars", caption: "Look at that mischievous, sparkling laugh! You have this incredible power to make me smile no matter what kind of day it was ✨", category: "cute", tag: "✨ Sparkling Eyes" },
  { id: 29, src: "images/wall/wall-29.jpg", title: "Serene & Peaceful Nikki", caption: "A moment of calm grace. Seeing you peaceful brings an overwhelming sense of quiet comfort straight to my heart 🕊️", category: "cute", tag: "🕊️ Calm Grace" },
  { id: 30, src: "images/wall/wall-30.jpg", title: "My Favorite Notification", caption: "Whenever you send a selfie like this, my phone screen lights up and my whole heart leaps with pure joy ♡", category: "cute", tag: "💌 Best Notification" },
  { id: 31, src: "images/wall/wall-31.jpg", title: "Dreamy Distant Gaze", caption: "Looking gently off-camera with soft natural light framing your face. Breathtaking in every single dimension ✨", category: "cute", tag: "✨ Dreamy Gaze" },
  { id: 32, src: "images/wall/wall-32.jpg", title: "Pure, Honest Warmth", caption: "No filters, no posing, just your honest, loving face. You are the kindest, most supportive person I have ever known 💖", category: "cute", tag: "💖 Pure Soul" },
  { id: 33, src: "images/wall/wall-33.jpg", title: "Cascading Natural Curls", caption: "I love your natural waves and how they frame your sweet smile. Every single detail of you is my favorite thing ♡", category: "cute", tag: "🌸 Natural Curls" },
  { id: 34, src: "images/wall/wall-34.jpg", title: "Big Inquisitive Eyes", caption: "Looking up with wide, curious eyes that make you look so sweet and endearing. I just want to protect that innocence forever 🌸", category: "cute", tag: "🌸 Precious Nikki" },
  { id: 35, src: "images/wall/wall-35.jpg", title: "Soft Dim Lighting, Bright Heart", caption: "Even in the dimmest room, your radiance shines brighter than any lamp. You are the literal light of my universe ✨", category: "cute", tag: "✨ Glowing Light" },
  { id: 36, src: "images/wall/wall-36.jpg", title: "Late Night Smiles", caption: "Sweet late-night conversations where we lose track of time talking about our future, our dreams, and us ♡", category: "cute", tag: "🌙 Late Night Talks" },
  { id: 37, src: "images/wall/wall-37.jpg", title: "Side-Swept Charm", caption: "Hair swept gently to the side, looking so effortless, confident, and stunning. My girlfriend is genuinely gorgeous 💕", category: "cute", tag: "💕 Gorgeous Nikki" },
  { id: 38, src: "images/wall/wall-38.jpg", title: "Golden Hour Sunlight Kiss", caption: "Golden rays pouring through the window, catching your red dress and warming your cheeks. Golden hour belongs to you ☀️", category: "traditional", tag: "☀️ Golden Hour" },
  { id: 39, src: "images/wall/wall-39.jpg", title: "Looking Out Over the Green Terraces", caption: "Sun hat on, standing above lush mountain rice fields and rolling hills. Exploring this beautiful world with you is my lifelong dream 🌿", category: "adventures", tag: "🌿 Mountain Views" },
  { id: 40, src: "images/wall/wall-40.jpg", title: "My Comfort Person", caption: "No matter how stressed or emotional I get, one look at this sweet face reminds me that everything is going to be okay ♡", category: "cute", tag: "🏡 My Home" },
  { id: 41, src: "images/wall/wall-41.jpg", title: "Blue Skies & Rolling Hills", caption: "Standing high up against puffy white clouds and green peaks in your sky-blue dress. Freedom, beauty, and you ☁️", category: "adventures", tag: "☁️ Cloud High" },
  { id: 42, src: "images/wall/wall-42.jpg", title: "By the River Stream", caption: "Standing by the flowing mountain waters in your straw sun hat. Nature looks beautiful, but Nikki, you stole the whole show 🌊", category: "adventures", tag: "🌊 River Breeze" },
  { id: 43, src: "images/wall/wall-43.jpg", title: "Admiring the River Rapids", caption: "Watching the water rush over river stones. Moments like this remind me of how peaceful life is when you are next to me 🌿", category: "adventures", tag: "🌿 Forest Stream" },
  { id: 44, src: "images/wall/wall-44.jpg", title: "Wandering River Stones", caption: "Stepping carefully along the river bank. Every step we take together in nature is etched into my favorite memories forever ♡", category: "adventures", tag: "🌿 Scenic Wanders" },
  { id: 45, src: "images/wall/wall-45.jpg", title: "Warm Afternoon Sun by the Boulders", caption: "Walking near river boulders under the bright sunny sky. The world feels so vast, yet my whole universe fits in your hand ☀️", category: "adventures", tag: "☀️ Sunny Trails" },
  { id: 46, src: "images/wall/wall-46.jpg", title: "Forest Trail Information Board", caption: "Standing proudly beside the pine forest fact board with that cute explorer look! My favorite adventure partner in life 🌲", category: "adventures", tag: "🌲 Forest Explorer" },
  { id: 47, src: "images/wall/wall-47.jpg", title: "Endless Green Horizons", caption: "Admiring the sweeping mountain horizon. There is a whole world out there for us to travel, eat biryani, and explore together 🗺️", category: "adventures", tag: "🗺️ Future Horizons" },
  { id: 48, src: "images/wall/wall-48.jpg", title: "Leaning on a Tall Pine", caption: "Among giant pine trees with cool mountain breeze. Wearing your sunglasses and sun hat like a true cinematic heroine ✨", category: "adventures", tag: "🌲 Pine Serenity" },
  { id: 49, src: "images/wall/wall-49.jpg", title: "Toddler Nikki's Curious Look", caption: "Look at those round cheeks and sweet big eyes in the pink hoodie! Truly born to be loved with all my heart 🧸", category: "nostalgia", tag: "🧸 Baby Memories" },
  { id: 50, src: "images/wall/wall-50.jpg", title: "Little Nikki Standing Proud", caption: "Standing right on the rug with her tiny toy, ready to take on the world. Baby Nikki, you grew into the love of my life 🌸", category: "nostalgia", tag: "🧸 Tiny Steps" },
  { id: 51, src: "images/wall/wall-51.jpg", title: "Holding Her Hat on River Rocks", caption: "Holding down your sun hat against the mountain wind! Such a lively, joyful, unforgettable moment in the open air 💨", category: "adventures", tag: "💨 Mountain Wind" },
  { id: 52, src: "images/wall/wall-52.jpg", title: "Golden Silk & Traditional Braid", caption: "Dressed in elegant beige silk salwar with a classic long braid. Traditional, modest, and undeniably gorgeous ✨", category: "traditional", tag: "✨ Ethnic Grace" },
  { id: 53, src: "images/wall/wall-53.jpg", title: "Glasses & Red Hair Flower", caption: "Rocking those stylish glasses with a red blossom tucked into your hair! Adorably bookish and breathtakingly cute 👓", category: "cute", tag: "🌸 Floral Glasses" },
  { id: 54, src: "images/wall/wall-54.jpg", title: "Mint Green Serenity with Bindi", caption: "Soft mint green kurti, a delicate black bindi, and that serene smile. You have an inner grace that shines effortlessly ♡", category: "traditional", tag: "✨ Mint Grace" },
  { id: 55, src: "images/wall/wall-55.jpg", title: "Golden Silk Glow at Home", caption: "Wearing golden silk under soft indoor light, hair flowing freely over your shoulder. Timeless, refined, and so dear to me ✨", category: "traditional", tag: "✨ Golden Nikki" },
  { id: 56, src: "images/wall/wall-56.jpg", title: "Mint Green Mirror Selfie", caption: "Holding your white phone with that cute little expression in the mirror! Even a quick snapshot of you is pure art 💕", category: "cute", tag: "📱 Mirror Selfie" },
  { id: 57, src: "images/wall/wall-57.jpg", title: "Pink Floral Kurti by the Wardrobe", caption: "A candid moment in bright pink embroidery. The color pink was definitely invented just for you, Bangaram 🌸", category: "cute", tag: "🌸 Pretty in Pink" },
  { id: 58, src: "images/wall/wall-58.jpg", title: "Desk Study Break Smile", caption: "Taking a quick break from studying to smile at the camera. Always working hard, always shining bright. So proud of you! 📚", category: "cute", tag: "📚 Study Break" },
  { id: 59, src: "images/wall/wall-59.jpg", title: "Orange Flower in Her Hair", caption: "That cheerful, infectious grin with a vibrant flower tucked behind your ear. You make the whole world feel lighter and sweeter 🌼", category: "cute", tag: "🌼 Flower in Hair" },
  { id: 60, src: "images/wall/wall-60.jpg", title: "Heart Hands on the Wooden Bridge", caption: "Standing high on the suspension bridge making a heart with your arms! Playful, loving, and full of pure joy 💕", category: "adventures", tag: "💕 Bridge of Love" },
  { id: 61, src: "images/wall/wall-61.jpg", title: "Fresh & Glowing Natural Beauty", caption: "Damp hair after a fresh wash, glowing skin, and a genuine smile. You never need anything extra to look absolute perfection ✨", category: "cute", tag: "✨ Fresh Radiance" },
  { id: 62, src: "images/wall/wall-62.jpg", title: "Gazing Out into the Treetops", caption: "Resting your hands on the wooden bridge railing, looking out over the canopy. A moment of pure nature and peaceful reflection 🌲", category: "adventures", tag: "🌲 Nature Canopy" },
  { id: 63, src: "images/wall/wall-63.jpg", title: "Breeze Across the Suspension Bridge", caption: "Feeling the fresh mountain breeze on the wooden walkway in your pink outfit. Adventures with you will always be my favorite 🌿", category: "adventures", tag: "🌿 Bridge Breeze" },
  { id: 64, src: "images/wall/wall-64.jpg", title: "Under the Red Floral Arches", caption: "Walking through the park beneath arches of blooming red bougainvillea flowers. A real-life fairy walking through her garden 🌺", category: "adventures", tag: "🌺 Floral Arches" },
  { id: 65, src: "images/wall/wall-65.jpg", title: "Smiling on the Rustic Bridge", caption: "Pausing in the middle of the bridge with that bright, happy smile. Every photo of this trip holds a piece of my heart ♡", category: "adventures", tag: "🌿 Bridge Memories" },
  { id: 66, src: "images/wall/wall-66.jpg", title: "The Grand Garden Promenade", caption: "Full perspective of the wide floral walkway with palm trees towering high above. You are the star of every scenery 🌴", category: "adventures", tag: "🌴 Garden Promenade" },
  { id: 67, src: "images/wall/wall-67.jpg", title: "Palm Fronds & Bright Eyes", caption: "Framed by lush tropical greenery and tall bamboo groves. Wandering pathways with your hand in mine is heaven on earth 🌿", category: "adventures", tag: "🌿 Tropical Days" },
  { id: 68, src: "images/wall/wall-68.jpg", title: "Golden Silk & Festive Light", caption: "Dressed up for celebrations in golden silk attire. You carry yourself with such poise, dignity, and warmth ✨", category: "traditional", tag: "✨ Festive Gold" },
  { id: 69, src: "images/wall/wall-69.jpg", title: "Traditional Necklace & Warm Grin", caption: "Glimmering gold jewelry, traditional festive dress, and that shy, heart-melting grin. Breathtaking doesn't even begin to cover it 💖", category: "traditional", tag: "✨ Golden Radiance" },
  { id: 70, src: "images/wall/wall-70.jpg", title: "Regal Festive Elegance", caption: "Looking like royalty in your festive gold outfit. You captivate my heart every single second of every single day ♡", category: "traditional", tag: "✨ Royal Nikki" },
  { id: 71, src: "images/wall/wall-71.jpg", title: "Teal & Maroon Saree by the Window", caption: "Sitting gracefully on the velvet sofa in rich teal silk with dark maroon border. A masterpiece of traditional Indian beauty 🦚", category: "traditional", tag: "✨ Silk Saree Queen" },
  { id: 72, src: "images/wall/wall-72.jpg", title: "Festive Orange Dupatta & Charm", caption: "Full-length festive portrait in radiant orange traditional suit. You bring so much energy, color, and life everywhere you step 🧡", category: "traditional", tag: "🧡 Radiant Orange" },
  { id: 73, src: "images/wall/wall-73.jpg", title: "Traditional Family Blessings", caption: "Seated gracefully with family elders during festive ceremonies, surrounded by love, sweets, and blessings. Pure family warmth 🪔", category: "traditional", tag: "🪔 Family Blessings" },
  { id: 74, src: "images/wall/wall-74.jpg", title: "Pink Kurti Sweet Expression", caption: "A candid glance in your bright pink dress. You have the softest heart, and I am so blessed to be the boy who loves you 💕", category: "cute", tag: "💕 Sweet Expression" },
  { id: 75, src: "images/wall/wall-75.jpg", title: "Maroon Zari Saree Mirror Glam", caption: "Mirror selfie wearing your stunning maroon saree with gleaming silver zari. Truly the most gorgeous girl in the universe ✨", category: "traditional", tag: "✨ Zari Saree Glam" },
  { id: 76, src: "images/wall/wall-76.jpg", title: "Open Curls & Loving Eyes", caption: "Hair flowing freely around your shoulders, looking straight into the camera with so much affection. I love you endlessly, Nikki ♡", category: "cute", tag: "🌸 Loving Eyes" },
  { id: 77, src: "images/wall/wall-77.jpg", title: "Emerald Green Festive Mirror Selfie", caption: "Holding your phone in a vibrant emerald green kurti. Green suits you so beautifully, highlighting that natural golden glow 💚", category: "traditional", tag: "💚 Emerald Glow" },
  { id: 78, src: "images/wall/wall-78.jpg", title: "Plum Half-Saree & Gold Necklace", caption: "Taking a mirror selfie in plum and gold half-saree with delicate traditional jewelry. A vision of pure ethnic perfection 👑", category: "traditional", tag: "👑 Half-Saree Princess" },
  { id: 79, src: "images/wall/wall-79.jpg", title: "Mustard Yellow Sharara Gaze", caption: "Dressed in bright mustard yellow sharara, looking up with wonder at the twinkling fairy-light and flower backdrop ✨", category: "traditional", tag: "💛 Yellow Sharara" },
  { id: 80, src: "images/wall/wall-80.jpg", title: "Warm Midnight Smile", caption: "A cozy late-night selfie with that gentle, heartwarming look that makes any distance between us feel so small ♡", category: "cute", tag: "🌙 Midnight Love" },
  { id: 81, src: "images/wall/wall-81.jpg", title: "Graceful Downward Glance", caption: "Looking down with gentle modesty in your yellow embroidered outfit against the shimmering rose wall. Pure grace 🌸", category: "traditional", tag: "✨ Modest Grace" },
  { id: 82, src: "images/wall/wall-82.jpg", title: "Shimmering Floral Backdrop", caption: "Standing tall in your mustard yellow sharara suit, completely outshining the glittering sequin backdrop behind you 🌟", category: "traditional", tag: "🌟 Shimmering Star" },
  { id: 83, src: "images/wall/wall-83.jpg", title: "Showing Off the Embroidery", caption: "Elegant side pose displaying the beautiful embroidery of your festive suit. Every angle of you is pure perfection ✨", category: "traditional", tag: "✨ Festive Detail" },
  { id: 84, src: "images/wall/wall-84.jpg", title: "Golden Yellow Radiance", caption: "A bright, confident smile that lights up the whole celebration. You are always the most captivating person in any room 💛", category: "traditional", tag: "💛 Bright Radiance" },
  { id: 85, src: "images/wall/wall-85.jpg", title: "By the Sequin Flower Arch", caption: "Posing sweetly in front of the festive flower arch. You look like a princess celebrating her favorite festival 🌸", category: "traditional", tag: "🌸 Flower Arch" },
  { id: 86, src: "images/wall/wall-86.jpg", title: "Playful Yellow Celebration Pose", caption: "That cute little celebratory pose! Your playful, adorable personality is one of the thousand reasons I fell for you 💕", category: "traditional", tag: "💕 Playful Spirit" },
  { id: 87, src: "images/wall/wall-87.jpg", title: "Blush Pink Lehenga by the Window", caption: "Looking down gracefully at your blush pink pleated lehenga skirt. You look like an absolute dream in pastel pinks 🌸", category: "traditional", tag: "🌸 Pastel Dream" },
  { id: 88, src: "images/wall/wall-88.jpg", title: "Window Silhouette & Flower Hairpiece", caption: "Side silhouette by the hotel window with a delicate blossom pinned in your hair and deep maroon dupatta. Pure poetry ✨", category: "traditional", tag: "✨ Poetic Silhouette" },
  { id: 89, src: "images/wall/wall-89.jpg", title: "Full-Length Festive Glory", caption: "Full-length portrait in mustard yellow against the glittering event backdrop. Stunning, elegant, and unforgettable 💛", category: "traditional", tag: "💛 Golden Glory" },
  { id: 90, src: "images/wall/wall-90.jpg", title: "Adjusting Her Blossom by the Glass", caption: "Reaching up to touch the flower in your hair while looking out over the city. A candid, cinematic glimpse of my favorite girl 🌷", category: "traditional", tag: "🌷 Window Blossom" },
  { id: 91, src: "images/wall/wall-91.jpg", title: "Close-Up Candid in Maroon", caption: "A close-up selfie in your maroon outfit. Your genuine, gentle smile here is proof that true beauty comes from a kind heart ♡", category: "cute", tag: "💖 Gentle Heart" },
  { id: 92, src: "images/wall/wall-92.jpg", title: "Looking at the Skyline", caption: "Holding back the curtain to gaze at the high-rise cityscape. You deserve all the beauty and wonders this world has to offer 🌆", category: "traditional", tag: "🌆 City Dreams" },
  { id: 93, src: "images/wall/wall-93.jpg", title: "Natural Daytime Charm", caption: "Warm, natural daylight illuminating your sweet smile. You never need heavy filters—your natural smile is everything to me 💕", category: "cute", tag: "☀️ Daylight Charm" },
  { id: 94, src: "images/wall/wall-94.jpg", title: "Quiet Skyline Reflection", caption: "Standing by the high-rise window, watching the clouds drift by. Building a bright, beautiful future with you is my ultimate dream ☁️", category: "traditional", tag: "☁️ Future Dreams" },
  { id: 95, src: "images/wall/wall-95.jpg", title: "Blush Pink & Maroon Mirror Glam", caption: "Mirror selfie in your blush pink skirt and maroon dupatta. The combination of colors is breathtaking on you, Nikila ✨", category: "traditional", tag: "✨ Pastel Glam" },
  { id: 96, src: "images/wall/wall-96.jpg", title: "Breeze Through Her Hair on the Terrace", caption: "Outdoor terrace candid running your hand through your hair in a cute printed sundress! Effortlessly chic, vibrant, and lovely 🌿", category: "cute", tag: "🌿 Terrace Breeze" },
  { id: 97, src: "images/wall/wall-97.jpg", title: "Blue & White Patterned Kurti", caption: "Mirror selfie in your casual blue patterned outfit with hair up. Even on regular casual days, you look so effortlessly cute 💙", category: "cute", tag: "💙 Casual Beauty" },
  { id: 98, src: "images/wall/wall-98.jpg", title: "Jay & Nikki: Laughing Together", caption: "The two of us sitting together, looking up and laughing from our souls! Through every fight, tear, and joy, we always belong together 💕", category: "couple", tag: "💕 Jay & Nikki" },
  { id: 99, src: "images/wall/wall-99.jpg", title: "Cozy Bedroom Curls", caption: "Relaxing in your room with gorgeous voluminous curls framing your face. Soft, sweet, and comforting beyond words ♡", category: "cute", tag: "🏡 Cozy Love" },
  { id: 100, src: "images/wall/wall-100.jpg", title: "Black Bindi & Timeless Grace", caption: "That tiny black bindi resting right between your eyebrows and that breathtaking smile. You take my breath away every single time ✨", category: "traditional", tag: "✨ Black Bindi Grace" },
  { id: 101, src: "images/wall/wall-101.jpg", title: "Gentle Plum Silk Eyes", caption: "Dressed in soft plum silk with kind, affectionate eyes looking right into mine. I am the luckiest boy alive to call you mine 💖", category: "traditional", tag: "💖 My Forever Girl" },
  { id: 102, src: "images/wall/wall-102.jpg", title: "Intertwined Hands • October 3rd Promise", caption: "Our fingers tightly intertwined, red sacred thread on the wrist, and an unbreakable eternal promise: I will never let you go, Nikki ♡", category: "couple", tag: "🤝 Holding Hands Forever" },
  { id: 103, src: "images/wall/wall-103.jpg", title: "Mauve Dress & Gold Pendant", caption: "Mirror selfie wearing your delicate mauve-pink dress and gold chain. The sweetest, most loving soul in my entire universe 🌸", category: "cute", tag: "🌸 Sweetest Soul" }
];

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
    title: "Pine Forest Serenity",
    caption: "Sun hat on, tall pines all around, but you are the only view that took my breath away ♡",
    category: "adventures",
    image: "images/museum-1.jpg",
    fallback: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    date: "Forest Adventure"
  },
  {
    id: 2,
    title: "Traditional Elegance in Pink",
    caption: "A princess in pink lehenga and maang tikka, looking like pure royalty in the mirror ✨",
    category: "radiance",
    image: "images/museum-2.jpg",
    fallback: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    date: "Festive Glamour"
  },
  {
    id: 3,
    title: "The Red Saree Magic",
    caption: "Every time you wear a saree, my heart skips ten beats in a row. Absolutely breathtaking ♡",
    category: "radiance",
    image: "images/museum-3.jpg",
    fallback: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
    date: "Saree Grace"
  },
  {
    id: 4,
    title: "Heart on the Bridge",
    caption: "Making a heart with your hands above your head, being your playful, adorable self 💕",
    category: "cute",
    image: "images/museum-4.jpg",
    fallback: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=800&q=80",
    date: "Wooden Bridge Fun"
  },
  {
    id: 5,
    title: "Little Angel • Baby Nikila",
    caption: "The cutest little baby in a pink hoodie who grew up into the love of my life 🌸 (SURPRISE!)",
    category: "cute",
    image: "images/museum-5.jpg",
    fallback: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=800&q=80",
    date: "Baby Nikki Days"
  },
  {
    id: 6,
    title: "Tiny Steps • Toddler Nikki",
    caption: "Look at that proud little smile! Destined to conquer the world and steal my whole heart ♡",
    category: "cute",
    image: "images/museum-6.jpg",
    fallback: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=800&q=80",
    date: "Little Explorer"
  },
  {
    id: 7,
    title: "By the River & Mountains",
    caption: "Sun hat, river rocks, and endless blue skies. Wandering the world with you is my dream 🌿",
    category: "adventures",
    image: "images/museum-7.jpg",
    fallback: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    date: "Scenic Getaway"
  },
  {
    id: 8,
    title: "The Garden Pathway",
    caption: "Under the red floral arches, walking through greenery with that bright, gentle smile ✨",
    category: "adventures",
    image: "images/museum-8.jpg",
    fallback: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=800&q=80",
    date: "Park Stroll"
  },
  {
    id: 9,
    title: "A Gentle Breeze",
    caption: "Playing with your hair as the wind blows, looking so effortless, radiant, and lovely 🌷",
    category: "candid",
    image: "images/museum-9.jpg",
    fallback: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
    date: "City Garden"
  },
  {
    id: 10,
    title: "Windowpane Reverie",
    caption: "Gazing out over the city in your silk saree—the epitome of calm, quiet elegance.",
    category: "candid",
    image: "images/museum-10.jpg",
    fallback: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
    date: "Quiet Thoughts"
  },
  {
    id: 11,
    title: "Golden Hour Glow",
    caption: "Warm evening light illuminating your smile—you are the brightest sunshine in my life 🌅",
    category: "radiance",
    image: "images/museum-11.jpg",
    fallback: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80",
    date: "Sunset Glow"
  },
  {
    id: 12,
    title: "Festive Sunshine",
    caption: "Dressed in lime yellow against the floral backdrop, lighting up the entire room with joy ✨",
    category: "radiance",
    image: "images/museum-12.jpg",
    fallback: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    date: "Celebration Day"
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
    photo: "images/letter-1.jpg",
    fallback: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=600&q=80",
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
    photo: "images/letter-2.jpg",
    fallback: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=600&q=80",
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
    photo: "images/letter-3.jpg",
    fallback: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80",
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
    photo: "images/letter-4.jpg",
    fallback: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
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
    photo: "images/letter-5.jpg",
    fallback: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=600&q=80",
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
    photo: "images/letter-6.jpg",
    fallback: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80",
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
    photo: "images/letter-7.jpg",
    fallback: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
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
    photo: "images/letter-8.jpg",
    fallback: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=600&q=80",
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
/* ==============================================================================
   7. WEB AUDIO API: DREAMY ROMANTIC MUSIC BOX & PIANO HARP
   Plays a lush, emotional, polyphonic romantic waltz melody (inspired by
   beloved love ballads) with rich bass, warm chords, and celesta bell overtones!
   ============================================================================== */
class RomanticMusicBox {
  constructor() {
    this.audioCtx = null;
    this.isPlaying = false;
    this.timer = null;
    this.currentStep = 0;

    // Frequencies (Hz) for multi-octave romantic harp
    this.notes = {
      C2: 65.41, E2: 82.41, F2: 87.31, G2: 98.00, A2: 110.00, B2: 123.47,
      C3: 130.81, D3: 146.83, E3: 164.81, F3: 174.61, G3: 196.00, A3: 220.00, B3: 246.94,
      C4: 261.63, D4: 293.66, E4: 329.63, F4: 349.23, G4: 392.00, A4: 440.00, B4: 493.88,
      C5: 523.25, D5: 587.33, E5: 659.25, F5: 698.46, G5: 783.99, A5: 880.00
    };

    // Polyphonic composition: [melodyNote, bassChordArray, durationMs]
    // Canon in D / Can't Help Falling in Love romantic chord progression
    this.score = [
      // Measure 1: C Major (Warm homecoming)
      { m: 'E4', c: ['C3', 'G3', 'C4'], d: 520 },
      { m: 'G4', c: ['E4'], d: 520 },
      { m: 'C5', c: ['G4'], d: 680 },
      { m: 'E5', c: ['C4', 'E4'], d: 520 },

      // Measure 2: G/B Major (Gentle reflection)
      { m: 'D5', c: ['B2', 'G3', 'D4'], d: 520 },
      { m: 'B4', c: ['G4'], d: 520 },
      { m: 'G4', c: ['D4'], d: 680 },
      { m: 'D5', c: ['B3', 'D4'], d: 520 },

      // Measure 3: A Minor (Emotional depth, our tears & love)
      { m: 'C5', c: ['A2', 'E3', 'A3'], d: 520 },
      { m: 'E5', c: ['C4'], d: 520 },
      { m: 'A4', c: ['E4'], d: 680 },
      { m: 'C5', c: ['A3', 'C4'], d: 520 },

      // Measure 4: F Major (Canteen laughs, Spider-man date)
      { m: 'F4', c: ['F2', 'C3', 'F3'], d: 520 },
      { m: 'A4', c: ['C4'], d: 520 },
      { m: 'C5', c: ['F4'], d: 680 },
      { m: 'A4', c: ['C4', 'F4'], d: 520 },

      // Measure 5: C/E (Warm hug)
      { m: 'E5', c: ['E2', 'G3', 'C4'], d: 520 },
      { m: 'D5', c: ['G4'], d: 480 },
      { m: 'C5', c: ['E4'], d: 680 },
      { m: 'G4', c: ['C4'], d: 520 },

      // Measure 6: F to G (Building love)
      { m: 'A4', c: ['F2', 'A3', 'C4'], d: 520 },
      { m: 'C5', c: ['F4'], d: 520 },
      { m: 'B4', c: ['G2', 'B3', 'D4'], d: 680 },
      { m: 'D5', c: ['G4'], d: 520 },

      // Measure 7: Oct 3rd First Kisses Theme (Climax)
      { m: 'C5', c: ['C3', 'E3', 'G3'], d: 600 },
      { m: 'E5', c: ['C4'], d: 500 },
      { m: 'G5', c: ['E4', 'G4'], d: 750 },
      { m: 'E5', c: ['C4'], d: 520 },

      // Measure 8: Forever & Always resolution
      { m: 'D5', c: ['G2', 'D3', 'G3'], d: 520 },
      { m: 'B4', c: ['D4'], d: 480 },
      { m: 'C5', c: ['C3', 'G3', 'C4', 'E4'], d: 1100 }
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

  playVoice(freq, volume = 0.12, duration = 2.2, isBass = false) {
    if (!this.audioCtx || !freq) return;

    const t = this.audioCtx.currentTime;

    const osc1 = this.audioCtx.createOscillator();
    const osc2 = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();
    const filter = this.audioCtx.createBiquadFilter();

    osc1.type = isBass ? 'triangle' : 'sine';
    osc1.frequency.setValueAtTime(freq, t);

    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(freq, t);
    osc2.detune.setValueAtTime(isBass ? 0 : 4, t);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(isBass ? 450 : 2200, t);
    filter.Q.setValueAtTime(1.2, t);

    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.exponentialRampToValueAtTime(volume, t + 0.025);
    gain.gain.exponentialRampToValueAtTime(volume * 0.45, t + 0.35);
    gain.gain.exponentialRampToValueAtTime(0.00001, t + duration);

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(gain);
    gain.connect(this.audioCtx.destination);

    osc1.start(t);
    osc2.start(t);
    osc1.stop(t + duration + 0.05);
    osc2.stop(t + duration + 0.05);
  }

  playStep() {
    if (!this.isPlaying) return;

    const item = this.score[this.currentStep % this.score.length];

    if (item.m && this.notes[item.m]) {
      this.playVoice(this.notes[item.m], 0.16, 2.4, false);
    }

    if (item.c && Array.isArray(item.c)) {
      item.c.forEach((n, i) => {
        if (this.notes[n]) {
          const isBassNote = n.endsWith('2') || n.endsWith('3');
          setTimeout(() => {
            if (this.isPlaying) {
              this.playVoice(this.notes[n], isBassNote ? 0.09 : 0.06, 2.6, isBassNote);
            }
          }, i * 28);
        }
      });
    }

    this.currentStep++;
    this.timer = setTimeout(() => this.playStep(), item.d || 550);
  }

  start() {
    this.init();
    this.isPlaying = true;
    this.playStep();
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

class RomanticAudioPlayer {
  constructor() {
    this.isPlaying = false;
    this.audio = new Audio('audio/romantic-bgm.mp3');
    this.audio.loop = true;
    this.audio.preload = 'auto';
    this.audio.volume = 0.55;

    // Web Audio fallback just in case
    this.synthFallback = new RomanticMusicBox();
    this.useSynth = false;

    this.audio.addEventListener('error', () => {
      console.log('Audio file error, falling back to Web Audio synth');
      this.useSynth = true;
    });
  }

  start() {
    this.isPlaying = true;
    if (this.useSynth) {
      this.synthFallback.start();
      return true;
    }

    const p = this.audio.play();
    if (p !== undefined) {
      p.catch(err => {
        console.log('Audio play error, falling back to synth:', err);
        this.synthFallback.start();
        this.useSynth = true;
      });
    }
    return true;
  }

  stop() {
    this.isPlaying = false;
    if (this.useSynth) {
      this.synthFallback.stop();
    } else {
      this.audio.pause();
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

  // Romantic Music Player (Real Cello & Piano Canon in D with synth fallback)
  const musicBox = new RomanticAudioPlayer();
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
  const lightboxTitle = document.getElementById('lightbox-title');
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
    lightboxImg.src = item.image || item.src;
    lightboxImg.onerror = function() {
      this.onerror = null;
      if (item.fallback) this.src = item.fallback;
    };
    lightboxImg.alt = item.title || item.caption || "Enlarged photo";

    if (lightboxTitle) {
      if (item.title && item.caption && item.title !== item.caption) {
        lightboxTitle.textContent = item.title;
        lightboxTitle.style.display = 'block';
        lightboxCaption.textContent = item.caption;
      } else {
        lightboxTitle.style.display = 'none';
        lightboxCaption.textContent = item.caption || item.title || "";
      }
    } else {
      lightboxCaption.textContent = item.caption || item.title || "";
    }

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

  // Mobile Touch Swipe Navigation for Lightbox
  let lbTouchStartX = 0;
  let lbTouchStartY = 0;
  let lbTouchEndX = 0;
  let lbTouchEndY = 0;

  imageLightbox.addEventListener('touchstart', (e) => {
    if (e.touches && e.touches.length > 0) {
      lbTouchStartX = e.touches[0].clientX;
      lbTouchStartY = e.touches[0].clientY;
    }
  }, { passive: true });

  imageLightbox.addEventListener('touchend', (e) => {
    if (e.changedTouches && e.changedTouches.length > 0) {
      lbTouchEndX = e.changedTouches[0].clientX;
      lbTouchEndY = e.changedTouches[0].clientY;
      const diffX = lbTouchEndX - lbTouchStartX;
      const diffY = lbTouchEndY - lbTouchStartY;

      // Horizontal swipe detected if horizontal distance > 40px and dominant over vertical
      if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX < 0) {
          nextLightboxItem(); // Swipe Left -> Next photo
        } else {
          prevLightboxItem(); // Swipe Right -> Prev photo
        }
      }
    }
  }, { passive: true });

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
          <img src="${item.image}" alt="${item.title}" loading="lazy" onerror="this.onerror=null; this.src='${item.fallback}';">
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
      letterPhoto.onerror = function() {
        this.onerror = null;
        if (letter.fallback) this.src = letter.fallback;
      };
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
     M. LIVING BACKGROUND PHOTO WALLPAPER (ALL 103 MEMORIES)
     -------------------------------------------------------------------------- */
  function initWallpaper() {
    const wallpaperTrack = document.getElementById('wallpaper-track');
    const wallpaperToggleBtn = document.getElementById('wallpaper-toggle-btn');
    const photoWallpaper = document.getElementById('photo-wallpaper');
    const wpLabel = document.getElementById('wp-label');

    if (!wallpaperTrack || typeof allWallPhotosData === 'undefined') return;

    // Create 6 columns
    const numCols = 6;
    const cols = [];
    wallpaperTrack.innerHTML = '';
    for (let c = 0; c < numCols; c++) {
      const colDiv = document.createElement('div');
      colDiv.className = 'wallpaper-col';
      colDiv.id = `wp-col-${c}`;
      wallpaperTrack.appendChild(colDiv);
      cols.push(colDiv);
    }

    allWallPhotosData.forEach((photo, idx) => {
      const colIdx = idx % numCols;
      const item = document.createElement('div');
      item.className = 'wallpaper-item';
      const tilt = ((idx % 5) - 2) * 2;
      // straight clean polaroid without artificial tilt
      item.innerHTML = `<img src="${photo.src}" alt="${photo.title}" loading="lazy">`;
      cols[colIdx].appendChild(item);
    });

    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.pageYOffset || window.scrollY || 0;
          cols.forEach((col, i) => {
            const speed = (i % 2 === 0 ? 0.04 : -0.03) * ((i % 3) + 1);
            col.style.transform = `translateY(${scrolled * speed}px)`;
          });
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });

    if (wallpaperToggleBtn && photoWallpaper) {
      let isVivid = false;
      wallpaperToggleBtn.addEventListener('click', (e) => {
        e.preventDefault();
        isVivid = !isVivid;
        if (isVivid) {
          photoWallpaper.classList.add('vivid-mode');
          wallpaperToggleBtn.classList.add('is-active');
          if (wpLabel) wpLabel.textContent = 'Photos: Extra Vivid ✨';
        } else {
          photoWallpaper.classList.remove('vivid-mode');
          wallpaperToggleBtn.classList.remove('is-active');
          if (wpLabel) wpLabel.textContent = 'Photos: Visible ♡';
        }
      });
    }
  }

  /* --------------------------------------------------------------------------
     N. COMPLETE MEMORY CONSTELLATION MODAL (ALL 103 PHOTOS)
     -------------------------------------------------------------------------- */
  let activeConstellationFilter = 'all';

  function renderConstellationCards(filter = 'all') {
    const constellationGrid = document.getElementById('constellation-grid');
    if (!constellationGrid || typeof allWallPhotosData === 'undefined') return;

    activeConstellationFilter = filter;
    constellationGrid.innerHTML = '';

    const filtered = filter === 'all'
      ? allWallPhotosData
      : allWallPhotosData.filter(item => item.category === filter);

    filtered.forEach((item, index) => {
      const card = document.createElement('article');
      card.className = 'c-photo-card';
      card.setAttribute('data-category', item.category);

      const tagText = item.tag || `#${item.category}`;

      card.innerHTML = `
        <div class="c-photo-img-wrap">
          <img src="${item.src}" alt="${item.title}" decoding="async" onerror="this.onerror=null; this.src='images/museum-1.jpg';">
          <div class="c-photo-overlay-hint">
            <span class="c-photo-hint-badge">🔍 Read story</span>
          </div>
        </div>
        <div class="c-photo-content">
          <div class="c-photo-meta">
            <span class="c-photo-pill">${tagText}</span>
          </div>
          <h4 class="c-photo-title" title="${item.title}">${item.title}</h4>
          <div class="c-photo-tap-cta">
            <span>Tap for notes ♡</span>
          </div>
        </div>
      `;

      card.addEventListener('click', () => {
        const lightboxList = filtered.map(f => ({
          image: f.src,
          title: f.title,
          caption: f.caption,
          fallback: f.src
        }));
        openLightbox(lightboxList, index);
      });

      constellationGrid.appendChild(card);
    });
  }

  function initConstellationModal() {
    const constellationModal = document.getElementById('constellation-modal');
    const openConstellationBtn = document.getElementById('open-constellation-btn');
    const constellationCloseBtn = document.getElementById('constellation-close-btn');
    const constellationFilterBtns = document.querySelectorAll('#constellation-filters .c-filter-btn');

    // Pre-render on page load so gallery is instantly ready
    renderConstellationCards('all');

    if (openConstellationBtn && constellationModal) {
      openConstellationBtn.addEventListener('click', (e) => {
        e.preventDefault();
        renderConstellationCards(activeConstellationFilter || 'all');
        constellationModal.classList.remove('is-hidden');
        document.body.style.overflow = 'hidden';
      });
    }

    if (constellationCloseBtn && constellationModal) {
      constellationCloseBtn.addEventListener('click', (e) => {
        e.preventDefault();
        constellationModal.classList.add('is-hidden');
        document.body.style.overflow = '';
      });
    }

    if (constellationModal) {
      constellationModal.addEventListener('click', (e) => {
        if (e.target === constellationModal) {
          constellationModal.classList.add('is-hidden');
          document.body.style.overflow = '';
        }
      });
    }

    constellationFilterBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        constellationFilterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-cfilter') || 'all';
        renderConstellationCards(filter);
      });
    });
  }

  /* --------------------------------------------------------------------------
     O. INTERACTIVE SCRATCH-OFF BIRTHDAY PROMISE CARD
     -------------------------------------------------------------------------- */
  function initScratchCard() {
    const canvas = document.getElementById('scratch-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const progressText = document.getElementById('scratch-progress-text');
    const revealBtn = document.getElementById('reveal-promise-btn');
    let isScratching = false;
    let hasRevealed = false;

    function setupFoil() {
      const width = canvas.width;
      const height = canvas.height;

      const grad = ctx.createLinearGradient(0, 0, width, height);
      grad.addColorStop(0, '#E8B4C8');
      grad.addColorStop(0.3, '#FADCE6');
      grad.addColorStop(0.5, '#C45A7A');
      grad.addColorStop(0.7, '#FADCE6');
      grad.addColorStop(1, '#D998B2');

      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = 'rgba(255, 255, 255, 0.45)';
      for (let i = 0; i < 45; i++) {
        const sx = (i * 37) % width;
        const sy = (i * 29) % height;
        ctx.beginPath();
        ctx.arc(sx, sy, (i % 3) + 1, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.font = 'bold 18px "Playfair Display", serif';
      ctx.fillStyle = '#49343D';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('✨ Scratch Here With Love ✨', width / 2, height / 2 - 12);

      ctx.font = '15px "Caveat", cursive';
      ctx.fillStyle = '#6E4354';
      ctx.fillText('Rub with your finger or mouse to reveal my secret promise ♡', width / 2, height / 2 + 18);
    }

    setupFoil();

    function scratch(x, y) {
      if (hasRevealed) return;
      ctx.globalCompositeOperation = 'destination-out';
      ctx.beginPath();
      ctx.arc(x, y, 26, 0, Math.PI * 2);
      ctx.fill();
      checkProgress();
    }

    function getPos(e) {
      const rect = canvas.getBoundingClientRect();
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      return {
        x: (clientX - rect.left) * scaleX,
        y: (clientY - rect.top) * scaleY
      };
    }

    function checkProgress() {
      if (hasRevealed) return;
      try {
        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const pixels = imgData.data;
        let clearCount = 0;
        const totalSamples = pixels.length / 16;

        for (let i = 3; i < pixels.length; i += 16) {
          if (pixels[i] === 0) {
            clearCount++;
          }
        }

        const pct = Math.round((clearCount / totalSamples) * 100);
        if (progressText) {
          progressText.textContent = `Scratched: ${pct}% revealed`;
        }

        if (pct >= 35 && !hasRevealed) {
          revealFullPromise();
        }
      } catch (err) {
        // Local origin canvas security fallback
      }
    }

    function revealFullPromise() {
      if (hasRevealed) return;
      hasRevealed = true;
      canvas.style.opacity = '0';
      setTimeout(() => {
        canvas.style.display = 'none';
      }, 500);
      if (progressText) progressText.textContent = '🎉 Promise Revealed Forever! ♡';
      if (revealBtn) revealBtn.style.display = 'none';
      triggerRomanticConfetti();
    }

    canvas.addEventListener('mousedown', (e) => {
      isScratching = true;
      const pos = getPos(e);
      scratch(pos.x, pos.y);
    });

    window.addEventListener('mouseup', () => { isScratching = false; });

    canvas.addEventListener('mousemove', (e) => {
      if (!isScratching) return;
      const pos = getPos(e);
      scratch(pos.x, pos.y);
    });

    canvas.addEventListener('touchstart', (e) => {
      isScratching = true;
      const pos = getPos(e);
      scratch(pos.x, pos.y);
      e.preventDefault();
    }, { passive: false });

    canvas.addEventListener('touchmove', (e) => {
      if (!isScratching) return;
      const pos = getPos(e);
      scratch(pos.x, pos.y);
      e.preventDefault();
    }, { passive: false });

    window.addEventListener('touchend', () => { isScratching = false; });

    if (revealBtn) {
      revealBtn.addEventListener('click', (e) => {
        e.preventDefault();
        revealFullPromise();
      });
    }
  }

  /* --------------------------------------------------------------------------
     P. WHISPER BACK TO JAY (WHATSAPP REACTION CAPSULE)
     -------------------------------------------------------------------------- */
  function initWhisperBack() {
    const reactionPills = document.querySelectorAll('.reaction-pill');
    const replyTextarea = document.getElementById('reply-custom-text');
    const sendWhatsAppBtn = document.getElementById('send-whatsapp-reply-btn');

    reactionPills.forEach(pill => {
      pill.addEventListener('click', (e) => {
        e.preventDefault();
        reactionPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        const msg = pill.getAttribute('data-msg');
        if (replyTextarea && msg) {
          replyTextarea.value = msg;
        }
      });
    });

    if (sendWhatsAppBtn && replyTextarea) {
      sendWhatsAppBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const text = replyTextarea.value.trim() || "Jay, I love this so much! Happy Birthday to us! ♡";
        const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank');
        triggerRomanticConfetti();
      });
    }
  }

  // Safely invoke all 4 features inside DOMContentLoaded
  initWallpaper();
  initConstellationModal();
  initScratchCard();
  initWhisperBack();

  // New Features Invocations (Master Prompt Upgrade)
  initCustomCursor();
  initWelcomeScreenEnhancements();
  initUnfilteredMemories();
  initMysteryGifts();
  initVoiceMessagePlayer();
  initSecretFinalLetter();
  initNightSkyConstellation();
  initNextChaptersBucketList();
  initMakeAWishInteractive();
  initGrandFinale();


  /* ==========================================================================
     FEATURE 11.A: CUSTOM CURSOR EFFECTS (Desktop Floating Hearts & Sparkles)
     ========================================================================== */
  function initCustomCursor() {
    const canvas = document.getElementById('cursor-heart-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Respect reduced motion and touch devices
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || window.matchMedia('(hover: none)').matches) {
      return;
    }

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }, { passive: true });

    const particles = [];
    const colors = ['#F4BFD0', '#C45A7A', '#F8DDE8', '#FF94B8'];

    window.addEventListener('mousemove', (e) => {
      if (Math.random() < 0.28) {
        particles.push({
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 6 + 5,
          color: colors[Math.floor(Math.random() * colors.length)],
          vx: (Math.random() - 0.5) * 1.5,
          vy: Math.random() * -1.5 - 0.5,
          alpha: 1,
          decay: Math.random() * 0.025 + 0.015,
          isHeart: Math.random() > 0.4
        });
      }
    }, { passive: true });

    function drawMiniHeart(ctx, x, y, size, color, alpha) {
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.fillStyle = color;
      ctx.translate(x, y);
      ctx.beginPath();
      const topCurveHeight = size * 0.3;
      ctx.moveTo(0, topCurveHeight);
      ctx.bezierCurveTo(0, 0, -size / 2, 0, -size / 2, topCurveHeight);
      ctx.bezierCurveTo(-size / 2, (size + topCurveHeight) / 2, 0, size, 0, size * 1.2);
      ctx.bezierCurveTo(0, size, size / 2, (size + topCurveHeight) / 2, size / 2, topCurveHeight);
      ctx.bezierCurveTo(size / 2, 0, 0, 0, 0, topCurveHeight);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }

    function renderCursor() {
      ctx.clearRect(0, 0, width, height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        if (p.isHeart) {
          drawMiniHeart(ctx, p.x, p.y, p.size, p.color, p.alpha);
        } else {
          ctx.save();
          ctx.globalAlpha = p.alpha;
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 0.4, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }

      requestAnimationFrame(renderCursor);
    }
    renderCursor();
  }

  /* ==========================================================================
     FEATURE 11.B: PERSONAL LOADING SCREEN
     ========================================================================== */
  function initWelcomeScreenEnhancements() {
    const loader = document.getElementById('welcome-loading');
    if (loader) {
      setTimeout(() => {
        loader.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        loader.style.opacity = '0.9';
      }, 500);
    }
  }

  /* ==========================================================================
     FEATURE 3: OUR MEMORIES, UNFILTERED
     ========================================================================== */
  function initUnfilteredMemories() {
    const grid = document.getElementById('unfiltered-grid');
    if (!grid || !NIKKI_CONFIG.unfilteredMemories) return;

    grid.innerHTML = '';
    NIKKI_CONFIG.unfilteredMemories.forEach((item, index) => {
      const card = document.createElement('article');
      card.className = 'unfiltered-card';
      card.innerHTML = `
        <div class="unfiltered-tape"></div>
        <div class="unfiltered-media">
          <img src="${item.image}" alt="${item.title}" loading="lazy" onerror="this.onerror=null; this.src='${item.fallback}';">
        </div>
        <div class="unfiltered-content">
          <h4 class="unfiltered-caption font-handwriting">${item.title}</h4>
          <span class="unfiltered-tag">${item.tag}</span>
        </div>
      `;

      card.addEventListener('click', () => {
        const galleryList = NIKKI_CONFIG.unfilteredMemories.map(m => ({
          image: m.image,
          title: m.title,
          caption: m.caption,
          fallback: m.fallback
        }));
        openLightbox(galleryList, index);
      });

      grid.appendChild(card);
    });
  }

  /* ==========================================================================
     FEATURE 4: THE MYSTERY GIFT ROOM (3 Interactive Gift Boxes)
     ========================================================================== */
  function initMysteryGifts() {
    const giftCards = document.querySelectorAll('.gift-box-card');
    const openBtns = document.querySelectorAll('.open-gift-btn');
    const statusText = document.getElementById('gift-status-text');
    const unlockedBanner = document.getElementById('all-gifts-unlocked-card');

    const openedGifts = new Set();

    function updateGiftStatus() {
      if (statusText) {
        statusText.innerHTML = `Surprises Unlocked: <strong>${openedGifts.size} of 3</strong>`;
      }
      if (openedGifts.size === 3 && unlockedBanner) {
        unlockedBanner.classList.remove('is-hidden');
        triggerRomanticConfetti();
      }
    }

    function toggleGift(card, id) {
      if (!card) return;
      const content = card.querySelector('.gift-revealed-content');
      const btn = card.querySelector('.open-gift-btn');
      const isAlreadyOpen = card.classList.contains('is-opened');

      if (isAlreadyOpen) {
        card.classList.remove('is-opened');
        if (content) content.classList.add('is-hidden');
        if (btn) btn.innerHTML = `<span>Re-open Gift ${id} ♡</span>`;
      } else {
        card.classList.add('is-opened');
        if (content) content.classList.remove('is-hidden');
        if (btn) btn.innerHTML = `<span>Close Gift ${id}</span>`;
        openedGifts.add(id);
        triggerRomanticConfetti();
        updateGiftStatus();
      }
    }

    giftCards.forEach(card => {
      const id = card.getAttribute('data-gift-id');
      const visual = card.querySelector('.gift-box-visual');
      if (visual) {
        visual.addEventListener('click', () => toggleGift(card, id));
      }
    });

    openBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const id = btn.getAttribute('data-gift-id');
        const card = document.getElementById(`gift-card-${id}`);
        toggleGift(card, id);
      });
    });
  }

  /* ==========================================================================
     FEATURE 6: A VOICE MESSAGE FROM ME (Cassette Audio Player)
     ========================================================================== */
  function initVoiceMessagePlayer() {
    const audio = document.getElementById('birthday-voice-audio');
    const playBtn = document.getElementById('vm-play-btn');
    const playIcon = document.getElementById('vm-play-icon');
    const seekBar = document.getElementById('vm-seek-bar');
    const currentTimeEl = document.getElementById('vm-current-time');
    const durationEl = document.getElementById('vm-duration');
    const cassetteCard = document.querySelector('.cassette-player-card');
    const hintText = document.getElementById('vm-hint-text');

    if (!audio || !playBtn) return;

    function formatTime(seconds) {
      if (isNaN(seconds)) return '0:00';
      const m = Math.floor(seconds / 60);
      const s = Math.floor(seconds % 60);
      return `${m}:${s < 10 ? '0' : ''}${s}`;
    }

    audio.addEventListener('loadedmetadata', () => {
      if (durationEl) durationEl.textContent = formatTime(audio.duration);
    });

    audio.addEventListener('timeupdate', () => {
      if (currentTimeEl) currentTimeEl.textContent = formatTime(audio.currentTime);
      if (seekBar && audio.duration) {
        seekBar.value = (audio.currentTime / audio.duration) * 100;
      }
    });

    if (seekBar) {
      seekBar.addEventListener('input', () => {
        if (audio.duration) {
          audio.currentTime = (seekBar.value / 100) * audio.duration;
        }
      });
    }

    playBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (audio.paused) {
        // Pause romantic background music if playing
        if (window.romanticAudioPlayerInstance && window.romanticAudioPlayerInstance.isPlaying) {
          window.romanticAudioPlayerInstance.pause();
        }

        audio.play().then(() => {
          if (playIcon) playIcon.textContent = '❚❚';
          if (cassetteCard) cassetteCard.classList.add('is-playing');
          if (hintText) hintText.textContent = 'Playing voice message for Nikila ♡';
        }).catch(err => {
          console.warn('Voice message playback note:', err);
          if (hintText) hintText.textContent = 'Voice message ready • Click to listen ♡';
        });
      } else {
        audio.pause();
        if (playIcon) playIcon.textContent = '▶';
        if (cassetteCard) cassetteCard.classList.remove('is-playing');
        if (hintText) hintText.textContent = 'Paused • Tap play to continue listening';
      }
    });

    audio.addEventListener('ended', () => {
      if (playIcon) playIcon.textContent = '▶';
      if (cassetteCard) cassetteCard.classList.remove('is-playing');
      if (hintText) hintText.textContent = 'Finished listening ♡ Happy Birthday, Nikila!';
      triggerRomanticConfetti();
    });
  }

  /* ==========================================================================
     FEATURE 2: THE SECRET FINAL LETTER (3D Envelope & Typewriter Reveal)
     ========================================================================== */
  function initSecretFinalLetter() {
    const envelope = document.getElementById('secret-envelope');
    const openBtn = document.getElementById('open-secret-letter-btn');
    const paper = document.getElementById('secret-letter-paper');
    const textContainer = document.getElementById('secret-letter-text');
    const replayBtn = document.getElementById('replay-letter-btn');

    if (!openBtn || !envelope || !paper) return;

    const fullMessage = (NIKKI_CONFIG.secretLetter && NIKKI_CONFIG.secretLetter.text) || 
      "Nikki, you are my quiet peace, my sweetest comfort, and my brightest laughter. Happy Birthday, my love.";

    let typeInterval = null;

    function startTypewriter() {
      if (!textContainer) return;
      textContainer.textContent = '';
      let charIdx = 0;
      clearInterval(typeInterval);

      typeInterval = setInterval(() => {
        if (charIdx < fullMessage.length) {
          textContainer.textContent += fullMessage[charIdx];
          charIdx++;
        } else {
          clearInterval(typeInterval);
          triggerRomanticConfetti();
        }
      }, 25);
    }

    openBtn.addEventListener('click', (e) => {
      e.preventDefault();
      envelope.classList.add('is-opened');
      paper.classList.remove('is-hidden');
      openBtn.style.display = 'none';

      setTimeout(() => {
        startTypewriter();
      }, 600);
    });

    if (replayBtn) {
      replayBtn.addEventListener('click', (e) => {
        e.preventDefault();
        startTypewriter();
      });
    }
  }

  /* ==========================================================================
     FEATURE 5: THE NIGHT SKY OF OUR MEMORIES (Interactive Constellation)
     ========================================================================== */
  function initNightSkyConstellation() {
    const svgLines = document.getElementById('sky-constellation-lines');
    const nodesLayer = document.getElementById('sky-star-nodes');
    const memoryCard = document.getElementById('sky-memory-card');
    const cardDate = document.getElementById('sky-card-date');
    const cardTitle = document.getElementById('sky-card-title');
    const cardImg = document.getElementById('sky-card-img');
    const cardCaption = document.getElementById('sky-card-caption');
    const closeBtn = document.getElementById('sky-card-close-btn');

    if (!svgLines || !nodesLayer || !NIKKI_CONFIG.constellationStars) return;

    const stars = NIKKI_CONFIG.constellationStars;
    nodesLayer.innerHTML = '';

    // Draw connecting SVG lines in viewbox (1000 x 550)
    let pathD = '';
    stars.forEach((star, i) => {
      const realX = (star.x / 100) * 1000;
      const realY = (star.y / 100) * 550;
      if (i === 0) pathD += `M ${realX} ${realY}`;
      else pathD += ` L ${realX} ${realY}`;
    });

    svgLines.innerHTML = `
      <defs>
        <linearGradient id="starLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#F4BFD0" stop-opacity="0.3" />
          <stop offset="50%" stop-color="#FFFFFF" stop-opacity="0.8" />
          <stop offset="100%" stop-color="#F4BFD0" stop-opacity="0.3" />
        </linearGradient>
      </defs>
      <path d="${pathD}" stroke="url(#starLineGrad)" stroke-width="2" stroke-dasharray="4,4" fill="none" />
    `;

    // Render interactive star nodes
    stars.forEach((star, idx) => {
      const node = document.createElement('div');
      node.className = 'sky-star-node';
      node.style.left = `${star.x}%`;
      node.style.top = `${star.y}%`;
      node.setAttribute('data-index', idx);
      node.setAttribute('role', 'button');
      node.setAttribute('aria-label', `View star memory: ${star.title}`);
      node.tabIndex = 0;

      node.innerHTML = `
        <div class="sky-star-dot"></div>
        <span class="sky-star-label font-handwriting">${star.title}</span>
      `;

      function openStar() {
        document.querySelectorAll('.sky-star-node').forEach(n => n.classList.remove('is-active'));
        node.classList.add('is-active');

        if (cardDate) cardDate.textContent = star.date;
        if (cardTitle) cardTitle.textContent = star.title;
        if (cardCaption) cardCaption.textContent = star.caption;
        if (cardImg) {
          cardImg.src = star.photo;
          cardImg.onerror = function() { this.src = 'images/hero-1.jpg'; };
        }
        if (memoryCard) memoryCard.classList.remove('is-hidden');
      }

      node.addEventListener('click', openStar);
      node.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openStar();
        }
      });

      nodesLayer.appendChild(node);
    });

    if (closeBtn && memoryCard) {
      closeBtn.addEventListener('click', () => {
        memoryCard.classList.add('is-hidden');
        document.querySelectorAll('.sky-star-node').forEach(n => n.classList.remove('is-active'));
      });
    }
  }

  /* ==========================================================================
     FEATURE 8: OUR NEXT CHAPTERS (Bucket List with localStorage & Progress)
     ========================================================================== */
  function initNextChaptersBucketList() {
    const listContainer = document.querySelector('.bucket-list-grid');
    const fillBar = document.getElementById('bucket-progress-fill');
    const countEl = document.getElementById('bucket-completed-count');
    const totalEl = document.getElementById('bucket-total-count');
    const resetBtn = document.getElementById('reset-bucket-btn');

    const STORAGE_KEY = 'nikki_next_chapters_v1';
    let savedState = {};

    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) savedState = JSON.parse(stored);
    } catch (e) {
      console.warn('localStorage not available, session fallback active');
    }

    const items = NIKKI_CONFIG.nextChaptersList || [];
    if (totalEl) totalEl.textContent = items.length;

    function updateProgress() {
      const completedCount = Object.values(savedState).filter(Boolean).length;
      if (countEl) countEl.textContent = completedCount;
      if (fillBar && items.length > 0) {
        const pct = (completedCount / items.length) * 100;
        fillBar.style.width = `${pct}%`;
      }
    }

    // Connect with existing bucket list cards or generate cleanly
    const existingCards = document.querySelectorAll('.bucket-card');
    if (existingCards.length > 0) {
      existingCards.forEach((card, idx) => {
        const id = idx + 1;
        const checkBtn = card.querySelector('.btn-check, button');
        
        if (savedState[id]) {
          card.classList.add('is-completed');
        }

        if (checkBtn) {
          checkBtn.addEventListener('click', (e) => {
            e.preventDefault();
            savedState[id] = !savedState[id];
            card.classList.toggle('is-completed', savedState[id]);
            try {
              localStorage.setItem(STORAGE_KEY, JSON.stringify(savedState));
            } catch (err) {}
            updateProgress();
            if (savedState[id]) triggerRomanticConfetti();
          });
        }
      });
    }

    if (resetBtn) {
      resetBtn.addEventListener('click', (e) => {
        e.preventDefault();
        savedState = {};
        try {
          localStorage.removeItem(STORAGE_KEY);
        } catch (err) {}
        existingCards.forEach(c => c.classList.remove('is-completed'));
        updateProgress();
      });
    }

    updateProgress();
  }

  /* ==========================================================================
     FEATURE 7: A WISH ONLY SHE CAN MAKE (Private Session Wish)
     ========================================================================== */
  function initMakeAWishInteractive() {
    const sealBtn = document.getElementById('seal-wish-btn');
    const wishInput = document.getElementById('private-wish-input');
    const note = document.getElementById('wish-sealed-note');

    if (sealBtn && wishInput) {
      sealBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const text = wishInput.value.trim();
        if (text) {
          if (note) note.classList.remove('is-hidden');
          wishInput.value = '';
          wishInput.placeholder = '✨ Your wish is sealed with love for this session!';
          triggerRomanticConfetti();
        } else {
          wishInput.focus();
        }
      });
    }
  }

  /* ==========================================================================
     FEATURE 10: GRAND FINALE CELEBRATION
     ========================================================================== */
  function initGrandFinale() {
    const celebrateBtn = document.getElementById('finale-celebrate-btn');
    if (celebrateBtn) {
      celebrateBtn.addEventListener('click', (e) => {
        e.preventDefault();
        triggerRomanticConfetti();
        setTimeout(() => triggerRomanticConfetti(), 400);
      });
    }
  }


  /* --------------------------------------------------------------------------
     Q. GLOBAL KEYBOARD ACCESSIBILITY (Escape key closes modals)
     -------------------------------------------------------------------------- */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
      closeLetter();
      closeMobileDrawer();
      const cModal = document.getElementById('constellation-modal');
      if (cModal && !cModal.classList.contains('is-hidden')) {
        cModal.classList.add('is-hidden');
        document.body.style.overflow = '';
      }
    }
    if (e.key === 'ArrowLeft' && imageLightbox && !imageLightbox.classList.contains('is-hidden')) {
      prevLightboxItem();
    }
    if (e.key === 'ArrowRight' && imageLightbox && !imageLightbox.classList.contains('is-hidden')) {
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

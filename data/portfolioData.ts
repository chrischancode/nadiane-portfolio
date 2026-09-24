export interface VideoItem {
  id: string;
  driveId: string;
  title: string;
  client: string;
  platform: string;
  views: string;
  likes: string;
  shares: string;
  comments: string;
  hook: string;
  tags: string[];
  description: string;
}

export interface GraphicItem {
  id: string;
  title: string;
  client: string;
  category: string;
  imageSrc: string;
  description: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  bulletPoints: string[];
  tools: string[];
}

export interface BrandPartner {
  name: string;
  category: string;
  country: string;
  role: string;
  platformBadge?: string;
  handle?: string;
  type: 'instagram' | 'youtube' | 'brand' | 'agency';
}

export const CREATOR_PROFILE = {
  name: "Nadiane Bandola",
  role: "Video Editor, Graphic Designer & Social Media Manager",
  location: "Kabankalan, Philippines",
  tagline: "Intentional video editing, motion graphics, and clean visual identities.",
  bio: "Specializing in short-form video editing for Meta platforms, TikTok, and YouTube Shorts, alongside brand design and social strategy. Focused on high-retention storytelling, fast hook pacing, and refined aesthetics built to elevate brands.",
  heroImage: "/images/nadiane-hero-main.jpg",
  email: "nadianefbandola@gmail.com",
  phone: "+639083707067",
  portfolioDriveGraphics: "https://drive.google.com/drive/folders/1WTBoYRhzyNl5hhy1QnpW_CxY1q5aXgwW",
  portfolioDriveVideos: "https://drive.google.com/drive/folders/1gl3AFKfD-BMDu61XsnuEBxUB0WqQwLIz",
  education: {
    institution: "Colegio San Agustin",
    location: "Bacolod, Philippines",
    degree: "Bachelor of Science in Medical Technology",
    years: "2020 - 2024",
  },
  stats: [
    { label: "Videos Edited", value: "500+" },
    { label: "Global Clients", value: "10+" },
    { label: "Project Pacing", value: "24-48h" },
  ],
};

export const BRAND_PARTNERS: BrandPartner[] = [
  { 
    name: "Brooke Lewis", 
    category: "Creator Studio", 
    country: "Sydney, Australia", 
    role: "Reels & Stories Editor",
    platformBadge: "Instagram",
    handle: "@brookelewis",
    type: "instagram"
  },
  { 
    name: "Legends in Seconds", 
    category: "Short-Form Network", 
    country: "Philippines", 
    role: "Social Media Manager",
    platformBadge: "YouTube",
    handle: "YouTube Shorts",
    type: "youtube"
  },
  { 
    name: "Scooch", 
    category: "Tech Accessories", 
    country: "Indiana, USA", 
    role: "Meta Ad Creative Editor",
    platformBadge: "Meta Ads",
    type: "brand"
  },
  { 
    name: "The Birdie Agency", 
    category: "Creative Agency", 
    country: "Australia", 
    role: "Lead Video Editor",
    platformBadge: "Agency",
    type: "agency"
  },
  { 
    name: "Nifora", 
    category: "E-Commerce", 
    country: "Germany", 
    role: "Short-Form Video Editor",
    platformBadge: "Direct Response",
    type: "brand"
  },
  { 
    name: "GChrom Media Services", 
    category: "Production House", 
    country: "Canada", 
    role: "Shorts Video Editor",
    platformBadge: "Short-Form",
    type: "agency"
  },
  { 
    name: "Damon Crowdy Foundation", 
    category: "Non-Profit Organization", 
    country: "USA", 
    role: "Lead Graphic Designer",
    platformBadge: "Social Branding",
    type: "brand"
  },
  { 
    name: "Rebirth Enhancement", 
    category: "Aesthetic Brand Services", 
    country: "Philippines", 
    role: "Brand Graphic Designer",
    platformBadge: "Campaigns",
    type: "brand"
  },
];

// Exactly 3 curated showcase videos as requested
export const SHOWCASE_VIDEOS: VideoItem[] = [
  {
    id: "scooch-wingmate-org",
    driveId: "1Oo4fN3liZVcfeVBaXad6L8VXKt_06VbN",
    title: "Wingmate: Organization Queen (Hook B)",
    client: "Scooch (USA)",
    platform: "Meta / Reels",
    views: "284K",
    likes: "21.6K",
    shares: "4.8K",
    comments: "912",
    hook: "Are you still carrying a bulky wallet everywhere?",
    tags: ["Meta Ads", "A/B Testing", "Fast Cuts", "CapCut"],
    description: "Direct response video ad tailored for Meta newsfeeds. Cut from raw footage with crisp typography, kinetic transitions, and high-hold hook pacing.",
  },
  {
    id: "scooch-moneymate-unbox",
    driveId: "1CRAPH1e12rLd1kwg_41HnFWX8d1b9oIb",
    title: "Moneymate: Unboxing All The Designs",
    client: "Scooch (USA)",
    platform: "TikTok / Meta",
    views: "348K",
    likes: "29.4K",
    shares: "6.2K",
    comments: "1.4K",
    hook: "Unboxing every single colorway of the slim case.",
    tags: ["Product Showcase", "Unboxing", "Sound Sync", "CapCut"],
    description: "Tactile product presentation with rhythmic audio synchronization and macro textures, designed to keep viewers engaged past the 3-second mark.",
  },
  {
    id: "scooch-moneymate-pinterest",
    driveId: "1_LO3gZHtjoAXvWaZFjbkHZnmjUjdK86G",
    title: "Moneymate: Pinterest Perfect Aesthetic Edit",
    client: "Scooch (USA)",
    platform: "Reels / TikTok",
    views: "219K",
    likes: "18.1K",
    shares: "3.7K",
    comments: "740",
    hook: "The everyday aesthetic essential you actually need.",
    tags: ["Aesthetic Reel", "Color Grading", "Trending Sound", "Pacing"],
    description: "Understated lifestyle pacing engineered for Instagram Reels and TikTok discovery feeds with warm natural lighting and seamless cuts.",
  },
];

export const GRAPHICS_DATA: GraphicItem[] = [
  {
    id: "amazon-1",
    title: "Akkermansia Gut Health Hero EBC",
    client: "E-Commerce Storefront",
    category: "Amazon EBC & Listing",
    imageSrc: "/portfolio/graphics/amazon-akkermansia-1.png",
    description: "High-conversion Amazon listing hero infographic highlighting key benefits, clean typography hierarchy, and quality trust seals.",
  },
  {
    id: "amazon-2",
    title: "Clinical Benefits & Mechanism Breakdown",
    client: "E-Commerce Storefront",
    category: "Amazon EBC & Listing",
    imageSrc: "/portfolio/graphics/amazon-akkermansia-2.png",
    description: "Complex scientific supplement benefits structured into a clean visual sequence designed for fast-scrolling mobile buyers.",
  },
  {
    id: "damon-1",
    title: "Foundation Community Awareness Asset",
    client: "Damon Crowdy Foundation (USA)",
    category: "Social Campaign",
    imageSrc: "/portfolio/graphics/damon-crowdy-1.png",
    description: "Minimalist social campaign graphic focused on mission storytelling, unified brand standards, and community interaction.",
  },
  {
    id: "rebirth-1",
    title: "Aesthetic Treatment Brand Spotlight",
    client: "Rebirth Enhancement Services",
    category: "Brand Promotional",
    imageSrc: "/portfolio/graphics/rebirth-1.png",
    description: "Balanced aesthetic promotional post created to elevate digital brand presence and drive appointment bookings.",
  },
  {
    id: "feature-showcase",
    title: "Multi-Brand Design & Typography System",
    client: "Creative Studio",
    category: "Visual Identity",
    imageSrc: "/portfolio/graphics/feature-showcase.png",
    description: "Editorial layout showcase highlighting typeface balance, organic whitespace, and high-impact visual communication.",
  },
  {
    id: "damon-3",
    title: "Leadership Announcement & Social Reach",
    client: "Damon Crowdy Foundation (USA)",
    category: "Social Campaign",
    imageSrc: "/portfolio/graphics/damon-crowdy-3.png",
    description: "Typography-forward community post crafted for multi-platform distribution and donor engagement.",
  },
];

export const EXPERIENCES_DATA: ExperienceItem[] = [
  {
    id: "scooch",
    company: "Scooch",
    role: "Video Editor",
    location: "Indiana, USA",
    period: "November 2025 - Present",
    bulletPoints: [
      "Edited short-form and long-form video ads specifically tailored for Meta platforms (Facebook and Instagram).",
      "Crafted engaging, high-converting ad creatives optimized for mobile view and fast-scrolling audiences.",
      "Applied motion graphics, transitions, text overlays, and call-to-action animations to enhance ad performance.",
      "Trimmed and repurposed raw footage into multiple ad variations for continuous A/B testing."
    ],
    tools: ["Meta Ads", "A/B Testing", "CapCut", "Motion Graphics"]
  },
  {
    id: "nifora",
    company: "Nifora",
    role: "Video Editor",
    location: "Germany",
    period: "May 2025 - Present",
    bulletPoints: [
      "Edited short-form and long-form video ads specifically tailored for Meta platforms.",
      "Trimmed and repurposed raw footage into multiple ad variations for A/B testing.",
      "Edited content quickly and efficiently under tight deadlines without sacrificing quality."
    ],
    tools: ["Meta Ads", "A/B Testing", "Pacing & Retention"]
  },
  {
    id: "legends-in-seconds",
    company: "Legends in Seconds",
    role: "Social Media Manager",
    location: "Philippines",
    period: "May 2025 - Present",
    bulletPoints: [
      "Managed and executed the content strategy for YouTube Shorts, aligning with brand voice and digital trends.",
      "Edited and published short-form video content to drive engagement and subscriber growth.",
      "Scheduled posts for optimal reach across platforms, ensuring consistent audience interaction.",
      "Monitored and responded to audience comments to foster community engagement and brand loyalty."
    ],
    tools: ["YouTube Shorts", "Content Strategy", "Community Management"]
  },
  {
    id: "tiktok-affiliate",
    company: "TikTok",
    role: "Social Media Content & Affiliate Partner",
    location: "Philippines",
    period: "January 2025 - Present",
    bulletPoints: [
      "Created engaging video content for products on TikTok to drive brand awareness and direct engagement.",
      "Produced high-quality video content showcasing product features, benefits, and real-life usage.",
      "Researched trending formats, sounds, and styles to optimize video performance.",
      "Collaborated with brands to develop creative concepts and deliver compelling promotional content.",
      "Utilized TikTok algorithm and best practices to maximize reach and audience interaction."
    ],
    tools: ["TikTok", "Product Showcases", "Trending Audio", "Algorithm Optimization"]
  },
  {
    id: "the-birdie-agency",
    company: "The Birdie Agency",
    role: "Video Editor",
    location: "Australia",
    period: "June 2025 - Present",
    bulletPoints: [
      "Edited and produced high-quality video content for marketing campaigns and social media platforms.",
      "Collaborated with creative teams to enhance storytelling, apply visual effects, transitions, and audio adjustments.",
      "Ensured all final outputs aligned with the agency brand style and client expectations."
    ],
    tools: ["Visual Storytelling", "Visual Effects", "Audio Adjustments"]
  },
  {
    id: "brooke-lewis",
    company: "Brooke Lewis",
    role: "Video Editor",
    location: "Sydney, Australia",
    period: "April 2025 - Present",
    bulletPoints: [
      "Edited and produced short-form video content specifically for Instagram, including Reels and Stories.",
      "Handled video trimming, transitions, color adjustments, sound syncing, and animated captions.",
      "Ensured all videos matched Brooke Lewis personal brand and visual style.",
      "Delivered content on time to maintain a consistent posting schedule and audience interaction."
    ],
    tools: ["Instagram Reels", "Sound Syncing", "Color Grading"]
  },
  {
    id: "gchrom-media",
    company: "GChrom Media Services",
    role: "YouTube Shorts Video Editor",
    location: "Canada",
    period: "May 2025 - Present",
    bulletPoints: [
      "Edited vertical short-form video content optimized for YouTube Shorts (9:16 aspect ratio).",
      "Cut and arranged clips to fit fast-paced storytelling styles with attention-grabbing intros.",
      "Added subtitles, motion graphics, emojis, and visual effects to boost viewer retention.",
      "Selected trending audio tracks and synced them effectively with video transitions and pacing.",
      "Repurposed long-form content into multiple engaging short clips for broader reach.",
      "Delivered scroll-stopping content under tight deadlines with quick turnaround times."
    ],
    tools: ["YouTube Shorts", "Subtitles", "Repurposing", "Pacing"]
  },
  {
    id: "damon-crowdy",
    company: "Damon Crowdy Foundation",
    role: "Graphic Designer",
    location: "USA",
    period: "April 2025 - Present",
    bulletPoints: [
      "Designed and scheduled visual content for the foundation social media platforms.",
      "Created graphics for campaigns, announcements, and community engagement posts.",
      "Maintained brand consistency across all visual materials.",
      "Collaborated with the team to ensure timely delivery of scheduled content.",
      "Created scheduled written content for each post."
    ],
    tools: ["Graphic Design", "Brand Identity", "Social Content"]
  },
  {
    id: "rebirth-enhancement",
    company: "Rebirth Enhancement Services",
    role: "Graphic Designer",
    location: "Philippines",
    period: "April 2025",
    bulletPoints: [
      "Designed and created visually engaging graphic content for the company social media platforms.",
      "Developed scheduled posts and promotional materials that boosted online presence.",
      "Managed multiple design tasks within tight deadlines, delivering high-quality outputs."
    ],
    tools: ["Digital Design", "Marketing Assets", "Layout"]
  },
  {
    id: "freelance-graphics",
    company: "Freelance / Self Employed",
    role: "Graphics Designer",
    location: "Binalbagan, Philippines",
    period: "March 2025 - Present",
    bulletPoints: [
      "Designed clean visual content including posters, slogans, and social media graphics.",
      "Created visually appealing designs tailored to different needs and audiences.",
      "Utilized design software to develop creative concepts and execute high-quality graphics.",
      "Ensured designs aligned with clients vision while maintaining clarity and aesthetic appeal."
    ],
    tools: ["Visual Design", "Posters", "Branding Assets"]
  },
  {
    id: "freelance-video",
    company: "Freelance / Self Employed",
    role: "Video Editor",
    location: "Bacolod, Philippines",
    period: "August 2023 - Present",
    bulletPoints: [
      "Edited videos for diverse projects on a commission basis using CapCut.",
      "Provided clean cuts, smooth transitions, audio synchronization, and text overlays.",
      "Worked closely with clients to meet project requirements and deliver on time."
    ],
    tools: ["CapCut", "Audio Sync", "Text Overlays"]
  },
  {
    id: "mela-calabrio",
    company: "Mela Calabrio",
    role: "Social Media Manager",
    location: "Philippines",
    period: "January 2015 - Present",
    bulletPoints: [
      "Managed the Facebook page dedicated to book characters, maintaining audience interaction.",
      "Created and scheduled posts aligned with book characters and storyline.",
      "Developed interactive chat content to enhance fan immersion.",
      "Monitored page insights and adjusted content strategies to improve reach and engagement."
    ],
    tools: ["Community Management", "Audience Engagement", "Insights"]
  }
];

export const SKILL_PILLARS = [
  {
    number: "01",
    title: "Short-Form Video Architecture",
    tagline: "Retention Pacing & Kinetic Visuals",
    description: "Cutting raw footage into compelling 9:16 stories. Specializing in 3-second hold hooks, dynamic subtitles, smooth speed-ramping, and on-beat audio syncing tailored for Meta Reels, TikTok, and YouTube Shorts.",
    capabilities: [
      "CapCut Pro & Desktop Editing",
      "3-Second Hook Optimization",
      "Dynamic Subtitle Keyframing",
      "Sound Design & Audio Synchronization",
      "Visual Transitions & B-Roll Refinement"
    ]
  },
  {
    number: "02",
    title: "Performance Ad Strategy & A/B Testing",
    tagline: "Creative Iterations Built to Scale ROAS",
    description: "Developing multiple intro variations, pacing changes, and call-to-action hooks from a single shoot. Helping e-commerce brands discover winning creatives that lower customer acquisition costs.",
    capabilities: [
      "Meta Ads (Facebook & Instagram)",
      "Multi-Cut A/B Creative Testing",
      "Direct Response Hook Research",
      "Fast 24-48h Ad Turnarounds",
      "Organic-to-Paid Repurposing"
    ]
  },
  {
    number: "03",
    title: "Visual Design & Social Brand Strategy",
    tagline: "Quiet Luxury & High-Converting Storefronts",
    description: "Designing conversion-centered Amazon EBC infographics, social media feed layouts, and consistent visual guidelines that make brands feel established, authentic, and instantly trustworthy.",
    capabilities: [
      "Amazon Listing & EBC Infographics",
      "Social Media Feed & Story Design",
      "Typography & Layout Hierarchy",
      "Content Scheduling & Strategy",
      "Community Engagement Management"
    ]
  }
];

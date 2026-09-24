import { VideoProject, GraphicProject, EducationItem, TrainingItem, SkillsCategory, ExperienceItem, SoftwareCategoryGroup } from '../types';

export const USER_INFO = {
  name: 'Shamim Hossain',
  role: 'Video Editor & Graphic Designer',
  tagline: 'I turn raw footage and creative ideas into polished, engaging visual content through editing, motion, and modern storytelling.',
  email: 'shamimhossain.connect@gmail.com',
  whatsapp: '+8801620572429',
  whatsappDisplay: '01620572429',
  facebookUrl: 'https://www.facebook.com/ksg.shamim',
  address: 'Holding No.99, Satarkul, Uttar Badda, Dhaka-12',
  locationCity: 'Dhaka, Bangladesh',
  profileImage: 'profile.png',
  fallbackProfileImage: 'https://i.postimg.cc/xT1qjt3L/Shamim-Hossain-3706-(1).png',
  postImgProfileUrl: 'https://postimg.cc/SjHmDL5K',
  bio: '',
  skills: [
    'Dynamic Pacing & Beat Sync',
    'Atmospheric Sound Design & Audio Mixing',
    'Cinematic Color Grading (Log / Rec.709)',
    'Motion Graphics & Clean Lower Thirds',
    'Story-Driven Montage & Pacing',
    'Short-Form (Reels/TikTok) & Long-Form Video'
  ],
  tools: ['Adobe Premiere Pro', 'After Effects', 'DaVinci Resolve', 'CapCut Pro', 'Photoshop']
};

export const FEATURED_VIDEO: VideoProject = {
  id: 'featured-reel',
  youtubeId: 'wYZlfeXtEGs',
  title: 'Cinematic Editing Showreel & Visual Narrative',
  category: 'Featured Work / Trailer',
  description: '',
  tags: ['Showreel', 'Sound Design', 'Pacing', 'Color Grade']
};

export const PORTFOLIO_VIDEOS: VideoProject[] = [
  {
    id: 'video-1',
    youtubeId: 'wYZlfeXtEGs',
    title: 'Professional Motion Design created By Adobe After Effects',
    category: 'Motion Design',
    description: 'Dynamic typography, sleek shapes, smooth ease-in-out curves, and impactful motion design crafted in Adobe After Effects.',
    tags: ['After Effects', 'Motion Design', 'Typography', 'Animation']
  },
  {
    id: 'video-2',
    youtubeId: 'pYMFoXSQ_h4',
    title: 'Smooth Camera Motion | Cinematic Camera Movement',
    category: 'Cinematic Camera',
    description: 'Realistic depth of field, fluid 3D spatial camera tracking, and cinematic movement transitions in After Effects.',
    tags: ['Camera Motion', 'Cinematic', '3D Space', 'After Effects']
  },
  {
    id: 'video-3',
    youtubeId: 'VmEapW-ZIuI',
    title: 'Null Object Motion | Smooth Animation',
    category: 'Motion & Animation',
    description: 'Hierarchical animation mastery utilizing Null Objects, complex parenting structures, and fluid spatial choreography.',
    tags: ['Null Object', 'Smooth Animation', 'After Effects', 'Keyframing']
  },
  {
    id: 'video-4',
    youtubeId: 'yqH7iL-dyMM',
    title: 'Telegram Logo Motion | Smooth Logo Animation',
    category: 'Logo Animation',
    description: 'Clean branded vector morphing, trim paths, dynamic bounce physics, and modern logo intro reveal animation.',
    tags: ['Logo Animation', 'Trim Paths', 'Motion Graphics', 'Branding']
  }
];

export const GRAPHIC_PROJECTS: GraphicProject[] = [
  {
    id: 'graphic-1',
    filename: 'graphic1.png',
    title: 'Visual Identity & Creative Showcase 01',
    category: 'Key Art & Poster',
    postImgUrl: 'https://postimg.cc/TK4dWmXT',
    directImageUrl: 'https://i.postimg.cc/jjsLmQgn/Shamim-Hossain-3706-1.png'
  },
  {
    id: 'graphic-2',
    filename: 'graphic2.png',
    title: 'Editorial Poster & Cinematic Design 02',
    category: 'Editorial Poster',
    postImgUrl: 'https://postimg.cc/7GvqKk69',
    directImageUrl: 'https://i.postimg.cc/wvM3TxYC/Shamim-Hossain-3706-3.png'
  },
  {
    id: 'graphic-3',
    filename: 'graphic3.png',
    title: 'Motion Art & Creative Composition 03',
    category: 'Visual Showcase',
    postImgUrl: 'https://postimg.cc/ft4M8NLP',
    directImageUrl: 'https://i.postimg.cc/k4GDXMd7/Shamim-Hossain-3706-4.png'
  },
  {
    id: 'graphic-4',
    filename: 'graphic4.png',
    title: 'Dynamic Thumbnail & Poster Art 04',
    category: 'Thumbnail Art',
    postImgUrl: 'https://postimg.cc/hJQS8jSK',
    directImageUrl: 'https://i.postimg.cc/8CtjSJ9f/Shamim-Hossain-3706-5.png'
  },
  {
    id: 'graphic-5',
    filename: 'graphic5.png',
    title: 'Modern Typography & Layout 05',
    category: 'Graphic Design',
    postImgUrl: 'https://postimg.cc/zH881FTH',
    directImageUrl: 'https://i.postimg.cc/fy0LmHLC/Shamim-Hossain-3706-6.png'
  },
  {
    id: 'graphic-6',
    filename: 'graphic6.png',
    title: 'Brand Visuals & Poster Artwork 06',
    category: 'Key Art & Poster',
    postImgUrl: 'https://postimg.cc/FkpmFkxb',
    directImageUrl: 'https://i.postimg.cc/pybdZDhS/Shamim-Hossain-3706-7.png'
  },
  {
    id: 'graphic-7',
    filename: 'graphic7.png',
    title: 'High-Impact Digital Graphics 07',
    category: 'Social Branding',
    postImgUrl: 'https://postimg.cc/RJd9CJTQ',
    directImageUrl: 'https://i.postimg.cc/bdcvTQDM/Shamim-Hossain-3706-8.png'
  },
  {
    id: 'graphic-8',
    filename: 'graphic8.png',
    title: 'Visual Concept & Harmony 08',
    category: 'Visual Concept',
    postImgUrl: 'https://postimg.cc/gLsdcLKM',
    directImageUrl: 'https://i.postimg.cc/fknbKxSh/Shamim-Hossain-3706-9.png'
  },
  {
    id: 'graphic-9',
    filename: 'graphic9.png',
    title: 'Editorial Poster & Aesthetics 09',
    category: 'Poster & Cover',
    postImgUrl: 'https://postimg.cc/PvyhfvMy',
    directImageUrl: 'https://i.postimg.cc/fknbKxtG/Shamim-Hossain-3706-10.png'
  },
  {
    id: 'graphic-10',
    filename: 'graphic10.png',
    title: 'Cinematic Storytelling Art 10',
    category: 'Creative Design',
    postImgUrl: 'https://postimg.cc/4HPZ4H12',
    directImageUrl: 'https://i.postimg.cc/t7Qg5hnb/Shamim-Hossain-3706-11.png'
  },
  {
    id: 'graphic-11',
    filename: 'graphic11.png',
    title: 'Signature Poster & Visual Work 11',
    category: 'Key Art & Poster',
    postImgUrl: 'https://postimg.cc/7J9DPJNd',
    directImageUrl: 'https://i.postimg.cc/xqDdRKNf/Shamim-Hossain-3706-12.png'
  },
  {
    id: 'graphic-12',
    filename: 'Shamim-Hossaon.png',
    title: 'Visual Identity & Creative Artwork 12',
    category: 'Key Art & Poster',
    postImgUrl: 'https://postimg.cc/qg9hpG3v',
    directImageUrl: 'https://i.postimg.cc/BQvxcYZH/Shamim-Hossaon.png'
  }
];

export const CURRENT_EDUCATION: EducationItem = {
  degree: 'Fazil — 2nd Year',
  institution: 'Sunahazra Mufizea Fazil (Degree) Madrasha',
  board: 'Dhaka Board',
  status: 'Currently Continuing',
  isCurrent: true
};

export const ACADEMIC_BACKGROUND: EducationItem[] = [
  {
    degree: 'Alim (HSC Equivalent)',
    institution: 'Sunahazra Mufizea Fazil (Degree) Madrasha',
    board: 'Madrasah Education Board',
    status: 'Completed',
    score: 'GPA 3.14'
  },
  {
    degree: 'Dakhil (SSC Equivalent)',
    institution: 'Sunahazra Mufizea Fazil (Degree) Madrasha',
    board: 'Madrasah Education Board',
    status: 'Completed',
    score: 'GPA 2.95'
  }
];

export const PROFESSIONAL_TRAINING: TrainingItem[] = [
  {
    institute: 'As-Sunnah Skill Development Institute',
    program: 'SBMC — Small Business Management Course',
    role: 'Student / Trainee'
  }
];

export const SKILL_CATEGORIES: SkillsCategory[] = [
  {
    title: 'Hard Skills',
    skills: [
      'Graphic Design',
      'Video Editing',
      'AI & Creative Tools',
      'Meta Marketing'
    ]
  },
  {
    title: 'Soft Skills',
    skills: [
      'Practical English',
      'Practical Accounting',
      'Microsoft Word',
      'Microsoft Excel',
      'Microsoft PowerPoint',
      'Communication',
      'Teamwork',
      'Creativity & Problem Solving',
      'Time Management'
    ]
  },
  {
    title: 'Knowledge & Personal Development',
    skills: [
      'Islamic Dawah'
    ]
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    organization: 'Chattia Izzat Ali Atim Khana & Madrasha',
    title: 'Professional Experience',
    duration: '2.5 Years',
    description: 'Gained 2.5 years of practical experience in a structured educational environment, developing strong communication, teamwork, responsibility, time management, and organizational skills.',
    skillsAndResponsibilities: [
      'Communication & Coordination',
      'Teamwork & Collaboration',
      'Student Support & Interaction',
      'Daily Task Management',
      'Time Management & Discipline',
      'Organizational Skills',
      'Professional Responsibility'
    ]
  }
];

export const SOFTWARE_TOOLS_DATA: SoftwareCategoryGroup[] = [
  {
    category: 'Video Editing',
    description: 'Timeline editing, multi-track audio synching, visual effects, and dynamic short-form pacing.',
    tools: [
      {
        id: 'premiere-pro',
        name: 'Adobe Premiere Pro',
        category: 'Video Editing',
        description: 'Industry-standard non-linear editing, narrative pacing, multi-camera sync & color grading.',
        level: 'Primary Tool',
        logoType: 'premiere',
        color: '#9999FF'
      },
      {
        id: 'after-effects',
        name: 'Adobe After Effects',
        category: 'Video Editing',
        description: 'Motion graphics, kinetic typography, cinematic titles, transitions & visual compositing.',
        level: 'VFX & Motion',
        logoType: 'aftereffects',
        color: '#9999FF'
      },
      {
        id: 'capcut',
        name: 'CapCut',
        category: 'Video Editing',
        description: 'High-retention short-form editing, reels, captions, trending pacing & rapid delivery.',
        level: 'Short-Form',
        logoType: 'capcut',
        color: '#00F2FE'
      }
    ]
  },
  {
    category: 'Graphic Design',
    description: 'High-impact key visuals, YouTube thumbnails, editorial poster compositions, and vector branding.',
    tools: [
      {
        id: 'photoshop',
        name: 'Adobe Photoshop',
        category: 'Graphic Design',
        description: 'Photo manipulation, YouTube thumbnail design, color grading, lighting & key visual art.',
        level: 'Key Art & Posters',
        logoType: 'photoshop',
        color: '#31A8FF'
      },
      {
        id: 'illustrator',
        name: 'Adobe Illustrator',
        category: 'Graphic Design',
        description: 'Vector graphics, brand assets, logo creation, iconography & scalable typography.',
        level: 'Vector & Assets',
        logoType: 'illustrator',
        color: '#FF9A00'
      },
      {
        id: 'canva',
        name: 'Canva',
        category: 'Graphic Design',
        description: 'Rapid social media layouts, promotional banners, carousels, brand kits & content creation.',
        level: 'Social & Layouts',
        logoType: 'canva',
        color: '#00C4CC'
      }
    ]
  },
  {
    category: 'Productivity & Office',
    description: 'Executive documentation, data sheets, presentations, budgeting, and project proposals.',
    tools: [
      {
        id: 'ms-word',
        name: 'Microsoft Word',
        category: 'Productivity & Office',
        description: 'Formal documentation, contracts, client proposals, scripts & structured reports.',
        level: 'Documentation',
        logoType: 'word',
        color: '#185ABD'
      },
      {
        id: 'ms-excel',
        name: 'Microsoft Excel',
        category: 'Productivity & Office',
        description: 'Data management, project budgeting, invoicing, timeline calculations & tracking.',
        level: 'Data & Budgeting',
        logoType: 'excel',
        color: '#107C41'
      },
      {
        id: 'ms-powerpoint',
        name: 'Microsoft PowerPoint',
        category: 'Productivity & Office',
        description: 'High-impact client pitch decks, project presentations, visual storytelling & storyboards.',
        level: 'Presentations',
        logoType: 'powerpoint',
        color: '#D83B01'
      }
    ]
  },
  {
    category: 'AI & Creative Tools',
    description: 'Modern generative AI pipelines for prompt-assisted artwork, audio enhancement, and accelerated workflow.',
    tools: [
      {
        id: 'ai-creative-tools',
        name: 'AI-powered Creative Tools',
        category: 'AI & Creative Tools',
        description: 'Generative AI workflows for image upscaling, generative fill, voice synthesis, smart transcripts & prompt-driven ideation.',
        level: 'Next-Gen Workflow',
        logoType: 'ai-tools',
        color: '#8B5CF6'
      }
    ]
  }
];




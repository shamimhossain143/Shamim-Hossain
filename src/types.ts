export type ThemeMode = 'dark' | 'light';

export interface VideoProject {
  id: string;
  youtubeId: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
}

export interface GraphicProject {
  id: string;
  filename: string;
  title: string;
  category: string;
  postImgUrl: string;
  directImageUrl: string;
  aspectRatio?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  board?: string;
  status: string;
  score?: string;
  isCurrent?: boolean;
}

export interface TrainingItem {
  institute: string;
  program: string;
  role: string;
}

export interface SkillsCategory {
  title: string;
  skills: string[];
}

export interface ExperienceItem {
  organization: string;
  title: string;
  duration: string;
  description: string;
  skillsAndResponsibilities: string[];
}

export interface ToolItem {
  id: string;
  name: string;
  category: string;
  description: string;
  level?: string;
  logoType: 'premiere' | 'aftereffects' | 'capcut' | 'photoshop' | 'illustrator' | 'canva' | 'word' | 'excel' | 'powerpoint' | 'ai-tools';
  color: string;
}

export interface SoftwareCategoryGroup {
  category: string;
  description: string;
  tools: ToolItem[];
}


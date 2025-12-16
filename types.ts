export interface Project {
  title: string;
  date: string;
  description: string;
  technologies: string[];
  points: string[];
  link?: string;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  score: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Achievement {
  title: string;
  year: string;
}

export interface Certification {
  name: string;
  provider: string;
}

export interface Position {
  role: string;
  organization: string;
  period: string;
}
export interface ProjectType {
  id: number;
  tools: string[];
  title: string;
  description: string;
  image: string;
  url: string;
  status: string;
}

export interface SkillType {
  id: number;
  tech: string[];
  title: string;
  color: string;
}

export interface AboutType {
  id: number;
  about: string;
  title: string;
  redaction: string;
}
export type Level = 'Iniciante' | 'Básico' | 'Intermediário' | 'Avançado' | 'Profissional';

export interface Lesson {
  id: string;
  module: number;
  moduleTitle: string;
  title: string;
  level: Level;
  duration: string;
  summary: string;
  topics: string[];
  project?: boolean;
}

export interface Module {
  id: number;
  title: string;
  label: string;
  color: string;
}

export interface Quiz {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}

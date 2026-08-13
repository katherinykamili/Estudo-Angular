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

export type EnvironmentId = 'browser' | 'academy' | 'typescript-lab' | 'angular-lab';

export interface LearningEnvironment {
  id: EnvironmentId;
  label: string;
  purpose: string;
  preparation: string[];
  commands?: string;
  files?: string[];
  test: string;
  expected: string;
  troubleshooting: string[];
  continuation: string;
  undo: string;
}

export type SectionKind =
  | 'concept'
  | 'diagram'
  | 'timeline'
  | 'comparison'
  | 'code'
  | 'prediction'
  | 'debugging'
  | 'lab'
  | 'practice'
  | 'milestones'
  | 'retrieval'
  | 'reflection'
  | 'deep-dive';

export interface LessonSection {
  kind: SectionKind;
  title: string;
  body?: string;
  code?: string;
  language?: string;
  items?: string[];
  steps?: string[];
  prompt?: string;
  answer?: string;
  solution?: string;
  explanation?: string;
}

export interface Resource {
  title: string;
  url: string;
  source: 'Angular' | 'TypeScript' | 'MDN';
}

export interface LessonContent {
  centralQuestion: string;
  prerequisites: string[];
  learningGoals: string[];
  misconceptions: string[];
  skills: string[];
  environment: LearningEnvironment;
  sections: LessonSection[];
  checklist: string[];
  resources: Resource[];
  connection: string;
}

export interface ReviewQuestion {
  prompt: string;
  answer: string;
}

export interface ModuleReview {
  questions: ReviewQuestion[];
  mixedExercise: string;
  debugging: string;
  miniProject: string;
}

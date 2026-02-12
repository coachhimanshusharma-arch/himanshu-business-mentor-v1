
export interface Lead {
  name: string;
  situation: string;
  whatsapp: string;
  email?: string;
}

export enum QuizStep {
  INTRO = 'INTRO',
  Q1 = 'Q1',
  Q2 = 'Q2',
  Q3 = 'Q3',
  Q4 = 'Q4',
  Q5 = 'Q5',
  RESULT = 'RESULT'
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}



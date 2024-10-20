import { create } from 'zustand';

interface QuizState {
  currentStep: number;
  questions: Array<{ question: string; options: Array<{ display: string; value: any; isRejection?: boolean }> }>;
  answers: any[];
  rejectionOccurred: boolean;
  setAnswer: (step: number, answer: any, isRejection: boolean) => void;
  nextStep: () => void;
  prevStep: () => void;
}

export const useQuizStore = create<QuizState>((set) => ({
  currentStep: 0,
  questions: [],
  answers: [],
  rejectionOccurred: false,
  setAnswer: (step, answer, isRejection) => set((state) => {
    const newAnswers = [...state.answers];
    newAnswers[step] = answer;
    return { 
      answers: newAnswers,
      rejectionOccurred: state.rejectionOccurred || isRejection
    };
  }),
  nextStep: () => set((state) => ({ currentStep: state.currentStep + 1 })),
  prevStep: () => set((state) => ({ currentStep: state.currentStep - 1 })),
}));

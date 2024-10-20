import create from 'zustand';

interface QuizState {
  currentStep: number;
  questions: Array<{ question: string; options: Array<{ display: string; value: any }> }>;
  answers: any[];
  setAnswer: (step: number, answer: any) => void;
  nextStep: () => void;
  prevStep: () => void;
}

export const useQuizStore = create<QuizState>((set) => ({
  currentStep: 0,
  questions: [
    {
      question: "Which image best matches your hair loss?",
      options: [
        { display: "Image A", value: "A" },
        { display: "Image B", value: "B" }
      ]
    },
    {
      question: "Have you ever been diagnosed with prostate cancer?",
      options: [
        { display: "Yes", value: true },
        { display: "No", value: false }
      ]
    }
  ],
  answers: [],
  setAnswer: (step, answer) => set((state) => {
    const newAnswers = [...state.answers];
    newAnswers[step] = answer;
    return { answers: newAnswers };
  }),
  nextStep: () => set((state) => ({ currentStep: state.currentStep + 1 })),
  prevStep: () => set((state) => ({ currentStep: state.currentStep - 1 })),
}));

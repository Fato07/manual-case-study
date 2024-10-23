import { create } from 'zustand';

/**
 * Interface defining the structure and functionality of the Quiz state
 */
interface QuizState {
  /** Current question index in the quiz */
  currentStep: number;
  
  /** Array of quiz questions with their associated options */
  questions: Array<{
    question: string;
    options: Array<{
      display: string;
      value: any;
      isRejection?: boolean;
    }>;
  }>;
  
  /** Array storing user's answers for each question */
  answers: any[];
  
  /** Flag indicating if any rejection criteria was met during the quiz */
  rejectionOccurred: boolean;
  
  /** 
   * Sets an answer for a specific step
   * @param step - The question index
   * @param answer - The user's selected answer
   * @param isRejection - Whether this answer triggers a rejection
   */
  setAnswer: (step: number, answer: any, isRejection: boolean) => void;
  
  /** Advances to the next question */
  nextStep: () => void;
  
  /** Returns to the previous question */
  prevStep: () => void;
}

/**
 * Zustand store managing the quiz state and actions
 * 
 * @example
 * const { currentStep, answers, setAnswer } = useQuizStore();
 * setAnswer(currentStep, selectedOption, false);
 */
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
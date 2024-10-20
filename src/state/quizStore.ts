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
  questions: [
    {
      question: "Which image best matches your hair loss?",
      type: "ChoiceType",
      options: [
        {
          display: "<img alt=\"Temples\" src=\"https://s3-eu-west-1.amazonaws.com/manualco/questions/temples-hairloss.png\" srcset=\"https://s3-eu-west-1.amazonaws.com/manualco/questions/temples-hairloss%402x.png 2x\" />",
          value: "Temples",
          isRejection: false
        },
        {
          display: "<img alt=\"Temples & Crown\" src=\"https://s3-eu-west-1.amazonaws.com/manualco/questions/templescrown-hairloss.png\" srcset=\"https://s3-eu-west-1.amazonaws.com/manualco/questions/templescrown-hairloss%402x.png 2x\"/>",
          value: "Temples & Crown",
          isRejection: false
        },
        {
          display: "<img alt=\"Patchy\" src=\"https://s3-eu-west-1.amazonaws.com/manualco/questions/patchy-hairloss.png\" srcset=\"https://s3-eu-west-1.amazonaws.com/manualco/questions/patchy-hairloss%402x.png 2x\"/>",
          value: "Patchy",
          isRejection: true
        },
        {
          display: "<img alt=\"Moderate\" src=\"https://s3-eu-west-1.amazonaws.com/manualco/questions/moderate-hairloss.png\" srcset=\"https://s3-eu-west-1.amazonaws.com/manualco/questions/moderate-hairloss%402x.png 2x\" />",
          value: "Moderate",
          isRejection: false
        },
        {
          display: "<img alt=\"Extensive\" src=\"https://s3-eu-west-1.amazonaws.com/manualco/questions/extensive-hairloss.png\" srcset=\"https://s3-eu-west-1.amazonaws.com/manualco/questions/extensive-hairloss%402x.png 2x\"/>",
          value: "Extensive",
          isRejection: true
        },
        {
          display: "<img alt=\"Complete\" src=\"https://s3-eu-west-1.amazonaws.com/manualco/questions/complete-hairloss.png\" srcset=\"https://s3-eu-west-1.amazonaws.com/manualco/questions/complete-hairloss%402x.png 2x\" />",
          value: "Complete",
          isRejection: true
        }
      ]
    },
    {
      question: "Have you ever been diagnosed with prostate cancer, or are you currently undergoing PSA/Prostate monitoring?",
      type: "ChoiceType",
      options: [
        {
          display: "Yes",
          value: true,
          isRejection: true
        },
        {
          display: "No",
          value: false,
          isRejection: false
        }
      ]
    },
    {
      question: "Have you ever been diagnosed with breast cancer or noticed any changes in your breast tissue such as lumps, pain, nipple discharge or swelling?",
      type: "ChoiceType",
      options: [
        {
          display: "Yes",
          value: true,
          isRejection: true
        },
        {
          display: "No",
          value: false,
          isRejection: false
        }
      ]
    }
  ],
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

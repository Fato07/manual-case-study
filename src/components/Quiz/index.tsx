import React, { useEffect, FC } from 'react';
import { z } from 'zod';
import { useQuizStore } from '../../state/quizStore';
import Button from '../Button';
import styles from './styles.module.css';
import Lottie from 'react-lottie';
import animationData from '../../assets/lotties/Animation - 1729688853816.json';

interface QuizProps {
  questions: Array<{ question: string; 
  options: Array<{ display: string; value: any; isRejection?: boolean }> }>;
}

/**
 * Renders a quiz component with a series of questions and options.
 * 
 * The quiz component is responsible for managing the state of the current question, the user's answers, and the navigation between questions.
 * It also displays a modal with a success or rejection message at the end of the quiz.
 * 
 * @param questions - An array of quiz questions, where each question has a question string and an array of options.
 * @returns A React functional component that renders the quiz.
 */
const Quiz: FC<QuizProps> = ({ questions }) => {
  const { currentStep, answers, setAnswer, nextStep, prevStep, rejectionOccurred } = useQuizStore();

  const answerSchema = z.array(z.object({
    question: z.string(),
    options: z.array(z.object({
      display: z.string(),
      value: z.any(),
      isRejection: z.boolean().optional()
    }))
  }));

  useEffect(() => {
    try {
      answerSchema.parse(questions);
    } catch (e) {
      console.error("Validation error:", e);
    }
  }, [questions]);

  /**
   * Handles the user's answer selection for the current quiz question.
   * 
   * @param value - The value of the selected option.
   * @returns void
   */
  const handleAnswer = (value: any) => {
    const isRejection = questions[currentStep].options.find(option => option.value === value)?.isRejection || false;
    setAnswer(currentStep, value, isRejection);
  };

  const lottieOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className={styles['quiz__overlay']}>
      <div className={styles['quiz__question']}>
        <h2>{questions[currentStep].question}</h2>
        <div className={styles['quiz__options']}>
          {questions[currentStep].options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleAnswer(option.value)}
              className={`${styles['quiz__option']} ${answers[currentStep] === option.value ? styles['quiz__option--selected'] : ''}`}
              role="button"
              tabIndex={0}
            >
              <span dangerouslySetInnerHTML={{ __html: option.display }} />
            </div>
          ))}
        </div>
        <div className={styles['quiz__navigation']}>
          {currentStep > 0 && <Button onClick={prevStep}>Back</Button>}
          {currentStep < questions.length - 1 && (
            <Button onClick={nextStep}>
              Next
            </Button>
          )}
          {currentStep === questions.length - 1 && (
            <div>
              <div className={styles.modal}>
                {rejectionOccurred ? (
                  <p>
                    Unfortunately, we are unable to prescribe this medication for you. This is because finasteride can alter the PSA levels, which may be used to monitor for cancer. You should discuss this further with your GP or specialist if you would still like this medication.
                  </p>
                ) : (
                  <div>
                    <Lottie options={lottieOptions} height={200} width={200} />
                    <p>
                      Great news! We have the perfect treatment for your hair loss. Proceed to <a href="https://www.manual.co">www.manual.co</a>, and prepare to say hello to your new hair!
                    </p>
                </div>
                )}
                <Button onClick={() => window.location.reload()}>
                  Close
                </Button>
              </div>
              <div className={styles['modal-backdrop']} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Quiz;

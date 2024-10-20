import React, { useEffect, FC } from 'react';
import { z } from 'zod';
import { useQuizStore } from '../../state/quizStore';
import Button from '../Button';
import styles from './styles.module.css';

interface QuizProps {
  questions: Array<{ question: string; 
  options: Array<{ display: string; value: any; isRejection?: boolean }> }>;
}

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

  const handleAnswer = (value: any) => {
    const isRejection = questions[currentStep].options.find(option => option.value === value)?.isRejection || false;
    setAnswer(currentStep, value, isRejection);
  };

  return (
    <div className={styles['quiz__overlay']}>
      <div className={styles['quiz__question']}>
        <h2>{questions[currentStep].question}</h2>
        <div className={styles['quiz__options']}>
          {questions[currentStep].options.map((option, index) => (
            <Button
              key={index}
              onClick={() => handleAnswer(option.value)}
              className={answers[currentStep] === option.value ? styles['quiz__option--selected'] : ''}
            >
              <span dangerouslySetInnerHTML={{ __html: option.display }} />
            </Button>
          ))}
        </div>
        <div className={styles['quiz__navigation']}>
          {currentStep > 0 && <Button onClick={prevStep}>Back</Button>}
          {currentStep < questions.length - 1 && <Button onClick={nextStep}>Next</Button>}
          {currentStep === questions.length - 1 && (
            <div>
              {rejectionOccurred ? (
                <p>
                  Unfortunately, we are unable to prescribe this medication for you. This is because finasteride can alter the PSA levels, which may be used to monitor for cancer. You should discuss this further with your GP or specialist if you would still like this medication.
                </p>
              ) : (
                <p>
                  Great news! We have the perfect treatment for your hair loss. Proceed to <a href="https://www.manual.co">www.manual.co</a>, and prepare to say hello to your new hair!
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;

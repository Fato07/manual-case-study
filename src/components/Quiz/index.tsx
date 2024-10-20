import React from 'react';
import { useQuizStore } from '../../state/quizStore';
import styles from './styles.module.css';

const Quiz = () => {
  const { currentStep, questions, answers, setAnswer, nextStep, prevStep, rejectionOccurred } = useQuizStore();

  const handleAnswer = (value: any) => {
    const isRejection = questions[currentStep].options.find(option => option.value === value)?.isRejection || false;
    setAnswer(currentStep, value, isRejection);
  };

  return (
    <div className={styles['quiz-overlay']}>
      <div className={styles['quiz-question']}>
        <h2>{questions[currentStep].question}</h2>
        <div className={styles['quiz-options']}>
          {questions[currentStep].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option.value)}
              className={answers[currentStep] === option.value ? styles['quiz-option--selected'] : ''}
            >
              {option.display}
            </button>
          ))}
        </div>
        <div className={styles['quiz-navigation']}>
          {currentStep > 0 && <button onClick={prevStep}>Back</button>}
          {currentStep < questions.length - 1 && <button onClick={nextStep}>Next</button>}
          {currentStep === questions.length - 1 && (
            <div>
              {rejectionOccurred ? (
                <p>
                  Unfortunately, we are unable to prescribe this medication for you. This is because finasteride can alter the PSA levels, which may be used to monitor for cancer. You should discuss this further with your GP or specialist if you would still like this medication.
                </p>
              ) : (
                <p>Thank you for completing the quiz! You can proceed to the final result step.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;

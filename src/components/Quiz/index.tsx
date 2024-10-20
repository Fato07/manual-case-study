import React from 'react';
import { useQuizStore } from '../../state/quizStore';
import styles from './styles.module.css';

const Quiz = () => {
  const { currentStep, questions, answers, setAnswer, nextStep, prevStep } = useQuizStore();

  const handleAnswer = (value: any) => {
    setAnswer(currentStep, value);
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
        </div>
      </div>
    </div>
  );
};

export default Quiz;

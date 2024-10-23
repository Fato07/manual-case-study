import React from 'react';
import Button from '../Button';
import styles from './styles.module.css';
import backgroundImage from './background_hero_image.jpg';
import classNames from 'classnames';

/**
 * Defines the props for the `LandingHero` component.
 * 
 * @param setQuizVisible - A function that sets the visibility of the quiz.
 */
interface LandingHeroProps {
  setQuizVisible: (visible: boolean) => void;
}

const LandingHero: React.FC<LandingHeroProps> = ({ setQuizVisible }) => {
  return (
    <section className={styles.landingHero} style={{ backgroundImage: `url(${backgroundImage.src})` }}> 
      <div className={styles.landingHero__content}> 
        <h1 className={styles.landingHero__heading}>Be good to yourself</h1>
        <p className={styles.landingHero__description}>
          We're working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out.
        </p>
        <Button onClick={() => setQuizVisible(true)}>Take the Quiz</Button>
      </div>
      <div className={styles.landingHero__image}> 
      </div>
    </section>
  );
};

export default LandingHero;

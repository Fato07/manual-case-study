import React from 'react';
import styles from './styles.module.css';
import backgroundImage from './background_hero_image.jpg';
import classNames from 'classnames';

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
        <button className={styles.landingHero__button} onClick={() => setQuizVisible(true)}>Take the Quiz</button>
      </div>
      <div className={styles.landingHero__image}> 
      </div>
    </section>
  );
};

export default LandingHero;

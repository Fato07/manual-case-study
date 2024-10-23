import React from 'react';
import styles from './styles.module.css';
import classNames from 'classnames';

interface HeroSectionProps {
  imageSrc: string;
  title: string;
  description: string;
  subheading: string;
  imagePosition?: 'left' | 'right';
  backgroundSvg: string;
}

/**
 * Renders a hero section component with an image, title, description, and subheading.
 *
 * @param imageSrc - The URL of the image to display.
 * @param title - The main title of the hero section.
 * @param description - The description text to display.
 * @param subheading - The subheading text to display.
 * @param imagePosition - The position of the image, either 'left' or 'right'.
 * @param backgroundSvg - The URL of the background SVG image.
 * @returns A React component that renders the hero section.
 */
const HeroSection: React.FC<HeroSectionProps> = ({
  imageSrc,
  title,
  description,
  subheading,
  imagePosition,
  backgroundSvg,
}) => {
  return (
    <section
      className={classNames(
        styles.heroSection,
        imagePosition === 'left' ? styles.heroSection__imageLeft : styles.heroSection__imageRight
      )}
      style={{ backgroundImage: `url(${backgroundSvg})` }}
    >
      <div className={styles.heroSection__contentWrapper}>
        <div className={styles.heroSection__textContent}>
        <h3 className={styles.heroSection__subheading}>{subheading}</h3>
          <h2 className={styles.heroSection__title}>{title}</h2>
          <p className={styles.heroSection__description}>{description}</p>
        </div>
        <div className={styles.heroSection__imageWrapper}>
          <img
            src={imageSrc}
            alt={title}
            className={styles.heroSection__image}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

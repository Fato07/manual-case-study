import React from 'react';
import styles from './styles.module.css';
import Logo from './logo.svg'; 


const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__logo}>
          <img src={Logo.src} alt="Logo" className={styles.header__logo_image} />
        </div>
      </div>
    </header>
  );
};

export default Header;

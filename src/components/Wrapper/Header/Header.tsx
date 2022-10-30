import React from 'react';

import logo from '../../../assets/icons/logo.svg';
import profileLogo from '../../../assets/icons/profileLogo.svg';
import styles from './Header.module.scss';

const Header = () => (
  <div className={styles.header}>
    <div className={styles.header_section}>
      <img className={styles.logo} src={logo} alt="logo" />
      <div>Wrench CRM</div>
    </div>

    <div className={styles.profile}>
      <div className={styles.header_section}>
        <img
          className={styles.profile_logo}
          src={profileLogo}
          alt="Profile logo"
        />
        <div className={styles.profile_name}>Имя Фамилия</div>
      </div>
    </div>
  </div>
);

export default Header;

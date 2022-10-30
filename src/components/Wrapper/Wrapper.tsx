import React, { FC, ReactNode } from 'react';

import { Header } from './Header';
import { Sidebar } from './Sidebar';
import styles from './Wrapper.module.scss';

interface WrapperProps {
  children: ReactNode;
  pageName: string;
  pageDescription: string;
}

const Wrapper: FC<WrapperProps> = ({ children, pageName, pageDescription }) => (
  <div className={styles.wrapper}>
    <header className={styles.header}>
      <Header />
    </header>

    <main className={styles.container}>
      <nav className={styles.sidebar}>
        <Sidebar />
      </nav>

      <div className={styles.page}>
        <div className={styles.page__header}>
          <h1 className={styles.page__name}>{pageName}</h1>
          <h2 className={styles.page__description}>{pageDescription}</h2>
        </div>
        <div>{children}</div>
      </div>
    </main>
  </div>
);

export default Wrapper;

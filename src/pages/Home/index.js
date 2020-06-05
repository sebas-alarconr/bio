import React from 'react';
import Icon from 'components/Icon';

import styles from './styles.module.scss';

const Home = () => (
  <section className={`app_content ${styles.mainContainer}`}>
    <div className={styles.imageContainer}>
      <img src={`${process.env.PUBLIC_URL}/bio_pic.png`} alt="Personal" />
    </div>
    <h1>
      Hi! I'm Sebas.
    </h1>
    <section>
      <p>
        My name is Sebastian Alarcon. I'm {new Date(new Date() - new Date('1992-03-28')).getFullYear() - 1970} years old and I was born in Bogota, Colombia.
      </p>
      <a href="https://github.com/sebas-alarconr" target="_blank" rel="noopener noreferrer">
        <Icon
          iconStyle="brand"
          name="github-square"
          size="2x"
          type="secondary" />
      </a>
      <a href="https://www.linkedin.com/in/sebastian-alarcon-ramos" target="_blank" rel="noopener noreferrer">
        <Icon
          iconStyle="brand"
          name="linkedin"
          size="2x"
          type="secondary" />
      </a>
      <a href="https://stackoverflow.com/users/9347317/sebasti%C3%A1n-alarc%C3%B3n" target="_blank" rel="noopener noreferrer">
        <Icon
          iconStyle="brand"
          name="stack-overflow"
          size="2x"
          type="secondary" />
      </a>
    </section>
  </section>
);

export default Home;

import React from 'react';

import { useSelector } from 'react-redux';

import styles from './loader.module.scss';

const Loader = () => {
  const loading = useSelector(state => state.ui.loading);

  return (
    loading && (
      <div className={styles.mainContainer}>
        <div className={styles.loader} />
      </div>
    )
  );
};

export default Loader;

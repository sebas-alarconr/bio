import React, { useEffect } from 'react';

import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import styles from './notFound.module.scss';

const NotFound = ({ location }) => {
  useEffect(() => {
    toast.error("Oops! This page seems that doesn't exist");
  }, [location]);

  return (
    <section
      className={styles.mainSection}
      style={{
        background: `url(${process.env.PUBLIC_URL}/404.png) 60% center/cover`,
      }}
    >
      <div className={styles.mainContainer}>
        <div className={styles.textContainer}>
          <h1>404! Page Not Found.</h1>
          <h2>We were searching your page but we couldn&apos;t find it.</h2>
        </div>
      </div>
    </section>
  );
};

NotFound.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};

NotFound.defaultProps = {
  location: {
    pathname: '',
  },
};

export default NotFound;

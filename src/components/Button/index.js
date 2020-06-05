import React from 'react';
import classNames from 'classnames';

import styles from './button.module.scss';

const Button = ({ className, onClick, children }) => {
  const getClass = () => classNames(styles.button, className)

  return (
    <button
      className={getClass()}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

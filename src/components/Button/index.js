import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';
import classNames from 'classnames';

import styles from './button.module.scss';

const Button = ({ className, onClick, children, type }) => (
  <button
    className={classNames(styles.button, className)}
    onClick={onClick}
    type={type}
  >
    {children}
  </button>
);

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

Button.defaultProps = {
  className: '',
  onClick: noop,
  type: 'button',
};

export default Button;

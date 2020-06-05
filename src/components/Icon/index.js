import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './icon.module.scss';

const PRIMARY = 'primary';
const REGULAR = 'regular';
const LIGHT = 'light';
const BRAND = 'brand';
const SOLID = 'solid';
const XS = 'xs';
const SM = 'sm';
const LG = 'lg';
const X2 = '2x';
const X3 = '3x';
const X4 = '4x';
const X5 = '5x';
const X6 = '6x';
const X7 = '7x';
const X8 = '8x';
const X9 = '9x';
const x10 = '10x';

const Icon = ({
  animated,
  className,
  iconStyle,
  name,
  secondIconName,
  showSecondIcon,
  size,
  type,
}) => {
  const getClass = animatedIcon =>
    classNames(
      styles.icon,
      styles[type],
      getIconStyle(),
      `fa-${size}`,
      `fa-${animatedIcon ? secondIconName : name}`,
      animated && styles.animated,
      animated && !animatedIcon && styles.default,
      animated && animatedIcon && styles.transform,
      showSecondIcon && styles.showAnimation,
      className
    );

  const getIconStyle = () => {
    const prefix = 'fa';

    switch (iconStyle) {
      case REGULAR:
        return `${prefix}r`;
      case LIGHT:
        return `${prefix}l`;
      case BRAND:
        return `${prefix}b`;
      case SOLID:
        return `${prefix}s`;
      default:
        return '';
    }
  };

  return (
    <>
      <i className={getClass()} />
      {animated && <i className={getClass(true)} />}
    </>
  );
};

Icon.defaultProps = {
  animated: false,
  className: '',
  secondIconName: '',
  showSecondIcon: false,
  size: 'sm',
  type: PRIMARY,
};

Icon.propTypes = {
  animated: PropTypes.bool,
  className: PropTypes.string,
  iconStyle: PropTypes.oneOf([REGULAR, LIGHT, BRAND, SOLID]).isRequired,
  name: PropTypes.string.isRequired,
  secondIconName: PropTypes.string,
  showSecondIcon: PropTypes.bool,
  size: PropTypes.oneOf([XS, SM, LG, X2, X3, X4, X5, X6, X7, X8, X9, x10]),
  type: PropTypes.string,
};

export default Icon;

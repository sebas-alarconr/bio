import React, { Component } from 'react';
import './Icon.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const REGULAR = 'regular';
const LIGHT = 'light';
const BRAND = 'brand';
const SOLID = 'solid'
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

class Icon extends Component {
  render = () => {
    return(
      <i className={this.getClassname()} />
    );
  }

  getClassname = () => {
    return classNames({
      "icon": true,
      [this.getIconStyle()]: true,
      [this.getIconName()]: true,
      [`fa-${this.props.size}`]: true,
      [`icon--${this.props.type}`]: true
    });
  }

  getIconStyle = () => {
    let prefix = 'fa';
    let style;

    switch (this.props.iconStyle) {
      case REGULAR:
        style = `${prefix}r`;
        break;
      case LIGHT:
        style = `${prefix}l`;
        break;
      case BRAND:
        style = `${prefix}b`;
        break;
      case SOLID:
        style = `${prefix}s`
        break;
      default:
        style = '';
        break;
    }

    return style;
  }

  getIconName = () => {
    return `fa-${this.props.name}`;
  }
}

Icon.defaultProps = {
  size: 'sm'
}

Icon.propTypes = {
  style: PropTypes.oneOf([REGULAR, LIGHT, BRAND, SOLID]),
  size: PropTypes.oneOf([XS, SM, LG, X2, X3, X4, X5, X6, X7, X8, X9, x10])
}

export default Icon;

import React, { Component } from 'react';
import './Icon.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const PRIMARY = 'primary';
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
      <React.Fragment>
        <i className={this.getClass()} />
        {this.renderAnimatedIcon()}
      </React.Fragment>
    );
  }

  renderAnimatedIcon = () => {
    let content;

    if (this.props.animated) {
      content = (<i className={this.getClass(true)} />);
    }

    return content;
  }

  getClass = (animated) => {
    let classes = {
      "icon": true,
      "icon--animated": this.props.animated,
      "icon__default": this.props.animated && !animated,
      "icon__transform": this.props.animated && animated,
      "show-animation": this.props.showSecondIcon
    };

    classes[this.getIconStyle()] = true;
    classes[this.getIconName(animated)] = true;
    classes[`fa-${this.props.size}`] = true;
    classes[`icon--${this.props.type}`] = true;
    classes[this.props.className] = this.props.className;

    return classNames(classes);
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

  getIconName = (animated) => {
    let name = animated ? this.props.secondIconName : this.props.name;

    return `fa-${name}`;
  }
}

Icon.defaultProps = {
  animated: false,
  showSecondIcon: false,
  size: 'sm',
  type: PRIMARY
}

Icon.propTypes = {
  iconStyle: PropTypes.oneOf([REGULAR, LIGHT, BRAND, SOLID]),
  size: PropTypes.oneOf([XS, SM, LG, X2, X3, X4, X5, X6, X7, X8, X9, x10])
}

export default Icon;

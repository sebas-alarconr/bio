import React, { Component } from 'react';
import classNames from 'classnames';

class Button extends Component {
  render = () => (
    <button
      className={this.getClass()}
      onClick={this.props.onClick}
    >
      {this.props.children}
    </button>
  );


  getClass = () => {
    let classes = {
      button: true
    };

    classes[this.props.className] = this.props.className;

    return classNames(classes);
  }
}

export default Button;

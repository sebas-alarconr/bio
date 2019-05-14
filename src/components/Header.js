import React, { Component } from 'react';
import NavLink from './NavLink';
import './Header.scss';
import headerData from '../data/header';
import Icon from './Icon';
import Button from './Button';
import classNames from 'classnames';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      opened: false
    };
  }

  render = () => (
    <header className="header">
      <nav className={this.getNavClass()}>
        <ul className="header__list no-margin">
          {headerData.map(this.renderHeaderItem)}
        </ul>
        <div className="header__menuicon hide-medium-up">
          <Button
            className="header__buttonmenu"
            onClick={this.handleNavBarIconClick}
          >
            <Icon
              animated={true}
              className="no-margin"
              iconStyle="solid"
              name="bars"
              secondIconName="times"
              showSecondIcon={this.state.opened}
              size="lg"
              type="tertiary" />
          </Button>
        </div>
      </nav>
    </header>
  );

  renderHeaderItem = (headerItem, key) => (
    <li className="header__listitem" key={key}>
      <NavLink to={headerItem.route} onClick={this.handleLinkClick}>
        {headerItem.label}
      </NavLink>
    </li>
  );

  getNavClass = () => {
    let classes = {
      "header__nav": true,
      "header__nav--open": this.state.opened
    };

    return classNames(classes);
  }

  handleNavBarIconClick = (event) => {
    this.setState({
      opened: !this.state.opened
    });

    event.preventDefault();
  }

  handleLinkClick = () => {
    this.setState({
      opened: false
    });
  }
}

export default Header;

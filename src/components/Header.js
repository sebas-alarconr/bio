import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import headerConfig from '../data/header';
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

  render = () => {
    return(
      <header className="header">
        <nav className={this.getNavClass()}>
          <ul className="header__list no-margin">
            {headerConfig.map(this.renderHeaderItem)}
          </ul>
          <div className="header__menuicon hide-medium-up">
            <Button onClick={this.handleNavBarIconClick} className="header__buttonmenu">
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
  }

  renderHeaderItem = (headerItem, key) => {
    return (
      <li className="header__listitem" key={key}>
        <Link to={headerItem.route}>
          {headerItem.label}
        </Link>
      </li>
    )
  }

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
}

export default Header;

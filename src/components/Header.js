import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import headerConfig from '../data/header';

class Header extends Component {
  render = () => {
    return(
      <header className="header">
        <nav>
          <ul className="header__list">
            {headerConfig.map(this.renderHeaderItem)}
          </ul>
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
}

export default Header;

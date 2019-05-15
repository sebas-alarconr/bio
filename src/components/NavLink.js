import { Link } from "@reach/router";
import React from 'react';
import classNames from 'classnames';

const isActive = ({ isCurrent }) => {
  let classes = {
    navlink: true
  };

  if (isCurrent) {
    classes['navlink--active'] = true;
  }

  return {className: classNames(classes)};
}

const NavLink = props => (
  <Link {...props} getProps={isActive} />
);

export default NavLink;

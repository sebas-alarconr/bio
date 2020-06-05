import React from 'react';
import { Link } from "@reach/router";
import classNames from 'classnames';

import styles from './navlink.module.scss';

const isActive = ({ isCurrent }) => ({
  className: classNames(
    styles.navlink,
    isCurrent && styles.active
  )
})

const NavLink = props => <Link {...props} getProps={isActive} />

export default NavLink;

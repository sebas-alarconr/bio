import React from 'react';

import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import classNames from 'classnames';

import Header from 'components/Header';
import Loader from 'components/Loader';

import { ROUTES } from 'utils/routes';

import styles from './layout.module.scss';

const Layout = ({ children, location }) => {
  const routeExists = ROUTES.includes(location.pathname);

  return (
    <div>
      <Loader />
      <Header />
      <ToastContainer />
      <main
        className={classNames(
          routeExists && styles.appContent,
          !routeExists && styles.notFound
        )}
      >
        {children}
      </main>
    </div>
  );
};

Layout.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};

Layout.defaultProps = {
  location: {
    pathname: '',
  },
};

export default Layout;

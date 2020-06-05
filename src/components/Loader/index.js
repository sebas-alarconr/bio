import React from 'react';
import PropTypes from 'prop-types';

const Loader = ({ loading }) =>
  loading && (
    <div className="loading">
      <div className="loading__loader" />
    </div>
  );

Loader.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default Loader;

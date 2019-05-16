import React, { Component } from 'react';

class Loading extends Component {

  render = () => {
    return this.props.loading ? (
      <div className="loading">
        <div className="loading__loader"></div>
      </div>
    ) : null;
  }
}

export default Loading;

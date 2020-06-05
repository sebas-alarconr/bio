import React, { Component } from 'react';
import { toast } from 'react-toastify';

class NotFound extends Component {
  componentDidMount = () => {
    toast.error("Oops! This page seems that doesn't exist");
  };

  componentDidUpdate = () => {
    toast.error("Oops! This page seems that doesn't exist");
  };

  render = () => (
    <article
      className="notfound"
      style={{
        background: `url(${process.env.PUBLIC_URL}/404.png) 60% center/cover`,
      }}
    >
      <div className="notfound__container app__content">
        <div className="notfound__textcontainer">
          <h1>404! Page Not Found.</h1>
          <h2>We were searching your page but we couldn&apos;t find it.</h2>
        </div>
      </div>
    </article>
  );
}

export default NotFound;

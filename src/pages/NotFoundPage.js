import React, { Component } from 'react';
import { toast } from 'react-toastify';
import './NotFoundPage.scss';

class NotFoundPage extends Component {
  render() {
    toast.error("Oops! This page seems that doesn't exist");

    return (
      <article className="notfoundpage">
        <img
          alt="Not Found"
          className="notfoundpage__image"
          src={`${process.env.PUBLIC_URL}/404.jpg`} />
        <div className="notfoundpage__textcontainer">
          <h1>
            404! Page Not Found.
          </h1>
          <h2>
            We were searching your page but we couldn't find it.
          </h2>
        </div>
      </article>
    );
  }
}

export default NotFoundPage;
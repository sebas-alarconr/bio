import React, { Component } from 'react';
import { toast } from 'react-toastify';

class NotFoundPage extends Component {
  componentDidMount = () => {
    toast.error("Oops! This page seems that doesn't exist");
  }

  componentDidUpdate = () => {
    toast.error("Oops! This page seems that doesn't exist");
  }

  render = () => (
    <article className="notfound">
      <div className="notfound__container app__content">
        <div className="notfound__textcontainer">
          <h1>
            404! Page Not Found.
          </h1>
          <h2>
            We were searching your page but we couldn't find it.
          </h2>
        </div>
      </div>
    </article>
  );
}

export default NotFoundPage;

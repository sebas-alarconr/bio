import React, { Component } from 'react';
import moment from 'moment';
import Icon from '../components/Icon';

class IndexPage extends Component {
  render = () => (
    <article className="index text-center app__content">
      <div className="index__imagecontainer">
        <img src={`${process.env.PUBLIC_URL}/bio_pic.png`} alt="Personal" />
      </div>
      <h1>
        Hi! I'm Sebas.
      </h1>
      <section>
        <p>
          My name is Sebastian Alarcon. I'm {moment().diff([1992, 2, 28], 'years')} years old and I was born in Bogota, Colombia.
        </p>
        <a href="https://github.com/sebas-alarconr" target="_blank" rel="noopener noreferrer">
          <Icon
            iconStyle="brand"
            name="github-square"
            size="2x"
            type="secondary" />
        </a>
        <a href="https://www.linkedin.com/in/sebastian-alarcon-ramos" target="_blank" rel="noopener noreferrer">
          <Icon
            iconStyle="brand"
            name="linkedin"
            size="2x"
            type="secondary" />
        </a>
        <a href="https://stackoverflow.com/users/9347317/sebasti%C3%A1n-alarc%C3%B3n" target="_blank" rel="noopener noreferrer">
          <Icon
            iconStyle="brand"
            name="stack-overflow"
            size="2x"
            type="secondary" />
        </a>
      </section>
    </article>
  );
}

export default IndexPage;

import React, { Component } from 'react';
import resumeData from '../data/resume';
import './ResumePage.scss';

class ResumePage extends Component {
  render = () => (
    <article className="resume app__content">
      <h1>Overview</h1>
      <p>{resumeData.overview}</p>
      <h2>Experience</h2>
      <ul className="">
        {resumeData.experience.map(this.renderExperience)}
      </ul>
    </article>
  )

  renderExperience = (experienceItem, key) => (
    <li key={key}>
      {experienceItem.company}
    </li>
  )
}

export default ResumePage;

import React, { Component } from 'react';
import resumeData from '../data/resume';

class ResumePage extends Component {
  render = () => (
    <article className="resume app__content">
      <h1>Overview</h1>
      <p>{resumeData.overview}</p>
      <h2>Experience</h2>
      <ul className="resume__experience">
        {resumeData.experience.map(this.renderExperience)}
      </ul>
      <h2>Education</h2>
      <ul className="resume__education">
        {resumeData.education.map(this.renderEducation)}
      </ul>
      <h2>Community</h2>
      <ul className="resume__community">
        {resumeData.community.map(this.renderCommunity)}
      </ul>
    </article>
  )

  renderExperience = (experienceItem, key) => (
    <li className="resume__experience-item" key={key}>
      <div className="resume__experience-item-title">
        <div className="resume__list-bullet resume__list-bullet--outer">
          <div className="resume__list-bullet resume__list-bullet--inner"></div>
        </div>
        <h3>
          {experienceItem.company}
        </h3>
      </div>
      <div className="resume__experience-item-content">
        <p>{experienceItem.title}</p>
        <p>{experienceItem.start} - {experienceItem.end}</p>
        <p>{experienceItem.technologies}</p>
        <ul>
          {experienceItem.responsabilities.map(this.renderExtraInfo)}
        </ul>
      </div>
    </li>
  )

  renderEducation = (educationItem, key) => (
    <li className="resume__education-item" key={key}>
      <div className="resume__education-item-title">
        <div className="resume__list-bullet resume__list-bullet--outer">
          <div className="resume__list-bullet resume__list-bullet--inner"></div>
        </div>
        <h3>
          {educationItem.company}
        </h3>
      </div>
      <div className="resume__education-item-content">
        <p>{educationItem.title}</p>
        <p>{educationItem.start} - {educationItem.end}</p>
        <ul>
          {educationItem.extras.map(this.renderExtraInfo)}
        </ul>
      </div>
    </li>
  )

  renderCommunity = (communityItem, key) => (
    <li className="resume__community-item" key={key}>
      <div className="resume__community-item-title">
        <div className="resume__list-bullet resume__list-bullet--outer">
          <div className="resume__list-bullet resume__list-bullet--inner"></div>
        </div>
        <h3>
          {communityItem.role}
        </h3>
      </div>
      <div className="resume__community-item-content">
        <p>{communityItem.description}</p>
        <p>{communityItem.dates.map(this.renderDates)}</p>
        <ul>
          {communityItem.events.map(this.renderEvents)}
        </ul>
      </div>
    </li>
  )

  renderExtraInfo = (extraItem, key) => (
    <li key={key}>
      {extraItem}
    </li>
  )

  renderDates = (date, key) => {
    const complement = key ? ' - ' : null;

    return (
      <span key={key}>
        {complement}{date}
      </span>
    )
  }

  renderEvents = (event, key) => (
    <li className="resume__community-item-extra" key={key}>
      <p>{event.title}</p>
      <a href={event.link}>({event.link})</a>
    </li>
  )
}

export default ResumePage;

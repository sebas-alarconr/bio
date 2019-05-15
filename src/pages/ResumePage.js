import React, { Component } from 'react';
import firebase from '../components/Firebase';
import _ from 'lodash';

class ResumePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bioData: {}
    }
  }

  componentDidMount = () => {
    firebase.getBio().then(bio => this.setState({bioData: bio.data()}));
  }

  render = () => {
    const { bioData } = this.state;

    return (
      <article className="resume app__content">
        <h1>Overview</h1>
        <p>{_.get(bioData, 'overview')}</p>
        <h2>Experience</h2>
        <ul className="resume__experience">
          {_.get(bioData, 'experience', []).map(this.renderExperience)}
        </ul>
        <h2>Education</h2>
        <ul className="resume__education">
          {_.get(bioData, 'education', []).map(this.renderEducation)}
        </ul>
        <h2>Community</h2>
        <ul className="resume__community">
          {_.get(bioData, 'community', []).map(this.renderCommunity)}
        </ul>
      </article>
    )
  }

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
        <p>{_.get(experienceItem, 'technologies', []).map(this.renderTechnologies)}</p>
        <ul>
          {_.get(experienceItem, 'responsabilities', []).map(this.renderExtraInfo)}
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
          {educationItem.institution}
        </h3>
      </div>
      <div className="resume__education-item-content">
        <p>{educationItem.title}</p>
        <p>{educationItem.start} - {educationItem.end}</p>
        <ul>
          {_.get(educationItem, 'extras', []).map(this.renderExtraInfo)}
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
        <p>{_.get(communityItem, 'dates', []).map(this.renderDates)}</p>
        <ul>
          {_.get(communityItem, 'events', []).map(this.renderEvents)}
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

  renderTechnologies = (tech, key) => {
    const complement = key ? ', ' : null;

    return (
      <span key={key}>
        {complement}{tech}
      </span>
    )
  }

  renderEvents = (event, key) => (
    <li className="resume__community-item-extra" key={key}>
      {event.title} <a href={event.link.url} target="_blank" rel="noopener noreferrer">{event.link.text}</a>
    </li>
  )
}

export default ResumePage;

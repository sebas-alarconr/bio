import React, { Component } from 'react';
import firebase from '../components/Firebase';
import Loading from '../components/Loading';
import _ from 'lodash';
import jsPDF from 'jspdf';
import encodedFonts from '../data/encoded_fonts';
import ResumePDF from '../components/ResumePDF';
import { renderToString } from 'react-dom/server';
import html2canvas from "html2canvas";

class ResumePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      resumeData: {},
      loading: true
    }

    this.yPosition = 0;
  }

  componentDidMount = () => {
    firebase.getResume()
        .then(resume => this.setState({
          resumeData: resume.data(),
          loading: false
        }));
  }

  render = () => {
    const { resumeData, loading } = this.state;

    return (
      <article className="resume app__content">
        <Loading loading={loading} />
        <div className="resume__heading">
          <h1>Overview</h1>
          <button onClick={this.generatePdf}>Download</button>
        </div>

        <p>{_.get(resumeData, 'overview')}</p>
        <h2>Experience</h2>
        <ul className="resume__experience">
          {_.get(resumeData, 'experience', []).map(this.renderExperience)}
        </ul>
        <h2>Education</h2>
        <ul className="resume__education">
          {_.get(resumeData, 'education', []).map(this.renderEducation)}
        </ul>
        <h2>Community</h2>
        <ul className="resume__community">
          {_.get(resumeData, 'community', []).map(this.renderCommunity)}
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
        <p>{_.get(experienceItem, 'technologies', []).join(', ')}</p>
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
        <p>{_.get(communityItem, 'dates', []).join(' - ')}</p>
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

  renderEvents = (event, key) => (
    <li className="resume__community-item-extra" key={key}>
      {event.title} <a href={event.link.url} target="_blank" rel="noopener noreferrer">{event.link.text}</a>
    </li>
  )

  generatePdf = () => {
    window.html2canvas = html2canvas;
    const pdf = new jsPDF('p', 'mm', 'a4');
    const { resumeData } = this.state;
    const margin = 15;
    const width = 210;
    const maxWidth = width - 2 * margin;
    this.yPosition = margin;
    const pageHeight= pdf.internal.pageSize.height;

    // Adding fonts
    pdf.addFileToVFS('Dosis-Bold-bold.ttf', encodedFonts.dosis_bold);
    pdf.addFont('Dosis-Bold-bold.ttf', 'Dosis-Bold', 'bold');
    pdf.addFileToVFS('Economica-normal.ttf', encodedFonts.economica_regular);
    pdf.addFont('Economica-normal.ttf', 'Economica', 'normal');

    // Starts pdf
    pdf.setFontSize(20);
    pdf.setFont('Dosis-Bold', 'bold');
    pdf.text(15, this.yPosition, 'Sebastián Alarcón Ramos');
    this.yPosition += 15

    // Overview section
    pdf.setFontSize(18);
    pdf.text(15, this.yPosition, 'Overview');
    pdf.setFont('Economica', 'normal');
    pdf.setFontSize(16);
    this.yPosition += 10;

    pdf.text(15, this.yPosition, resumeData.overview, {maxWidth: maxWidth});
    this.calculateNextYPosition(pdf, resumeData.overview, maxWidth);
    this.yPosition += 10
    this.checkNewPage(pdf, pageHeight, margin);

    // Experience section
    pdf.setFontSize(18);
    pdf.setFont('Dosis-Bold', 'bold');
    pdf.text(15, this.yPosition, 'Experience')
    this.yPosition += 15;
    this.checkNewPage(pdf, pageHeight, margin);

    // Each Experience item
    _.get(resumeData, 'experience', []).forEach(experienceItem => {
      pdf.setFontSize(16);
      pdf.setFont('Dosis-Bold', 'bold');
      this.drawnMultiCircle(pdf);
      pdf.text(25, this.yPosition, experienceItem.company);
      this.yPosition += 8;
      pdf.setFont('Economica', 'normal');
      pdf.setFontSize(14);
      pdf.text(25, this.yPosition, experienceItem.title);
      this.yPosition += 6;
      this.checkNewPage(pdf, pageHeight, margin);
      pdf.text(25, this.yPosition, `${experienceItem.start} - ${experienceItem.end}`);
      this.yPosition += 6;
      this.checkNewPage(pdf, pageHeight, margin);
      pdf.text(25, this.yPosition, _.get(experienceItem, 'technologies', []).join(', '));
      this.yPosition += 10;
      this.checkNewPage(pdf, pageHeight, margin);

      _.get(experienceItem, 'responsabilities', []).map(responsability => {
        pdf.circle(27, this.yPosition-1.5, 0.5, 'FD');
        this.checkNewPage(pdf, pageHeight, margin);
        pdf.text(30, this.yPosition, responsability, {maxWidth: maxWidth-15});
        this.calculateNextYPosition(pdf, responsability, maxWidth);
        this.yPosition += 3;
      });

      this.yPosition += 9;
      this.checkNewPage(pdf, pageHeight, margin);
    });

    // Education section
    pdf.setFont('Dosis-Bold', 'bold');
    pdf.setFontSize(18);
    pdf.text(15, this.yPosition, 'Education');
    this.yPosition += 15;
    this.checkNewPage(pdf, pageHeight, margin);

    _.get(resumeData, 'education', []).map(educationItem => {
      pdf.setFontSize(16);
      pdf.setFont('Dosis-Bold', 'bold');
      this.drawnMultiCircle(pdf);
      pdf.text(25, this.yPosition, educationItem.institution);
      this.yPosition += 8;
      this.checkNewPage(pdf, pageHeight, margin);
      pdf.setFont('Economica', 'normal');
      pdf.setFontSize(14);
      pdf.text(25, this.yPosition, educationItem.title);
      this.yPosition += 6;
      this.checkNewPage(pdf, pageHeight, margin);
      pdf.text(25, this.yPosition, `${educationItem.start} - ${educationItem.end}`);
      this.yPosition += 10;
      this.checkNewPage(pdf, pageHeight, margin);

      _.get(educationItem, 'extras', []).map(extra => {
        pdf.circle(27, this.yPosition-1.5, 0.5, 'FD');
        pdf.text(30, this.yPosition, extra, {maxWidth: maxWidth-15});
        this.calculateNextYPosition(pdf, extra, maxWidth);
        this.yPosition += 6;
        this.checkNewPage(pdf, pageHeight, margin);
      });

      this.yPosition += 9;
      this.checkNewPage(pdf, pageHeight, margin);
    });


    // Community section
    pdf.setFont('Dosis-Bold', 'bold');
    pdf.setFontSize(18);
    pdf.text(15, this.yPosition, 'Community');
    this.yPosition += 15;
    this.checkNewPage(pdf, pageHeight, margin);

    _.get(resumeData, 'community', []).map(communityItem => {
      pdf.setFontSize(16);
      pdf.setFont('Dosis-Bold', 'bold');
      this.drawnMultiCircle(pdf);
      pdf.text(25, this.yPosition, communityItem.role);
      this.yPosition += 6;
      this.checkNewPage(pdf, pageHeight, margin);
      pdf.setFont('Economica', 'normal');
      pdf.setFontSize(14);
      pdf.text(25, this.yPosition, _.get(communityItem, 'dates', []).join(' - '));
      this.yPosition += 10;
      this.checkNewPage(pdf, pageHeight, margin);

      _.get(communityItem, 'events', []).map(event => {
        pdf.circle(27, this.yPosition-1.5, 0.5, 'FD');
        pdf.text(30, this.yPosition, `${event.title} ${event.link.text}`, {maxWidth: maxWidth-15});
        // this.calculateNextYPosition(pdf, event, maxWidth);
        this.yPosition += 6;
        this.checkNewPage(pdf, pageHeight, margin);
      });
    })

    pdf.save("pdf");
  }

  checkNewPage = (pdf, pageHeight, margin) => {
    if (this.yPosition >=  pageHeight) {
      pdf.addPage();
      this.yPosition = margin;
    }
  }

  calculateNextYPosition = (pdf, text, maxWidth) => {
    const splittedText = pdf.splitTextToSize(text, maxWidth);
    const lineHeight = pdf.getLineHeight(text) / pdf.internal.scaleFactor
    const lines = splittedText.length  // splitted text is a string array
    const blockHeight = lines * lineHeight
    this.yPosition += blockHeight;
  }

  drawnMultiCircle = (pdf) => {
    pdf.setLineWidth(1);
    pdf.setDrawColor(20, 56, 80);
    pdf.setFillColor(255, 255, 255);
    pdf.circle(18, this.yPosition-2, 3, 'FD');
    pdf.setFillColor(20, 56, 80);
    pdf.circle(18, this.yPosition-2, 0.5, 'FD');
  }
}

export default ResumePage;

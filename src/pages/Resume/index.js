import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import get from 'lodash/get';
import classNames from 'classnames';

import { fetchBio } from 'state/actions/bio';

import styles from './resume.module.scss';

const Resume = () => {
  const dispatch = useDispatch();
  const bio = useSelector(state => state.bio);

  useEffect(() => {
    if (isEmpty(bio)) {
      dispatch(fetchBio());
    }
    // eslint-disable-next-line
  }, []);

  return (
    <section>
      <h1>Overview</h1>
      <p>{get(bio, 'overview')}</p>
      <section>
        <h2>Experience</h2>
        <ul className={styles.contentWrapper}>
          {get(bio, 'experience', []).map(experienceItem => (
            <li
              className={styles.listItem}
              key={`${experienceItem.company}-${bio.id}`}
            >
              <div className={styles.listItemTitle}>
                <div className={classNames(styles.listBullet, styles.outer)}>
                  <div
                    className={classNames(styles.listBullet, styles.inner)}
                  />
                </div>
                <h3>{experienceItem.company}</h3>
              </div>
              <div className={styles.content}>
                <p>{experienceItem.title}</p>
                <p>{`${experienceItem.start} - ${experienceItem.end}`}</p>
                <p>{get(experienceItem, 'technologies', []).join(', ')}</p>
                <ul>
                  {get(experienceItem, 'responsabilities', []).map(
                    (responsabilityItem, index) => (
                      <li className={styles.extra} key={index}>
                        {responsabilityItem}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Education</h2>
        <ul className={styles.contentWrapper}>
          {get(bio, 'education', []).map(educationItem => (
            <li
              className={styles.listItem}
              key={`${educationItem.institution}-${bio.id}`}
            >
              <div className={styles.listItemTitle}>
                <div className={classNames(styles.listBullet, styles.outer)}>
                  <div
                    className={classNames(styles.listBullet, styles.inner)}
                  />
                </div>
                <h3>{educationItem.institution}</h3>
              </div>
              <div className={styles.content}>
                <p>{educationItem.title}</p>
                <p>{`${educationItem.start} - ${educationItem.end}`}</p>
                <ul>
                  {get(educationItem, 'extras', []).map((extraItem, index) => (
                    <li className={styles.extra} key={index}>
                      {extraItem}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Community</h2>
        <ul className={styles.contentWrapper}>
          {get(bio, 'community', []).map(communityItem => (
            <li
              className={styles.listItem}
              key={`${communityItem.role}-${bio.id}`}
            >
              <div className={styles.listItemTitle}>
                <div className={classNames(styles.listBullet, styles.outer)}>
                  <div
                    className={classNames(styles.listBullet, styles.inner)}
                  />
                </div>
                <h3>{communityItem.role}</h3>
              </div>
              <div className={styles.content}>
                <p>{communityItem.description}</p>
                <p>{get(communityItem, 'dates', []).join(' - ')}</p>
                <ul>
                  {get(communityItem, 'events', []).map((event, index) => (
                    <li className={styles.extra} key={index}>
                      {`${event.title} `}
                      <a
                        href={event.link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {event.link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default Resume;

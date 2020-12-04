import React, { useState } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { graphql, useStaticQuery, Link } from 'gatsby';

import Title from './Title';

const query = graphql`
  {
    allStrapiJobs(sort: { fields: strapiId, order: DESC }) {
      nodes {
        strapiId
        company
        date
        position
        desc {
          id
          name
        }
      }
    }
  }
`;

const Jobs = () => {
  const {
    allStrapiJobs: { nodes: jobs },
  } = useStaticQuery(query);

  const [value, setValue] = useState(0);

  const { company, position, date, desc } = jobs[value];

  return (
    <section className="section jobs">
      <Title title="experience" />

      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map((item, index) => (
            <button
              key={item.strapiId}
              onClick={() => setValue(index)}
              className={`job-btn ${index === value && 'active-btn'}`}
            >
              {item.company}
            </button>
          ))}
        </div>

        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>

          {desc.map((item) => (
            <div key={item.id} className="job-desc">
              <FaAngleDoubleRight className="job-icon" />
              <p>{item.name}</p>
            </div>
          ))}
        </article>
      </div>

      <Link to="/about" className="btn center-btn">
        More Info
      </Link>
    </section>
  );
};

export default Jobs;

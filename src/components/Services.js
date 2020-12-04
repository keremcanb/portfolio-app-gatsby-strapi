import React from 'react';
import Title from './Layout/Title';
import services from '../constants/services';

const Services = () => (
  <section className="section bg-grey">
    <Title title="Services" />

    <div className="section-center services-center">
      {services.map(({ id, icon, title, text }) => (
        <article key={id} className="service">
          {icon}
          <h4>{title}</h4>
          <div className="underline" />
          <p>{text}</p>
        </article>
      ))}
    </div>
  </section>
);

export default Services;

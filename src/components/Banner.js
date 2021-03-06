import React from 'react';

const Banner = ({banner}) => (
  <section id="banner" style={{backgroundImage:"/assets/banner.jpg"}}>
    <div className="inner">
      <h2>{banner.title}</h2>
      <p>{banner.heading}<br />
      </p>
      <ul className="actions">
        <li><a href="#spotlight" className="button special scrolly">Book Now</a></li>
      </ul>
    </div>
    <a href="#one" className="more scrolly">Learn More</a>
  </section>

);

export default Banner;
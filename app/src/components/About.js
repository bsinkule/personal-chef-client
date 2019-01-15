import React from 'react';
import { Link } from 'react-router-dom';

const About = (props) => {
  console.log("about props: ", props)
  return (
    <div>
      About
      <Link to="/">Back</Link>
    </div>
  )
}

export default About;
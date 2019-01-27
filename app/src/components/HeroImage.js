import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const MainWrapper = styled.div`
  .hero-image {
    background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("https://images.unsplash.com/photo-1541529086526-db283c563270?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60");
    height: 600px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  }


  .hero-text {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    text-shadow: 1px 1px black;

      h1 {
        font-size: 60px;
      }

      button {
        border: 2px solid white;
        display: inline-block;
        padding: 10px 25px;
        background-color: transparent;
        text-align: center;
        cursor: pointer;
        border-radius: 10px;

          .Link {
            text-decoration: none; 
            color: white;
          }

          :hover {
            background-color: #bfbfbf;
          }
      }

  }
`;

const HeroImage = () => {
  return (
    <MainWrapper>
      <div className="hero-image">
        <div className="hero-text">
          <h1>A Personal Chef Experience</h1>
          <p>we'd love to cook for you</p>
          <button><Link to="/Contact" className="Link">contact us</Link></button>
        </div>
      </div>
      <div style={{ height: '500px' }}>
        space
      </div>
    </MainWrapper>
  )
}

export default HeroImage;
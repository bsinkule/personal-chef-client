import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const MainWrapper = styled.div`
  .hero-image {
    background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)), url("https://agc.creativelive.com/agc/courses/5138-1.jpg");
    // background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url("https://images.unsplash.com/photo-1541529086526-db283c563270?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60");
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

      h1 {
        font-size: 60px;
      }

      p {
        background-color: rgba(140, 140, 140, .8);
        padding: 5px;
        border-radius: 10px;
        font-size: 18px;
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
      }

  }
`;

const HeroImage = () => {
  return (
    <MainWrapper>
      <div className="hero-image">
        <div className="hero-text">
          <h1>Denver's Best Dinner Party Duo</h1>
          <p>"Amazing flavors, unique items, Kyle and Con are so much fun to work with!" - Beth and Michael Ward</p>
          {/* <button><Link to="/Contact" className="Link">contact us</Link></button> */}
        </div>
      </div>
    </MainWrapper>
  )
}

export default HeroImage;
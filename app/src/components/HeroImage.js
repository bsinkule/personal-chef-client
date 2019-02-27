import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const MainWrapper = styled.div`
  .hero-image {
    background-image: linear-gradient(rgba(255, 245, 230, 0.4), rgba(255, 245, 230, 0.3)), url("https://images.unsplash.com/photo-1543353071-10c8ba85a904?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80");
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

      p {
        background-color: rgba(242, 242, 242, .9);
        padding: 10px;
        border-radius: 20px;
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
          <img src="https://img.icons8.com/wired/2x/food-and-wine.png" alt="logo" />
          <h1>Denver's Best Dinner Party Duo</h1>
          <p>"Amazing flavors, unique items, Kyle and Con are so much fun to work with!" - Beth and Michael Ward</p>
          {/* <button><Link to="/Contact" className="Link">contact us</Link></button> */}
        </div>
      </div>
    </MainWrapper>
  )
}

export default HeroImage;
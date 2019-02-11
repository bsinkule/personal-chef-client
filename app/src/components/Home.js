import React from 'react';
import HeroImage from './HeroImage';
import Motivation from './Motivation';
import HowItWorks from './HowItWorks';
import FoodCarousel from './FoodCarousel';

import styled from 'styled-components';

const MainWrapper = styled.div`

.motivationFullWidth {
  width: 100%;
  background-color: rgb(249, 249, 249);
}

.howItWorksH1 {
  margin: 0;
  padding: 20px 5px 5px 5px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

`;

const Home = () => {
  return (
    <MainWrapper>
      <HeroImage />
      <div className="motivationFullWidth">
        <h1 className="howItWorksH1">Our Motivation</h1>    
        <Motivation />
      </div>
      <FoodCarousel />
      <HowItWorks />
    </MainWrapper>
  )
}

export default Home;
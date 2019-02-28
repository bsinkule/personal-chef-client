import React from "react";
import { Carousel } from "react-responsive-carousel";
import styled from 'styled-components';

 const FoodCarousel = () => {
   return (
    <MainWrapper>
      <Carousel 
        infiniteLoop={true}  
        showStatus={false}
        showThumbs={false}
        stopOnHover={false}
        interval={3500}
        transitionTime={700}
        autoPlay
      >
        <div>
          <img src="https://images.unsplash.com/photo-1547332184-070705bccbd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" />
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1534790566855-4cb788d389ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" />
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1485963631004-f2f00b1d6606?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1568&q=80" />
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1545062070-e3918ead6e5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1525&q=80" />
        </div>
      </Carousel>
    </MainWrapper>
    )
  };

export default FoodCarousel;


const MainWrapper = styled.div`
  
  div {
    max-height: 60vh;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }
`;
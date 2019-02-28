import React from 'react';
import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';

const LoadingPics = () => {

  return (
    <MainWrapper>
      <div>
        <h1>LOADING...</h1>
        <CircularProgress 
          className="circle"  
          disableShrink={true} 
          size={250}
          thickness={5}
        />
      </div>
    </MainWrapper>
  )
}

export default LoadingPics;


const MainWrapper = styled.div`
  background-image: url("https://agc.creativelive.com/agc/courses/5138-1.jpg");
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    text-align: center;
    font-size: 40px;
    color: rgba(255, 245, 230, .90);
  }

  .circle {
    color: rgba(255, 245, 230, .90);
  }
`;
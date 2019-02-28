import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NoMatch = () => {

  return (
    <MainWrapper>
      <div>
        <h1>Route Doesn't Match</h1>
        <button className="backToHomeButton"><Link className="Link" to="/home">Home</Link></button>
      </div>
    </MainWrapper>
  )
}

export default NoMatch;

const MainWrapper = styled.div`
  background-image: url("https://agc.creativelive.com/agc/courses/5138-1.jpg");
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-size: 40px;
    background-color: rgba(255, 245, 230, .9);
    padding: 35px 35px;
    border-radius: 30px;
  }

  .backToHomeButton {
    background-color: rgba(255, 245, 230, .9);
    border-radius: 20px;
    margin: 5px;
    cursor: pointer;
    width: 120px;  
    height: 40px;
    margin: 0px auto;
  }

  .Link {
    text-decoration: none;
    color: black;
  }

`;
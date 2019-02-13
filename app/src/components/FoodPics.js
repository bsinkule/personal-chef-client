import React from 'react';
import { connect } from 'react-redux';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import styled from 'styled-components';

const MainWrapper = styled.div`
  background-image: url("https://agc.creativelive.com/agc/courses/5138-1.jpg");
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
  padding-top: 75px;
  padding-bottom: 75px;

  padding: 20px 0;
  display: grid;
  grid-gap: 20px 0;
  grid-template-columns: 20px 1fr 20px;
  align-content: start;

  > * {
    grid-column: 2 / -2;
  }

`;

const Ul = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 10px repeat(${props => props.numOfLi || 3}, calc(50% - 40px)) 10px;
  grid-template-rows: minmax(150px, 1fr);

  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  padding-bottom: 15px;
  margin-bottom: -5px;
  }

  &:before,
  &:after {
    content: '';
  }

  &.full {
    grid-column: 1 / -1;
  }

  .imgLi {
    scroll-snap-align: center;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    border-radius: 8px;
  }
`;

const FoodPics = (props) => {
  console.log("foodPics props: ", props)
  return (
    <MainWrapper>
      <h1>sup</h1>
      <Ul numOfLi={9} className="full">
        <li className="imgLi">brah</li>
        <li className="imgLi">brah</li>
        <li className="imgLi">brah</li>
        <li className="imgLi">brah</li>
        <li className="imgLi">brah</li>
        <li className="imgLi">brah</li>
        <li className="imgLi">brah</li>
        <li className="imgLi">brah</li>
        <li className="imgLi">brah</li>
      </Ul>
      <h1>sup</h1>
      <Ul numOfLi={5} className="full">
        <li className="imgLi">brah</li>
        <li className="imgLi">brah</li>
        <li className="imgLi">brah</li>
        <li className="imgLi">brah</li>
        <li className="imgLi">brah</li>
      </Ul>
      <h1>sup</h1>
      <Ul numOfLi={3} className="full">
        <li className="imgLi">brah</li>
        <li className="imgLi">brah</li>
        <li className="imgLi">brah</li>
      </Ul>
    </MainWrapper>
  )
}

const mapStateToProps = (state) => ({
  checkAuth: state.checkAuth.authenticated,
});

export default connect(mapStateToProps, null)(FoodPics);
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import styled from 'styled-components';

const MainWrapper = styled.div`
  margin-top: 50px;

  .aboutTop {
    display: flex;
    flex-direction: column;
  }
  .anch {
    height: 500px;
    padding: 5px;
  }
  .one {
    background-color: red;
  }
  .two {
    background-color: black;
    color: white;
  }
  .three {
    background-color: brown;
  }
  .four {
    background-color: blue;
  }
`;

const FAQ = (props) => {
  console.log("FAQ props: ", props)
  return (
    <MainWrapper>
      <div className="aboutTop">
        <AnchorLink offset='50' href='#one'>question 1</AnchorLink>
        <AnchorLink offset='50' href='#two'>question 2</AnchorLink> 
        <AnchorLink offset='50' href='#three'>question 3</AnchorLink>
        <AnchorLink offset='50' href='#four'>question 4</AnchorLink> 
      </div>
      <div className="one anch" id="one"> 
        <div>One</div>
      </div>
      <div className="two anch" id="two"> 
        <div>Two</div>
      </div>
      <div className="three anch" id="three"> 
        <div>Three</div>
      </div>
      <div className="four anch" id="four"> 
        <div>Four</div>
      </div>

    </MainWrapper>
  )
}

const mapStateToProps = (state) => ({
  checkAuth: state.checkAuth,
});

export default connect(mapStateToProps, null)(FAQ);
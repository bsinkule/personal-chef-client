import React from 'react';
import { Link } from 'react-router-dom';
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

  .faqWrapper {
    width: 90%;
    max-width: 800px;
    background-color: rgba(224,224,224, .9);
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
    border-radius: 10px;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 25px;
  }

  .aboutTop {
    display: flex;
    flex-direction: column;
  }

  .faqLink {
    color: black;
    margin-bottom: 5px;
  }

  .anch {
    min-height: 200px;
    padding: 15px;
  }

  .flexQAOrange {
    display: flex;
    background-color: rgba(255, 245, 230, .4);
    align-items: center;
  }

  .flexQA {
    display: flex;
    align-items: center;
    border-left: 2px solid grey;
  }

  .bigQ {
    font-size: 30px;
    color: Orange;
    border-left: 2px solid orange;
    padding: 25px 15px;
  }

  .bigA {
    font-size: 30px;
    padding: 25px 15px;
    color: grey;
  }

  .answerContent {
    padding: 15px 15px 0px 0px;
  }
`;

const FAQ = (props) => {
  console.log("FAQ props: ", props)
  return (
    <MainWrapper>
      <div className="faqWrapper"> 
        <div style={{ padding: "0px 15px 15px 15px" }}>
          <h2>Frequently Asked Questions</h2>
          <div className="aboutTop">
            <AnchorLink className="faqLink" offset='50' href='#one'>How much does it cost?</AnchorLink>
            <AnchorLink className="faqLink" offset='50' href='#two'>How early will you arrive?</AnchorLink> 
            <AnchorLink className="faqLink" offset='50' href='#three'>Do you do the dishes?</AnchorLink>
            <AnchorLink className="faqLink" offset='50' href='#four'>Do you bring dishware and silverware?</AnchorLink> 
            <AnchorLink className="faqLink" offset='50' href='#five'>What are your available dates?</AnchorLink> 
          </div>
        </div>
      </div>

      <div className="faqWrapper">
          <div className="anch" id="one"> 
            <div className="flexQAOrange">
              <div className="bigQ">Q.</div>
              <h3>How much does it cost?</h3>
            </div>
            <div className="flexQA">
              <div className="bigA">A.</div>
              <div className="answerContent">The cost of our service will include the price of the groceries, $100 for the preplanning and shopping leading up to the event and $80 per hour for the time we are on location.</div>
            </div>
          </div>
          <div className="anch" id="two"> 
            <div className="flexQAOrange">
              <div className="bigQ">Q.</div>
              <h3>How early will you arrive?</h3>
            </div>
            <div className="flexQA">
              <div className="bigA">A.</div>
              <div className="answerContent">It is always different depending on the amount of work that goes into a particular meal. We will discuss this on our phone call with you and confirm the arrival time based on that. It is generally about two hours before the serving time of the first dish/drink.</div>
            </div>
          </div>
          <div className="anch" id="three"> 
            <div className="flexQAOrange">
              <div className="bigQ">Q.</div>
              <h3>Do you do the dishes?</h3>
            </div>
            <div className="flexQA">
              <div className="bigA">A.</div>
              <div className="answerContent">We are happy to clear the dishes, rinse them and load up the dishwasher. We ask that you have a mostly empty dishwasher when we arrive.</div>
            </div>
          </div>
          <div className="anch" id="four"> 
            <div className="flexQAOrange">
              <div className="bigQ">Q.</div>
              <h3>Do you bring dishware and silverware?</h3>
            </div>
            <div className="flexQA">
              <div className="bigA">A.</div>
              <div className="answerContent">We usually serve you on your dishware with your silverware and glassware. We are happy to make arangements to supply any of those if you would prefer.</div>
            </div>
          </div>
          <div className="anch" id="five"> 
            <div className="flexQAOrange">
              <div className="bigQ">Q.</div>
              <h3>What are your available dates?</h3>
            </div>
            <div className="flexQA">
              <div className="bigA">A.</div>
              <div className="answerContent">You can find the available dates by clicking the calendar icon in the bottom right corner of your screen.</div>
            </div>
          </div>
      </div>
    </MainWrapper>
  )
}

const mapStateToProps = (state) => ({
  checkAuth: state.checkAuth,
});

export default connect(mapStateToProps, null)(FAQ);
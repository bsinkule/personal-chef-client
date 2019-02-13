import React from 'react';

import calendar from '../static/images/001-calendar.png';
import contact from '../static/images/002-clipboard.png';
import phone from '../static/images/005-emergency-call.png';
import email from '../static/images/004-email.png';
import grocery from '../static/images/003-food-and-restaurant.png';

import styled from 'styled-components';

const MainWrapper = styled.div`

  .fullWidthGrey {
    width: 100%;
    height: 225px;
    background-color: rgb(249, 249, 249);
  }

  .fullWidthWhite {
    width: 100%;
    height: 225px;
  }

  .howWhite {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
    height: 100%;
    margin: 0;
    margin-left: auto;
    margin-right: auto;
  }

  .howWhiteSpecial {
    display: flex;
    justify-content: center;
    max-width: 1200px;
    height: 100%;
    margin: 0;
    margin-left: auto;
    margin-right: auto;
  }
  
  .howGrey {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
    height: 100%;
    margin: 0;
    margin-left: auto;
    margin-right: auto;
  }

  .howItWorksH1 {
    margin: 0;
    padding: 20px 5px 5px 5px;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }

  .imgIcon {
    width: 100px;
    height: 100px;
    margin: 15px;
  }

  .content {
    width: 85%;
    padding: 10px;
  }

  @media (max-width: 800px) {
    .imgIcon { 
      width: 75px;
      height: 75px;
    }
  }
`;

const HowItWorks = () => {
  return (
    <MainWrapper>
      <div className="fullWidthGrey">
        <h1 className="howItWorksH1">How it Works</h1>
        <div className="howWhiteSpecial">
          <img className="imgIcon" src={calendar}  alt="calendar icon"/>
          <div className="content">
            <h2>Check Available Dates</h2>
            <div>Click the calendar icon on the bottom right of the screen to find an available date.</div>
          </div>
        </div>
      </div>
      <div className="fullWidthWhite">
        <div className="howGrey">
          <div className="content">
            <h2>Contact Us</h2>
            <div>Go to the contact page and let us know what you're thinking for dinner. Check out our "food pics" page if you want some inspiration.</div>
          </div>
          <img className="imgIcon" src={contact}  alt="contact icon"/>
        </div>
      </div>
      <div className="fullWidthGrey">
        <div className="howWhite">
          <img className="imgIcon" src={phone}  alt="phone icon"/>
          <div className="content">
            <h2>We'll Schedule a Call</h2>
            <div>After the contact form is submitted, we'll get back to you, via email, within 24 hours to schedule a call to discuss details.</div>
          </div>
        </div>
      </div>
      <div className="fullWidthWhite">
        <div className="howGrey">
          <div className="content">
            <h2>Confirmation</h2>
            <div>With the info from our call, we'll finalize and email you the menu for the dinner, the confirmed date and the price estimate.</div>
          </div>
          <img className="imgIcon" src={email}  alt="email icon"/>

        </div>
      </div>
      <div className="fullWidthGrey">
        <div className="howWhite">
          <img className="imgIcon" src={grocery}  alt="grocery icon"/>
          <div className="content">
            <h2>Day of the Dinner</h2>
            <div>We'll show up on the scheduled day with all the groceries and cooking equipment. All we need from you is your kitchen space.</div>
          </div>
        </div>
      </div>
    </MainWrapper>
  )
}

export default HowItWorks;
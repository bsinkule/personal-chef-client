import React from 'react';
import HeroImage from './HeroImage';

import calendar from '../static/images/006-calendar-4.png';
import contact from '../static/images/resume (1).png';
import phone from '../static/images/007-time-and-date.png';
import email from '../static/images/files-and-folders.png';
import grocery from '../static/images/002-groceries.png';

import styled from 'styled-components';

const MainWrapper = styled.div`

  .fullWidthGrey {
    width: 100%;
    height: 200px;
    background-color: rgb(249, 249, 249);
  }

  .fullWidthWhite {
    width: 100%;
    height: 200px;
    // background-color: rgba(217, 217, 217, .95);
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
    padding: 5px;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }

  .imgNum {
    width: 30px;
    height: 30px;
    margin: 5px;
  }

  .imgIcon {
    width: 125px;
    height: 125px;
    margin: 5px;
  }

  .content {
    max-width: 600px;
    padding: 5px;
  }
`;

const Home = () => {
  return (
    <MainWrapper>
      <HeroImage />
      <div className="fullWidthWhite">
        <h1 className="howItWorksH1">How it Works</h1>
        <div className="howWhiteSpecial">
          <img className="imgIcon" src={calendar}  alt="calendar icon"/>
          <div className="content">
            <h2>Check Available Dates</h2>
            <div>Click the calendar icon on the bottom right of the screen to find an available date.</div>
          </div>
        </div>
      </div>
      <div className="fullWidthGrey">
        <div className="howGrey">
          <div className="content">
            <h2>Contact Us</h2>
            <div>Go to the contact page and let us know what you're thinking for dinner. Check out our "food pics" page if you want some inspiration.</div>
          </div>
          <img className="imgIcon" src={contact}  alt="contact icon"/>
        </div>
      </div>
      <div className="fullWidthWhite">
        <div className="howWhite">
          <img className="imgIcon" src={phone}  alt="phone icon"/>
          <div className="content">
            <h2>We'll Schedule a Call</h2>
            <div>After the contact form is submitted, we'll get back to you, via email, within 24 hours to schedule a call to discuss details.</div>
          </div>
        </div>
      </div>
      <div className="fullWidthGrey">
        <div className="howGrey">
          <div className="content">
            <h2>Confirmation</h2>
            <div>With the info from our call, we'll finalize and email you the menu for the dinner, the confirmed date and the price estimate</div>
          </div>
          <img className="imgIcon" src={email}  alt="email icon"/>

        </div>
      </div>
      <div className="fullWidthWhite">
        <div className="howWhite">
          <img className="imgIcon" src={grocery}  alt="grocery icon"/>
          <div className="content">
            <h2>Day of the Dinner</h2>
            <div>We'll show up on the day of the dinner with all the groceries and cooking equipment. All we need from you is your kitchen space. THAT'S IT! IT'S EASY, FUN AND DELICIOUS!</div>
          </div>
        </div>
      </div>

    </MainWrapper>
  )
}

export default Home;
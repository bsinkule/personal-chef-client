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
    border: 1px solid black;
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
    padding: 15px 0px 15px 15px;
  }

  .flexQARed {
    display: flex;
    background-color: rgba(255, 230, 230, .7);
    align-items: center;
  }

  .flexQA {
    display: flex;
    align-items: center;
    border-left: 2px solid black;
  }

  .bigQ {
    font-size: 35px;
    color: red;
    border-left: 2px solid red;
    padding: 25px 15px;
  }

  .bigA {
    font-size: 35px;
    padding: 25px 15px;
  }

  .answerContent {
    padding: 15px;
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
            <AnchorLink className="faqLink" offset='50' href='#one'>How is the price calculated?</AnchorLink>
            <AnchorLink className="faqLink" offset='50' href='#two'>How early will you arrive?</AnchorLink> 
            <AnchorLink className="faqLink" offset='50' href='#three'>Do you do the dishes?</AnchorLink>
            <AnchorLink className="faqLink" offset='50' href='#four'>Do you bring dishware and silverware?</AnchorLink> 
            <AnchorLink className="faqLink" offset='50' href='#four'>What are your available dates?</AnchorLink> 
          </div>
        </div>
      </div>

      <div className="faqWrapper">
          <div className="anch" id="one"> 
            <div className="flexQARed">
              <div className="bigQ">Q.</div>
              <h3>How is the price calculated?</h3>
            </div>
            <div className="flexQA">
              <div className="bigA">A.</div>
              <div className="answerContent">Answer: fjlaj flj slakfldfd jfld fjlk; fjfj f j fjlksd fjalkfj lakdjf aldf jldjf adsjfal fjlsd fjld fjlaj flajf lk jdsfldsj fklaj flkja flj asdlfkj sldfj askldjf asldfj afj sdkjf lkadsj falkjf ldjs fkladjf lasjdf klasjflksjf lasjf lafj jasdlkf jsdf  fjasdfj lkdf jd fa;lfj ad fad fjla fad jfdlskjf ldfa flks fjkls fla fjaklsjf sdkl flf fj alksj f fjlsdj asl fls dfjlj flkajf ld fjldkf jlkdasjf l;ajf lskf jlksd </div>
            </div>
          </div>
          <div className="anch" id="two"> 
            <div className="flexQARed">
              <div className="bigQ">Q.</div>
              <h3>How early will you arrive?</h3>
            </div>
            <div className="flexQA">
              <div className="bigA">A.</div>
              <div className="answerContent">Answer: fjlaj flj slakfldfd jfld fjlk; fjfj f j fjlksd fjalkfj lakdjf aldf jldjf adsjfal fjlsd fjld fjlaj flajf lk jdsfldsj fklaj flkja flj asdlfkj sldfj askldjf asldfj afj sdkjf lkadsj falkjf ldjs fkladjf lasjdf klasjflksjf lasjf lafj jasdlkf jsdf  fjasdfj lkdf jd fa;lfj ad fad fjla fad jfdlskjf ldfa flks fjkls fla fjaklsjf sdkl flf fj alksj f fjlsdj asl fls dfjlj flkajf ld fjldkf jlkdasjf l;ajf lskf jlksd </div>
            </div>
          </div>
          <div className="anch" id="three"> 
            <div className="flexQARed">
              <div className="bigQ">Q.</div>
              <h3>Do you do the dishes?</h3>
            </div>
            <div className="flexQA">
              <div className="bigA">A.</div>
              <div className="answerContent">Answer: fjlaj flj slakfldfd jfld fjlk; fjfj f j fjlksd fjalkfj lakdjf aldf jldjf adsjfal fjlsd fjld fjlaj flajf lk jdsfldsj fklaj flkja flj asdlfkj sldfj askldjf asldfj afj sdkjf lkadsj falkjf ldjs fkladjf lasjdf klasjflksjf lasjf lafj jasdlkf jsdf  fjasdfj lkdf jd fa;lfj ad fad fjla fad jfdlskjf ldfa flks fjkls fla fjaklsjf sdkl flf fj alksj f fjlsdj asl fls dfjlj flkajf ld fjldkf jlkdasjf l;ajf lskf jlksd </div>
            </div>
          </div>
          <div className="anch" id="four"> 
            <div className="flexQARed">
              <div className="bigQ">Q.</div>
              <h3>Do you bring dishware and silverware?</h3>
            </div>
            <div className="flexQA">
              <div className="bigA">A.</div>
              <div className="answerContent">Answer: fjlaj flj slakfldfd jfld fjlk; fjfj f j fjlksd fjalkfj lakdjf aldf jldjf adsjfal fjlsd fjld fjlaj flajf lk jdsfldsj fklaj flkja flj asdlfkj sldfj askldjf asldfj afj sdkjf lkadsj falkjf ldjs fkladjf lasjdf klasjflksjf lasjf lafj jasdlkf jsdf  fjasdfj lkdf jd fa;lfj ad fad fjla fad jfdlskjf ldfa flks fjkls fla fjaklsjf sdkl flf fj alksj f fjlsdj asl fls dfjlj flkajf ld fjldkf jlkdasjf l;ajf lskf jlksd </div>
            </div>
          </div>
          <div className="anch" id="five"> 
            <div className="flexQARed">
              <div className="bigQ">Q.</div>
              <h3>What are your available dates?</h3>
            </div>
            <div className="flexQA">
              <div className="bigA">A.</div>
              <div className="answerContent">Answer: fjlaj flj slakfldfd jfld fjlk; fjfj f j fjlksd fjalkfj lakdjf aldf jldjf adsjfal fjlsd fjld fjlaj flajf lk jdsfldsj fklaj flkja flj asdlfkj sldfj askldjf asldfj afj sdkjf lkadsj falkjf ldjs fkladjf lasjdf klasjflksjf lasjf lafj jasdlkf jsdf  fjasdfj lkdf jd fa;lfj ad fad fjla fad jfdlskjf ldfa flks fjkls fla fjaklsjf sdkl flf fj alksj f fjlsdj asl fls dfjlj flkajf ld fjldkf jlkdasjf l;ajf lskf jlksd </div>
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
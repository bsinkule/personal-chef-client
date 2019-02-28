import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <MainWrapper>
      <div className="wrapper">
        <h1>About Us</h1>
        
        <div className="aboutInfo">
          <img className="resp" src="https://i.imgur.com/JBxcgxD.jpg" alt="Family Pic"/>
          <div className="contentWrapper">
            <h3>The Family</h3>
            <div className="textContent">Kyle and Con are long-time Denver residents. They live down by the river with their daughter Ophelia and dog Bresly.
              Con is the master entertainer and host, while Kyle is a wiz in the kitchen. They decided to start KCO Dining after many
              successful and fun parties they catered for friends and family.
            </div>
          </div>
        </div>

        <div className="aboutInfoReverse">
          <div className="textContent">
            <h3>Constance</h3>
            <div className="textContent">"After spending many years in the restaurant and bar industry, I decided it was time to take all the experience and knowledge
              I've gained and apply it to something I truly enjoy, KCO Dining. It's always so great working with every one of our clients. I
              am also a Registered Nurse and a full time Mom. Check out my instagram to see what we're up to."
            </div>
          </div>
          <img className="resp" src="https://i.imgur.com/z7kqXpL.jpg" alt="Constance"/>
        </div>

        <div className="aboutInfo">
          <img className="resp" src="https://i.imgur.com/3ipvuQf.jpg" alt="Kyle"/>
          <div className="textContent">
            <h3>Kyle</h3>
            <div className="textContent">"I try to find any opportunity to be in the kitchen, so you can imagine the joy I get from working with all our clients. 
              Along with the culinary arts, I also spend many hours writing caligraphy, grinding bronze art pieces, drawing and a number of other
              art projects. Check out my instagram to see what I'm up to."
            </div>
          </div>
        </div>
        
      </div>
    </MainWrapper>
  )
}

export default About;


const MainWrapper = styled.div`
  background-image: url("https://agc.creativelive.com/agc/courses/5138-1.jpg");
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
  padding-top: 75px;
  padding-bottom: 100px; 
  height: 100%;

  .wrapper {
    width: 85%;
    max-width: 800px;
    background-color: rgba(224,224,224, .9);
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
    border-radius: 10px;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0px 15px 15px 15px;
  }

  .resp {
    width: 200px;
    height: 250px;
    border-radius: 25%;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
    margin: 10px
  }

  
  .aboutInfo {
    display: flex;
    align-items: center;
  }

  .aboutInfoReverse {
    display: flex;
    align-items: center;
  }

  @media (max-width: 600px) {
    .aboutInfo {
      display: flex;
      flex-direction: column;
    }

    .aboutInfoReverse {
      display: flex;
      flex-direction: column-reverse;
    }
  }

  h3 {
    padding: 10px 0px 10px 7%;
    margin: 0px;
  }

  .textContent {
    padding: 10px;
    width: 85%;
    margin: 0px auto;
  }

  .contentWrapper {
    width: 85%;
  }

`;
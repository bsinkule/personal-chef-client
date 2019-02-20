import React, { useState } from 'react';
import star from '../static/images/rate.png';

import styled from 'styled-components';

const Li = styled.li`
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background: transparent;

  &.wide {
    grid-column-end: span 2;
  }

  .recommended {
    border: 2px #ff9b00 solid;
  }

  .foodPic {
    width: 100%;
    border-radius: 20px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
  }

  h3 {
    background-color: rgba(255, 245, 230, .9);
    padding: 10px;
    border-radius: 20px;
  }

  .imgContainer {
    position: relative;
  }

  .star {
    position: absolute;
    top: 10px;
    left: 10px;
  }

  .deleteFoodPicButton {
    background-color: rgba(255, 245, 230, .9);
    border-radius: 20px;
    margin-top: 5px;
    cursor: pointer;
    width: 80px;  
    height: 50px;
  }

  .cta {
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const FoodPicsLi = (props) => {
  return (
    <Li 
      key={props.id}
      className={(props.orientation === "landscape") ? "wide" : ""}
    >
      {props.recommended === "yes" 
      ? 
      <div className="imgContainer">
        <img className="star" src={star} alt="star"/>
        <img className="recommended foodPic" src={props.img_url} alt="food pic"/>
      </div> 
      :
      <div>
        <img className="foodPic" src={props.img_url} alt="food pic"/>
      </div>
      }
      <h3>{props.title}</h3>
      {!props.checkAuth 
      ?
      <div>
        <div className="cta">
          <button className="deleteFoodPicButton" onClick={() => props.deleteFoodPic(props.id)}>Delete</button>
          <button className="deleteFoodPicButton">Update</button>
        </div>
        {/* {this.state.authForm ? <UpdateEngineer engApiData={this.props.engApiData} name={this.props.name} title={this.props.title} department={this.props.department} startDate={this.props.startDate} endDate={this.props.endDate} hoursPerWeek={this.props.hoursPerWeek} hourlyWage={this.props.hourlyWage} id={this.props.id} imgUrl={this.props.imgUrl} /> : null} */}
      </div>
      :
      null
      }
    </Li>
  )
}

export default FoodPicsLi;
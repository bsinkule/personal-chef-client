import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import star from '../static/images/rate.png';

import styled from 'styled-components';

const Li = styled.li`
  // scroll-snap-align: center;
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

  h5 {
    background-color: rgba(255, 245, 230, .9);
    padding: 10px;
    border-radius: 20px;
    text-align: center;
  }

  .imgContainer {
    position: relative;
  }

  .star {
    position: absolute;
    top: 10px;
    left: 10px;
  }

  .deleteUpdateButton {
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

  .Link {
    text-decoration: none; 
    color: black;
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
      <h5>{props.title}</h5>
      {props.checkAuth 
      ?
      <div>
        <div className="cta">
          <button className="deleteUpdateButton" onClick={() => props.deleteFoodPic(props.id)}>Delete</button>
          <button className="deleteUpdateButton"><Link className="Link" to={`/foodpicupdateform/${props.id}`}>Update</Link></button>
        </div>
      </div>
      :
      null
      }
    </Li>
  )
}

const mapStateToProps = (state) => ({
  checkAuth: state.checkAuth.authenticated,
});

export default connect(mapStateToProps, null)(FoodPicsLi);
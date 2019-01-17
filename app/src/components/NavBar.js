import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import MyLocation from '@material-ui/icons/MyLocationTwoTone';

import NavDrawer from './NavDrawer'

import styled from 'styled-components';

const MainWrapper = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  align-items: center;
  height: 50px;
  border-bottom: 1px grey solid;

  .li {
    list-style: none;
    padding: 5px 10px;
    border-radius: 5px;

    &:hover {
      background-color: #e6e6e6;
    }
  }

  .loginLi {
    margin-right: 20px;
  }

  .icon {
    list-style: none;
    margin-left: auto;
    margin-right: auto;
  }

  .wine {
    width: 40px;
  }

  .Link {
    text-decoration: none; 
    color: black;
  }

  @media (max-width: 600px) {
    .media {
      display: none;
    }
  }
`;

const NavBar = (props) => {

  console.log("maincomponent", props.mainComponent)

  return (
    <MainWrapper>
      <NavDrawer auth={props.auth} />
      <li className="media li"><Link className="Link" to="/Home">home</Link></li>
      <li className="media li"><Link className="Link" to="/Pics">pics</Link></li>
      <li className="icon"><img className="wine" src="https://img.icons8.com/wired/2x/food-and-wine.png" alt="cheese and wine icon"/></li>
      {/* <li className="icon"><MyLocation fontSize="large" /></li> */}
      <li className="media li"><Link className="Link" to="/About">about</Link></li>
      <li className="li">{props.mainComponent}</li>
    </MainWrapper>
  )
}

export default NavBar;
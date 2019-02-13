import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import NavDrawer from './NavDrawer'

import styled from 'styled-components';

const MainWrapper = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0;
  padding: 0;
  height: 50px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;

  .none {
    display: none;
  }

  .li {
    list-style: none;
    padding: 5px 20px;
    border-radius: 5px;

    &:hover {
      background-color: #e6e6e6;
    }
  }

  .loginLi {
    margin-right: 20px;
  }

  .icon {
    display: flex;
    list-style: none;
    margin-right: auto;
    padding: 5px 10px;
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
  return (
    <MainWrapper>
      <li className="icon"><Link className="Link" to="/Home"><img className="wine" src="https://img.icons8.com/wired/2x/food-and-wine.png" alt="cheese and wine icon"/></Link><div>kco<br/>dining</div></li>
      <li className="media li"><Link className="Link" to="/FoodPics">food pics</Link></li>
      <li className="media li"><Link className="Link" to="/About">about us</Link></li>
      <li className="media li"><Link className="Link" to="/FAQ">FAQs</Link></li>
      <li className="media li"><Link className="Link" to="/Contact">contact</Link></li>
      <NavDrawer />
    </MainWrapper>
  )
}

export default NavBar;
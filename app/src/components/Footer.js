import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import styled from 'styled-components';

const MainWrapper = styled.div`
  background-color: #404040;
  color: white;

  .centeredWrapper {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    max-width: 1200px;
    height: 100%;
    margin: 0;
    margin-left: auto;
    margin-right: auto;
  }

  .Link {
    text-decoration: none;
    color: white;
  }

  .siteMap {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 20px;
  }

  .siteMap2 {
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    margin: 20px;
    padding: 20px 20px 0px 0px;
    border-right: 1px solid white;
  }

  .siteH4 {
    margin: 0;
    padding-bottom: 15px;
  }

`;

const Footer = (props) => {
  return (
    <MainWrapper>
      <div className="centeredWrapper">
        <div className="siteMap">
          <h4 className="siteH4">Site Map ></h4>
          <Link className="Link" to="/Home">home</Link>
          <Link className="Link" to="/Pics">food pics</Link>
          <Link className="Link" to="/About">who we are</Link>
        </div>
        <div className="siteMap2">
          <Link className="Link" to="/FAQ">FAQs</Link>
          <Link className="Link" to="/Contact">contact</Link>
          {props.mainComponent}   
        </div>
        <div className="siteMap">
          <h4 className="siteH4">Follow Us ></h4>
          <a className="Link" href="https://www.instagram.com/" target="_blank"><img style={{ width: "40px"}} src="https://uploads-ssl.webflow.com/594502e60d8aed43609fd300/59737456b23cc947a7d831d8_instagram%20icon.png" alt="instagram icon" /></a>
        </div>
      </div>
    </MainWrapper>
  )
};

const mapStateToProps = (state) => ({
  checkAuth: state.checkAuth.authenticated,
});

export default connect(mapStateToProps, null)(Footer);


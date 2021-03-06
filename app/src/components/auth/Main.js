import React from 'react'
import styled from 'styled-components';

const Main = (props) => {
  return (
    <div >
      {!props.auth.isAuthenticated() ? 
          <Para onClick={props.auth.login}>admin</Para>
        :
          <Para onClick={props.auth.logout}>logout</Para>
        }
      </div>
  )
}

export default Main;


const Para = styled.p`
  margin: 0;
  cursor: pointer;
`;

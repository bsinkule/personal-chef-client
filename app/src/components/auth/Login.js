import React from 'react'

import styled from 'styled-components';

const Para = styled.p`
  margin: 0;
  cursor: pointer;
`;

const Login = (props) => {
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

export default Login;
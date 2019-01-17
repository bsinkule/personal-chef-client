import React, { Component } from 'react'
import Auth from "../../Auth";

import styled from 'styled-components';

const Para = styled.p`
  margin: 0;
`;

class Callback extends Component {
  componentDidMount(){
    const auth = new Auth()
    auth.handleAuthentication() 
  }
  
  render() {
    return (
          <Para>verify user</Para> 
      )
    }
  }

export default Callback;

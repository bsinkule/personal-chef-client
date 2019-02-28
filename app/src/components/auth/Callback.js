import React, { Component } from 'react'
import styled from 'styled-components';
import Auth from "../../Auth";

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


const Para = styled.p`
  margin: 0;
`;


import React, { useEffect } from 'react'
import Auth from "../../Auth";

import styled from 'styled-components';

const Para = styled.p`
  margin: 0;
`;

const Callback = () => {
  useEffect(() => {
    const auth = new Auth()
    auth.handleAuthentication() 
  },[])
    return (
      <Para>verify user</Para> 
    )
  }
// }

export default Callback;

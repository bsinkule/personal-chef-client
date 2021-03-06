import React from 'react';
import styled from 'styled-components';
import calendar from '../static/images/001-calendar.png';

const CalendarButton = () => {
  return (
    <MainWrapper>
      <img className="imgIcon" src={calendar}  alt="calendar icon"/>
    </MainWrapper> 
  )
}

export default CalendarButton;

const MainWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 65px;
  height: 65px;
  background-color: rgba(153,153,153,0.9);
  display: flex;
  justify-content: center;
  border-radius: 50%;
  box-shadow: 4px 4px 8px 0 rgba(0,0,0,0.3);
  cursor: pointer;
  

  .imgIcon {
    width: 40px;
    padding: 15px;
  }
`;
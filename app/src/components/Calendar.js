import React from 'react';
import DayPicker from 'react-day-picker';

import styled from 'styled-components';

const MainWrapper = styled.div`
  position: fixed;
  bottom: 80px;
  right: 80px;
  background-color: white;
  border-radius: 10px;
  border: 1px solid grey;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
`;

const Calendar = () => {
  return (
    <MainWrapper>
      <div>Available Dates</div>
      <DayPicker
        disabledDays={[
          new Date(2019, 0, 25),
          new Date(2019, 2, 3),
          new Date(2019, 2, 5),
          new Date(2019, 2, 21),
          {
            after: new Date(2019, 2, 11),
            before: new Date(2019, 2, 17),
          },
        ]}
      />
    </MainWrapper>
  );
}

export default Calendar;

// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import DayPicker, { DateUtils } from 'react-day-picker';

// import { addDay, removeDay } from '../actions/availableDays';

// import styled from 'styled-components';

// const MainWrapper = styled.div`
//   position: fixed;
//   bottom: 80px;
//   right: 80px;
//   background-color: white;
//   border-radius: 10px;
//   border: 1px solid grey;
// `;

// class Calendar extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedDays: this.props.savedDays,
//     };
//   }
//   handleDayClick = (day, { selected }) => {
//     const { selectedDays } = this.state;
//     console.log("day: ", day)
//     if (selected) {
//       const selectedIndex = selectedDays.findIndex(selectedDay =>
//         DateUtils.isSameDay(selectedDay, day)
//       );
//       this.props.removeDay(selectedIndex);
//       selectedDays.splice(selectedIndex, 1);
//     } else {
//       this.props.addDay(day);
//       selectedDays.push(day);
//     }
//     this.setState({ selectedDays });
//   }
//   render() {
//     console.log("selected days: ", this.state.selectedDays)
//     return (
//       <MainWrapper>
//         <DayPicker
//           selectedDays={this.state.selectedDays}
//           onDayClick={this.props.checkAuth ? this.handleDayClick : null}
//         />
//       </MainWrapper>
//     );
//   }
// }

// const bindActions = (dispatch) => ({
//   addDay: (day) => dispatch(addDay(day)),
//   removeDay: (index) => dispatch(removeDay(index)),
// });

// const mapStateToProps = (state) => ({
//   router: state.router,
//   savedDays: state.savedDays,
//   checkAuth: state.checkAuth.authenticated,
// });

// export default connect(mapStateToProps, bindActions)(Calendar);
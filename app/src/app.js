import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import styled from 'styled-components';

import { checkAuthenticated } from './actions/checkAuthenticated';
import Main from './components/auth/Main.js';
import Login from './components/auth/Login.js';
import NotFound from './components/auth/NotFound.js';
import Callback from './components/auth/Callback.js';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import CalendarButton from './components/CalendarButton';
import Calendar from './components/Calendar';


class App extends Component {

    state = {
      navColor: "top-nav",
      calendarClicked: false,
    }

  componentDidMount(){
    this.props.auth.isAuthenticated() ? this.props.checkAuthenticated() : null

    document.addEventListener('scroll', () => {
      window.scrollY > 30 ? this.setState({ navColor: "tippy"}) : this.setState({ navColor: "top-nav"})
    });
  }

  toggleCalendar = () => {
    const tog = !this.state.calendarClicked
    this.setState({
        calendarClicked: tog
    })
  }

  render() {
    let mainComponent = "";
    switch(this.props.location.pathname){
        case "/":
            mainComponent = <Login {...this.props}/>;
            break;
        case "/callback":
            mainComponent = <Callback />;
            break;
        case "/home":
            mainComponent = this.props.auth.isAuthenticated() ? <Main {...this.props} /> : <NotFound {...this.props} />
            break;
        default:
            mainComponent = <Main {...this.props} />;
    }

    // console.log("app.js props: ", this.props)
    // console.log('scroll: ', window.scrollY)

    return (
      <MainWrapper >
        <div className={this.state.navColor}>
          <NavBar />
        </div>
        <div className="main">
          {this.props.children}
        </div>
        <Footer mainComponent={mainComponent}/>
        <div onClick={this.toggleCalendar}><CalendarButton /></div>
        {this.state.calendarClicked ? <Calendar /> : ''}
      </MainWrapper>
    )
  }
}

const bindActions = (dispatch) => ({
  checkAuthenticated: (bool) => dispatch(checkAuthenticated(bool)),
});

const mapStateToProps = (state) => ({
  router: state.router,
  checkAuth: state.checkAuth,
  savedDays: state.savedDays,
});

export default withRouter(connect(mapStateToProps, bindActions)(App));

{/* <button onClick={() => window.scroll({ top: 0, left: 0, behavior: 'smooth' })}>TOP</button> */}

const MainWrapper = styled.div`

  .top-nav {
    background-color: transparent;
    transition: .6s ease;
    -webkit-transition: .6s ease;
    -moz-transition: .6s ease;
    -o-transition: .6s ease;
    position: fixed;
    width: 100%;
    z-index: 2;
    top: 0;
  }

  .tippy {
    background-color: rgba(242, 242, 242, .95);
    transition: .6s ease;
    -webkit-transition: .6s ease;
    -moz-transition: .6s ease;
    -o-transition: .6s ease;
    position: fixed;
    width: 100%;
    z-index: 2;
    top: -.1px;
  }

`;
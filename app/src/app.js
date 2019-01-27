import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

import { checkAuthenticated } from './actions/checkAuthenticated';

import Main from './components/auth/Main.js';
import Login from './components/auth/Login.js';
import NotFound from './components/auth/NotFound.js';
import Callback from './components/auth/Callback.js';
import NavBar from './components/NavBar';

import styled from 'styled-components';

const MainWrapper = styled.div`
  .top-nav {
    background-color: transparent;
    transition: .6s ease;
    position: fixed;
    width: 100%;
    z-index: 2;
    top: 0;
  }

  .tippy {
    background-color: rgba(242, 242, 242, .7);
    transition: .6s ease;
    position: fixed;
    width: 100%;
    z-index: 2;
    top: -.1px;
  }
`;


class App extends Component {

    state = {
      navColor: "top-nav"
    }

  componentDidMount(){
    this.props.auth.isAuthenticated() ? this.props.checkAuthenticated() : null

    document.addEventListener('scroll', () => {
      window.scrollY > 30 ? this.setState({ navColor: "tippy"}) : this.setState({ navColor: "top-nav"})
    });
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

    console.log("app.js props: ", this.props)
    console.log('scroll: ', window.scrollY)

    return (
      <MainWrapper >
        <div className={this.state.navColor}>
          <NavBar auth={this.props.auth} mainComponent={mainComponent} />
        </div>
        <div className="main">
          {this.props.children}
        </div>
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
});

export default withRouter(connect(mapStateToProps, bindActions)(App));


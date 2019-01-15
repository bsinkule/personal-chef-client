import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

import { getConfig } from './actions/config';

class App extends Component {

  componentDidMount(){
  }

  render() {
    console.log("App.js props: ", this.props)
    return (
      <div className="wrapper">
        <div className="top-nav">
          TOP NAV COMPONENT
          <Link to="/About">Click for About page</Link>
        </div>
        <div className="side-nav">
          MAYBE SIDE NAV
        </div>
        <div className="main">
          {this.props.children}
        </div>
      </div>
    )
  }
}

const bindActions = (dispatch) => ({
  getConfig: (config) => dispatch(getConfig(config)),
});

const mapStateToProps = (state) => ({
  router: state.router,
  getConfig: state.getConfig,
});

export default withRouter(connect(mapStateToProps, bindActions)(App));

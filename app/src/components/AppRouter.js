import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';

import styled from 'styled-components';

import Home from './Home';
import About from './About';
import OneAbout from './OneAbout';
import NoMatch from './NoMatch';

const AppRouter = () => {

    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/oneabout/:id" component={OneAbout} />
        <Route component={NoMatch} />
      </Switch>
    );
}

const mapStateToProps = (state) => ({
    router: state.router,
});

export default withRouter(connect(mapStateToProps)(AppRouter));

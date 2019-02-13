import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';

import Home from './Home';
import FAQ from './FAQ';
import Contact from './Contact';
import About from './About';
import OneAbout from './OneAbout';
import Loading from './auth/Loading';
import NoMatch from './NoMatch';
import FoodPics from './FoodPics';

const AppRouter = () => {

    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/faq" component={FAQ} />
        <Route path="/foodpics" component={FoodPics} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/callback" component={Loading} />
        <Route path="/oneabout/:id" component={OneAbout} />
        <Route component={NoMatch} />
      </Switch>
    );
}

const mapStateToProps = (state) => ({
    router: state.router,
});

export default withRouter(connect(mapStateToProps)(AppRouter));

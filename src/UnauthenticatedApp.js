import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import LoginPage from '@pages/auth/LoginPage';

const UnauthenticatedApp = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Redirect to={{ pathname: '/login' }} />
      </Switch>
    </Router>
  );
};

export default UnauthenticatedApp;

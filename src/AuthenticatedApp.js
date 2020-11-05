import React from 'react';
import { BrowserRouter as Router, Redirect } from 'react-router-dom';
import { AppContainer } from '@components';

const AuthenticatedApp = () => {
  return (
    <Router>
      <AppContainer path="/" />
      <Redirect to={{ pathname: '/' }} />
    </Router>
  );
};

export default AuthenticatedApp;

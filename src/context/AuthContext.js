import React from 'react';
import { FullPageSpinner } from '@components';
import * as AuthService from '@services/AuthService';
import { useAsync } from '@hooks';
import ErrorPage from '@pages/ErrorPage';
import { stall } from '../helpers/utils';

const AuthContext = React.createContext();

function AuthProvider(props) {
  const [firstAttemptFinished, setFirstAttemptFinished] = React.useState(false);
  const { data = { user: null }, isRejected, isPending, isSettled } = useAsync(getUser, true);

  React.useLayoutEffect(() => {
    if (isSettled) {
      setFirstAttemptFinished(true);
    }
  }, [isSettled]);

  if (!firstAttemptFinished) {
    if (isPending) {
      return <FullPageSpinner />;
    }
    if (isRejected) {
      return <ErrorPage />;
    }
  }

  return (
    <AuthContext.Provider
      value={{
        data,
        login: AuthService.login,
        logout: AuthService.logout
      }}
      {...props}
    />
  );
}

function useAuth() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
}

export { AuthProvider, useAuth };

const getUser = async () => {
  const data = await AuthService.getUser();
  await stall(3000);
  return !data ? { user: { email: 'a' } } : { user: data };
};

import React from 'react';
import { QueryCache, ReactQueryCacheProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query-devtools';
import { AuthProvider } from './AuthContext';
import { UserProvider } from './UserContext';

function AppProviders({ children }) {

  const queryCache = new QueryCache();

  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <AuthProvider>
        <UserProvider>{children}</UserProvider>
      </AuthProvider>
      {/* <ReactQueryDevtools initialIsOpen /> */}
    </ReactQueryCacheProvider>
  );
}

export default AppProviders;

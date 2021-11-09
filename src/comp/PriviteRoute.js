import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../store/AuthContext';

const PrivateRoute = ({component: Component, ...rest}) => {

  const {currentUser , isLoading} = useAuth()
  if(isLoading) return <div></div>
      return (
        <Route
          {...rest}
          render={props =>
            currentUser ? (
              <Component {...props} />
            ) : (
              <Redirect to={{ pathname: '/login' }} />
            )}
        />

      )
};

export {PrivateRoute}
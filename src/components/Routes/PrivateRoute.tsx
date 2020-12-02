import React, { ReactNode } from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';

import routes from 'constants/routesPaths';

const PrivateRoute = ({ children, authenticated, exact = false, path }: PrivateRouteProps) => {
  const location = useLocation();

  return authenticated ? (
    <Route exact={exact} path={path}>
      {children}
    </Route>
  ) : (
    <Redirect
      to={{
        pathname: routes.login,
        state: { from: location }
      }}
    />
  );
};

export interface PrivateRouteProps {
  path: string,
  authenticated?: boolean,
  children?: ReactNode,
  exact?: boolean,
}

export default PrivateRoute;

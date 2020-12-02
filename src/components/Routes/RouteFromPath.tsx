import React, { ReactNode } from 'react';
import { Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';

const RouteFromPath = ({ component, ...route }: RouteFromPathProps) =>
  route.private ? (
    <PrivateRoute {...route}>{component}</PrivateRoute>
  ) : (
    <Route {...route}>{component}</Route>
  );

export interface RouteFromPathProps {
  path: string,
  component: ReactNode,
  authenticated?: boolean,
  exact?: boolean,
  private?: boolean
}

export default RouteFromPath;

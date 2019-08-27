import * as React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import { StoreWalk } from './containers/StoreWalk';
import { MainMenu } from './containers/MainMenu';
import { ActionScreen } from './containers/ActionScreen';
import { App } from './containers/App';

export type SRSRoute = {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
};

export interface SRSRouterProps {
  history: any;
}

const routes: SRSRoute[] = [
  {
    path: '/menu',
    component: MainMenu,
    exact: true,
  },
  {
    path: '/store-walk',
    component: StoreWalk,
    exact: true,
  },
  {
    path: '/action-screen/:actionType',
    component: ActionScreen,
    exact: true,
  },
  {
    path: '/traditional-walk',
    component: TraditionalWalk,
    exact: true,
  },
];

export const SRSRouter: React.FC<SRSRouterProps> = ({ history }) => {
  return (
    <Router>
      <App>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/menu" />} />
          {routes.map(route => (
            <Route
              path={route.path}
              component={route.component}
              key={route.path}
              exact={route.exact}
            />
          ))}
        </Switch>
      </App>
    </Router>
  );
};

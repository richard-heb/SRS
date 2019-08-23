import * as React from 'react';

import { RouteComponentProps, withRouter } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

type MenuButtonProps = RouteComponentProps & {
  route: string;
  label: string;
};

export const MenuButton: React.FC<MenuButtonProps> = ({
  route,
  label,
  history,
}) => (
  <Button className="menu-btn" onClick={() => history.push(route)}>
    {label}
  </Button>
);

export default withRouter(MenuButton);

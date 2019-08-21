import React from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

const MenuButton = props => {
  const { route, label, push } = props;
  return (
    <Button
      className="menu-btn"
      onClick={() => {
        push(route);
      }}
    >
      {label}
    </Button>
  );
};

export default connect(
  null,
  { push },
)(MenuButton);

import React from 'react';
import Button from 'react-bootstrap/Button';

const StoreWalkButton = props => {
  const { label, actionType } = props;
  return (
    <Button className="store-walk-btn" href={`/#/action-screen/${actionType}`}>
      <div id="overlay" />
      {label}
    </Button>
  );
};

export default StoreWalkButton;

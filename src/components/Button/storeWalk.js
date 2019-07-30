import React from 'react';
import Button from 'react-bootstrap/Button';

const StoreWalkButton = (props) => {
  const {label, type} = props;
  return (
    <Button className='store-walk-btn' href={`/#/action-screen`} >
      <div id="overlay"></div>
      {label}
    </Button>
  )
}

export default StoreWalkButton;
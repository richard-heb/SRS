import React from 'react';
import Button from 'react-bootstrap/Button';

const StoreWalkButton = (props) => {
  const {label, actionType} = props;
  const ref = actionType === 'traditional' ? `/#/traditional-walk` : `/#/action-screen/${actionType}` 
  return (
    <Button className='store-walk-btn' href={ref} >
      <div id="overlay"></div>
      {label}
    </Button>
  )
}

export default StoreWalkButton;
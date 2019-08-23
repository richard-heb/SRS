import * as React from 'react';
import Button from 'react-bootstrap/Button';

export interface StoreWalkButtonProps {
  label: string;
  actionType: string;
}

export const StoreWalkButton: React.FC<StoreWalkButtonProps> = ({
  label,
  actionType,
}) => {
  return (
    <Button className="store-walk-btn" href={`/#/action-screen/${actionType}`}>
      <div id="overlay" />
      {label}
    </Button>
  );
};

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
  const isTraditional = actionType === 'traditional';
  const ref = isTraditional
    ? '/traditional-walk'
    : `/action-screen/${actionType}`;

  return (
    <Button className="store-walk-btn" href={ref}>
      <div id="overlay" />
      {label}
    </Button>
  );
};

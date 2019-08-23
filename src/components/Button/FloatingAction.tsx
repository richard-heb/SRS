import * as React from 'react';

import Button from 'react-bootstrap/Button';
import { FaBarcode } from 'react-icons/fa';

const FloatingAction: React.FC = () => {
  return (
    <Button id="floating-action">
      <FaBarcode />
    </Button>
  );
};

export default FloatingAction;

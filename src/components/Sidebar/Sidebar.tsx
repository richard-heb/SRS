import * as React from 'react';

import { FaBarcode, FaReply } from 'react-icons/fa';

const MenuLeft: React.FC = () => {
  const action = 'adjustments';

  return (
    <div className={`menu-left ${action}`}>
      <button>
        <FaReply />
      </button>
      <button>
        <FaBarcode />
      </button>
    </div>
  );
};

export default MenuLeft;

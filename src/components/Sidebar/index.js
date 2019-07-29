import React from 'react';
import Button from 'react-bootstrap/Button';
import {FaBarcode, FaReply} from 'react-icons/fa';

const MenuLeft = (props) => {
	const action = 'adjustments'
    return (
			<div className={`menu-left ${action}`}>
					<div className="new-link"> 
						<button><FaReply/></button>
					</div>
					<div className="new-link"> 
						<button><FaBarcode/></button>
					</div>

			</div>
    );
}

export default MenuLeft;
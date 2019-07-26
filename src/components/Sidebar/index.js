import React from 'react';
import Button from 'react-bootstrap/Button';

const MenuLeft = (props) => {
	const {action} = props;
    return (
			<div className={`menu-left ${action}`}>
					<div className="new-link"> 
						<button>X</button>
					</div>
					<div className="new-link"> 
						<button>X</button>
					</div>

			</div>
    );
}

export default MenuLeft;
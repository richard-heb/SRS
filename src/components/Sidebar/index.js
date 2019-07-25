import React from 'react';
import Button from 'react-bootstrap/Button';

const MenuLeft = (props) => {
	const {action} = props;
    return (
			<div className={`menu-left ${action}`}>

					{/* <div className='link top' ></div>
					<div className='link' ></div>
					<div className='link' ></div>
					<div className='link btm'></div> */}
			</div>
    );
}

export default MenuLeft;
import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import {IoMdArrowDropleft} from 'react-icons/io';

const Footer = (props) => {
    const {shared} = props;
    const sharedClass = shared ? 'shared' : ''
    return ( 
			<Navbar className={`footer ${sharedClass}`} fixed="bottom" >
				<Navbar.Brand href="#home">
					<IoMdArrowDropleft size={30}/>
					Previous
				</Navbar.Brand>
				<Nav className="mr-auto"/>
						Next
			</Navbar>
    )
}

export default Footer;
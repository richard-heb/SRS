import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

const Footer = (props) => {
    const {shared} = props;
    const sharedClass = shared ? 'shared' : ''
    return ( 
			<Navbar className={`footer ${sharedClass}`} fixed="bottom" >
				<Navbar.Brand href="#home">Previous</Navbar.Brand>
				<Nav className="mr-auto"/>
						Next
			</Navbar>
    )
}

export default Footer;
import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import {FaChevronRight, FaChevronLeft} from 'react-icons/fa';

const Footer = (props) => {
    const {shared} = props;
    const sharedClass = shared ? 'shared' : ''
    return ( 
			<Navbar className={`footer ${sharedClass}`} fixed="bottom" >
				<Nav className="mr-auto">
					<Button>
						<FaChevronLeft/>
						Previous
					</Button>
				</Nav>

				<Button>
					Next<FaChevronRight/>
				</Button>
			</Navbar>
    )
}

export default Footer;
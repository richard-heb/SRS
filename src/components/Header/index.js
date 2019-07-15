import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
// import Logo from './HEB-logo.svg';
// import ExportIcon from './export.png';
import {headerTitle} from '../../utils/constants.js'

const MenuTop = (props) => {
  const { shared, title} = props;
  const sharedClass = shared ? 'shared' : ''
  const headerLabel = headerTitle(title);
  
  return (
    <Navbar className={`${sharedClass}`} fixed='top'>
      <Navbar.Brand href="#home"> 
      {/* <img src={Logo} alt="logo" /> */}
      </Navbar.Brand>
      <Nav className="mr-auto">
        {headerLabel}
      </Nav>

      <Button>
        {/* <img src={ExportIcon} alt="export" style={{height:'25px', width: '25px'}}/> */}
      </Button>
    </Navbar>
  )
}

export default MenuTop;
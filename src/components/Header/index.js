import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Logo from './HEB-logo.svg';
import ExportIcon from './export.png';
import { FaBars, FaSignOutAlt, FaUserCog, FaCog} from 'react-icons/fa';
import {headerTitle} from '../../utils/constants.js'


const MenuTop = (props) => {
  const { shared} = props;
  const sharedClass = shared ? 'shared' : ''
  const title = 'Unified Store Walk';
  
  return (
    <Navbar className={`${sharedClass}`} fixed="top" >
      <Nav className="mr-auto nav-title" >
        <Nav.Item className='menu-toggle-item'>
          <Button href="/"><FaBars className='menu-toggle'/></Button>
        </Nav.Item>
        <Nav.Item className='logo-item'>
          <img src={Logo} alt="logo" />
        </Nav.Item>
          <div className='title-text'>{title}</div>
      </Nav>

      <Button className='signout-btn'>
        <FaSignOutAlt className='logout-svg'/>

        {/* <DropdownButton alignRight className='logout-svg' id="dropdown-basic-button" title={<FaUserCog className='logout-svg'/>} drop='down' >
          <Dropdown.Item href="#/action-1"><FaCog /> User Preferences</Dropdown.Item>
          <Dropdown.Item href="#/action-2"><FaSignOutAlt /> Log Out</Dropdown.Item>
        </DropdownButton> */}
      </Button>
    </Navbar>
  )
}

export default MenuTop;
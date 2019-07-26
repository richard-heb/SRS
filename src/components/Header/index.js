import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Logo from './HEB-logo.svg';
import ExportIcon from './export.png';
import { FaBars, FaSignOutAlt } from 'react-icons/fa';
import {headerTitle} from '../../utils/constants.js'


const MenuTop = (props) => {
  const { shared} = props;
  const sharedClass = shared ? 'shared' : ''
  const title = 'Unified Store Walk';
  
  return (
    <Navbar className={`${sharedClass}`} >
      <Nav className="mr-auto nav-title" >
        <Nav.Item className='menu-toggle-item'>
          <FaBars className='menu-toggle'/>
        </Nav.Item>
        <Nav.Item className='logo-item'>
          <img src={Logo} alt="logo" />
        </Nav.Item>
          <div className='title-text'>{title}</div>
      </Nav>

      <Button className='signout-btn'>
        <FaSignOutAlt className='logout-svg'/>
      </Button>
    </Navbar>
  )
}

export default MenuTop;
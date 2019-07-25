import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Logo from './HEB-logo.svg';
import ExportIcon from './export.png';
import { FaShareSquare, FaSignOutAlt } from 'react-icons/fa';
import {headerTitle} from '../../utils/constants.js'
import { NONAME } from 'dns';

const MenuTop = (props) => {
  const { shared, title} = props;
  const sharedClass = shared ? 'shared' : ''
  const headerLabel = headerTitle(title);
  
  return (
    <Navbar className={`${sharedClass}`} >
      <Nav className="mr-auto nav-title" >
        <Nav.Item>
          <img src={Logo} alt="logo" />
        </Nav.Item>
          <div style={{display: 'inline-block', overflow:'hidden'}}>{title}</div>
      </Nav>

      <Button className='signout-btn'>
        <FaSignOutAlt/>
      </Button>
    </Navbar>
  )
}

export default MenuTop;
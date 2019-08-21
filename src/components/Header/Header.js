import Logo from './HEB-logo.svg';

import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { FaBars, FaSignOutAlt, FaUserCog, FaCog } from 'react-icons/fa';

const MenuTop = props => {
  const { mainMenu, title } = props;
  const logoMargin = mainMenu ? 'main' : '';
  const showMenuBars = !mainMenu ? (
    <Nav.Item className="menu-toggle-item">
      <Button href="/" style={{ marginLeft: '.4em' }}>
        <FaBars className="menu-toggle" />
      </Button>
    </Nav.Item>
  ) : (
    <div />
  );

  return (
    <Navbar fixed="top">
      <Nav className="mr-auto nav-title">
        {showMenuBars}
        <Nav.Item className={`logo-item ${logoMargin}`}>
          <img src={Logo} alt="logo" />
        </Nav.Item>
        <div className="title-text">{title}</div>
      </Nav>
      <DropdownButton
        alignRight
        id="dropdown-basic-button"
        title={<FaUserCog className="logout-svg" />}
        drop="down"
      >
        <Dropdown.Item href="#/action-1">
          <FaCog /> User Preferences
        </Dropdown.Item>
        <Dropdown.Item href="#/action-2">
          <FaSignOutAlt /> Log Out
        </Dropdown.Item>
      </DropdownButton>
    </Navbar>
  );
};

export default MenuTop;

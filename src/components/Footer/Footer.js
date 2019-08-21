import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { FaChevronRight, FaChevronLeft, FaCog } from 'react-icons/fa';

const Footer = props => {
  const { withMargin } = props;
  const logoMargin = withMargin ? 'with-margin' : '';
  const showCog = false ? (
    <Nav.Item className={`settings-item ${logoMargin}`}>
      <Button>
        <FaCog />
      </Button>
    </Nav.Item>
  ) : (
    <div />
  );
  return (
    <Navbar className="footer" fixed="bottom">
      <Nav className="mr-auto">
        {showCog}
        <Button className={`${logoMargin}`}>
          <FaChevronLeft />
          Previous
        </Button>
      </Nav>

      <Button>
        Next
        <FaChevronRight />
      </Button>
    </Navbar>
  );
};

export default Footer;

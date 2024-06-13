import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './Header.css';
import nobglogo from './assets/nobglogo.png';

const Header = () => {
  return (
    <Navbar expand="lg" className="header">
      <Navbar.Brand href="/" className="brand-container">
        <img src={nobglogo} alt="Dattha Global Technologies" className="logo" />
        <span className="company-name">Dattha Global Technologies</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto nav-links">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About Us</Nav.Link>
          {/* Services Dropdown */}
          <CustomDropdown title="Services">
            {/* Corporate Trainings */}
            <CustomSubDropdown title="Corporate Trainings">
            <NavDropdown.Item href="/Services">All Corporate Trainings</NavDropdown.Item>
              <NavDropdown.Item href="/training-classes">Training Classes</NavDropdown.Item>
              <NavDropdown.Item href="/courses-offered">Courses Offered</NavDropdown.Item>
              <NavDropdown.Item href="/virtual-classes">Virtual Classes</NavDropdown.Item>
            </CustomSubDropdown>

            {/* HR Solutions */}
            <CustomSubDropdown title="HR Solutions">
            <NavDropdown.Item href="/Services">All HR Solutions</NavDropdown.Item>
              <NavDropdown.Item href="/executive-staffing">Employee Staffing</NavDropdown.Item>
              <NavDropdown.Item href="/talent-management">Manpower Supply</NavDropdown.Item>
            </CustomSubDropdown>

            {/* Engineering Services and Solutions */}
            <CustomSubDropdown title="Engineering Services and Solutions">
            <NavDropdown.Item href="/Services">All Engineering Services and Solutions</NavDropdown.Item>
              <NavDropdown.Item href="/cae-services">CAE Services</NavDropdown.Item>
              <NavDropdown.Item href="/cfd-services">CFD Services</NavDropdown.Item>
              <NavDropdown.Item href="/engineering-services">Engineering Services</NavDropdown.Item>
            </CustomSubDropdown>
          </CustomDropdown>
          <Nav.Link href="/careers">Careers</Nav.Link>
          <Nav.Link href="/contact">Contact Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

// Custom Dropdown Component to customize the position of the second level dropdown
const CustomDropdown = ({ title, children }) => {
  return (
    <NavDropdown title={title} id="services-dropdown" alignRight>
      {children}
    </NavDropdown>
  );
};

// Custom SubDropdown Component to customize the position of the third level dropdown
const CustomSubDropdown = ({ title, children }) => {
  return (
    <NavDropdown title={title} id="sub-dropdown" className="sub-dropdown">
      {children}
    </NavDropdown>
  );
};

export default Header;

import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarToggler,
  Collapse,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Navbar dark color="primary" sticky="top" expand="md">
      <NavbarBrand className="ms-4">
        <h3><Logo /> Near Me App</h3>
      </NavbarBrand>
      <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
      <Collapse isOpen={menuOpen} navbar>
        <Nav className="ms-auto" navbar>
          <NavItem>
            <NavLink className="nav-link" to="/">
              <i className="fa fa-home fa-lg" /> Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/about">
              <i className="fa fa-info fa-lg" /> About
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;

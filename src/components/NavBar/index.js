import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem } from 'shards-react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
    <Navbar type="dark" theme="primary" expand="md">
      <NavbarBrand href="/">TV Station</NavbarBrand>
      <Nav navbar>

        <NavItem>
          <NavLink to="/products">Products</NavLink>
        </NavItem>

        <NavItem>
          <NavLink to="/bundles">Bundles</NavLink>
        </NavItem>

        <NavItem>
          <NavLink to="/about">About us</NavLink>
        </NavItem>

        <NavItem>
          <NavLink to="/cart">Cart</NavLink>
        </NavItem>

      </Nav>
    </Navbar>
  )

export default NavBar;

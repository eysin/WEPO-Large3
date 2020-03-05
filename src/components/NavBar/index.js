import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem } from 'shards-react';
import { NavLink } from 'react-router-dom';
import Logo from '../../../resources/logo.png'

const NavBar = () => {

  return (
    <Navbar  type="dark" theme="primary" expand="md">
      <NavbarBrand href="/"><img id="navLogo"src={Logo}/></NavbarBrand>
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
        

      </Nav>
      <Nav navbar className="ml-auto">
          <NavItem>
            <NavLink to="/cart"><i class="fa fa-shopping-cart"></i></NavLink>
          </NavItem>
      </Nav>
    </Navbar>
  )
  
}

export default NavBar;
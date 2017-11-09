import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';

class Header extends Component {

  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to='/'>Beeth0ven</Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <IndexLinkContainer to='/'>
            <NavItem>Home</NavItem>
          </IndexLinkContainer>
          <LinkContainer to='/todos'>
            <NavItem>Todos</NavItem>
          </LinkContainer>
          <LinkContainer to='/lambda'>
            <NavItem>Lambda</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar>
    );
  }
}

export default Header;
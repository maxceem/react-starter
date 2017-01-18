import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router';


export const CoreLayout = ({ children, user }) => (
  <div>
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">React-Bootstrap</Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <LinkContainer to="/login">
          <NavItem eventKey={1}>Link</NavItem>
        </LinkContainer>
        <LinkContainer to="/logout">
          <NavItem eventKey={2}>Link</NavItem>
        </LinkContainer>
      </Nav>
      <Nav pullRight>
        <NavDropdown eventKey={3} title={user.email} id="basic-nav-dropdown">
          <LinkContainer to="/logout">
            <MenuItem eventKey={3.1} >Logout</MenuItem>
          </LinkContainer>
        </NavDropdown>
      </Nav>
    </Navbar>
    <div className="container">
      {children}
    </div>
  </div>
);

CoreLayout.propTypes = {
  children: PropTypes.any.isRequired,
  user: PropTypes.object.isRequired,
};

export default connect((state) => ({ user: state.global.user }))(CoreLayout);

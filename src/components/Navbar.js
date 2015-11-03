require('styles/main.scss');
require('styles/navbar.scss');

var React = require('react');
var LinkContainer = require('react-router-bootstrap').LinkContainer;

var Navbar = require('react-bootstrap').Navbar;
var CollapsibleNav = require('react-bootstrap').CollapsibleNav;
var Nav = require('react-bootstrap').Nav;
var NavItem = require('react-bootstrap').NavItem;

var NavbarComponent = React.createClass({

  render: function() {

    return (
      <Navbar toggleNavKey={0}>
        <CollapsibleNav eventKey={0}>
          <Nav navbar>
            <LinkContainer to="/showcase">
              <NavItem eventKey={1}>Home</NavItem>
            </LinkContainer>
            <LinkContainer to="/about">
              <NavItem eventKey={2}>About</NavItem>
            </LinkContainer>
            <LinkContainer to="/learn">
              <NavItem eventKey={3}>Learn</NavItem>
            </LinkContainer>
          </Nav>
        </CollapsibleNav>
      </Navbar>
    );
  }

});

module.exports = NavbarComponent;


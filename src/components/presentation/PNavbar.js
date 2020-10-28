import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import {
  Link,
  NavLink
} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from './../../assets/img/logo.png';

class PNavbar extends React.Component {
    constructor(props) {
      super(props);
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }

    toggle () {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }

    render() {
      return (
        <div>
          <Navbar className="navbar-dark bg-primary" expand="lg">
            <Container>
              <NavLink to="/" className="navbar-brand">
                <img src={logo} alt="logo" className="mr-2" height="100" style={{marginLeft:10}} />
                Code Scratcher
              </NavLink>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="mx-2" navbar>
                  <NavItem key="navitem-1">
                    <UncontrolledDropdown>
                      <DropdownToggle nav>
                        About
                      </DropdownToggle>
                      {/* <DropdownMenu>
                        <Link to="/documentation/getting-started">
                          <DropdownItem>Getting Started</DropdownItem>
                        </Link>
                        <Link to="/documentation/alerts">
                          <DropdownItem>Core Elements</DropdownItem>
                        </Link>
                      </DropdownMenu> */}
                    </UncontrolledDropdown>
                    
                  </NavItem>
                  <NavItem key="navitem-2">
                    <UncontrolledDropdown>
                      <DropdownToggle nav>
                        Services
                      </DropdownToggle>
                      <DropdownMenu>
                        <Link to="/register">
                          <DropdownItem>Branding &amp; Design</DropdownItem>
                        </Link>
                        <Link to="/profile">
                          <DropdownItem>Web &amp; App Development</DropdownItem>
                        </Link>
                        <Link to="/landing">
                          <DropdownItem>Digital Marketing</DropdownItem>
                        </Link>
                        <Link to="/landing">
                          <DropdownItem>UX/UI Design Studio</DropdownItem>
                        </Link>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </NavItem>
                  <NavItem key="navitem-3">
                    <UncontrolledDropdown>
                      <DropdownToggle nav>
                        Our Work
                      </DropdownToggle>
                      {/* <DropdownMenu>
                        <Link to="/register">
                          <DropdownItem>Register</DropdownItem>
                        </Link>
                        <Link to="/profile">
                          <DropdownItem>Profile</DropdownItem>
                        </Link>
                        <Link to="/landing">
                          <DropdownItem>Landing</DropdownItem>
                        </Link>
                      </DropdownMenu> */}
                    </UncontrolledDropdown>
                  </NavItem>
                </Nav>
                <Nav className="ml-auto" navbar>
                  <NavItem key="navitem-3">
                    <NavLink className="btn btn-outline-light" style={{marginBottom:"10px"}} to="/documentation">Contact</NavLink>
                  </NavItem>
                  <NavItem className="mx-2">
                    <Button color="light" href="https://github.com/yash-me/ScratchCode">
                    <FontAwesomeIcon icon={['fab', 'github']} /> {" "}
                      Contribute
                    </Button>
                    



                  </NavItem>
                </Nav>
              </Collapse>
            </Container>
          </Navbar>
        </div>
      );
    }
};

PNavbar.propTypes = {
  title: PropTypes.string
};

PNavbar.defaultProps = {
  title: "Lazy Kit"
};

export default PNavbar;

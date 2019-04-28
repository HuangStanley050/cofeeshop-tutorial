import React, { Component } from "react";
import { Link } from "gatsby";
import { FaCartArrowDown } from "react-icons/fa";
import Logo from "../../images/logo.svg";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

class Navigation extends Component {
  state = {
    isOpen: false,
    links: [
      {
        id: 1,
        path: "/",
        text: "Home",
      },
      {
        id: 2,
        path: "/about",
        text: "About",
      },
    ],
  };
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };
  render() {
    return (
      <div>
        <Navbar color="light" light expand="sm">
          <NavbarBrand>
            <Link to="/">
              <img src={Logo} alt="logo image for home" />
              {/* https://www.iconfinder.com/icons/185113/coffee_streamline_icon
              Creative Commons (Attribution 3.0 Unported);
              https://www.iconfinder.com/webalys */}
            </Link>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mx-auto" navbar>
              {this.state.links.map(link => (
                <NavItem key={link.id}>
                  <NavLink tag={Link} to={link.path}>
                    {link.text}
                  </NavLink>
                </NavItem>
              ))}
              <NavItem>
                <NavLink className="ml-sm-5">
                  <FaCartArrowDown className="cart-icon" />
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;

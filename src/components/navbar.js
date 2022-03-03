import React from "react";
import "../css/style.css";
import "../css/style2.css";
import Header from "./header";
import { BsFillCartFill } from "react-icons/bs";

import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button,
  NavbarBrand,
  NavbarToggler,
  Collapse,
} from "reactstrap";
const Navbar1 = () => {
  return (
    <div>
      <Navbar color="light" expand="lg" light>
        <NavbarBrand
          href="/"
          className="navbar mx-5 "
          style={{ fontWeight: "450" }}
        >
          Start Bootstrap
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">About</NavLink>
            </NavItem>
            <UncontrolledDropdown inNavba nav>
              <DropdownToggle caret nav>
                Shop
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>All Products</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Popular Items</DropdownItem>

                <DropdownItem>New Arrivals</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>
            <Button outline className="btn px-3">
              <BsFillCartFill className="icon" />
              &ensp;Cart<span className="number">O</span>
            </Button>
          </NavbarText>
        </Collapse>
      </Navbar>
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container px-4 px-lg-5">
                <a className="navbar-brand" href="">Start Bootstrap</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li className="nav-item"><a className="nav-link active" aria-current="page" href="">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="">About</a></li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="">All Products</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="">Popular Items</a></li>
                                <li><a className="dropdown-item" href="">New Arrivals</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <button className="btn btn-outline-dark" type="submit">
                            <i className="bi-cart-fill me-1"></i>
                            Cart
                            <span className="badge bg-dark text-white ms-1 rounded-pill">0</span>
                        </button>
                    </form>
                </div>
            </div>
        </nav> */}

      <Header />
    </div>
  );
};

export default Navbar1;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavbarComponent() {
  return (
    <Navbar style={{ justifyContent: "space-between" }} bg="light">
      <Navbar.Brand
        style={{ marginLeft: "1.3125rem", marginRight: "1.3125rem" }}
        as={Link}
        to="/"
      >
        Ultronic Drive
      </Navbar.Brand>
      <Nav>
        <Nav.Link
          style={{ marginLeft: "1.3125rem", marginRight: "1.3125rem" }}
          as={Link}
          to="/profile"
        >
          Profile
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

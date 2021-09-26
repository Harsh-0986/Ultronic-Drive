import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";

export default function NavbarComponent({ className }) {
  return (
    <Navbar
      style={{ justifyContent: "space-between" }}
      bg={className === "bg-light" ? "light" : "dark"}
    >
      <Navbar.Brand
        style={{ marginLeft: "1.3125rem", marginRight: "1.3125rem" }}
        className={className === "bg-dark" ? "text-white" : "text-black"}
        as={Link}
        to="/"
      >
        Ultronic Drive
      </Navbar.Brand>
      <Nav>
        <Nav.Link
          style={{ marginLeft: "1.3125rem", marginRight: "1.3125rem" }}
          as={Link}
          className={className === "bg-dark" ? "text-white" : "text-black"}
          to="/profile"
        >
          Profile
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

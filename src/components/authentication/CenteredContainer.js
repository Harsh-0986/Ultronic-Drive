import React from "react";
import { Container } from "react-bootstrap";

export default function CenteredContainer({ children }) {
  const darkMode = JSON.parse(localStorage.getItem("darkMode"));
  return (
    <Container
      className={`${
        darkMode ? "bg-dark" : "bg-light"
      } d-flex align-items-center justify-content-center`}
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        {children}
      </div>
    </Container>
  );
}

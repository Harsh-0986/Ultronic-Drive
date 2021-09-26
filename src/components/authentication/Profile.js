import React from "react";
import { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../../context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import CenteredContainer from "./CenteredContainer";
import "../drive/style.css";

export default function Profile() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  const darkMode = JSON.parse(localStorage.getItem("darkMode"));

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to logout");
    }
  }

  return (
    <div className={darkMode ? "bg-dark" : "bg-light"}>
      <CenteredContainer>
        <Card className={darkMode ? "bg-dark text-white" : "bg-light"}>
          <Card.Body>
            <h2 className="text-center mb-4">Profile</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <strong>Email: </strong>
            {currentUser.email}
            <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
              Update Profile
            </Link>
          </Card.Body>
        </Card>

        <div className="w-100 text-center m-2">
          <Button variant="danger" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </CenteredContainer>
    </div>
  );
}

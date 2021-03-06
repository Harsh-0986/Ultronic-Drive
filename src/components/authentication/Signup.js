import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../../context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import CenteredContainer from "./CenteredContainer";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const darkMode = JSON.parse(localStorage.getItem("darkMode"));

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setMessage("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.pushState("/login");
    } catch {
      setMessage("Account created");
    }
    setLoading(false);
  }

  return (
    <div className={darkMode ? "bg-dark text-white" : "bg-white"}>
      <CenteredContainer>
        <Card className={darkMode ? "bg-dark" : "bg-light"}>
          <Card.Body>
            <h2 className="text-center mb-4">Sign Up</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            {message && <Alert variant="success">{message}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} required />
              </Form.Group>
              <Form.Group id="password-confirm">
                <Form.Label>Confirm password</Form.Label>
                <Form.Control
                  type="password"
                  ref={passwordConfirmRef}
                  required
                />
              </Form.Group>
              <Button disabled={loading} className="w-100 mt-3" type="submit">
                Sign Up
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <div className="w-100 text-center m-2">
          Already have an account? <Link to="/login">Log In</Link>
        </div>
      </CenteredContainer>
    </div>
  );
}

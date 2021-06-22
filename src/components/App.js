import React from "react";
import Signup from "./authentication//Signup";
// import { Container } from "react-bootstrap";
// import CenteredContainer from "./authentication/CenteredContainer";
import { AuthProvider } from "../context/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "./authentication/Profile";
import Login from "./authentication//Login";
import PrivateRoute from "./authentication/PrivateRoute";
import ForgotPassword from "./authentication/ForgotPassword";
import UpdateProfile from "./authentication//UpdateProfile";
import Dashboard from "./drive/Dashboard";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          {/* Knox Drive */}
          <PrivateRoute exact path="/" component={Dashboard} />
          <PrivateRoute exact path="/folder/:folderId" component={Dashboard} />

          {/* Profile */}
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/update-profile" component={UpdateProfile} />
          {/* Auth */}
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/forgot-password" component={ForgotPassword} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;

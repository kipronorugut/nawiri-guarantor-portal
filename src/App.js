import React, { lazy, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import AccessibleNavigationAnnouncer from "./components/AccessibleNavigationAnnouncer";

import { auth } from "./config/firebase";

const Layout = lazy(() => import("./containers/Layout"));
const Login = lazy(() => import("./pages/Login"));
const CreateAccount = lazy(() => import("./pages/CreateAccount"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
  }, []);
  return (
    <>
      <Router>
        <AccessibleNavigationAnnouncer />
        <Switch>
          <Route exact path="/">
            {currentUser ? <Layout /> : <Redirect to="/login" />}
          </Route>
          <Route path="/login">
            {currentUser ? <Redirect to="/" /> : <Login />}
          </Route>
          <Route path="/create-account">
            {currentUser ? <Redirect to="/" /> : <CreateAccount />}
          </Route>
          <Route path="/forgot-password">
            {currentUser ? <Redirect to="/" /> : <ForgotPassword />}
          </Route>
          {currentUser ? (
            <Route path="*">
              <Layout />
            </Route>
          ) : (
            <Route path="*">
              <Redirect to="/login" />
            </Route>
          )}
        </Switch>
      </Router>
    </>
  );
}

export default App;

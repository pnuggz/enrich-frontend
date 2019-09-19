import React from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import posed, { PoseGroup } from "react-pose";

import checkAuthorization from "./lib/check-auth";
import history from "./lib/history";
import { StateProvider } from "./lib/state";

import { initialState, rootReducer } from "./rootReducer";

import "./styles/index.css";

import { Home } from "./routes/home/index";
import { Signup } from "./routes/signup/index";
import { Login } from "./routes/login/index";
import { About } from "./routes/about/index";
import { Contact } from "./routes/contact/index";
import { NavigationBar } from "./components/navigationBar";
import { Dashboard } from "./routes/dashboard";
import { PlaidLink } from "./routes/plaidLink";

const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 300, beforeChildren: true },
  exit: { opacity: 0 }
});

const App = () => {
  return (
    <StateProvider initialState={initialState} reducer={rootReducer}>
      <Router history={history}>
        <Route
          render={({ location }) => (
            <React.Fragment>
              <NavigationBar location={location} />
              <PoseGroup>
                <RouteContainer key={location.pathname}>
                  <Switch location={location}>
                    <Route exact={true} path="/" render={() => <Home />} />
                    <Route
                      exact={true}
                      path="/signup"
                      render={() => <Signup />}
                    />
                    <Route
                      exact={true}
                      path="/login"
                      render={() => <Login />}
                    />
                    <Route
                      exact={true}
                      path="/dashboard"
                      render={() =>
                        checkAuthorization() ? (
                          <Dashboard />
                        ) : (
                          <Redirect to="/login" />
                        )
                      }
                    />
                    <Route
                      exact={true}
                      path="/accounts/add"
                      render={() =>
                        checkAuthorization() ? (
                          <PlaidLink />
                        ) : (
                          <Redirect to="/login" />
                        )
                      }
                    />
                    <Route
                      exact={true}
                      path="/about"
                      render={() => <About />}
                    />
                    <Route
                      exact={true}
                      path="/contact"
                      render={() => <Contact />}
                    />
                  </Switch>
                </RouteContainer>
              </PoseGroup>
            </React.Fragment>
          )}
        />
      </Router>
    </StateProvider>
  );
};

export default App;

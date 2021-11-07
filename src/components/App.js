import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import "../css/app.css";

import PrivateRoute from "./PrivateRoute";

import UserStartPage from "./UserStartPage";
import Login from "./Login";
import StartingPage from "./StartingPage";
import WorkerStartPage from "./WorkerStartPage";
import Recover from "./Recover";

function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Switch>
            <Route path="/" exact component={StartingPage} />
            <Route path="/UserStartPage" component={UserStartPage} />
            <Route path="/login" component={Login} />
            <Route path="/recover" component={Recover} />
            <PrivateRoute path="/WorkerStartPage" component={WorkerStartPage} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;

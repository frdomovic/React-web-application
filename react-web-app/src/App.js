import { Route, Switch } from "react-router-dom";

import "./App.css";

import UserStartPage from "./pages/UserStartPage";
import WorkerLoginPage from "./pages/WorkerLoginPage";
import StartingPage from "./components/StartingPage";
import WorkerStartPage from "./pages/WorkerStartPage";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <StartingPage />
        </Route>
        <Route path="/UserStartPage">
          <UserStartPage />
        </Route>
        <Route path="/WorkerLoginPage">
          <WorkerLoginPage />
        </Route>
        <Route path="/WorkerStartPage">
          <WorkerStartPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

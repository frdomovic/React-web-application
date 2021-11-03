import { Route, Switch } from "react-router-dom";

import "./App.css";

import UserStartPage from "./pages/UserStartPage";
import WorkerLoginPage from "./pages/WorkerLoginPage";
import StartingPage from "./components/StartingPage";

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
      </Switch>
    </div>
  );
}

export default App;

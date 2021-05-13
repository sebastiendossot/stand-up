import React, {FunctionComponent} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from './Home';
import StandUp from './StandUp';
import Timer from './Timer';

type Props = {}
const App: FunctionComponent<Props> = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/standup">
              <StandUp />
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;

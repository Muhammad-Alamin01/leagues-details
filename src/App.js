
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Home from './Components/Home/Home';
import NotFound from './Components/NotFoundPage/NotFound';
import SingleLeaugeDetails from './Components/SingleLeaugeDetails/SingleLeaugeDetails';


function App() {

  return (

    <div className="App">
      <Router>
        <Switch>
          {/* root  */}
          <Route exact="true" path="/">
            <Home />
          </Route>
          {/* home */}
          <Route path="/home">
            <Home />
          </Route>
          {/* dynamic route */}
          <Route path="/leauge-details/:idLeague">
            <SingleLeaugeDetails />
          </Route>
          {/* not found */}
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

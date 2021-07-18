import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages';
import Search from './pages/search';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/search" exact component={Search} />
      </Switch>
    </Router>
  );
}

export default App;

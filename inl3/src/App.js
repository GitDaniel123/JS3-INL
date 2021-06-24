import { BrowserRouter as Router, Switch, Route,  } from 'react-router-dom'
import Home from './views/Home'
import Navbar from './components/Navbar'
import About from './views/About'
import Products from './views/Products'
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/About" component={About} />
      <Route exact path="/Products" component={Products} />
    </Switch>

      </div>
  </Router>
  );
}

export default App;

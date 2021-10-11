import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Create from './components/Create/Create';
import BlogDetails from './components/BlogDetails/BlogDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <div className='content'>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/create">
              <Create/>
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails/>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Register from './components/Register';
import Category from './components/Category';
import Item from './components/Item';
import Barleft from './components/Barleft';
import List from'./components/List';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Barleft />
        <div className="content">
          <Switch>

            <Route exact path='/category'>
              <Category/>
            </Route>

            <Route exact path='/register'>
              <Register />
            </Route>



            <Route exact path='/item'>

              <Item />
            </Route>

            <Route exact path='/list'>

              <List />
            </Route>
            

            <Route exact path='/home'>

              <Home />
            </Route>







          </Switch>


        </div>
      </div>
    </Router>
  );
}

export default App;

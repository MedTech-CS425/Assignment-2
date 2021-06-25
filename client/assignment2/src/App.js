import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import Register from './components/register';
import Category from './components/category';
import Item from './components/items';
import Barleft from './components/bareleft';
import List from'./components/list';


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
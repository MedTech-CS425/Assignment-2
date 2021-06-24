import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Register from './components/Register';
import Category from './components/Category';
import Item from './components/Item';
import Barleft from './components/Barleft';
import List from'./components/List';
import Login from './components/Login';


function App() {
  return (
    <Router>
      <div className="App">
        <h1 className="one"> Shoppingify</h1> <h1> allow you take your shopping list whenever you go </h1>
        <div className="links3">
          <Link to="/login"> Login</Link>
        </div>
        <div className="links4">
          <Link to="/register">Register</Link>
        </div>
      
         <div className="content">
          <Switch>

            
            <Route exact path='/Navbar'>
              <Category />
            </Route>

            <Route exact path='/barleft'>
              <Barleft/>
            </Route>



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


            <Route exact path='/login'>

              <Login />
            </Route>







          </Switch>


        </div>
      </div>
    </Router>
  );
}

export default App;
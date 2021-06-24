import { Link } from 'react-router-dom';
import { useState } from 'react';
import Home from './home';

const Navbar = () => {
    

    const handleSubmit = (e => {

        e.preventDefault();
   
      
    })
    return ( 

        <nav className="navbar">
          
            <h1 className="one"> Shoppingify</h1> <h1> allow you take your shopping list whenever you go </h1>
        
          <div className="search" >
            
           <div className="links">
          <Link to="/item">Add item </Link>
          </div>

          <div className="links1">
          <Link to="/category">Add Category</Link>
          </div>
         <div className="links2">
                    <Link to="/list">Add list</Link>
        </div>
          </div>
        </nav>
     );
}
 
export default Navbar;
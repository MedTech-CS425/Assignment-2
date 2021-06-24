import { Link } from 'react-router-dom';
import { useState } from 'react';
import  Home  from  './Home' ;

const  Navbar  =  ( )  =>  {
    

    const  handleSubmit  =  ( e  =>  {

        e.preventDefault();
   
      
    } )
    return ( 

        <nav className="navbar">
          
         
        
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
     ) ;
}
 
export  default  Navbar ;
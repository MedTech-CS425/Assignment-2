import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Barleft from "./Barleft";
import { Link } from 'react-router-dom';

const Home = () => {


  
  const [search, setsearch] = useState('');
  const [items, setitems] = useState([{

    name: " ",
   // Category: " ",

  }])

  const [add, setadd]= useState('');

  useEffect(() => {
    fetch("/home").then(res => {

      if (res.ok) {
        return res.json();
      }
    }).then((data) => setitems(data));
  })




    const handleSubmit = (e => {

        e.preventDefault();
      
    })

 
    return (

      <div className="one">
       
       <Navbar/>

       <Barleft/>

      <div className="search">
          <input
            type="text"
            required
            value={search}
            onChange={(e) => setsearch(e.target.value)}
          />


          <button onClick={handleSubmit} >
            <img src="/images/search.png" alt="" className="imagesearch" />
          </button>


         



      </div>
    
       <div className="see">

          {items.filter((val) => { return val.name.toLowerCase().includes(search.toLowerCase()); })

          
          
         . map((val) =>


              <div class="card">
              <img
               src={val.image}
               alt={val.image}
               class='image'
             
             />
             <h1> {val.name} </h1>

            
             <p><button >Add to list </button></p>
             <p><button> Delete item </button></p>
            
              </div>)} 
              
          
              
               </div>



            </div>



            

       

     
      );
}
 
export default Home;
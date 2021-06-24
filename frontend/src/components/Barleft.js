import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';

const Barleft = () => {

    const history = useHistory();

    const handleSubmit = (e => {

        e.preventDefault();
 

    })

   
    return ( 


     <div className="barleft">

            <img src="/images/heart.PNG" class="rounded float-left" alt="" className="image" />

            <img src="/images/chariot.jpg" class="rounded float-left" alt="" className="image1" />

                
            <Link to ="/home"><img src="/images/items.png" class="rounded float-left" alt="" className="image2" /> </Link>
           
              
             
     
 </div>

           

                
     );
}
 
export default Barleft;
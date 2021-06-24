import axios from "axios";

import { useState } from 'react';
import { useHistory } from "react-router";







const   Category= () => {

    const [name, setname] = useState('');
    const [createdat, setcreatedat] = useState('');
    const [updatedat, setupdatedat] = useState('');
    const [user_id, setuser_id] = useState('');
    const history=useHistory();

   

    const handleSubmit = (e => {

        e.preventDefault();
        
        history.push('/home');
        const Category = { name,user_id, createdat, updatedat };

        axios.post('http://localhost:3001/category', Category)
    })


    return (

        <div className="category">

            <h2> Add category</h2>



            <form>

                <label> Name: </label>
                <input
                    type="text"
                    required
                    value={name}

                    onChange={(e) => setname(e.target.value)}
                />

                <label> user_id: </label>
                <input
                    type="text"
                    required
                    value={user_id}

                    onChange={(e) => setuser_id(e.target.value)}
                />

                <label>  Created at: </label>
                <input
                    type="text"
                    required
                    value={createdat}
                    onChange={(e) => setcreatedat(e.target.value)} />

                

                <label>  Updated at: </label>
                <input
                    type="text"
                    required
                    value={updatedat}
                    onChange={(e) => setupdatedat(e.target.value)} />

                <button onClick={handleSubmit}> Add it </button>





            </form>

        </div>


    );
}


export default Category;
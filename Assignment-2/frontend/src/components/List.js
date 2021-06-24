import { useState } from "react";

import axios from "axios";
const List = () => {


    const [name, setname] = useState('');
    const [createdat, setcreatedat] = useState('');
    const [updatedat, setupdatedat] = useState('');
    const [user_id, setuser_id] = useState('');


    const handleSubmit = (e => {

        e.preventDefault();

        const List = { name, user_id, createdat, updatedat };

        axios.post('http://localhost:3000/list', List)
    })


    return ( 

      <div className="list">
           
           
            <h2> Add list</h2>

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

                <button onClick={handleSubmit}> Add list </button>





            </form>

      </div>






     );
}
 
export default List;

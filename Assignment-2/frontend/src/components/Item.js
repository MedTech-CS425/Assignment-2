import axios from "axios";

import { useState } from 'react';

import { useHistory } from 'react-router-dom';





const Login = () => {

    const [name, setname] = useState('');
    const [category_id, setcategory_id] = useState('');
    const [note, setnote] = useState('');
    const [image, setimage] = useState('');


    const history = useHistory();

    const handleSubmit = (e => {

        e.preventDefault();

        const Item = { name, category_id,note , image};

   

        axios.post('http://localhost:3000/item', Item)
    })


    return (

        <div className="item">

            <h2> Add Item </h2>



            <form>

                <label> Name: </label>
                <input
                    type="text"
                    required
                    value={name}

                    onChange={(e) => setname(e.target.value)}
                />

                <label> category_id: </label>
                <input
                    type="text"
                    required
                    value={category_id}

                    onChange={(e) => setcategory_id(e.target.value)}
                />

                <label>  note (optional): </label>
                <input
                    type="text"
                    required
                    value={note}
                    onChange={(e) => setnote(e.target.value)} />



                <label>  Image (optional): </label>

                <input
                    type="text"
                    required
                    value={image}
                    onChange={(e) => setimage(e.target.value)} />
                

                <button onClick={handleSubmit}> Add item</button>





            </form>

        </div>


    );
}


export default Login;

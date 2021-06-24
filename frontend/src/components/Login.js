import axios from "axios";

import { useState } from 'react';

import { useHistory } from 'react-router-dom';





const Login = () => {

    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
  

    const history = useHistory();

    const handleSubmit = (e => {

        e.preventDefault();

        history.push('/home');

        const verify = {
            email: email,
            password: password
        }

        console.log(email, password)

        axios.post('http://localhost:3001/login', verify).then(function (Response) {
           
        

            console.log(Response);
        })
    })


    return (

        <div className="login">
         
            <h2> Login to our Website</h2>



            <form>

                <label>  Email: </label>
                <input
                    type="text"
                    required
                    value={email}

                    onChange={(e) => setemail(e.target.value)}
                />

                <label>  Password: </label>
                <input
                    type="text"
                    required
                    value={password}
                    onChange={(e) => setpassword(e.target.value)} />

                <button onClick={handleSubmit}> Sign in </button>




            </form>

        </div>


    );
}


export default Login;
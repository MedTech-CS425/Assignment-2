import { useState } from "react";
import axios from "axios";

const Register = () => {

    const [username, setusername] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [message, setmessage] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        const User = { username, email, password};

        axios.post('http://localhost:3000/register', User);

        setmessage(true)
    }


    return (

        <div className="register">

            <h2> Register to our Website</h2>
            <form>
                <label>  Username: </label>
                <input
                    type="text"
                    required
                    value={username}
                    onChange={(e) => setusername(e.target.value)} />

                <label>  Email: </label>
                <input
                    type="text"
                    required
                    value={email}
                    onChange={(e) => setemail(e.target.value)} />

                <label>  Password: </label>
                <input
                    type="text"
                    required
                    value={password}
                    onChange={(e) => setpassword(e.target.value)} />

             
                

                <button onClick={handleSubmit}> Sign up </button>

                {message && <h2> Welcome to our website {username}</h2>}

            </form>

        </div>

    );
}

export default Register;

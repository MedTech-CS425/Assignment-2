import "../styles/Login.css";
import { useContext,useRef } from "react";
import {AuthContext} from "../context/AuthContext";
import { CircularProgress } from "@material-ui/core";
import { callLogin } from "../authApi";

export default function Login(){
    const email = useRef();
    const password=  useRef();
    const {user, isFetching, error, dispatch}= useContext(AuthContext);
    const handleClick=(e)=>{
        //prevent refresh
        e.preventDefault();
        //console.log("clicked");
        callLogin({email: email.current.value, password:password.current.value},dispatch);
    }
    console.log(user);
    return(
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Shoppingify</h3>
                    <span className="loginDesc">
                        allows you to take your shopping list wherever you go
                    </span>
                </div>
                <div className="loginRight">
                    <form onSubmit={handleClick} className="loginBox">
                        <input type="text" placeholder="Email" required className="loginInput" ref={email} />
                        <input type="text" placeholder="Password" required className="loginInput" minLength="6" ref={password}/>
                        <button className="loginButton" type="submit" disabled={isFetching}>{isFetching?<CircularProgress color="secondary" size="30"/>:"Log In"}</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton">
                            {isFetching?<CircularProgress color="primary" size="30px"/>:"Create a New Account"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
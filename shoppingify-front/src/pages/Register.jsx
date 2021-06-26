import "../styles/Register.css";
import { useRef } from "react";
import axios from "axios";
import {useHistory} from "react-router";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password= useRef();
  const passwordAgain= useRef();
  const history = useHistory();

  const handleClick = async (e)=>{
    e.preventDefault();
    if(passwordAgain.current.value !== password.current.value){
      passwordAgain.current.setCustomValidity("Passwords don't match !");
    } else{
      const user={
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try{
        const res = await axios.post("/auth/register",user);
        history.push("/login");
      } catch(err){
        console.log(err)
      }
      
    }
  }










  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Shopingify</h3>
          <span className="loginDesc">
            allows you to take your shopping list wherever you go
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input placeholder="Username" required ref={username} className="loginInput" />
            <input placeholder="First Pet" required ref={pet} className="loginInput" />
            <input placeholder="Second Pet (optional)" className="loginInput" />
            <input placeholder="Email" ref={email} type="email" required className="loginInput" />
            <input placeholder="Password" ref={password} required  type="password" className="loginInput" minLength='6' />
            <input placeholder="Password Again" ref={passwordAgain} required type="password" className="loginInput" />
            <button className="loginButton" type="submit">Sign Up</button>
            <button className="loginRegisterButton">
              Log into Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
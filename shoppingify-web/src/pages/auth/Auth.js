import Login from "./login/Login";
import Register from "./register/Register";
import "./Auth.css";
import { useState } from "react";

function Auth(props) {
  let [isRegisterForm, setIsRegisterForm] = useState(false);
  let form = <Login setIsLoggedIn={props.setIsLoggedIn} />;
  if (isRegisterForm === true) form = <Register />;

  return (
    <>
      <div className="container">
        <div className="frame">
          <div className="nav">
            <ul className="links">
              <li
                className={isRegisterForm ? "signin-inactive" : "signin-active"}
                onClick={() => setIsRegisterForm(false)}
              >
                <a className="btn">Sign in</a>
              </li>
              <li
                className={isRegisterForm ? "signup-active" : "signup-inactive"}
                onClick={() => setIsRegisterForm(true)}
              >
                <a className="btn">Sign up </a>
              </li>
            </ul>
          </div>
          {form}
        </div>
      </div>
    </>
  );
}

export default Auth;

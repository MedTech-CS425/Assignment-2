import "./Login.css"
import AuthService from '../../../services/AuthService'
import { useState } from "react"

function Login(props) {
  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")
  let [errorMessage, setErrorMessage] = useState("")

  const login = () => {
    AuthService.login(email, password).then(res => {
      AuthService.user = res.data.user
      AuthService.token = res.data.token
      localStorage.setItem('token', AuthService.token)
      localStorage.setItem('user', AuthService.user)
      props.setIsLoggedIn(true);
    }).catch(err => {
      setErrorMessage(err.response.data.message);
    })
  }

  return (
    <>
      <div>
        <form className="form-signin" action="" method="post" name="form">
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <label for="email">Email</label>
          <input className="form-styling" type="text" name="email" placeholder="Email" value={email} onChange={($event) => setEmail($event.target.value)}/>
          
          <label for="password">Password</label>
          <input className="form-styling" type="text" name="password" placeholder="Password" value={password} onChange={($event) => setPassword($event.target.value)}/>
          
          <input type="checkbox" id="checkbox" />
          <label for="checkbox">
            <span className="ui"></span>Keep me signed in
          </label>
          
          <div className="btn-animate" onClick={login}>  
            <a className="btn-signin">Sign in</a>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;

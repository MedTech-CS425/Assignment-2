import './Register.css'
import AuthService from '../../../services/AuthService'
import { useState } from "react"

function Register(props) {

  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")
  let [confirmedPassword, setConfirmedPassword] = useState("")
  let [username, setUsername] = useState("")
  let [errorMessage, setErrorMessage] = useState("")

  const register = () => {
    if(password !== confirmedPassword) {
      setErrorMessage("Passwords don't match")
      return
    }
    AuthService.register(email, username, password).then(res => {
      console.log(res)
      setErrorMessage("")
    }).catch(err => {
      setErrorMessage(err.response.data.message)
    })
  }

  return (
    <div>
      <form className="form-signup" action="" method="post" name="form">
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <label for="fullname">Username</label>
        <input className="form-styling" type="text" name="fullname" placeholder="Username" value={username} onChange={($event) => setUsername($event.target.value)} />

        <label for="email">Email</label>
        <input className="form-styling" type="text" name="email" placeholder="Email" value={email} onChange={($event) => setEmail($event.target.value)} />
        
        <label for="password">Password</label>
        <input className="form-styling" type="text" name="password" placeholder="Password" value={password} onChange={($event) => setPassword($event.target.value)} />

        <label for="confirmpassword">Confirm password</label>
        <input className="form-styling" type="text" name="confirmpassword" placeholder="Confirm Password" value={confirmedPassword} onChange={($event) => setConfirmedPassword($event.target.value)} />
        
        <a className="btn-signup" onClick={register}>
          Sign Up
        </a>
      </form>
    </div>
  );
}

export default Register;

import axios from 'axios';

const AuthService = {
    user: {},
    token: {},
    login: function (email, password) {
        return axios.post("http://localhost:3000/login", {email, password})
    },
    
    register: function (email, userName, password) {
        console.log({email, password, userName});   
        return axios.post("http://localhost:3000/signup", {email, password, userName})
    }
}

export default AuthService

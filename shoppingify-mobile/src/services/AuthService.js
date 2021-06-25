import axios from 'axios';
import consts from '../consts'

const AuthService = {
    user: {},
    token: {},
    login: function (email, password) {
        return axios.post(consts.API + "/login", {email, password})
    },
    
    register: function (email, userName, password) { 
        return axios.post(consts.API + "/signup", {email, password, userName})
    }
}

export default AuthService

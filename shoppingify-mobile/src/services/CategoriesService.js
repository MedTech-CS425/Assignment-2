import axios from 'axios';
import AuthService from './AuthService'
import consts from '../consts'

const CategoriesService = {
    get: function() {
        return axios.get(consts.API + "/categories", {headers: {Authorization: 'Bearer ' + AuthService.token}})
    },

    create: function(category) {
        return axios.post(consts.API + "/categories", category, {headers: {Authorization: 'Bearer ' + AuthService.token}})
    }
}

export default CategoriesService

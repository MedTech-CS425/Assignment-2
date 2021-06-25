import axios from 'axios';
import AuthService from './AuthService'

const CategoriesService = {
    get: function() {
        return axios.get("http://localhost:3000/categories", {headers: {Authorization: 'Bearer ' + AuthService.token}})
    },

    create: function(category) {
        return axios.post("http://localhost:3000/categories", category, {headers: {Authorization: 'Bearer ' + AuthService.token}})
    }
}

export default CategoriesService

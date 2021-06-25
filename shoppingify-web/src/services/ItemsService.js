import axios from 'axios';
import AuthService from './AuthService'

const ItemsService = {
    get: function() {
        return axios.get("http://localhost:3000/items", {headers: {Authorization: 'Bearer ' + AuthService.token}})
    },

    create: function(item) {
        return axios.post("http://localhost:3000/items", item, {headers: {Authorization: 'Bearer ' + AuthService.token}})
    },

    delete: function(id) {
        return axios.delete("http://localhost:3000/items/" + id, {headers: {Authorization: 'Bearer ' + AuthService.token}})
    }
}

export default ItemsService

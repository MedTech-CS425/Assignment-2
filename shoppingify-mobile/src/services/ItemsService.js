import axios from 'axios';
import AuthService from './AuthService'
import consts from '../consts'

const ItemsService = {
    get: function() {
        return axios.get(consts.API + "/items", {headers: {Authorization: 'Bearer ' + AuthService.token}})
    },

    create: function(item) {
        return axios.post( consts.API + "/items", item, {headers: {Authorization: 'Bearer ' + AuthService.token}})
    },

    delete: function(id) {
        return axios.delete( consts.API + "/items/" + id, {headers: {Authorization: 'Bearer ' + AuthService.token}})
    }
}

export default ItemsService

import axios from 'axios';
import AuthService from './AuthService'
import consts from '../consts'

const ListsService = {
    get: function() {
        return axios.get(consts.API + "/lists", {headers: {Authorization: 'Bearer ' + AuthService.token}})
    },

    create: function(list) {
        return axios.post(consts.API + "/lists", list, {headers: {Authorization: 'Bearer ' + AuthService.token}})
    },

    update: function(id, list) {
        return axios.put(consts.API + "/lists/" + id, list, {headers: {Authorization: 'Bearer ' + AuthService.token}})
    },

    getItems: function(id) {
        return axios.get(consts.API + "/lists/" + id + "/items", {headers: {Authorization: 'Bearer ' + AuthService.token}})
    },

    addItem: function(listId, itemId) {
        return axios.post(consts.API + "/lists/" + listId + "/items", { list_id: listId, item_id: itemId }, {headers: {Authorization: 'Bearer ' + AuthService.token}})
    },

    removeItem: function(listId, itemId) {
        return axios.delete(consts.API + "/lists/" + listId + "/items/" + itemId, {headers: {Authorization: 'Bearer ' + AuthService.token}})
    },

    updateItemCompletion: function(listId, itemId, isCompleted) {
        return axios.patch(consts.API + "/lists/" + listId + "/items/" + itemId + "/completion", {isCompleted}, {headers: {Authorization: 'Bearer ' + AuthService.token}})
    },
}

export default ListsService

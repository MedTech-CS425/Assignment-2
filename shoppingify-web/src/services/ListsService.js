import axios from 'axios';
import AuthService from './AuthService'

const ListsService = {
    get: function() {
        return axios.get("http://localhost:3000/lists", {headers: {Authorization: 'Bearer ' + AuthService.token}})
    },

    create: function(list) {
        return axios.post("http://localhost:3000/lists", list, {headers: {Authorization: 'Bearer ' + AuthService.token}})
    },

    update: function(id, list) {
        return axios.put("http://localhost:3000/lists/" + id, list, {headers: {Authorization: 'Bearer ' + AuthService.token}})
    },

    getItems: function(id) {
        return axios.get("http://localhost:3000/lists/" + id + "/items", {headers: {Authorization: 'Bearer ' + AuthService.token}})
    },

    addItem: function(listId, itemId) {
        return axios.post("http://localhost:3000/lists/" + listId + "/items", { list_id: listId, item_id: itemId }, {headers: {Authorization: 'Bearer ' + AuthService.token}})
    },

    removeItem: function(listId, itemId) {
        return axios.delete("http://localhost:3000/lists/" + listId + "/items/" + itemId, {headers: {Authorization: 'Bearer ' + AuthService.token}})
    },

    updateItemCompletion: function(listId, itemId, isCompleted) {
        return axios.patch("http://localhost:3000/lists/" + listId + "/items/" + itemId + "/completion", {isCompleted}, {headers: {Authorization: 'Bearer ' + AuthService.token}})
    },
}

export default ListsService

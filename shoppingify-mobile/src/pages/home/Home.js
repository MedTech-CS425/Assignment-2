import React, {useEffect, useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ListsService from '../../services/ListsService.js';
import ActiveList from '../active-list/ActiveList.js';
import CreateListForm from '../create-list/CreateListForm.js';
import ItemsService from '../../services/ItemsService';
import CategoriesService from '../../services/CategoriesService.js';
import Menu from '../menu/Menu.js';
import History from '../history/History.js';

function Home(props) {

    let [categories, setCategories] = useState([])
    let [items, setItems] = useState([])
    let [page, setPage] = useState(0)

    useEffect(() => {
        CategoriesService.get().then(res => {
            setCategories(res.data)
        })
        ItemsService.get().then(res => {
            setItems(res.data)
        })
    }, [])
    let [lists, setLists] = useState([])
    let [listsChanged, setListsChanged] = useState(false)

    useEffect(() => {
        ListsService.get().then(res => {
            setLists(res.data)
        })
    }, [listsChanged])

    let activeList = lists.filter(list => list.status === 1)
    activeList = activeList ? activeList[0] : null;
    
    return <View style={styles.container}>
        {page === 0 && activeList && <ActiveList list={activeList} categories={categories} onListUpdate={() => {setListsChanged(!listsChanged)}}/> }
        {page === 0 && !activeList && <CreateListForm items={items} categories={categories} onListUpdate={() => {setListsChanged(!listsChanged)}}/>}
        {page === 1 && <History lists={lists} categories={categories} />}
        <View style={styles.menu}>
            <Menu onItemOneClick={() => setPage(0)} onItemTwoClick={() => setPage(1)}/>
        </View>
    </View>
}

const styles = StyleSheet.create({
    menu: {
        borderTopWidth: 1,
        borderTopColor: '#eaeaea',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 40,
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row'
    }
  });

export default Home
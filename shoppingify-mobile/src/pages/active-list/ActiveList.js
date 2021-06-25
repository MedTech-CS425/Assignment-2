import React, {useEffect, useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import ListsService from '../../services/ListsService.js';
import Item from './Item.js';

function ActiveList(props) {

    let [listItems, setListItems] = useState([])
    let [listItemsChanged, setListItemsChanged] = useState([])

    function completeList() {
        ListsService.update(props.list._id, {...props.list, status: 2}).then(res => {
            props.onListUpdate()
        })
    }

    function cancelList() {
        ListsService.update(props.list._id, {...props.list, status: 0}).then(res => {
            props.onListUpdate()
        })
    }

    function toggleItemCompletion(listId, itemId, isCompleted) {
        ListsService.updateItemCompletion(listId, itemId, isCompleted).then(res => {
            props.onListUpdate()
        })
    }

    useEffect(() => {
        if(!props.list) return;
        ListsService.getItems(props.list._id).then(res => {
            setListItems(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [listItemsChanged])

    const rows = props.categories.map(category => {
        const categoryItems = listItems.map((item, i) => {
            return {...item, isCompleted: props.list.itemCompletions[i] ?? false}})
            .filter(item => item.category_id === category._id)
            .map(item => <Item item={item} onCheckToggle={(selection) => toggleItemCompletion(props.list._id, item._id, selection)}/>)
        if(categoryItems.length === 0) return;

        return <View><Text>{category.name}</Text>{categoryItems}</View>
    })

    return (
        <View style={styles.container}>
            <View style={{height: (Dimensions.get('window').height - 130)}}>
                <ScrollView style={{paddingRight: 50}}>
                    <View style={{paddingTop: 30}}>
                        <Text style={styles.title}>{props.list.name}</Text>
                        {rows}
                    </View>
                </ScrollView>
            </View>
            <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.cancelBtn} onPress={cancelList}>
                <Text style={{textAlign: 'center', color: 'black', fontWeight: 'bold'}}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.completeBtn} onPress={completeList}>
                <Text style={{textAlign: 'center', color: 'white'}}>Complete</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

export default ActiveList;

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff0de',
      height: '100%',
      padding: 20,
      paddingRight: 0,
    },
    title: {
        fontSize: 30,
        marginBottom: 30,
    },
    editImage: {
        height: 5,
    },
    cancelBtn: {
        padding: 20,
        width: '47%',
        marginRight: '6%',
    },
    completeBtn: {
        padding: 20,
        width: '47%',
        backgroundColor: '#56ccf2',
        borderRadius: 10,
    },
    btnContainer: {
        display: 'flex',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 50,
        alignSelf: 'center',
        paddingRight: 50,
        paddingLeft: 50
    }
  });

import React, {useEffect, useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Dimensions} from 'react-native';
import ListsService from '../../services/ListsService.js';
import Item from '../active-list/Item.js';

function CreateListForm(props) {    

    let [name, setName] = useState("")
    const selectedItems = {}

    function toggleItemSelection(itemId, isSelected){
        selectedItems[itemId] = isSelected;
    }

    function saveList() {
        ListsService.create({name}).then(res => {
            Object.keys(selectedItems).forEach( async key => {
                if(selectedItems[key])
                    await ListsService.addItem(res.data._id, key)
            })
            props.onListUpdate()
        })
    }

    const rows = props.categories.map(category => {
        const categoryItems = props.items.filter(item => item.category_id === category._id)
            .map(item => <Item item={item} onCheckToggle={(selection) => toggleItemSelection(item._id, selection)}/>)
        if(categoryItems.length === 0) return;

        return <View><Text>{category.name}</Text>{categoryItems}</View>
    })

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Create List</Text>
            <View style={styles.content}>
            <ScrollView>
            <View style={styles.TextInputContainer}>
                <TextInput
                style={styles.TextInput}
                placeholder="Enter list name"
                placeholderTextColor="#003f5c"
                onChangeText={(name) => setName(name)}/>
            </View>
                {rows}
                </ScrollView>
                </View>
            <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.completeBtn} onPress={saveList}>
                <Text style={{textAlign: 'center', color: 'white'}}>Save</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

export default CreateListForm;

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff0de',
      height: '100%',
      padding: 50,
      paddingRight: 0,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    editImage: {
        height: 5,
    },
    completeBtn: {
        padding: 20,
        width: '80%',
        backgroundColor: '#f9a109',
        borderRadius: 10,
        alignSelf: 'center',
        marginLeft: '10%'
    },
    btnContainer: {
        display: 'flex',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 50,
        alignSelf: 'center',
        paddingTop: 10
    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        borderBottomWidth: 1,
      },
    TextInputContainer: {
        paddingBottom: 10
      },
    content: {
        height: (Dimensions.get('window').height - 200)
    }
  });

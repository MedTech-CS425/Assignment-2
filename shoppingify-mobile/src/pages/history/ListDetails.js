import React, {useEffect, useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import DateHelper from '../../helpers/DateHelper.js';
import ListsService from '../../services/ListsService.js';

function ListDetails(props) {    

    let [listItems, setListItems] = useState([])

    function printStatus(status) {
        if(status === 0) {
            return <Text style={{color: '#f08181', borderWidth: 1, borderColor: '#f08181'}}>Cancelled</Text>
        }
        return <Text style={{color: '#80d9f5', borderWidth: 1, borderColor: '#80d9f5'}}>Completed</Text>
    }

    useEffect(() => {
        if(!props.list) return;
        ListsService.getItems(props.list._id).then(res => {
            setListItems(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    const rows = props.categories.map(category => {
        const categoryItems = listItems.map((item, i) => {
            return {...item, isCompleted: props.list.itemCompletions[i] ?? false}})
            .filter(item => item.category_id === category._id)
            .map(item => {
                if(item.isCompleted)
                    return <Text style={{textDecorationLine: 'line-through'}}>{item.name}</Text>
                return <Text>{item.name}</Text>
            })
        if(categoryItems.length === 0) return;

        return <View><Text style={{fontWeight: 'bold', marginBottom: 5, marginTop: 30}}>{category.name}</Text>{categoryItems}</View>
    })

    return (
        <View style={styles.container}>
            <View style={{height: (Dimensions.get('window').height - 160)}}>
                <ScrollView style={{paddingRight: 20}}>
                    <View>
                        <Text style={styles.title}>{props.list.name}</Text>
                        <View style={{display: 'flex', flexDirection: 'row', position: 'relative'}}>
                            <Text style={styles.date}>{DateHelper.printDate(props.list.created_at)}</Text>
                            <Text style={{position: 'absolute', right: 0}}>{printStatus(props.list.status)}</Text>
                        </View>
                        {rows}
                    </View>
                </ScrollView>
            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.completeBtn} onPress={props.onBackClick}>
                    <Text style={{textAlign: 'center', color: 'white'}}>Back</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ListDetails;

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff0de',
      height: '100%',
      padding: 20,
      paddingTop: 50,
      paddingRight: 0,
    },
    title: {
        fontSize: 30,
        marginBottom: 10,
        color: 'black'
    },
    date: {
        color: 'gray'
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
        padding: 10,
        width: '50%',
        backgroundColor: 'silver',
        borderRadius: 10,
        marginLeft: '25%'
    },
    btnContainer: {
        display: 'flex',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 60,
        alignSelf: 'center',
        paddingRight: 50,
        paddingLeft: 50,
        width: '100%'
    }
  });

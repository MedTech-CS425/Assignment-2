import React, {useEffect, useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import DateHelper from '../../helpers/DateHelper'

function ListCard(props) {
    
    function printStatus(status) {
        if(status === 0) {
            return <Text style={{backgroundColor: 'white', color: '#f08181', borderWidth: 1, borderColor: '#f08181'}}>Cancelled</Text>
        }
        return <Text style={{backgroundColor: 'white', color: '#80d9f5', borderWidth: 1, borderColor: '#80d9f5'}}>Completed</Text>
    }

    return (
        <TouchableOpacity style={styles.listCard} onPress={props.onListClick}>
            <Text>{props.list.name}</Text>
            <Text style={{color: 'silver', paddingTop: 10}}>
                {DateHelper.printDate(props.list.created_at)}
            </Text>
            <Text style={{marginLeft: 10, position: 'absolute', right: 20, top: '50%'}}>{printStatus(props.list.status)}</Text>
        </TouchableOpacity>
    )
}

export default ListCard

const styles = StyleSheet.create({
    listCard: {
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 20,
        marginBottom: 20,
        display: 'flex',
    }
})

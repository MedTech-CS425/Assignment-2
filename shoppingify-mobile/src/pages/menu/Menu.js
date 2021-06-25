import React, {useEffect, useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Menu(props) {
    return (
        <>
            <TouchableOpacity style={{width: '50%', paddingTop: 10, borderRightWidth: 1, borderRightColor: '#eaeaea'}} onPress={props.onItemOneClick}>
                <Text style={{textAlign: 'center', fontWeight: 'bold', color: 'gray'}}>List</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width: '50%', paddingTop: 10,}} onPress={props.onItemTwoClick}>
                <Text style={{textAlign: 'center', fontWeight: 'bold', color: 'gray'}}>History</Text>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
})

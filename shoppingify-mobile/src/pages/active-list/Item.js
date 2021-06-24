import React, { useState } from 'react';
import { View, Text, StyleSheet, CheckBox } from 'react-native';

function Item(props){

    let [completed, setCompleted] = useState(props.item.isCompleted)

    return (<View key={props.item._id} style={styles.checkboxContainer}>
        <CheckBox style={styles.checkbox} value={completed} onValueChange={(selection) => {setCompleted(!completed); props.onCheckToggle(selection)}}/>
        <Text style={styles.label}>{props.item.name}</Text></View>)
}

export default Item

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff0de',
      height: '100%',
      padding: 50
    },
    title: {
        fontSize: 30,
        marginBottom: 30,
    },
    checkbox: {
        // alignSelf: "center",
    },
    label: {
        margin: 6,
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
      },
  });
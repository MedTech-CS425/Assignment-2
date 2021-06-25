import React, {useEffect, useState} from 'react'
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import ListCard from './ListCard';
import ListDetails from './ListDetails';

export default function History(props) {

    let [list, setList] = useState(null)

    if(!list) {
        const content = props.lists.filter(list => list.status !== 1)
        .slice()
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        .map(list => <ListCard list={list} onListClick={() => setList(list)}/>)
        return (
            <View style={styles.container}>
                <View style={{height: (Dimensions.get('window').height - 40)}}>
                <ScrollView style={{paddingRight: 20,}}>
                    <Text style={{textAlign: 'left', fontSize: 20, fontWeight: 'bold', marginBottom: 30, marginTop: 50}}>Shopping History</Text>
                    {content}
                </ScrollView>
                </View>
            </View>)
    }
    
    return <ListDetails list={list} categories={props.categories} onBackClick={() => setList(null)}/>
}


const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff0de',
      height: '100%',
      padding: 20,
      paddingRight: 0,
      paddingTop: 0
    },
  });
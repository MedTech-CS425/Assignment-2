import { useEffect, useState } from 'react';
import ListDetails from '../../components/history/list-details/ListDetails';
import ListsHistory from '../../components/history/lists-history/ListsHistory';
import ListsService from '../../services/ListsService';
import './History.css'

function History(props) {
    
    let [clickedList, setClickedList] = useState(null)
    let [listItems, setListItems] = useState([])

    useEffect(() => {
        if(!clickedList) return;
        ListsService.getItems(clickedList._id).then(res => {
            setListItems(res.data)
        })
    }, [clickedList])
    
    if(clickedList)
        return <ListDetails items={listItems} list={clickedList} categories={props.categories} onBackClick={() => setClickedList(null)}/>
    
    return <ListsHistory lists={props.lists} setClickedList={setClickedList}/>
}

export default History

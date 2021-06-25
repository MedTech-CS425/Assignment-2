import ListCard from '../list-card/ListCard';
import './ListsHistory.css'

function ListsHistory(props) {


    function onListClick(list) {
        props.setClickedList(list)
    }

    let content = <> </>;

    if(!props.lists)
        content = <div style={{textAlign: "center", color: "silver", fontSize: "20px", marginTop: "50px"}}>No Data Available</div>
    else {
        content = props.lists.filter(list => list.status !== 1)
        .slice()
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        .map(list => <ListCard list={list} onListClick={() => onListClick(list)}/>)
    }
    
    return (
        <div style={{padding: '50px', paddingTop: '10px', paddingBottom: '10px'}}>
        <h2 style={{textAlign: 'left', fontWeight: 'bold', marginBottom: '50px'}}>Shopping History</h2>
        <div> {content} </div>
        </div>
    )
}

export default ListsHistory

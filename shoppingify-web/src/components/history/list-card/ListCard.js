import DateHelper from '../../../helpers/DateHelper'
import './ListCard.css'

function ListCard(props) {
    
    function printStatus(status) {
        if(status === 0) {
            return <div class="badge badge-danger" style={{backgroundColor: 'white', color: '#f08181', border: '1px solid #f08181'}}>Cancelled</div>
        }
        return <div class="badge badge-danger" style={{backgroundColor: 'white', color: '#80d9f5', border: '1px solid #80d9f5'}}>Completed</div>
    }

    return (
        <div className="list-card" onClick={props.onListClick}>
            {props.list.name}
            
            <div style={{float: "right"}}><i style={{color: '#f9a109'}} class="fas fa-chevron-right"></i></div>
            <div style={{float: "right", marginRight: '15px'}}>{printStatus(props.list.status)}</div>
            <div style={{float: "right", marginRight: '30px', color: 'silver'}}>
                <i style={{fontSize: '20px', marginRight: '5px'}} class="fas fa-calendar-alt"></i> {DateHelper.printDate(props.list.created_at)}
            </div>
        </div>
    )
}

export default ListCard

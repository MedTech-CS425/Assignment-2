import DateHelper from '../../../helpers/DateHelper'
import './ListDetails.css'

function ListDetails(props) {

    const rows = props.categories.map(category => {
        const categoryItems = props.items.filter(item => item.category_id === category._id).map(item => (
          <div className="col-3" key={item.name}>
            <div className="item-card-container">
              <div className="item-card">
                  <div className="item-card-content">{item.name}</div>
              </div>
            </div>
          </div>
        ))
        if(categoryItems.length === 0) return <></>
        return <><div className="col-12 items-list-category" key={category.name}><h5>{category.name}</h5></div> {categoryItems}</>
    })

    return (
        <>
            <div style={{cursor: 'pointer', color: '#f9a109'}} onClick={props.onBackClick}> <i class="fas fa-long-arrow-alt-left"></i> back</div>
            <h2 style={{textAlign: 'left', marginTop: '30px', fontWeight: 'bold'}}>{props.list.name}</h2>
            <div style={{textAlign: 'left', marginTop: '10px', color: 'silver', fontSize: '16px'}}><i style={{fontSize: '20px', marginRight: '5px'}} class="fas fa-calendar-alt"></i> {DateHelper.printDate(props.list.created_at)}</div>

            <div className="row"> {rows} </div>
        </>
    )
}

export default ListDetails

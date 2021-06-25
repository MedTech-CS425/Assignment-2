import ItemsService from '../../../services/ItemsService'
import ListsService from '../../../services/ListsService'
import './ItemDetails.css'

function ItemDetails(props){

    function addItemToActiveList(){
        ListsService.addItem(props.activeList._id, props.item._id).then(res => {
            props.onListItemsUpdate()
          })
    }

    function deleteItem(){
        ItemsService.delete(props.item._id).then(res => {
            props.onItemDelete()
          })
    }

    const category = props.categories.filter(category => category._id === props.item.category_id)[0]

    return (
        <div className="item-details" style={{padding: '20px'}}>
            <div style={{color: '#f9a109', cursor: 'pointer'}} onClick={props.onBackClick}> <i class="fas fa-arrow-left"></i> back</div>
            <div className="item-details-image">
                {props.item.image && <img src={props.item.image} alt={"image of " + props.item.name}/>}
                {!props.item.image && <i class="far fa-image"></i>}
            </div>
            <div className="item-details-title">name</div>
            <div>{props.item.name}</div>

            <div className="item-details-title">category</div>
            <div>{category.name}</div>

            
            {props.item.note && <> <div className="item-details-title">note</div> <div>{props.item.note}</div> </>}


            <div style={{float: 'right', marginTop: 'calc(100% - 50px'}}>
            <button type="button" className="btn btn-secondary add-item-form-cancel" onClick={deleteItem}>delete</button>
            <button type="button" className="btn btn-success add-item-form-save" onClick={addItemToActiveList}>Add to list</button>
            </div>
        </div>
    )
}

export default ItemDetails

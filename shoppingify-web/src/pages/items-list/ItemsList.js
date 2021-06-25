import ListsService from '../../services/ListsService'
import './ItemsList.css'

function ItemsList(props) {

  function addItemToActiveList(itemId) {
    ListsService.addItem(props.activeList._id, itemId).then(res => {
      props.onListItemsUpdate()
    })
  }

    const rows = props.categories.map(category => {
        const categoryItems = props.items.filter(item => item.category_id === category._id).map(item => (
          <div className="col-3" key={item.name}>
            <div className="item-card-container">
              <div className="item-card">
                  <div className="item-card-content" onClick={() => props.onItemClick(item)}>{item.name}</div>
                  <div className="item-add-btn" onClick={() => addItemToActiveList(item._id)}><i class="fas fa-plus"></i></div>
              </div>
            </div>
          </div>
        ))
        if(categoryItems.length === 0) return <></>
        return <><div className="col-12 items-list-category" key={category.name}><h5>{category.name}</h5></div> {categoryItems}</>
    })

    return (<div style={{overflowY: 'auto', overflowX: 'hidden'}}>
        <span style={{fontSize: "25px", width: "60%", display: "inline-block", marginBottom: '50px'}}><span style={{color: "#f9a109"}}>Shoppingify</span> allows you to take your shopping list wherever you go</span>
        
        <div class="form-group" style={{float: 'right', paddingLeft: '50px'}}>
        <div class="input-group mb-2">
        <div class="input-group-prepend">
          <div class="input-group-text" style={{backgroundColor: 'white'}}><i class="fas fa-search"></i></div>
        </div>
        <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Search Item"/>
      </div>
      </div>

      <div className="row"> {rows} </div>
    </div>)
}

export default ItemsList
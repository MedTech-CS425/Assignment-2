import './ActiveList.css'
import {useEffect, useState} from 'react'
import ListsService from '../../../services/ListsService'
import ListNameForm from '../list-name-form/ListNameForm'

function ActiveList(props){    

    let [isInEditMode, setIsInEditMode] = useState(false)

    function createList(name) {
        ListsService.create({name}).then(res => {
            props.onListsChanged()
            setIsInEditMode(false)
        });
    }

    function updateListName(name) {
        ListsService.update(props.list._id, {...props.list, name}).then(res => {
            props.onListsChanged()
            setIsInEditMode(false)
        })
    }

    function removeItemFromActiveList(itemId){
        ListsService.removeItem(props.list._id, itemId).then(res => {
            props.onListItemsUpdate()
          })
    }

    function completeList() {
        ListsService.update(props.list._id, {...props.list, status: 2}).then(res => {
            props.onListsChanged()
        })
    }

    function cancelList() {
        ListsService.update(props.list._id, {...props.list, status: 0}).then(res => {
            props.onListsChanged()
        })
    }

    function toggleItemCompletion(listId, itemId, isCompleted){
        ListsService.updateItemCompletion(listId, itemId, isCompleted).then(res => {
            props.onListsChanged()
        })
    }

    let content;
    if(!props.list)
        content = <>
                    <div style={{fontSize: "20px", textAlign: "center", marginTop: '70%'}}>Not items</div>
                    <ListNameForm onSave={createList} />
                </>
    else {
        const rows = props.categories.map(category => {
            const categoryItems = props.listItems.map((item, i) => { return {...item, isCompleted: props.list.itemCompletions[i] ?? false}}).filter(item => item.category_id === category._id).map((item) => (
            <div className="active-list-item-card-container" key={item.name}>
                <label className="form-check-label">
                    { !isInEditMode && <input className="form-check-input" type="checkbox" checked={item.isCompleted}
                    onChange={($event) => toggleItemCompletion(props.list._id, item._id, $event.target.checked)}/>}
                    <div className="active-list-item-card">{item.name}</div>
                    { isInEditMode && <div className="delete-item-from-list" onClick={() => removeItemFromActiveList(item._id)}><i className="far fa-trash-alt"></i></div>}
                </label>
            </div>
            ))
            if(categoryItems.length === 0) return <></>
            return <><div className="active-list-items-list-category" key={category.name}>{category.name}</div> {categoryItems}</>
        })

        content = (<>
        <div style={{fontSize: "20px", marginTop: '15%', padding: '30px'}}>
            <h3>
                {props.list.name}
                <i class="fas fa-pen" style={{float: 'right', cursor: 'pointer'}} onClick={() => setIsInEditMode(!isInEditMode)}></i>
            </h3>

            {rows}
        </div>
        {isInEditMode && <ListNameForm defaultValue={props.list.name} onSave={updateListName} />}
        {!isInEditMode && (<div style={{backgroundColor: 'white', position: 'absolute', 'bottom': '0px', height: '140px', width: '100%', paddingTop: '30px'}}>
            <div style={{marginLeft: 'calc(50% - 128px)'}}>
                <button type="button" className="btn btn-secondary add-item-form-cancel" data-toggle="modal" data-target="#exampleModal">Cancel</button>
                <button type="button" className="btn btn-info complete-list-btn" onClick={completeList}>Complete</button>
            </div>
        </div>)}
    </>)
    }

    const modal = <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-body">
          Are you sure you want to cancel this list ?
          <div style={{marginTop: '30px'}}>
          <div style={{float: 'right'}}>
            <button type="button" className="btn btn-secondary add-item-form-cancel" data-dismiss="modal">No</button>
            <button type="button" className="btn btn-danger complete-list-btn" data-dismiss="modal" onClick={cancelList}>Yes</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>

    return (
        <div className="list">
            <button className="btn btn-primary new-item-btn" style={{marginLeft: "50%", transform: "translateX(-50%)", marginTop: "15%"}} onClick={props.onAddItemClick}>Add item</button>
            {content}
            {modal}
        </div>
    )
}

export default ActiveList

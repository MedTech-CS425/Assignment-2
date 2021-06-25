import {useState} from 'react'
import ItemsService from '../../../services/ItemsService'
import CategoriesService from '../../../services/CategoriesService'
import './AddItemForm.css'

function AddItemForm(props){

    let [categoryName, setCategoryName] = useState("")
    let [name, setName] = useState("")
    let [note, setNote] = useState("")
    let [image, setImage] = useState("")

    async function createItem() {
        let category = props.categories.filter(category => category.name === categoryName)
        if(category.length > 0)
            category = category[0]
        else
            category = (await CategoriesService.create({name: categoryName})).data
        ItemsService.create({name, image, note, category_id: category._id})
        props.onSave()
        setCategoryName("")
        setName("")
        setNote("")
        setImage("")
    }

    const categoriesSelectOptions = props.categories.map(category => <option value={category.name} />)

    return <div style={{padding: '20px', backgroundColor: '#fafafe', height: '100%'}}>
        <h3 style={{color: 'black', textAlign: 'left', marginBottom: '30px', marginTop: '35px'}}>Add a new item</h3>

        <form className="add-item-form">
        <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name" placeholder="Enter a name" value={name} onChange={($event) => setName($event.target.value)}/>
        </div>
        <div class="form-group">
            <label for="note">Note (optional)</label>
            <textarea type="text" class="form-control" id="note" placeholder="Enter a note" value={note} onChange={($event) => setNote($event.target.value)}></textarea>
        </div>
        <div class="form-group">
            <label for="image">Image (optional)</label>
            <input type="text" class="form-control" id="image" placeholder="Enter a url" value={image} onChange={($event) => setImage($event.target.value)}/>
        </div>
        <div class="form-group">
            <label for="category">Category</label>
            <input type="text" class="form-control" id="category" placeholder="Enter a category" list="categories" value={categoryName} onChange={($event) => setCategoryName($event.target.value)}/>

            <datalist id="categories">
                {categoriesSelectOptions}
            </datalist>
        </div>
        </form>

        <div style={{float: 'right'}}>
        <button type="button" className="btn btn-secondary add-item-form-cancel" onClick={props.onCancel}>Cancel</button>
        <button type="button" className="btn btn-success add-item-form-save" onClick={createItem}>Save</button>
        </div>
    </div>
}

export default AddItemForm

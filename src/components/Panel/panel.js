import Basket from "../basket/Basket";
import AddItem from "../addItem/addItem";
import { useState } from "react";
import './panel.css'


const Panel=(props)=> {
    let bucket = props.bucket
    let categories = props.categories
    const [addNew, setAddNew] = useState(false);
    const addNewItem=()=> {
        setAddNew(true);
    }
    

    return (
        <div >
            {addNew ? <AddItem categories={categories} cancel={() => setAddNew(false)} /> : <Basket bucket={bucket} addNewItem={addNewItem} />}
        </div>
    )
}

export default Panel;
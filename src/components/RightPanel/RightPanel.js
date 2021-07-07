import Basket from "../basket/Basket";
import AddItem from "../addItem/addItem";
import { useState } from "react";
import './panel.css'
import itemsList from "../ItemsList/ItemsList";

function RightPannel(props) {
    let basketList = props.basketList
    let categories = props.categories
    let empty = props.empty
    let [addNew, setAddNew] = useState(false);
    //a//

    function addNewItem() {
        setAddNew(true);
    }

    return (
        <div >
            {addNew ? <AddItem categories={categories} cancel={() => setAddNew(false)} /> : <Basket basketList={basketList} addNewItem={addNewItem} empty={empty} />}
        </div>
    )
}

export default RightPannel;

 

import Basket from "../basket/Basket";
import AddItem from "../addItem/addItem";
import { useState } from "react";
import './pannel.css'
import itemsList from "../itemsList/ItemsList";

function RightPannel(props) {
    let basketList = props.basketList
    let categories = props.categories
    let [addNew, setAddNew] = useState(false);
    function addNewItem() {
        setAddNew(true);
    }
    console.log(categories);

    return (
        <div >
            {addNew ? <AddItem categories={categories} cancel={() => setAddNew(false)} /> : <Basket basketList={basketList} addNewItem={addNewItem} />}
        </div>
    )
}

export default RightPannel;
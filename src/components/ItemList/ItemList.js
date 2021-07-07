import { useState } from 'react';
import './ItemsList.css'
function ItemsList(props) {
    let items = props.items
    let [searchValue, setSearchValue] = useState('Search');

    function addToBucket(item) {
        props.addToBucket(item);
    }
    return (
        <div className="wrapper">

            <div className="header">
                <h2><span>Shoppingify</span> allows you take your shopping list whenever you go</h2>
                <div className="search">
                    <span className="material-icons">search</span>
                    <input value={searchValue} onClick={() => { setSearchValue(' ') }} onChange={(e) => { setSearchValue(e.target.value) }} ></input>
                </div>
            </div>
            {
                items.map((element) => {
                    return <div className="categoryWrapper" key={element.category}>

                        <h1>{element.category}</h1>

                        <div className="itemsWrapper">
                            {
                                element.elements.map((item) => {
                                    return (
                                        <button className="itemBtn" onClick={() => { addToBucket(item) }} key={item.id}>
                                            <h2>{item.label}</h2>
                                            <span className="material-icons"> add</span>
                                        </button>
                                    )

                                })
                            }
                        </div>


                    </div>
                })

            }
        </div>
    )

}


export default ItemsList; 

import './Basket.css'

import { useState } from 'react'
const Basket=(props)=> {
    let list = props.bucket
    let [inputLabel, setInputLabel] = useState("Enter Name")

    const addNewItem=()=> {
        props.addNewItem();
    }
    const handleInputChange=()=> {
        setInputLabel(document.getElementById("input").value);
    }
    return (
        <div className="basketWrapper">
            <div className="addItemWrapper">
                
                <div>
                    <h2>Couldn't Find What You Need?!</h2>
                    <button onClick={addNewItem}>Add Item</button>
                </div>
            </div>

            <div className="labelWrapper">
                <h2>Shopping List</h2>
                <span className="material-icons">edit</span>
            </div>

            <div className="ItemsWrapper">
                {
                    list.map((element) => {
                        return (
                            <div className="itemWrapper" key={element.category}>
                                <h1>{element.category}</h1>
                                {
                                    element.items.map((item) => {
                                        return (
                                            <div className="infoWrapper" key={item.label}>
                                                <h2>{item.label}</h2>
                                                <h2>{item.q}</h2>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }

                <div className="submitBtn">
                    <div className="inputWrapper">
                        <input id="input" label={inputLabel} onChange={handleInputChange} ></input>
                        <button>Save</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Basket
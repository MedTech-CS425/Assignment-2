import './Basket.css'
import { ReactComponent as BottleLogo } from '../../assets/source.svg'
import { useState } from 'react'
function Basket(props) {
    let list = props.basketList
    let [inputLabel, setInputLabel] = useState("Enter A Name")

    function addNewItem() {
        props.addNewItem();
    }
    function handleInputChange() {
        setInputLabel(document.getElementById("input").value)
    }
    return (
        <div className="basketWrapper">
            <div className="addItemWrapper">
                <BottleLogo />
                <div>
                    <h2>Didn't Find what you need ?</h2>
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
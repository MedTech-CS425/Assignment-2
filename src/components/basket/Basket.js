import ClipLoader from "react-spinners/ClipLoader";

import './Basket.css'
import { ReactComponent as BottleLogo } from '../../assets/source.svg'
import { ReactComponent as NoItemLogo } from '../../assets/no_item.svg'
import { useState } from 'react'
import axios from 'axios'
function Basket(props) {

    let list = props.basketList
    console.log(list);
    let [inputLabel, setInputLabel] = useState("Enter A Name")
    let [empty, setEmpty] = useState(props.empty);

    function addNewItem() {
        props.addNewItem();
    }

    if (empty !== props.empty) {
        setEmpty(props.empty);
    }

    function saveBasket() {
        setEmpty(true);

        axios.post('http://localhost:8000/lists/lists', {
            name: inputLabel,
            items: list.map(element => element.items)
        }, {
            headers: {
                'Authorization': "bearerToken eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjE5ODg1MjU2fQ.LxUB938hxe-m5IXZsTsjiUAa9g1oiLJ6mfryPkRbid8",
                'Content-Type': 'application/json'
            },
        }).then(res => {
            console.log(res)
        })

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



            <div className="ItemsWrapper">
                {empty ?
                    <div>
                        <label className="emptyLabel">No items</label>
                        <NoItemLogo />
                    </div>
                    :
                    <div>
                        <div className="labelWrapper">
                            <h2>Shopping List</h2>
                            <span className="material-icons">edit</span>
                        </div>
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
                    </div>
                }

                <div className="submitBtn">
                    <div className="inputWrapper">
                        <input id="input" value={inputLabel} onClick={() => setInputLabel('')} onChange={(e) => { setInputLabel(e.target.value) }} ></input>
                        <button onClick={saveBasket}>Save</button>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default Basket



import { useEffect, useState } from 'react';
import axios from 'axios';
import './history.css'
import OneList from './list/list';
/* eslint-disable */
function HistoryPannel(props) {
    let [displayOne, setDisplayOne] = useState([]);
    let theList;
    let [list, setList] = useState([])
    useEffect(async () => {
        console.log(process.env.BACKEND_BASE)
        const result = await axios.get(
            'http://localhost:8000/items/history'
            , {
                headers: {
                    'Authorization': "bearerToken eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjE5ODg1MjU2fQ.LxUB938hxe-m5IXZsTsjiUAa9g1oiLJ6mfryPkRbid8"
                }
            }).then(res => {
                setList(res.data);
                console.log(res.data);
            });

    }, [])

    function displayOneList(element) {
        setDisplayOne(element);
    }


    return (
        <div className="pannelWrapper">
            {
                (displayOne.length == 0) ?
                    <div>
                        <h1 className="title">Shopping History</h1>
                        {
                            list.map(element => (
                                <div className="listWrapper" onClick={() => { displayOneList(element) }}>
                                    <h2>{element.list}</h2>
                                    <div className="leftSection">
                                        <span class="material-icons">event</span>
                                        <h3>{element.list_updated_at}</h3>
                                        <label>Completed</label>
                                        <span style={{ color: '#F9A109' }} class="material-icons">chevron_right</span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    :
                    <OneList list={displayOne} back={() => { setDisplayOne([]) }} />

            }
        </div >

    )
}

export default HistoryPannel;
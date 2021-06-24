

import './App.css';
import ItemsList from './components/itemsList/ItemsList'
import SideNav from './components/sideNav/SideNav'
import RightPannel from './components/RightPannel/pannel'
import { useState, useEffect } from 'react'
import axios from 'axios';
import HistoryPannel from './components/history/history'
require('dotenv').config();

/* eslint-disable */
function App() {
  let [emptyBasket, setEmptyBasket] = useState(true);
  let [basketList, setBasketList] = useState([])
  let [mainItems, setMainItems] = useState([
    { category: "No Elements", elements: [{ id: 1, label: "" }, { id: 2, label: "" }, { id: 3, label: "" }] },
  ])
  let [mainPannel, setMainPannel] = useState('ITEMS_LIST');
  useEffect(async () => {
    console.log(process.env.BACKEND_BASE)
    const result = await axios.get(
      'http://localhost:8000/items/suggestions'
      , {
        headers: {
          'Authorization': "bearerToken eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjE5ODg1MjU2fQ.LxUB938hxe-m5IXZsTsjiUAa9g1oiLJ6mfryPkRbid8"
        }
      }).then(res => {
        setMainItems(res.data);
      });

  }, [])

  function addToBucket(newItem) {
    setEmptyBasket(false);
    let data = [...basketList];
    let categoryIndex = data.findIndex((element) => element.category === newItem.category);
    if (categoryIndex != -1) {
      let itemIndex = data[categoryIndex].items.findIndex((item) => item.label === newItem.label);
      if (itemIndex != -1) {
        data[categoryIndex].items[itemIndex].q++;
      } else {
        data[categoryIndex].items.push({ ...newItem, q: 1 });
      }
    } else {
      data.push({ category: newItem.category, items: [{ ...newItem, q: 1 }] });
    }
    console.log(data);
    setBasketList(data);
  }
  let categories = mainItems.map(element => element.category)
  function toggleMainPage(pannel) {
    setMainPannel(pannel);
  }
  return (
    <div className="App">
      <SideNav toggle={toggleMainPage} />
      {
        mainPannel == 'ITEMS_LIST' ? <ItemsList items={mainItems} addToBucket={addToBucket} /> : <br></br>
      }
      {
        mainPannel == 'HISTORY' ? <HistoryPannel /> : <br></br>
      }
      {
        mainPannel == 'STATS' ? <HistoryPannel /> : <br></br>
      }
      <RightPannel basketList={basketList} categories={categories} empty={emptyBasket} />
    </div>
  );
}

export default App;

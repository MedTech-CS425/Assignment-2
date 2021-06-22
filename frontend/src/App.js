import './App.css';
import ItemsList from './components/itemsList/ItemsList'
import SideNav from './components/sideNav/SideNav'
import RightPannel from './components/RightPannel/pannel'
import { useState, useEffect } from 'react'
import env from "react-dotenv";
import axios from 'axios';
require('dotenv').config();

/* eslint-disable */
function App() {
  let [emptyBasket, setEmptyBasket] = useState(true);
  let [basketList, setBasketList] = useState([])
  let [mainItems, setMainItems] = useState([
    { category: "Fish", elements: [{ id: 1, label: "Fish1" }, { id: 2, label: "Fish2" }, { id: 3, label: "Fish3" }] },
    { category: "Meat", elements: [{ id: 1, label: "Very Long Named Meat Shit" }, { id: 2, label: "Meat 2" }, { id: 3, label: "Meat 3" }, { id: 4, label: "meat5" }, { id: 5, label: "Meat6" }] },
    { category: "Fruits", elements: [{ id: 1, label: "Avocado" }, { id: 2, label: "Apple" }, { id: 3, label: "WaterMelon" }] }
  ])
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
        data[categoryIndex].items.push({ ...newItem, q: 0 });
      }
    } else {
      data.push({ category: newItem.category, items: [{ ...newItem, q: 0 }] });
    }
    setBasketList(data);
  }
  let categories = mainItems.map(element => element.category)
  return (
    <div className="App">
      <SideNav />
      <ItemsList items={mainItems} addToBucket={addToBucket} />
      <RightPannel basketList={basketList} categories={categories} empty={emptyBasket} />
    </div>
  );
}

export default App;

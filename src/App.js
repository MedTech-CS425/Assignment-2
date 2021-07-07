import './App.css';
import ItemsList from './components/ItemsList/ItemsList'
import SideNav from './components/SideNav/SideNav'
import RightPanel from './components/RightPanel/RightPanel'
import { useState, useEffect } from 'react'
import axios from 'axios';

function App() {
  let [emptyBasket, setEmptyBasket] = useState(true);
  let [basketList, setBasketList] = useState([])
  let [mainItems, setMainItems] = useState([
    { category: "No Elements", elements: [{ id: 1, label: "" }, { id: 2, label: "" }, { id: 3, label: "" }] },
  ])
  let [mainPanel, setMainPanel] = useState('ITEMS_LIST');
  useEffect(async () => {
    const result = await axios.get(
      'http://localhost:1234/Items'
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
    let categoryIndex = data.findIndex((element) => element.Category === newItem.Category);
    if (categoryIndex != -1) {
      let itemIndex = data[categoryIndex].Items.findIndex((item) => Item.label === newItem.label);
      if (itemIndex != -1) {
        data[categoryIndex].Items[itemIndex].q++;
      } else {
        data[categoryIndex].Items.push({ ...newItem, q: 1 });
      }
    } else {
      data.push({ Category: newItem.Category, Items: [{ ...newItem, q: 1 }] });
    }
    console.log(data);
    setBasketList(data);
  }
  let categories = mainItems.map(element => element.Category)
  function toggleMainPage(panel) {
    setMainPannel(panel);
  }
  return (
    <div className="App">
      <SideNav toggle={toggleMainPage} />
      {
        mainPanel == 'ITEMS_LIST' ? <ItemsList items={mainItems} addToBucket={addToBucket} /> : <br></br>
      }
      <RightPanel basketList={basketList} categories={categories} empty={emptyBasket} />
    </div>
  );
}

export default App; 

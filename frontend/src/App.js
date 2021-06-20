import './App.css';
import ItemsList from './components/itemsList/ItemsList'
import SideNav from './components/sideNav/SideNav'
import RightPannel from './components/RightPannel/pannel'
import { useState } from 'react'
function App() {
  let [basketList, setBasketList] = useState([
    {
      category: "Fruits",
      items: [
        { label: "Apple", q: 3 },
        { label: "Straw", q: 1 },
        { label: "Melon", q: 3 },
      ]
    },
    {
      category: "Meat",
      items: [
        { label: "Meat 2", q: 3 },
        { label: "Meat 3", q: 2 },
      ]
    }
  ])
  let [mainItems, setMainItems] = useState([
    { category: "Fish", elements: [{ id: 1, label: "Fish1" }, { id: 2, label: "Fish2" }, { id: 3, label: "Fish3" }] },
    { category: "Meat", elements: [{ id: 1, label: "Very Long Named Meat Shit" }, { id: 2, label: "Meat 2" }, { id: 3, label: "Meat 3" }, { id: 4, label: "meat5" }, { id: 5, label: "Meat6" }] },
    { category: "Fruits", elements: [{ id: 1, label: "Avocado" }, { id: 2, label: "Apple" }, { id: 3, label: "WaterMelon" }] }
  ])

  function addToBucket(newCategory, newItem) {
    let data = [...basketList];
    // add new category
    //add new item to specofoc category
    // add q of existing item 
    let categoryIndex = data.findIndex((element) => element.category === newCategory);
    if (categoryIndex != -1) {
      let itemIndex = data[categoryIndex].items.findIndex((item) => item.label === newItem.label);
      if (itemIndex != -1) {
        data[categoryIndex].items[itemIndex].q++;
      } else {
        data[categoryIndex].items.push({ label: newItem.label, q: 0 });
      }
    } else {
      data.push({ category: newCategory, items: [{ label: newItem.label, q: 0 }] });
    }
    setBasketList(data);
  }
  let categories = mainItems.map(element => element.category)
  return (
    <div className="App">
      <SideNav />
      <ItemsList items={mainItems} addToBucket={addToBucket} />
      <RightPannel basketList={basketList} categories={categories} />
    </div>
  );
}

export default App;

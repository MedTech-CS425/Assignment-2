import './App.css';
import ItemsList from './components/itemsList/ItemsList'
import SideNav from './components/sideNav/SideNav'
import Basket from './components/basket/Basket'
import { useState } from 'react'
function App() {

  let [bucketList, setBucketList] = useState([
    {
      category: "Fruits",
      items: [
        { label: "Apple", q: 3 },
        { label: "Straw", q: 1 },
        { label: "Banna", q: 2 },
        { label: "Melon", q: 3 },
      ]
    },
    {
      category: "Meat",
      items: [
        { label: "Meat 1", q: 3 },
        { label: "Meat 2", q: 1 },
        { label: "Meat 3", q: 2 },
        { label: "Meat 4", q: 3 },
      ]
    }
  ])
  let [mainItems, setMainItems] = useState([
    { name: "Fish", elements: [{ id: 1, label: "Fish1" }, { id: 2, label: "Fish2" }, { id: 3, label: "Fish3" }] },
    { name: "Meat", elements: [{ id: 1, label: "Very Long Named Meat Shit" }, { id: 2, label: "Meat 2" }, { id: 3, label: "Meat 3" }, { id: 4, label: "meat5" }, { id: 5, label: "Meat6" }] },
    { name: "Fruits", elements: [{ id: 1, label: "Avocado" }, { id: 2, label: "Apple" }, { id: 3, label: "WaterMelon" }] }
  ])

  function addToBucket(category, item) {
    let data = [...bucketList];
    let newCategory = true;
    for (let element of data) {
      let found = false;
      if (element.category === category) {
        newCategory = false
        for (let e of element.items) {
          if (e.label === item.label) {
            found = true
            e.q++
          }
        }
        if (!found) element.items.push({ label: item.label, q: 0 });
      }

    }
    if (newCategory) data.push({ category: category, items: [{ label: item.label, q: 0 }] })
    setBucketList(data);

  }

  return (
    <div className="App">
      <SideNav />
      <ItemsList items={mainItems} addToBucket={addToBucket} />
      <Basket list={bucketList} />
    </div>
  );
}

export default App;

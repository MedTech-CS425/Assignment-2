import './App.css';
import SideNav from './components/sideNav/SideNav'
import Items from './components/Items/items.js'
import Panel from './components/Panel/panel'
import { useState } from 'react'
export default function App() {
  const [bucket, setBucket] = useState([
    {
      category: "Fruits",
      items: [
        { label: "kiwi", q: 1 },
        { label: "WaterMelon", q: 1 }
        
      ]
    },
    {
      category: "Fish",
      items: [
        { label: "tuna ", q: 1 }
       
      ]
    }
  ])
  const [mainItems,setMainItems] = useState([
    { category: "Fish", elements: [{ id: 1, label: "tuna" }, { id: 2, label: "carp" }, { id: 3, label: "sardin" }] },
    { category: "Meat", elements: [{ id: 1, label: "chicken" }, { id: 2, label: "beef" }, { id: 3, label: "pork" }, { id: 4, label: "turkey" }] },
    { category: "Fruits", elements: [{ id: 1, label: "Avocado" }, { id: 2, label: "kiwi" }, { id: 3, label: "WaterMelon" }] }
  ])

  const addToBucket=(category, newItem)=> {
    let data = [...bucket];
  
    let categoryIndex = data.findIndex((element) => element.category === category);
    if (categoryIndex !== -1) {
      let itemIndex = data[categoryIndex].items.findIndex((item) => item.label === newItem.label);
      if (itemIndex !== -1) {
        data[categoryIndex].items[itemIndex].q++;
      } else {
        data[categoryIndex].items.push({ label: newItem.label, q: 1 });
      }
    } else {
      data.push({ category: category, items: [{ label: newItem.label, q: 1 }] });
    }
    setBucket(data);
  }
  const categories = mainItems.map(element => element.category)
  return (
    <div className="App">
      <SideNav />
      <Items items={mainItems} addToBucket={addToBucket} />
      <Panel bucket={bucket} categories={categories} />
    </div>
  );
}



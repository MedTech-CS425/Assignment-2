import logo from './logo.svg';
import CartItem from './components/CartItem';
import Navbar from './components/Navbar';
import { useState } from 'react';
import './App.css';
import Leftbar from './components/Leftbar';

function App() {
  const [list,setList] = useState([
    {category: "Meat & Fish", items: [
      {
        id:1,
        name:"Avocado",
        category:"Fruits & Vegetables",
        note:"Avocado is healthy. It is a fruit.",
        image:"",
    },
    {
        id:2,
        name:"Banana",
        category:"Fruits & Vegetables",
        note:"Yellow fruit.",
        image:"",
    },
    {
        id:3,
        name:"Bunch of carrots 5pcs",
        category:"Fruits & Vegetables",
        note:"Contains vitamin A.",
        image:"",
    }
    ]},
    {category: "Beverages", items: [
      {
        id:4,
        name:"Chicken",
        category:"Meat & Fish",
        note:"Chicken is the best meat out there.",
        image:"",
    },
    {
        id:5,
        name:"Lamb 450g",
        category:"Meat & Fish",
        note:"Ideal for Coucous and other traditional dishes.",
        image:"",
    },
    {
        id:6,
        name:"Beef 450g",
        category:"Meat & Fish",
        note:"Perfect for steaks and so on.",
        image:"",
    },
    {
        id:7,
        name:"Fish 200g",
        category:"Meat & Fish",
        note:"Could make sushi.",
        image:"",
    }
    ]},
    {category: "Fruits", items: [
      {
        id:8,
        name:"Coca Cola",
        category:"Beverages",
        note:"It's coca-cola.",
        image:"",
    },
    {
        id:9,
        name:"Lemonade",
        category:"Beverages",
        note:"When life gives you lemons make a lemonade.",
        image:"",
    },
    {
        id:10,
        name:"Boga",
        category:"Beverages",
        note:"Tunisian Coca Cola.",
        image:"",
    }
    ]}
  ]);
  return (
    <div className="App">
      <Leftbar/>
      <Navbar/>
      <CartItem list = {list}/>
    </div>
  );
}

export default App;

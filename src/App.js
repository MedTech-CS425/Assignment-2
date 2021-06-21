//import logo from './logo.svg';
import './App.css';
import Items from './items/items.jsx'
import AddItem from './items/addItem'
import React, { useState } from "react";
import SideList from './sideList/sideList';
import { ContextClickOnItem } from "./ItemClickContext";
function SideListView(props){
  return(
  <div key="sideListViewGroupConditional">
   
    <SideList  category="Fruits" handleChildEdit={props.handleChildEdit}
     key="list" list={props.sideList}  setViewToAddItem={props.setViewToAddItem}/>    
    <button  onClick={props.setViewToAddItem}>Add an Item Instead</button>
  </div>)
}


function manageList(oldState,category,name){
  //recieves list and item to add
  //returns new list
  //adds item if item doesnt exist
  //incr quantity if item exists
  let newList=[...oldState];
 const index=newList.findIndex((elem)=>elem.category===category);
 if(index===-1){
   newList=[...newList,{name,qt:1}];
   throw new Error('unexistant category');
 }else{
   let elemsArray=[...newList[index].elems]
   let i=elemsArray.findIndex((item)=>item.name===name);
    if(elemsArray.length===0||i===-1){
      elemsArray.push({name:name,qt:1});
    }else{
      elemsArray[i].qt=parseInt(elemsArray[i].qt)+1
      //if i dont do this parseInt it treats like a string lol its weird
    }
    newList[index].elems=elemsArray;

 }
 return newList;
}

function App() {
  function setViewToAddItem() {
  setCurView("addItem");
}
function handleChildEdit(arrayOfChanges){
  setSideList(arrayOfChanges);
  //[{name:"apple",qt:1,category:"fruits"}]
  //[{category:"fruits",elems:[{name,qt}]}]
  

 /*let newArray=sideList;
 let elemsArray=newArray[category].elems;
 let index =elemsArray.findIndex((item)=>item.name===name);
 elemsArray[index].qt=qt;
 newArray.elems=elemsArray;
 setSideList(newArray);*/
}
  const [sideList,setSideList]=useState([
    {category:"Fruits",elems:[]},
    {category:"Veggie",elems:[]}
  ]);
  const [curView,setCurView]=useState("addItem")//hold the state of which view we want to show
  //possible Views are addView , itemView, sideListView

  function addItemToSideList(category,item) {
    //when an item is added to a list change setCurView to SideListView if it is not already
    setCurView("sideListView")
    setSideList(manageList(sideList,category,item.name))
    }
    
  
 let array= 
 [
   {category:"Fruits",
    elems:[
      {name:"watermelon"},{name:"orange"},
      {name:"apple"},{name:"kiwi"},{name:"banana"},
      {name:"strawberry"},{name:"grape"},{name:"mango"}
    ]
    },
    {category:"Veggie",
    elems:[
      {name:"garlic"},{name:"lettuce"},
      {name:"Leek"},{name:"kale"},
      {name:"corn"},{name:"tomato"},
      {name:"carrot"},{name:"potato"}
    ]
    }
  ]
  const[itemList,setItemList]=useState(array)
  
   
   function addItemToList(itemToAdd) {
     console.log(itemToAdd.category);
     let temp=[...itemList];
     let index=temp.findIndex((elem)=>elem.category===itemToAdd.category);
     if(index===-1){
       throw new Error("cant find category")
     }else{
       temp[index].elems.push({name:itemToAdd.name});
     }
     setItemList(temp);
   }
  function clickOnItem(item){
    setCurView(item);
  }
  return (
    
     
        <div className="wrapperOfAll">
        <div className="nav">
 
        </div>
       <div className="main">
       <ContextClickOnItem.Provider value={{clickOnItem,addItemToSideList}}>
        <Items addItemToSideList={addItemToSideList} itemList={itemList} key="1"/> 
        </ContextClickOnItem.Provider>
        </div>
        {
        curView==="addItem"?
        <AddItem addItemToList={addItemToList} 
        className="add" 
        setViewToSideList={()=>setCurView("sideListView")}/>:
        (
          curView==="sideListView"?
        <SideListView sideList={sideList} setViewToAddItem={setViewToAddItem} handleChildEdit={handleChildEdit}/>
        :<ItemView item={curView}/>)
        }
        </div>
       
      
  );
}
function ItemView(props){
  return(<div>{props.item.name}</div>)
}
export default App;

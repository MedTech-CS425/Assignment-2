import React from "react";
import Item from "./item.jsx";
import './item.css'
function Items(props) {
  
 
  const template=props.itemList.map((elem,index)=>{
    return ( <div className="shopping-list container"><h1>{elem.category}</h1>
    {elem.elems.map((item,i)=>{return(
      <Item category={elem.category} viewItemHandler={handleItemClick}addItem={handleChildClick} 
      name={item.name} key={item.name} item={item}/>
    )})}
    </div>)
  })
  
  function handleItemClick(params) {
    
  }
 function handleChildClick(category,item) {
   props.addItemToSideList(category,item);
 }
  return (
    <div>
      {template}
    </div>
    
  );
}

export default Items;

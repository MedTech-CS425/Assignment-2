import React, { useState } from "react";
import "./sideList.css";

export default function SideList(props) {
 const [isEditing,setIsEditing]=useState(false);
 const [input,setInput]=useState(props.list);
 function handleChange(event) {
  //refactor so that it takes state from parent component at start rather than
  //rebuilding the state trough fails
   const name=event.target.id;
   const category=event.target.name;
   const qt=event.target.value;
   let newArray=input;
   let index=newArray.findIndex((entry)=>entry.category===category);
   if(index===-1||newArray.length===0){
    newArray.push({category,elems:[{name,qt}]});
    console.log(`if i see this i am wrong`);
   }
  else{
   let elemsArr= newArray[index].elems;
   let elemIndex=elemsArr.findIndex(item=>item.name===name);
   if(elemIndex===-1){
      elemsArr.push({name,qt});
      console.log(`if i see this i am also wrong`);
    } else
      elemsArr[elemIndex].qt=qt;
    newArray[index].elems=elemsArr;  
  }
   setInput(newArray);
 }

 function handleSubmit(e){
   e.preventDefault( )
 props.handleChildEdit(input)
 console.log(input);
 setIsEditing(false);
 //stuck here cant find a way to acces the html event without too much code smell
 };
 const itemList=(
   props.list.map((elem,index)=>(<div>
 <h2>{elem.category}</h2> {elem.elems.map(item=>{return (<div>{item.name} q:{item.qt}</div>)})}
 </div>)));

 
 const viewTemplate=(<div className="sideList">
      {itemList}

      <button type="button" onClick={()=>setIsEditing(true)}>edit</button>
    </div>)
 const editingTemplate=(
    <form className="stack-small" onSubmit={handleSubmit}>
     <div className="sideList">
      {props.list.map((elem,index)=>(<div>
 <h2>{elem.category}</h2> {elem.elems.map(item=>{return (<div>{item.name} <input className="editingInput" placeholder={item.qt} name={elem.category} id={item.name} type="number" onChange={handleChange}/></div>)})}
 </div>))}

    </div>
    <button type="Submit">Save</button>
    </form>
 )
  return (<div key="SideListVIew">
  {isEditing? editingTemplate:viewTemplate}
  </div>
  )
}

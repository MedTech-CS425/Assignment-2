import React from 'react';
import './item.css'
import { ContextClickOnItem } from "../ItemClickContext";
export default function Item(props){
    
    return(
  
    <div key={props.name} className="Rectangle">
    <ContextClickOnItem.Consumer>
    {({clickOnItem,addItemToSideList})=>
    (<><span onClick={()=>clickOnItem(props.item)}>
        {props.name}  
    </span>
    <button className="buttonPlus" onClick={()=>addItemToSideList(props.category,{name:props.name})}>
    +</button>
    </>)}
     </ContextClickOnItem.Consumer>

    </div>
    );
}
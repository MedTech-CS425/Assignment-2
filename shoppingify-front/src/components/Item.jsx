import React from 'react';
import './item.css'
import { Add } from '@material-ui/icons';
import "../styles/AllItem.css"

export default function Item(props){
    const ContextClickOnItem = React.createContext({
        clickOnItem:(item)=>{},
        addItemToLeftbar:(cateogry,item)=>{}
    });
    return(
        <div key={props.name} className="littleBox">
            <ContextClickOnItem.User>
                    {({clickOnItem,addItemToLeftbar})=>(
                    <>
                        <span onClick={()=>clickOnItem(props.item)}>
                            {props.name}  
                        </span>
                        <Add>
                            <button className="addButton" onClick={()=>addItemToLeftbar(props.category,{name:props.name})}/>
                        </Add>
                    </>
                    )};
             </ContextClickOnItem.User>
        </div>
    );
}

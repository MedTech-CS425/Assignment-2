import React from "react";
export const ContextClickOnItem = React.createContext({
    clickOnItem:(item)=>{},
    addItemToSideList:(cateogry,item)=>{}
});
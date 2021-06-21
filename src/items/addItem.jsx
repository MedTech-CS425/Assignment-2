import React, { useState } from "react";
import './item.css'
export default function AddItem(props) {
  const [input, setInput] = useState({
    name: "",
    note: "",
    image: "",
    category: "",
  });
  
  function handleSubmit(e) {
    let newState = {
      name: e.target.name.value,
      note: e.target.note.value,
      image: e.target.image.value,
      category:e.target.category.value
    };
    e.preventDefault();
    console.log("i was also clicked");
    setInput(newState);
    e.target.reset();
    props.addItemToList(newState);
   
  }
  return (
    <form className="formWrapper" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="Name" className="formbuilder-text-label">
          Name
          <br />
          <input id="name" type="text" required="required" />
        </label>
        
        <label htmlFor="Note">
          Note
          <br />
          <input id="note" type="text" name="Note" />
        </label>
        
        <label htmlFor="Image">
          Image
          <br />
          <input id="image" type="text"/>
        </label>
        
        <label htmlFor="Category">
          Category
          <br />
          <select id="category"  type="select">
            <option value="Fruits">Fruits</option>
            <option value="Veggie">Veggie</option>
            <option value="strawberry">fraise</option>
          </select>
        </label>
        <br />
        <div id="button-group">
        <button type="reset" onClick={()=>props.setViewToSideList()}>Cancel</button>
        <button type="submit">Add</button>
        </div>
      </div>
    </form>
    
  );
}

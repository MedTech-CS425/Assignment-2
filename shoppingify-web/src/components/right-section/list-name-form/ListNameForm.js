import { useEffect, useState } from "react";

function ListNameForm(props) {
    let [listName, setListName] = useState("");

    useEffect(() => {
        if(props.defaultValue)
            setListName(props.defaultValue)
    }, [])

    return <div className="list-name-input">
            <input type="text" className="form-control" id="list-name" value={listName} placeholder="Enter the list's name" onChange={($event) => setListName($event.target.value)}/>
            <button type="button" className="btn btn-outline-secondary" onClick={() => props.onSave(listName)}>Save</button>
        </div>
}

export default ListNameForm

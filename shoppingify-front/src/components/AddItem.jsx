import { Add, Remove} from "@material-ui/icons";
import {Link} from "react-router-dom";
import  {useState} from "react";
import "../styles/AddItem.css";
import { AuthContext } from "../context/AuthContext";

export default function AddItem(props){
    const [items,setItems]=useState([]);
    const {user}= useContext(AuthContext);
    



    const HomeRightbar =()=>{
        return(
            <div className="addItemContainer">
                <div className="addItemBox">
                    <button className="addItem">
                        <Link>
                            <Add className="add"/>
                        </Link>
                    </button>
                </div>
                <div className="shoppingList">
                    <button className="qty">

                    </button>
                </div>
                <div className="entry">
                <input type="text" placeholder="Enter a name" className="entredItem" />
                    <button className="save">
                        Save
                    </button>
                </div>
            </div>
        )    
    }
    const StatisticsRightbar=()=>{

    }
    return(
        <div className="rightbar">
            <div className="rightbarWrapper">
                {Home? <HomeRightbar/>:<StatisticsRightbar/>}
            </div>
        </div>
    )

}

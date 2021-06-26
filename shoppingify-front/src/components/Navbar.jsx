import "../styles/Navbar.css";
import {Search} from "@material-ui/icons";

export default function Navbar(){
    return(
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">Shopingify </span>
                <span className="logoDesc">allows you to take your shopping list wherever you go</span>
            </div>
            <div className="topbarCenter">
                <br></br>
            </div>
            <div className="topbarLeft">
                <div className="searchbar">
                    <Search className="searchIcon"></Search>
                    <input type="text" placeholder="Search item" className="searchInput" />
                </div>
            </div>
            
        </div>
    );
}

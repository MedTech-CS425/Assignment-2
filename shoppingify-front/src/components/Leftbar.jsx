import { Category, Refresh, Equalizer } from "@material-ui/icons";
import "../styles/Leftbar.css"
import {Link} from "react-router-dom";

export default function Leftbar(){
    return(
        <div className="leftbarWrapper">
            <Link to ="/">
                <Category className="icon"/>
            </Link>
           
            <Link to ="/history" > 
                <Refresh className="icon"/>
            </Link>
            
            <Link to="/statistics">
                <Equalizer className="icon"/>
            </Link>
            
        </div>
    )
}
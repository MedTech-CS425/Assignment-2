import './SideNav.css'
import { ReactComponent as ReactLogo } from '../../assets/logo.svg';
import { ReactComponent as Logo } from '../../assets/source.svg'
function SideNav(props) {
    function toggleMainPanel(panel) {
        props.toggle(panel)
    }
    return (
        <div className="SideNav">
            <ReactLogo />
            <div className="iconsWrapper">

                <span className="material-icons" onClick={() => toggleMainPanel("ITEMS_LIST")}>Category</span>
                <span className="material-icons" onClick={() => toggleMainPanel("HISTORY")}>refresh</span>
                <span className="material-icons" onClick={() => toggleMainPanel("STATS")}>query_stats</span>
            </div>
            <Logo />
        </div>
    )
}


export default SideNav; 

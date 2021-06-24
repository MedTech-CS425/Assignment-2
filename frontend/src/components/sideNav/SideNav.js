import './SideNav.css'
import { ReactComponent as ReactLogo } from '../../assets/logo.svg';
import { ReactComponent as Logo } from '../../assets/source.svg'
function SideNav(props) {
    function toggleMainPannel(pannel) {
        props.toggle(pannel)
    }
    return (
        <div className="SideNav">
            <ReactLogo />
            <div className="iconsWrapper">

                <span className="material-icons" onClick={() => toggleMainPannel("ITEMS_LIST")}>category</span>
                <span className="material-icons" onClick={() => toggleMainPannel("HISTORY")}>refresh</span>
                <span className="material-icons" onClick={() => toggleMainPannel("STATS")}>query_stats</span>
            </div>
            <Logo />
        </div>
    )
}


export default SideNav;
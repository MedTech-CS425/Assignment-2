import './SideNav.css'
import { ReactComponent as ReactLogo } from '../../assets/logo.svg';
import { ReactComponent as Logo } from '../../assets/source.svg'
function SideNav() {

    return (
        <div className="SideNav">
            <ReactLogo />
            <div className="iconsWrapper">

                <span className="material-icons">category</span>
                <span className="material-icons">refresh</span>
                <span className="material-icons">query_stats</span>
            </div>
            <Logo />
        </div>
    )
}


export default SideNav;
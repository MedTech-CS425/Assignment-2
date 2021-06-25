import './LeftMenu.css'

function LeftMenu(props){
    return (<div className="menu">
        <div className={"menu-item" + (props.selectedPage === 0 ? " active" : "")} onClick={() => props.selectPage(0)}>
            <i class="fas fa-list"></i>
        </div>
        <div className={"menu-item" + (props.selectedPage === 1 ? " active" : "")} onClick={() => props.selectPage(1)}>
            <i class="fas fa-history"></i>        </div>
            <div className={"menu-item" + (props.selectedPage === 2 ? " active" : "")} onClick={() => props.selectPage(2)}>
            <i class="far fa-chart-bar"></i>
        </div>
    </div>)
}

export default LeftMenu

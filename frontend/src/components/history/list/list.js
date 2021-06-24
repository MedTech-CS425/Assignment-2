import './list.css'

function OneList(props) {
    let list = props.list
    console.log(list)
    return (
        <div className="historyWrapper">
            <button onClick={() => { props.back() }}><span className="material-icons">keyboard_backspace</span>Back</button>
            <h1>{list.list}</h1>
            <h2>{list.list_updated_at}</h2>
            <div className="itemsContainer">
                {
                    list.elements.map(item => {
                        return (
                            <div className="historyItemWrapper">
                                <label>{item.name}</label>
                            </div>
                        )
                    })
                }
            </div>
        </div>

    )

}



export default OneList;
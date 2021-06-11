import './itemsList.css'
function itemsList(props) {
    let items = props.items

    function addToBucket(category, item) {
        props.addToBucket(category, item);
    }
    return (
        <div className="wrapper">

            <div className="header">
                <h2><span>Shoppingify</span> allows you take your shopping list whenever you go</h2>
                <div className="search">
                    <span className="material-icons">search</span>
                    <input ></input>
                </div>
            </div>
            {
                items.map((element) => {
                    return <div className="categoryWrapper" key={element.name}>

                        <h1>{element.name}</h1>

                        <div className="itemsWrapper">
                            {
                                element.elements.map((item) => {
                                    return (
                                        <button className="itemBtn" onClick={() => { addToBucket(element.name, item) }} key={item.id}>
                                            <h2>{item.label}</h2>
                                            <span className="material-icons"> add</span>
                                        </button>
                                    )

                                })
                            }
                        </div>


                    </div>
                })

            }
        </div>
    )

}


export default itemsList;
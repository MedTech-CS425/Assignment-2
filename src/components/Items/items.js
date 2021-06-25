import './items.css'
const Items=(props) =>{
    let items = props.items

    const addToBucket=(category, item) =>{
        props.addToBucket(category, item);
    }
    return (
        <div className="wrapper">

            <div className="header">
                <h2><span>Shoppingify</span></h2>
                <div className="search">
                    <span className="material-icons"></span>
                    <input ></input>
                </div>
            </div>
            {
                items.map((element,index) => {
                    return <div className="categoryWrapper" key={index}>

                        <h1>{element.category}</h1>

                        <div className="itemsWrapper">
                            {
                                element.elements.map((item,iIndex) => {
                                    return (
                                        <button className="itemBtn" onClick={() => { addToBucket(element.category, item) }} key={iIndex}>
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


export default Items;
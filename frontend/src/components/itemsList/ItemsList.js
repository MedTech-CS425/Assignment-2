import './itemsList.css'
function itemsList() {

    var items = [
        { name: "Fish", elements: ["Fish1", "Fish2", "Fish3"] },
        { name: "Meat", elements: ["Very Long Named Meat Shit", "Meat2", "Meat3", "meat5", "Meat6"] },
        { name: "Fruits", elements: ["Avocado", "Apple", "WaterMelon"] }

    ]

    return (
        <div className="wrapper">

            <div className="header">
                <h2><span>Shoppingify</span> allows you take your shopping list whenever you go</h2>
                <div className="search">
                    <span className="material-icons">search</span>
                    <input value="Search"></input>
                </div>
            </div>
            {
                items.map((element) => {
                    return <div className="categoryWrapper">

                        <h1>{element.name}</h1>

                        <div className="itemsWrapper">
                            {
                                element.elements.map((item) => {
                                    return (
                                        <button className="itemBtn">
                                            <h2>{item}</h2>
                                            <span class="material-icons"> add</span>
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
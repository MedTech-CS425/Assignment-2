import './itemsList.css'
function itemsList() {

    var items = [
        { name: "Fish", elements: ["Fish1", "Fish2", "Fish3"] },
        { name: "Meat", elements: ["Very Long Named Meat Shit", "Meat2", "Meat3"] },
        { name: "Fruits", elements: ["Avocado", "Apple", "WaterMelon"] }

    ]

    return (
        <div className="wrapper">
            <h2>Shoppingify allows you take your shopping list whenever you go</h2>
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
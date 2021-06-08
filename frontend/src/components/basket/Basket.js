import './Basket.css'
import { ReactComponent as BottleLogo } from '../../assets/source.svg'
function Basket() {
    let list = [
        {
            category: "Fruits",
            items: [
                { lable: "Apple", q: 3 },
                { lable: "Straw", q: 1 },
                { lable: "Banna", q: 2 },
                { lable: "Melon", q: 3 },
            ]
        },
        {
            category: "Meat",
            items: [
                { lable: "Meat 1", q: 3 },
                { lable: "Meat 2", q: 1 },
                { lable: "Meat 3", q: 2 },
                { lable: "Meat 4", q: 3 },
            ]
        }



    ]

    return (
        <div className="basketWrapper">
            <div className="addItemWrapper">
                <BottleLogo />
                <div>
                    <h2>Didn't Find what you need ?</h2>
                    <button>Add Item</button>
                </div>
            </div>

            <div className="labelWrapper">
                <h2>Shopping List</h2>
                <span class="material-icons">edit</span>
            </div>

            <div className="ItemsWrapper">
                {
                    list.map((element) => {
                        return (
                            <div className="itemWrapper">
                                <h1>{element.category}</h1>
                                {
                                    element.items.map((item) => {
                                        return (
                                            <div className="infoWrapper">
                                                <h2>{item.lable}</h2>
                                                <h2>{item.q}</h2>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Basket
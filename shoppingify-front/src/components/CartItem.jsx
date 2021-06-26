import "../styles/CartItem.css";


export default function CartItem(props){
    const view = props.list.map((l)=>{
        let a = l.items.map((i)=>{
            console.log(i);
            return (
                <div className="littlebox">{i.name}</div>
                );
        }
        )
        return (
        <div className="category">
            {l.category}
            <div className="mediumbox">
                {a}
            </div>
        </div>
        )
    });
    return(

        <div className="box">
            {view}
        </div>
    );
}
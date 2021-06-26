import Navbar from "../components/Navbar";
import Leftbar from "../components/Leftbar";
import CartItem from "../components/CartItem";
import AddItem from "../components/AddItem";


export default function Home(){
    return(
        <>
        <Navbar />
        <div className="homeContainer">
          <Leftbar />
          <CartItem/>
          <AddItem/>
        </div>
      </>
    )
}
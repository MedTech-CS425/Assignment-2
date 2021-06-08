import './App.css';
import ItemsList from './components/itemsList/ItemsList'
import SideNav from './components/sideNav/SideNav'
import Basket from './components/basket/Basket'
function App() {
  return (
    <div className="App">
      <SideNav />
      <ItemsList />
      <Basket />
    </div>
  );
}

export default App;

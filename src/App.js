import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/NavBar/NavBar.css'
import './components/ItemListContainer/ItemListContainer.css'
import './components/CartWidget/CartWidget.css'
import './components/ItemCount/ItemCount.css'
import './components/ItemList/ItemList.css'
import './components/Item/Item.css'
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer titulo='Nuestros Productos' />
    </div>
  );
}

export default App;

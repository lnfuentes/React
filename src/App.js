import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/NavBar/NavBar.css'
import './components/ItemListContainer/ItemListContainer.css'
import './components/CartWidget/CartWidget.css'
import './components/ItemCount/ItemCount.css'
import './components/ItemList/ItemList.css'
import './components/Item/Item.css'
import './components/ItemDetail/ItemDetail.css'
import './components/Intercambiabilidad/Intercambiabilidad.css'
import './App.css';
import Carrito from './components/Carrito/Carrito';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />  
        <Routes>
          <Route path='/' element={<ItemListContainer titulo='Nuestros Productos' />} />
          <Route path='/categoria/:categoriaId' element={<ItemListContainer titulo='Nuestros Productos' />} />
          <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} />
          <Route path='/carrito' element={<Carrito />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

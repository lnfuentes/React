import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import CartContextProvider from './context/CartContext';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import Carrito from './containers/Carrito/Carrito';
import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartContextProvider>
          <NavBar />  
          <Routes>
            <Route path='/' element={<ItemListContainer titulo='Nuestros Productos' />} />
            <Route path='/categoria/:categoriaId' element={<ItemListContainer titulo='Nuestros Productos' />} />
            <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} />
            <Route path='/carrito' element={<Carrito />} />
          </Routes>
        </CartContextProvider>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

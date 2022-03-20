import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/NavBar/NavBar.css'
import './components/CartWidget/CartWidget.css'
import './components/ItemCount/ItemCount.css'
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer titulo='este es el titulo'>
        <ItemCount/>
      </ItemListContainer>


    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListContainer from './components/ListContainer';
import Cart from './components/Cart';
import ItemDetailContainer from './components/ItemDetailContainer';
 
function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <NavBar />  {/* Menu principal  */}
          <Routes>
            <Route exact path="/" element={ <ListContainer greetings="Saludos..."/> } />
            <Route exact path="/categoria/:idCategoria" element={ <ListContainer /> } />
            <Route exact path="/detalle/:idProducto" element={ <ItemDetailContainer /> } />
            <Route exact path="/carrito" element={ <Cart /> } />
          </Routes>
          
        </div>
    </BrowserRouter>
  );
}

export default App;

import './App.css';
import { CartContext } from './context/CartContext';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import { useState } from 'react';

const mostrarCantidad = (count) => {
  console.log(`Agregaste ${count} unidades al carrito`);
}

function App() {

  const [cartItems, setCartItems] = useState([]);

  return (
    <CartContext.Provider value={{cartItems, setCartItems}}>
      <BrowserRouter>
        <NavBar></NavBar>
        <Switch>
          <Route exact path='/' >
            <Home />
          </Route>
          <Route exact path='/items'>
            <ProductList />
          </Route>
          <Route exact path='/items/:id'>
            <Product />
          </Route>
          <Route exact path='/category/:id'>
            <ProductList />
          </Route>
        </Switch>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;

import './App.css';
import { CartContext } from './context/CartContext';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import { useState } from 'react';
import { Cart } from './pages/Cart';

const mostrarCantidad = (count) => {
  console.log(`Agregaste ${count} unidades al carrito`);
}

function App() {

  const [cartItems, setCartItems] = useState([]);

  const addItem = (item) => {

    console.log("el item", item);

    let items = cartItems;
    
    let found = false;

    items.forEach((cartItem, i) => {
        if (cartItem.id == item.id) {
            console.log(item);
            items[i].quantity += item.quantity;
            found = true;
        }
    })

    if (!found) items.push(item);

    setCartItems(items);

    console.log(cartItems);

  }

  const removeItem = (item) => {
    let items = cartItems;

    items = items.filter(cartItem => cartItem.id != item);

    setCartItems(items);
  }

  const clearCart = () => {
    setCartItems([]);
  }

  const isInCart = (idItem) => {
    return cartItems.find(i => i.id == idItem);
  }

  return (
    <CartContext.Provider value={{cartItems, setCartItems, addItem, removeItem, clearCart, isInCart}}>
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
          <Route exact path='/cart'>
            <Cart />
          </Route>
        </Switch>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;

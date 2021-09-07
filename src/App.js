import './App.css';
import { CartContext } from './context/CartContext';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import { useEffect, useState } from 'react';
import { Cart } from './pages/Cart';

function App() {
  
  const [cartItems, setCartItems] = useState([]);
  const [cartLength, setCartLength] = useState(0);

  const addItem = (item) => {

    let items = cartItems;
    
    let found = false;

    console.log(item);

    cartItems.forEach((cartItem, i) => {
        if (cartItem.id === item.id) {
            console.log(item);
            items[i].quantity += item.quantity;
            found = true;
        }
    })

    if (!found) {
      setCartItems([...cartItems, item])
    } else {
      setCartItems([...items]);
    };

  }

  const removeItem = (item) => {
    let items = cartItems;

    items = items.filter(cartItem => cartItem.id !== item.id);

    setCartItems([...items]);
  }

  const clearCart = () => {
    setCartItems([]);
  }

  const isInCart = (idItem) => {
    return cartItems.find(i => i.id === idItem);
  }

  useEffect(() => {

    let length = 0;

      cartItems.forEach(item => {
        length += item.quantity;
      })

    setCartLength(length);

  }, [cartItems])

  return (
    <CartContext.Provider value={{cartItems, setCartItems, addItem, removeItem, clearCart, isInCart, cartLength}}>
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

import './App.css';
import { CartContext } from './context/CartContext';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import { useEffect, useState } from 'react';
import { Cart } from './pages/Cart';
import { addDoc, collection, doc, documentId, getDocs, increment, query, Timestamp, where, writeBatch } from '@firebase/firestore';
import { db } from './firebase';

function App() {
  
  const [cartItems, setCartItems] = useState([]);
  const [cartLength, setCartLength] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

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

  const validateCheckoutUser = (user) => user.name && user.email && user.cellphone;

  const buyCart = async (user) => {

    if (!validateCheckoutUser(user)) return alert('Debe completar los datos para terminar la compra');
    
    const itemsIds = cartItems.map(item => item.id);

    const q = query(collection(db, 'products'), where(documentId(), 'in', itemsIds));

    const productsSnapshot = await getDocs(q);

    const rechazados = productsSnapshot.docs.filter(product => product.data().stock < cartItems.find(item => item.id == product.id).quantity);

    if (rechazados.length > 0) {
      alert('Productos sin stock suficiente: ' + rechazados.map(rechazado => rechazado.data().title).join(', '));
    } else {
      return createOrder(user);
    }

  }

  const createOrder = async (user) => {
    let order = {
      items: cartItems,
      buyer: user,
      date: Timestamp.fromDate(new Date()),
      total: cartTotal
    }

    const batch = new writeBatch(db);

    cartItems.forEach(item => {
      const productRef = doc(db, 'products', item.id);
      batch.update(productRef, {stock: increment(-item.quantity)});
    })

    batch.commit();

    const orderRef = await addDoc(collection(db, 'orders'), order);
    alert('Orden creada: ' + orderRef.id);
    clearCart();
  }

  useEffect(() => {

    let length = 0;
    let total = 0;

    cartItems.forEach(item => {
      length += item.quantity;
      total += item.quantity * item.price;
    })

    setCartLength(length);
    setCartTotal(total);
    console.log(total);

  }, [cartItems])

  return (
    <CartContext.Provider value={{cartItems, setCartItems, addItem, removeItem, clearCart, isInCart, cartLength, cartTotal, buyCart}}>
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

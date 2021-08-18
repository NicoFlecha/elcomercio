import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';

const mostrarCantidad = (count) => {
  console.log(`Agregaste ${count} unidades al carrito`);
}

function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Switch>
        <Route exact path='/' >
          <Home />
        </Route>
      </Switch>
      <Switch>
        <Route exact path='/products'>
          <ProductList />
        </Route>
        <Route exact path='/products/:id'>
          <Product />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

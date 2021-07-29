import { Container } from '@material-ui/core';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

const menuItems = [
  {
    titulo: 'Categorias',
    tipo: 'dropdown',
    elementos: [
      {titulo: 'Celulares'},
      {titulo: 'Tablets'},
      {titulo: 'Laptops'}
    ]
  },
  {titulo: 'Contacto'},
  {titulo: 'Ayuda'}
];

function App() {
  return (
    <div className="App">
      <NavBar items={menuItems} />
      <ItemListContainer greeting="Bienvenido usuario" />
    </div>
  );
}

export default App;

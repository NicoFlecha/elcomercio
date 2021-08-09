import './App.css';
// import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import ItemList from './components/ItemList';

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

const mostrarCantidad = (count) => {
  console.log(`Agregaste ${count} unidades al carrito`);
}

function App() {
  return (
    <div className="App">
      <NavBar items={menuItems} />
      <ItemListContainer greeting="Bienvenido usuario">
        <ItemList />
      </ItemListContainer>
    </div>
  );
}

export default App;

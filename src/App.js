import './App.css';
import ItemCount from './components/ItemCount';
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

const mostrarCantidad = (count) => {
  console.log(`Agregaste ${count} unidades al carrito`);
}

function App() {
  return (
    <div className="App">
      <NavBar items={menuItems} />
      <ItemListContainer greeting="Bienvenido usuario">
        <ItemCount stockRaw={8} initial={2} onAdd={mostrarCantidad} />
      </ItemListContainer>
    </div>
  );
}

export default App;

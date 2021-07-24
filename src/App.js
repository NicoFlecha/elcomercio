import { Container } from '@material-ui/core';
import './App.css';
import Header from './components/Header';
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
      <Container>
        <h1 style={{textAlign: 'left'}}>Ofertas</h1>
      </Container>
    </div>
  );
}

export default App;

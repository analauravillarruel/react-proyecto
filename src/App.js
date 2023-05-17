
import './App.css';
import { ItemListContainer } from './Componentes/ItemListContainer/ItemListContainer';
import { NavBar } from './Componentes/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer/>
    </div>
  );
}

export default App;

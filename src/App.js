
import './App.css';
import { ItemDetailContainer } from './Componentes/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from './Componentes/ItemListContainer/ItemListContainer';
import { NavBar } from './Componentes/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer/>
      <ItemDetailContainer itemId={2}/>
    </div>
  );
}

export default App;

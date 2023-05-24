
import './App.css';
import { ItemDetailContainer } from './Componentes/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from './Componentes/ItemListContainer/ItemListContainer';
import { NavBar } from './Componentes/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Contacto } from './Componentes/Contacto/Contacto';

function App() {
  return (
    <div >
      <BrowserRouter>

        <NavBar />

        <Routes>
          <Route path="/" element= {<ItemListContainer/>}/>
          <Route path="item/:id" element={<ItemDetailContainer />}/>
          <Route path="/productos" element={<ItemListContainer/>}/>
          <Route path="/productos/:categoria" element= {<ItemListContainer/>}/>
          <Route path="/contacto" element={<Contacto/>}/>
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;

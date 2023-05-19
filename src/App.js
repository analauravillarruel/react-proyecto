
import './App.css';
import { ItemDetailContainer } from './Componentes/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from './Componentes/ItemListContainer/ItemListContainer';
import { NavBar } from './Componentes/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div >
      <BrowserRouter>

        <NavBar />

        <Routes>
          <Route path="/" element= {<ItemListContainer/>}/>
          <Route path="item/:id" element={<ItemDetailContainer />}/>
          <Route path="/productos/:categoria" element= {<ItemListContainer/>}/>
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;

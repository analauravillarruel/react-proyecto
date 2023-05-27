
import './App.css';
import { ItemDetailContainer } from './Componentes/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from './Componentes/ItemListContainer/ItemListContainer';
import { NavBar } from './Componentes/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Contacto } from './Componentes/Contacto/Contacto';

import { CartProvider } from './Context/CartContext';
import { Carrito } from './Componentes/Carrito/Carrito';

function App() {
  return (
    <div >

      <CartProvider>
        <BrowserRouter>

          <NavBar />

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="item/:id" element={<ItemDetailContainer />} />
            <Route path="/productos" element={<ItemListContainer />} />
            <Route path="/productos/:categoria" element={<ItemListContainer />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/carrito" element={<Carrito />} />
          </Routes>

        </BrowserRouter>

      </CartProvider>


    </div>
  );
}

export default App;

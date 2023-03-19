import './App.css';
import ItemListContainer from './Component/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './Component/NavBar/NavBar';
import ItemDetailContainer from './Component/ItemDetailcontainer/ItemDetailcontainer';
import { CartContextProvider } from "./context/cartContext";


function App() {
  return (
    <div>
      <CartContextProvider>
        <BrowserRouter>

          <NavBar />
          
          <Routes>

              <Route
                path='/tienda'
                element={<ItemListContainer />}
              />

              <Route 
                path='/category/:idCategory'
                element= { < ItemListContainer />}
              />

              <Route
                path='/detalle/:idUser'
                element={<ItemDetailContainer />}
              />

          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;

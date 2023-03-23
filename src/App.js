import './App.css';
import ItemListContainer from './Component/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './Component/NavBar/NavBar';
import ItemDetailContainer from './Component/ItemDetailcontainer/ItemDetailcontainer';
import { CartContextProvider } from "./context/cartContext";
import CartContainer from './Component/CartContainer/CartContainer';
import Banner from './Component/Banner/Banner';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <div>
      <CartContextProvider>
        <BrowserRouter>

          <NavBar />
          
          <Routes>
              
              <Route
                path='/'
                element={<Banner />}
              />
              
              <Route
                path='/tienda'
                element={<ItemListContainer />}
              />

              <Route
                path='/cart'
                element={<CartContainer />}
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
          <Footer />
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route, BrowserRouter, Routes } from 'react-router-dom';
import data from './data';
import Main from './components/Main';
import Basket from './components/Basket';
import ItemDetailContainer from './components/ItemDetailContainer';
import Categorias from "./components/Categorias";
import { MenuItems } from './components/MenuItems';
import Construccion from './components/Construccion';


function App() {
    const {products} = data;
    const [cartItems, setCartItems] = useState ([]);
    const onAdd = (product) => {
        const exist = cartItems.find(x => x.id === product.id)
        if (exist){
            setCartItems(
                cartItems.map((x) =>
                 x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x 
                 )
                 );
        } else {
            setCartItems([...cartItems, { ...product, qty: 1}])
        }
    };
    const onRemove = (product) => {
        const exist = cartItems.find((x)=> x.id === product.id);
        if (exist.qty ===1){
            setCartItems(cartItems.filter((x) => x.id !== product.id));
        } else {
            setCartItems(
                cartItems.map((x) =>
                 x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x 
                 )
                 );

        }
    }

  return (
    <> 
    <BrowserRouter>
        <Navbar/> 
          <Routes>
          <Route
            exact path="/"
            element={<Main onAdd={onAdd} products={products}></Main>}
          />
      <Route exact path="/Basket"
          element={  <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}></Basket>}
      />
      <Route exact path="/Product/:id"
          element={  <ItemDetailContainer onAdd={onAdd} products={products} />}
     />
             <Route
          exact
          path="/MenuItems/:id"
          element={<Categorias onAdd={onAdd} products={products} MenuItems={MenuItems} />}
        />
        <Route
          exact
          path="/Construccion"
          element={<Construccion />}
        />
      </Routes>
      </BrowserRouter>
      </>
  );
}



export default App;
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, BrowserRouter, Routes,} from "react-router-dom";
import Main from "./components/Main";
import Basket from "./components/Basket";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Categorias from "./components/Categorias";
import { MenuItems } from "./components/MenuItems";
import Construccion from "./components/Construccion";
import Fin from "./components/Fin";
import cartContext from "./context/cart/CartContext";
import { useEffect } from "react";
import { doc, getFirestore } from "firebase/firestore";
import { collection, getDoc, getDocs } from "firebase/firestore";
import { setDoc } from "firebase/firestore";

function App() {
  const data = [];
  const [products, setProducts] = useState([]);
  const [ordenes, setOrdenes] = useState([]);
  const db = getFirestore();
  useEffect(() => {
    const data = collection(db, "products");
    getDocs(data).then((res) => {
      console.log(res.docs);
      console.log(res.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      setProducts(res.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  }, []);


  return (
    <> 
    <BrowserRouter>
    
        <Navbar/>   
        <Basket />
          <Routes>
          <Route
            exact path="/"
            element={<Main  products={products}></Main>}
          />
   
      
      <Route exact path="/Product/:id"
          element={  <ItemDetailContainer products={products} />}
     />
             <Route
          exact
          path="/MenuItems/:id"
          element={<Categorias  products={products} MenuItems={MenuItems} />}
        />
        <Route
          exact
          path="/Construccion"
          element={<Construccion />}
        />
      <Route
          exact
          path="/Fin"
          element={<Fin/>}
        />
      </Routes>
    
      </BrowserRouter>
      </>
  );
}



export default App;
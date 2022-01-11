import { useContext, useState, useEffect } from "react";
import "./Basket.css";
import CartContext from "../context/cart/CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { doc, getFirestore } from "firebase/firestore";
import { collection, getDoc, getDocs } from "firebase/firestore";
import { setDoc } from "firebase/firestore";

const Basket = (props) => {
  const {
    showCart,
    cartItems,
    showHideCart,
    addToCart,
    restToCart,
    removeItem,
    VaciarCart,
  } = useContext(CartContext);

  const [ordenes, setOrdenes] = useState([]);
  const db = getFirestore();

  const traerOrdenes = () => {
    const dataOrdnes = collection(db, "ordenes");
    getDocs(dataOrdnes).then((res) => {
      console.log(res.docs);
      console.log(res.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      setOrdenes(res.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  };

  useEffect(() => {
    traerOrdenes();
  }, []);

  const totales = () => {
    let total = 0;
    cartItems.map((item) => (total += item.qty * item.price));
    return total;
  };

  let orden = {
    buyer: { name: "Martin", phone: 48554855, email: "martoo96@gmail.com" },
    cartItems,
    total: totales(),
  };

  const setearDocumento = () => {
    setDoc(doc(db, "ordenes", `${Object.keys(ordenes).length}`), {
      orden: orden,
    });
    alert(
      `Gracias por su compra!\n Su número de orden es: ${
        Object.keys(ordenes).length
      }`
    );
    traerOrdenes();
  };

  return (
    <>
      {showCart && (
        <div className="cart__wrapper">
          <div style={{ textAlign: "right" }}>
            <i
              style={{ cursor: "pointer" }}
              className="fa fa-times-circle"
              aria-hidden="true"
              onClick={showHideCart}
            ></i>
          </div>
          <aside className="block col-1">
            <h2>Carrito</h2>
            <div className="row">
              {cartItems.length === 0 && (
                <div>
                  <h2>El Carrito esta vacio</h2>
                  <Link to="/">
                    <button className="btn">Ver Productos</button>
                  </Link>
                </div>
              )}
            </div>
            {cartItems.map((item) => (
              <div key={item.id} className="row">
                <div className="col-2">{item.name}</div>
                <div className="col-2 row">
                  <button onClick={() => addToCart(item)} className="add">
                    +
                  </button>
                  <button
                    onClick={() => {
                      if (item.qty === 1) {
                        removeItem(item.id);
                      } else {
                        restToCart(item);
                      }
                    }}
                    className="remove"
                  >
                    -
                  </button>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="remove"
                  >
                    <i class="fas fa-trash-alt"></i>
                  </button>
                </div>
                <div className="col-2 text-right">
                  {item.qty} * {item.price}
                </div>
              </div>
            ))}
          </aside>
          <div>Total del carrito: $ {totales()}</div>
          <button
            className="btnVaciar"
            onClick={() => VaciarCart()}
            className=""
          >
            Vaciar
          </button>
          <Link to="/Fin">
            <button
              onClick={() => {
                VaciarCart();
                setearDocumento();
              }}
            >
              Comprar
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export default Basket;

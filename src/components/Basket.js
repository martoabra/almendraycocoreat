import { useContext } from "react";
import "./Basket.css";
import CartContext from "../context/cart/CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const Basket = (props) => {
  const { showCart, cartItems, showHideCart, addToCart, restToCart, removeItem, agregToCart } = useContext(CartContext);
  return (
    <>
      {showCart && (
        <div className='cart__wrapper'>
          <div style={{ textAlign: "right" }}>
            <i
              style={{ cursor: "pointer" }}
              className='fa fa-times-circle'
              aria-hidden='true'
              onClick={showHideCart}
            ></i>
          </div>
          <aside className="block col-1">
        <h2>Carrito</h2>
        <div className="row">
        {cartItems.length === 0 && <div>
          <h2>El Carrito esta vacio</h2>
          <Link to='/'><button className="btn">Ver Productos</button></Link>
          </div>}
        </div>
        {cartItems.map((item)=>(
            <div key={item.id} className="row">
                <div className="col-2">{item.name}</div>
                <div className="col-2 row">
                <button onClick={()=>agregToCart(item.id)} className="add">+</button>
                <button onClick={()=>restToCart(item.id)} className="remove">-</button>
                <button onClick={()=>removeItem(item.id)} className="remove"><i class="fas fa-trash-alt"></i></button>
            </div>
            <div className="col-2 text-right">
             {item.qty} * {item.price}
            </div>
            </div>
            
        ))}
       
    </aside>
        </div>
      )}
    </>
  );
};

export default Basket;
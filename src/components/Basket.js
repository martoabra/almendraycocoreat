import { useContext } from "react";
import "./Basket.css";
import CartContext from "../context/cart/CartContext";
import CartItem from "./CartItem";

const Basket = (props) => {
  const { showCart, cartItems, showHideCart } = useContext(CartContext);
  const {onAdd, onRemove} = props;

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
        {cartItems.length === 0 && <div>El Carrito esta vacio</div>}
        </div>
        {cartItems.map((item)=>(
            <div key={item.idA} className="row">
                <div className="col-2">{item.name}</div>
                <div className="col-2">
                <button onClick={()=>onAdd(item)} className="add">+</button>
                <button onClick={()=>onRemove(item)} className="remove">-</button>
            </div>
            <div className="col-2 text-right">
             {item.price}
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
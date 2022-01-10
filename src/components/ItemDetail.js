import react, { useContext } from "react";
import CartContext from "../context/cart/CartContext";

export default function ItemDetail (props){
    const {product, onAdd} = props;
    const {addToCart} = useContext(CartContext)
    return (
        <div className="row">
            <div className="col-1">
            <img className="big" src={product.image} alt= {product.name}></img>
            </div>
            <div className="col-2">
       <h3>{product.name}</h3>
       <div><h3>Precio:</h3> $ {product.price}</div>
       <div><h3>Detalle:</h3> {product.detail}</div>
       <div>
           <button onClick={()=>addToCart(product)} > Añadir al carrito</button>
       </div>
        </div>
        </div>
    )
}
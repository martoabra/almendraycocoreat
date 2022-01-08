import react, { useContext } from "react";
import { CartContext } from "./context/CartContext";

/*
export const ItemDetail = (props) => {
    const [Basket, setBasket] = useContext(CartContext);
    const addToCart= () => {
        const tortas = {name: props.name, price: props.price};
        setBasket(curr => [...curr, tortas]);
    }
    return
    (
        <div>
            <h2>{props.name}</h2>
            <h2>{props.price}</h2>
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    )
}
*/


export default function ItemDetail (props){
    const {product, onAdd} = props;
    /* const [Basket, setBasket] = useContext(CartContext);
    const addToCart= () => {
        const tortas = {name: props.name, price: props.price};
        setBasket(curr => [...curr, tortas]);
        */
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
           <button onClick={()=>onAdd(product)} > Añadir al carrito</button>
       </div>
        </div>
        </div>
    )
    }
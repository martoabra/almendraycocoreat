import react, { useContext } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import CartContext from "../context/cart/CartContext";

export default function ItemDetailContainer (props){
   const {products, onAdd} = props;
   const { id } = useParams();
   const {addToCart} = useContext (CartContext)
   return <main className="block col-2">
        <h2>Productos</h2>
        <div className="row">
            {products.map((product) =>(product.id == id && 
                <ItemDetail key={product.id} product={product} addToCart={addToCart}/>
            ))}
        </div>
    </main>;

}
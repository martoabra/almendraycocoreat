import react from "react";
import { Link } from "react-router-dom";

export default function Product (props){
    const {product, onAdd} = props;
    return (
        <Link to={`/Product/${product.id}`}>
        <div>
            <img className="small" src={product.image} alt= {product.name}></img>
       <h3>{product.name}</h3>
       <div>${product.price}</div>
       <div>
           <button onClick={()=>onAdd(product)} > Ver detalle</button>
       </div>
        </div>
    </Link>)
}
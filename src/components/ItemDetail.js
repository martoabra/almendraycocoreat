import react from "react";

export default function ItemDetail (props){
    const {product, onAdd} = props;
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
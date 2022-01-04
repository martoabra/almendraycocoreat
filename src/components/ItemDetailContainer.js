import react from "react";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer (props){
   const {products, onAdd} = props;
   return <main className="block col-2">
        <h2>Productos</h2>
        <div className="row">
            {products.map((product) =>(
                <ItemDetail key={product.id} product={product} onAdd={onAdd}/>
            ))}
        </div>
    </main>;

}
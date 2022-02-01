import react from "react";
import { useParams } from "react-router-dom";
import { MenuItems } from "./Categories";
import Product from "./Product";



export default function Categorias (props){
   const {products, onAdd} = props;
   const { id, categoria} = useParams();
   return <main className="block col-2">
        <h2>Productos</h2>
        <div className="row">
            {products.map((product) =>(product.categoria === id &&
                <Product key={product.id} product={product} onAdd={onAdd} MenuItems={categoria}/>
            ))}
        </div>
    </main>;

}
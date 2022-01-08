import react, { useContext } from "react";
import { useParams } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import Product from "./Product";



export default function Main (props){
   const {products, onAdd} = props;
   const { id, categoria} = useParams();


   return <main className="block col-2">
        <h2>Productos</h2>
        <div className="row">
            {products.map((product) =>(MenuItems.categoria === id &&
                <Product key={product.id} product={product} onAdd={onAdd} MenuItems={categoria}/>
            ))}
        </div>
    </main>;


}
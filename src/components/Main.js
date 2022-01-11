import react, { useContext } from "react";
import { useParams } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import Product from "./Product";


export default function Main (props){
   const {products, onAdd} = props;
   const { id, categoria} = useParams();
 
    let orden ={
        buyer:{name: "Martin", phone: 48554855, email: "martoo96@gmail.com"},
        items: [{id: '1',name: 'Cheesecake',price: 1400}, {id: '2',name: 'NY',price: 2400}],
        total: 4800
    }

   return <main className="block col-2">
        <h2>Productos</h2>
        <div className="row">
            {products.map((product) =>(MenuItems.categoria === id &&
                <Product key={product.id} product={product} onAdd={onAdd} MenuItems={categoria}/>
            ))}
        </div>
    </main>;


}
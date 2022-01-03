import react from "react";

export default function Basket (props){
   const {cartItems, onAdd, onRemove} = props;
   return ( 
   <aside className="block col-1">
        <h2>Carrito</h2>
        <div className="row">
        {cartItems.length === 0 && <div>El Carrito esta vacio</div>}
        </div>
        {cartItems.map((item)=>(
            <div key={item.id} className="row">
                <div className="col-2">{item.name}</div>
                <div className="col-2">
                <button onClick={()=>onAdd(item)} className="add">+</button>
                <button onClick={()=>onRemove(item)} className="remove">-</button>
            </div>
            <div className="col-2 text-right">
            {item.qty} * {item.price}
            </div>
            </div>
        ))}
    </aside>
   );
}
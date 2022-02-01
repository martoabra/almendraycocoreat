import react, { useEffect, useState, useContext } from "react";
import { doc, getDoc, getFirestore, collection, getDocs } from "firebase/firestore";
import CartContext from "../context/cart/CartContext";
import { setDoc } from "firebase/firestore";
import Basket from "./Basket";



export default function Fin (){

const [stateData, setStateData] = useState([]);
const [form, setForm]= useState ({   nombre: "",
telefono: "",
email: "",
email2: "",});
  const [ordenes, setOrdenes] = useState([]);
  const db = getFirestore();
  const { cartItems, VaciarCart, } = useContext(CartContext);

  const traerOrdenes = () => {
    const dataOrdnes = collection(db, "ordenes");
    getDocs(dataOrdnes).then((res) => {
      console.log(res.docs);
      console.log(res.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      setOrdenes(res.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  };

  useEffect(() => {
    traerOrdenes();
  }, []);


  const totales = () => {
    let total = 0;
    cartItems.map((item) => (total += item.qty * item.price));
    return total;
  };


  let orden = {
    buyer: form,
    cartItems,
    total: totales(),
  };

  const setearDocumento = () => {
    setDoc(doc(db, "ordenes", `${Object.keys(ordenes).length}`), {
      orden: orden,
    });
    alert(
      `Gracias por su compra!\n Su número de orden es: ${
        Object.keys(ordenes).length
      }`
    );
    traerOrdenes();
  };

  const datosIngresados = () => {
    return (
      form.nombre !== "" &&
      form.telefono !== "" &&
      form.email !== "" &&
      form.email2 !== ""
    );
  };

  const emailIguales = () => {
    return form.email === form.email2;
  };

const handleChange = e => {
    setForm({
    ...form, 
    [e.target.name]: e.target.value,
    });
}

useEffect (() => {
    const db = getFirestore();

    const data = doc(db, "items", "xM4JF8qfH8M5M14IfJaG");
    getDoc(data).then((snapshot)=>{
        console.log(snapshot.data())
            setStateData ([snapshot.data()]);
    });
}, []);




   return <main className="block col-2">
       <h2>Ingrese sus datos para finalizar la compra</h2>
        <forms>
            <label htmlFor="nombre">Nombre y Apellido</label>
            <input type="text" id="nombre" name="nombre" value={form.nombre} onChange={handleChange
            
        }/>

            <br/>
            <br/>
            <label htmlFor="telefono">Telefono  </label>
            <input type="number" id="telefono" name="telefono" value={form.telefono} onChange={handleChange}/>
            <br/>
            <br/>
            <label htmlFor="email">Email     </label>
            <input type="email" id="email" name="email" value={form.email} onChange={handleChange}/>
            <label htmlFor="email2">  Reingrese su Email     </label>
            <input type="email" id="email2" name="email2" value={form.email2} onChange={handleChange}/>
            {!emailIguales() && <div>Los emails deben ser iguales</div>}
          <br/>
          <br/>
          {datosIngresados() && emailIguales() && (
          <button
            onClick={() => {
              setearDocumento();VaciarCart();
            }}
            disabled={!emailIguales()}
            type="submit"
            className="btn"
          >
            Realizar compra
          </button>
        )}
        </forms>
       <div><Basket/></div>

    </main>;

}


import react, { useEffect, useState } from "react";
import {doc, getDoc, getFirestore} from "firebase/firestore"



export default function Fin (){

const [stateData, setStateData] = useState([]);
const [form, setForm]= useState ({});


const handleChange = e => {
    setForm({
    ...form, 
    [e.target.name]: e.target.value,
    });
}

/*
this.state = {
    form: []
  };



const params = {
  name: this.inputName.value,
  email: this.inputEmail.value,
  telefono: this.inputPhone.value,
};


*/

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
            //ref={name => this.inputName = name}
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
          <br/>
          <br/>
            <button type='submit' className='btn'>Enviar</button>
        </forms>
    </main>;

}


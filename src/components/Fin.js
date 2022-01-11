import react, { useEffect, useState } from "react";
import {doc, getDoc, getFirestore} from "firebase/firestore"




export default function Fin (){

const [stateData, setStateData] = useState([]);

useEffect (() => {
    const db = getFirestore();

    const data = doc(db, "items", "xM4JF8qfH8M5M14IfJaG");
    getDoc(data).then((snapshot)=>{
        console.log(snapshot.data())
            setStateData ([snapshot.data()]);
    });
}, []);




   return <main className="block col-2">
        <h2>Gracias por tu compra, nos pondremos en contacto</h2>
    </main>;

}
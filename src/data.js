import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore} from "firebase/firestore";

export default function Datos (){

const db = getFirestore();


const querySnapshot = await getDocs(collection(db, "products"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});

}


/*

const dato = [];
const [stateData, setStateData] = useState([]);




useEffect (() => {
  const fetchData = async() => {
      const db = getFirestore();
      const data = doc(db, "items", "xM4JF8qfH8M5M14IfJaG");
      await getDoc(data).then((snapshot)=>{
          console.log(snapshot.data())
          setStateData ([data=snapshot.data()]);
          console.log("hola",data)
       })
  }
  ;
}, []); 
}

  
    products: [
      {
        id: '1',
        name: 'Cheesecake',
        price: 1400,
        image: 'https://martoabra.github.io/almendraycoco/assets/1b.jpg',
        detail: "Suave crema de queso con chocolate blanco, mermelada de arandanos y virutas de chocolate blanco",
        categoria: '1',
        qty: 0,
      },
      {
        id: '2',
        name: 'NY',
        price: 2400,
        image: 'https://martoabra.github.io/almendraycoco/assets/2b.jpg',
        detail: 'Suave crema de queso con mermelada de arandanos casera y frutos rojos',
        categoria: '1',
        qty: 0,
      },
      {
        id: '3',
        name: 'Brownie',
        price: 1000,
        image: 'https://martoabra.github.io/almendraycoco/assets/3b.jpg',
        detail:'Brownie humedo con dulce de leche, merengue suizo e hilos de chocolate',
        categoria: '2',
        qty: 0,
      },
      {
        id: '4',
        name: 'Marquise',
        price: 1800,
        image: 'https://martoabra.github.io/almendraycoco/assets/4b.jpg',
        detail: 'Base de brownie humedo con dulce de leche, crema, chocolatines blancos y negros, frambuesas, hojas de menta, huevo kinder y galletitas "Oreos bañadas"',
        categoria: '2',
        qty: 0,
      },
      {
        id: '5',
        name: 'Chocotorta',
        price: 3000,
        image: 'https://martoabra.github.io/almendraycoco/assets/5b.jpg',
        detail: "Mezcla de queso crema y dulce de leche con galletitas chocolinas decorada con hilos de chocolate ",
        categoria: '2',
        qty: 0,
      },
      {
        id: '6',
        name: 'Oreo',
        price: 5000,
        image: 'https://martoabra.github.io/almendraycoco/assets/6b.jpg',
        detail:'Torta a base de Oreo, dulce de leche y crema batida decorada con hilos de chocolate y galletitas oreo por encima',
        categoria: '2',
        qty: 0,
      }
    ],
  */
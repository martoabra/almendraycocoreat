import react from "react";
import fotojenny from '../assets/fotojenny.png' ;
import '../App.css';


export default function Quienes (){
   return <main className="quienes block col-2">
<img className="fotoQuienes" alt="Jenny" src={fotojenny} ></img>
        <a className="textoQuienes">Almendra y Coco es un micro emprendimiento creado por una licenciada en gastronomía graduada del IAG (Instituto Argentino de Gastronomía).

<p>Nos especializamos en tortas y finger food.</p>

<p>Utilizamos materia prima de primera calidad.</p>

<p>Dado que nuestra filosofía es mantener la frescura de nuestros productos, tomamos pedidos únicamente con TRES días de anticipación</p></a>
    </main>;

}
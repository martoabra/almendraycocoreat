# Carrito de compas para "almendra y coco"


## ¿Que puede hacer el usuario dentro de nuetra app?

Cuando el usuario ingresa a "Almendra y coco" se encuentra con los productos disponibles que están subidos firebase.
Al hacer click sobre un producto lo dirige al detalle de ese mismo producto donde vera la descripción y tendrá la opción de agregarlo al carrito.
El carrito puede visualizarse en todo momento haciendo click sobre el icono en la parte superior derecha.
Dentro del carrito tendrá la opción de sumar restar o eliminar el producto previamente agregado, así como también vaciar el carrito por completo o continuar al final de la compra.
En el final de la compra se encuentra un Form donde debe llenar el usuario sus datos, una vez completado habilita el botón para finalizar y envia la orden a firebase.
El cliente obtiene su número de orden que corresponde al "length" de firebase.

Dentro del Navbar nos encontramos con las pestañas "Quienes somos" "Categorias" "Productos" y "Home".

Tanto "Productos" como "Home" nos llevaran al mismo lugar dado que corresponen a la misma pagina.
En "Quienes somos" nos encontramos con una breve descripcion de quien esta detras del emprendimiento gastronomico y en "Categorias" podemos ver los productos divididos en dos categorias: Chocolate y Queso.



## Tecnologias Utilizadas

* React Js
* Firebase
* Context
* Html y Css
* JavaScript

## Como fue programado

La pagina esta dividida por componentes, explicaremos aquellos componentes que no se listaron en clase:

### `Quienes`
Este componente corresponde a la pagina de descripcion de la empresa.
### `Product`
Este componente es el que levanta las "Cards" de los productos
### `Main`
Este componente genera el mapeo de las "Cards" y las imprime, es el container de los items que se ven en "Product"
### `Fin`
El componente Fin corresponde al final del recorrido del usuario donde se encuentra el forms final que envia el carrito y la informacion a firebase.
### `Dropdown`
Este componente genera el dropdown de las categorias.
### `Basket`
Basket es el carrito que originalmente su nombre era Cart.
### `Carpeta cart`
Dentro de la carpeta cart se encuentra el CartContext, el CartReducer y el CartState, y fuera de ella el archivo Types

Se definen los nombres de las acciones que luego se   "dispachan". El reducer tiene un estilo de "switch", dependiendo del nombre que recibe se "dispacha" una funcion, con eso tenemos un solo lugar donde mandamos todas las acciones y el reducer "dispacha" una funcion definida dependiendo de lo recibido.

## Creditos

Martin Abramowicz (Github: martoabra)
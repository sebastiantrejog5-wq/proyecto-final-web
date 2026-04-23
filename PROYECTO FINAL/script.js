let subtotal=0;

function agregarProducto(nombre,precio){

let tabla=document.getElementById("tablaCarrito");

let fila=tabla.insertRow(-1);

let celda1=fila.insertCell(0);
let celda2=fila.insertCell(1);

celda1.innerHTML=nombre;
celda2.innerHTML="$"+precio;

subtotal=subtotal+precio;

document.getElementById("subtotal").innerHTML=subtotal;

let total=subtotal*1.16; // IVA ejemplo

document.getElementById("total").innerHTML=
total.toFixed(2);

}
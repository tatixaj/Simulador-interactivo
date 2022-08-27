
function solicitarNombre (){
    alert("Bienvenid@ a Amapola, Accesorios femeninos");
    let nombre = prompt("Ingrese su nombre");
    //while(nombre===""){
    //    nombre= prompt("Ingrese su nombre");
   // }
    while (!isNaN(nombre)) {
    alert("Error: Ingrese un nombre válido");
    nombre = prompt("Ingrese su nombre");
}
    alert ("Bienvenid@ " + nombre);
}

function mostrarProductos(){
let producto;
do{
producto = parseInt(prompt("¿Qué producto llevará? : \n1)Anillos\n2)Gargantillas\n3)Pulseras\n4)Aros\n5)Carteras y bolsos\n6)Pashminas y bufandas"))}while(producto != 1 && producto != 2 && producto != 3 && producto !=4 && producto !=5 && producto !=6)
switch(producto){
    case 1:
        return "Anillos";
    case 2:
        return "Gargantillas";
    case 3:
        return "Pulseras";
    case 4:
        return "Aros";
    case 5:
        return "Carteras y bolsos";
    case 6:
        return "Pashminas y bufandas";

}
}

function validarPrecio(producto){
    if(producto==="Anillos"){
        return 500;
    }
    else if(producto==="Gargantillas"){
        return 1000;
    }else if(producto==="Pulseras"){
        return 700;
    }else if(producto==="Aros"){
        return 380;
    }else if(producto==="Carteras y bolsos"){
        return 2800;
    }else if(producto==="Pashminas y bufandas"){
        return 1500;
}
}

function cobrar (nombre, precio) {
    alert ("Usted lleva el siguiente producto: " + nombre + "\nPrecio $" + precio);
    let pago =  parseInt (prompt ("¿Con cuánto pagas?"));
    if (pago >= precio) {
        alert ("Gracias por su compra! \nSu vuelto es $ " + (pago - precio));
    } else {
        alert ("No te alcanzó 👎 \nVuelve a intentar");
        cobrar (productoNombre, precioProducto);
    }
}

solicitarNombre();
let productoNombre = mostrarProductos();
let precioProducto = validarPrecio(productoNombre);
cobrar(productoNombre,precioProducto)
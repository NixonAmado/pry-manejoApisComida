import { administrarPlatos } from './index.js';

class CarritoManagement{
    constructor(){
        this.carrito = [];
    }

    añadirAlCarrito(index){
        let añadirPlato = administrarPlatos.platos[index]; 
        this.carrito.push(añadirPlato)
        console.log(this.carrito);
    }

    carritoLocalStorage(){
        localStorage.setItem("carrito",JSON.stringify(this.carrito))
    }
}
export {CarritoManagement} 

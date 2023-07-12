import { Plato, PlateManagement } from './ClasesPlato.js';
import { CarritoManagement } from './Carrito.js';

let administrarCarrito = new CarritoManagement();
let administrarPlatos = new PlateManagement();

async function fetchData(filtro='https://www.themealdb.com/api/json/v1/1/search.php?s='){
    try{
        let data = await fetch(`${filtro}`);
        let response = await data.json();
        return response;
    }
    catch(e){
        console.error("Failed to fetch" + e)
    }
}

async function GuardarApi(){
    let data = await fetchData();
    data.meals.forEach(element => {
        let plato = new Plato(element);
        administrarPlatos.añadirPlato(plato);
    });
    administrarPlatos.consumirEnLocalStorage()
    mostrarPlatos();
} 

function mostrarPlatos(){
    let cardPlatosContainer = document.getElementById('plate-card_container');
    let platosDisponibles = JSON.parse(localStorage.getItem('platos'))||[];
    console.log(platosDisponibles)
    platosDisponibles.forEach((element) => {
        cardPlatosContainer.innerHTML+=
        
        `
        <div class="col">
        <div class="card">
            <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
              <img src="${element.imagen}" class="img-fluid" />
              <a href="#!">
                <div class="mask" style="background-color: rgba(251, 251, 251, 0.15)"></div>
              </a>
            </div>
          
            <div class="card-body text-center">
              <h5 class="card-title">${element.nombre}</h5>
          
              <button type="button" class="btn btn-primary w-100 btn-añadirAlCarrito" >Añadir al carrito</button>
            </div>
          </div>
        </div> 
        `   
        })
        agregarEventos()
}

function agregarEventos(){
    let btnAñadiAlCarrito = document.getElementsByClassName('btn-añadirAlCarrito')
    for (let index = 0; index < btnAñadiAlCarrito.length; index++) {
        btnAñadiAlCarrito[index].addEventListener("click", function() {
        administrarCarrito.añadirAlCarrito(index);
    })
  }
}




// guardar los datos en el localStorage
//se hace para gurdar los cambios o alctualizaciones que haga el cliente o a si mismo el programador para añadir o eliminar platos
let platos = JSON.parse(localStorage.getItem('platos'))||[];
let carrito = JSON.parse(localStorage.getItem('carrito'))||[];

GuardarApi()


export{administrarPlatos}


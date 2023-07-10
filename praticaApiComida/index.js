class Plato{
    constructor(apiPlato){
        this.id = apiPlato.idMeal;
        this.nombre = apiPlato.strMeal;
        this.categoria = apiPlato.strCategory;
        this.area = apiPlato.strArea;
        this.imagen = apiPlato.strMealThumb;
        this.tags = apiPlato.strTags;
    }


}

class PlateManagement{
    constructor(){
        this.platos = [];
    }
    añadirPlatos(apiPlatos){
        this.platos.push(apiPlatos);
    }

    consumirEnLocalStorage(){
        localStorage.setItem("platos",JSON.stringify(apiPlatos));
    }
    eliminarPlato(){
        this.platos.splice(index,1);
    }
    }



let administrarPlatos = new PlateManagement()
fetchData();
async function fetchData(filtro='https://www.themealdb.com/api/json/v1/1/search.php?s='){
    try{
        let data = await fetch(`${filtro}`);
        let response = data.json();
        await response.forEach(element => {
            let plato = Plato(element)
            añadirPlatos(plato);
            console.log(plato);
        });
    }
    catch(e){
        console.error("Failed to fetch" + e)
    }
}


let platos = JSON.parse(localStorage.getItem('platos'))||[];






{/* <div class="col">
<div class="card">
    <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
      <img src="https://mdbootstrap.com/img/new/standard/nature/111.webp" class="img-fluid" />
      <a href="#!">
        <div class="mask" style="background-color: rgba(251, 251, 251, 0.15)"></div>
      </a>
    </div>
  
    <div class="card-body text-center">
      <h5 class="card-title">Card title</h5>
  
      <button type="button" class="btn btn-primary w-100">Añadir al carrito</button>
    </div>
  </div>
</div> */}
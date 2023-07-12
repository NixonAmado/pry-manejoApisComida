export {Plato,PlateManagement}

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
    añadirPlato(apiPlatos){
        this.platos.push(apiPlatos);
        console.log(this.platos)
    }

    consumirEnLocalStorage(){
        localStorage.setItem("platos",JSON.stringify(this.platos));
    }
    eliminarPlato(){
        this.platos.splice(index,1);
    }
    }



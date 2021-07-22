// El fin es contruir un mensaje con los horarios en que se ven las películas
//Cada constructor va a crear un objeto con el horario de la película
class BlackWidow{
    constructor (horario1){
        this.horario1 = horario1;
    }

    mostrarBW(){
        return ("El horario de Black Widow es "+this.horario1)
    }
}

//Aquí se instancian las películas con sus horarios
const pelicula1 = new BlackWidow("16:30, 18:45, 20:55");

class ElConjuro{
    constructor (horario2){
        this.horario2 = horario2;
    }

    mostrarEC(){
        return ("El horario de El Conjuro: El Diablo Me Obligó a Hacerlo es "+this.horario2)
    }
}

//Aquí se instancian las películas con sus horarios
const pelicula2 = new ElConjuro("15:10, 17:40, 19:20");

class JungleCruise{
    constructor (horario3){
        this.horario3 = horario3;
    }

    mostrarJG(){
        return ("El horario de Jungle Cruise es "+this.horario3)
    }
}

//Aquí se instancian las películas con sus horarios
const pelicula3 = new JungleCruise("15:45, 18:30, 21:10");

//Esta funcion en teoría permite elegir la película para que un ALERT muestre sus horarios
function elegirPeli(){
    for (let i = 1; i <4; i++){
        if (ingreso === 1){
            alert(pelicula1.mostrarBW());
        }
        if (ingreso === 2){
            alert(pelicula2.mostrarEC())
        }
        else if (ingreso === 3){
            alert(pelicula3.mostrarJG())
        }
    }
}

//Aquí se entera de la forma de elegir la película, hay un prompt para ingresar el número de la película
let ingreso = prompt("¿Cuál película te gustaría ver:"+"\n"+"\n"+"1 Black Widow"+"\n"+"\n"+
            "2 El Conjuro: El Diablo Me Obligó a Hacerlo"+"\n"+"\n"+"3 Jungle Cruise"+"\n"+"\n"+
            "Escribe el número de la película para saber los horarios");

pelicula1.mostrarBW();
pelicula2.mostrarEC();
pelicula3.mostrarJG();
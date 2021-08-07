//Con esta class creamos la cartelera, dando el nombre y el horario de una pelicula
class Cartelera{
    constructor (nombre, horario){
        this.nombre = nombre;
        this.horario = horario;
    }

    elegirPeli(){
        return ("El horario de "+this.nombre+" es "+this.horario);
    }
}

//Aqui instanciamos las peliculas de la cartelera

const pelicula1 = new Cartelera ("Black Widow", "16:30, 18:45, 20:55");
const pelicula2 = new Cartelera ("El Conjuro: El Diablo Me Obligó a Hacerlo",
                    "15:10, 17:40, 19:20");
const pelicula3 = new Cartelera ("The Suicide Squad", "15:45, 18:30, 21:10");
const pelicula4 = new Cartelera ("Venom: Habrá Matanza", "16:10, 18:55, 20:40");
const pelicula5 = new Cartelera ("Halloween Kills", "17:40, 20:30, 22:10");
const pelicula6 = new Cartelera ("Jackass Por Siempre", "15:15, 17:40, 20:10");
const pelicula7 = new Cartelera ("Top Gun: Maverick", "15:55, 16:35, 18:50");
const pelicula8 = new Cartelera ("Matrix IV", "18:00, 20:20, 22:00");
const pelicula9 = new Cartelera ("Spiderman: Sin Camino A Casa", "17:00, 19:20, 21:00");

//Aqui se ejecuta una función para elegir la película
function mostrarPeli(){
    for (let i = 1; i <5; i++){
        if (ingreso == 1){
            alert(pelicula1.elegirPeli());
            break;
        }
        if (ingreso == 2){
            alert(pelicula2.elegirPeli())
            break;
        }
        if (ingreso == 3){
            alert(pelicula3.elegirPeli())
            break;
        }
        if (ingreso == 4){
            alert(pelicula4.elegirPeli())
            break;
        }
        if (ingreso == 5){
            alert(pelicula5.elegirPeli())
            break;
        }
    }
}

//Aquí se entera de la forma de elegir la película, hay un prompt para ingresar el número de la película
let ingreso = prompt("¿Cuál película te gustaría ver:"+"\n"+"\n"+"1 Black Widow"+"\n"+"\n"+
            "2 El Conjuro: El Diablo Me Obligó a Hacerlo"+"\n"+"\n"+"3 The Suicide Squad"+"\n"+"\n"+
            "4 Venom: Habrá Matanza"+"\n"+"\n"+"5 Halloween Kills"+"\n"+"\n"+"Escribe el número de la película para saber los horarios");

//Esta variable es la que ejecuta la función que le permite al usuario elegir una película
let salida = mostrarPeli(ingreso);


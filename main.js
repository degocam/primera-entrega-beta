// El fin es contruir un mensaje con los horarios en que se ven las películas
//Cada constructor va a crear un objeto con el horario de la película
class BlackWidow{
    constructor (horario1){
        this.horario1 = horario1;
    }

    mostrarBW(){
        alert ("El horario de Black Widow es "+this.horario1)
    }
}

//Aquí se instancian las películas con sus horarios
const pelicula1 = new BlackWidow("16:30, 18:45, 20:55");

class ElConjuro{
    constructor (horario2){
        this.horario2 = horario2;
    }

    mostrarEC(){
        alert ("El horario de El Conjuro: El Diablo Me Obligó a Hacerlo es "+this.horario2)
    }
}

//Aquí se instancian las películas con sus horarios
const pelicula2 = new ElConjuro("15:10, 17:40, 19:20");

class JungleCruise{
    constructor (horario3){
        this.horario3 = horario3;
    }

    mostrarJG(){
        alert ("El horario de Jungle Cruise es "+this.horario3)
    }
}

//Aquí se instancian las películas con sus horarios
const pelicula3 = new JungleCruise("15:45, 18:30, 21:10");

//Esta funcion en teoría permite elegir la película para que un ALERT muestre sus horarios
function elegirPeli(ingreso){
    for (let i = 0; i <=3; i++){
        if (ingreso == 1){
            alert(mostrarBW);
        }
        if (ingreso == 2){
            alert(mostrarEC)
        }
        if (ingreso == 3){
            alert(mostrarJG)
        }
    }
}

//Aquí se entera de la forma de elegir la película, hay un prompt para ingresar el número de la película
let ingreso = prompt("¿Cuál película te gustaría ver:"+"\n"+"\n"+"1 Black Widow"+"\n"+"\n"+
            "2 El Conjuro: El Diablo Me Obligó a Hacerlo"+"\n"+"\n"+"3 The Suicide Squad"+"\n"+"\n"+
            "Escribe el número de la película para saber los horarios");

let salida = elegirPeli(ingreso);

// pelicula1.mostrarBW();
// pelicula2.mostrarEC();
// pelicula3.mostrarJG();

//El fin de este constructor es crear un mensaje con los horarios de las películas
//Cada objecto corresponde a una película la cual tiene un nombre, un horario y un id
// class Pelicula{
//     constructor (nombre, horario, id){
//         this.nombre = nombre;
//         this.horario = horario;
//         this.id = id;
//     }

// //Este método es el que recoge los elementos del objeto/película y los muestra como un mensaje en un ALERT
// elegirPeli(ingreso){
//     for (let i = 1; i <4; i++){
//         if (ingreso == 1){
//             alert(mostrarBW);
//         }
//         if (ingreso == 2){
//             alert(mostrarEC)
//         }
//         else if (ingreso == 3){
//             alert(mostrarJG)
//         }
//     }
// }
// }

// //Este es el array que contendrá al objeto con sus elementos
// const peliculas = [];

// //Acá instanciamos a partir del constructor 4 películas con sus horarios
// peliculas.push(new Pelicula('Black Widow', '16:30, 18:45, 20:55', 1));
// peliculas.push(new Pelicula('El Conjuro: El Diablo Me Obligó a Hacerlo', '15:h10, 17:40, 19:20', 2));
// peliculas.push(new Pelicula('The Suicide Squad', '15:45, 18:30, 21:10', 3));
// peliculas.push(new Pelicula('Venom: Carnage Liberado', '19:15, 21:35, 22:00', 4));

// //En este bucle creamos un mensaje para cada objeto instanciado
// for (const peliculaElegida of peliculas)
// peliculaElegida.elegirPeli();

// // //Aquí se entera de la forma de elegir la película, hay un prompt para ingresar el número de la película
// let ingreso = prompt("¿Cuál película te gustaría ver:"+"\n"+"\n"+"1 Black Widow"+"\n"+"\n"+
//             "2 El Conjuro: El Diablo Me Obligó a Hacerlo"+"\n"+"\n"+"3 Jungle Cruise"+"\n"+"\n"+
//             "Escribe el número de la película para saber los horarios");

// elegirPeli(ingreso);
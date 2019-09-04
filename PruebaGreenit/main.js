//Creación de Array de Objetos
var Alimentos = [
    {nombre: "Manzana", vegetariano: "yeah", mediterranea: "yeah", vegana: "yeah", rica_en_fibra: "yeah"},
    {nombre: "Pera", vegetariano: "yeah", mediterranea: "nope", vegana: "yeah", rica_en_fibra: "yeah"},
    {nombre: "Huevo", vegetariano: "yeah", mediterranea: "yeah", vegana: "nope", rica_en_fibra: "nope"},
    {nombre: "Jamón", vegetariano: "nope", mediterranea: "yeah", vegana: "nope", rica_en_fibra: "nope"}
]
//console.log(Alimentos[x].nombre); -Pruebas de consola que muestra el valor de las propiedades del objeto de posicion "x" del array

//Función del botón busqueda
function MostrarAlimentos(){
    
    var opciones = document.formulario.validartip; //guarda el número de opciones de dietas en un array

    for(var i=0; i<opciones.length;i++){ //For que evalua cual de las opciones está seleccionada
        if(opciones[i].checked ==true){
            var eleccion = opciones[i].value; //Guarda la opción en una variable
        }

        var resultadosEscritos = document.getElementById("resultados"); //Llama en el código HTML al id "resultados" y accede a su contenido guardándolo en una variable
        resultadosEscritos.innerHTML=""; //Limpia el div resultados cada vez que el usuario realiza una busqueda
    }
        
    switch(eleccion){ //Switch que evalua a parir de la selección del tipo de dieta lo que debe hacer en cada caso
        case "vegetariana": //Caso  de tipo vegetariana
        for(k in  Alimentos){ //For que recorre todo el array de objetos
            if(Alimentos[k].vegetariano=="yeah"){ //Comprueba si la propiedad vegetariano es verdadera
                    resultadosEscritos.innerHTML += Alimentos[k].nombre+ "<br>"; //De todos los objetos donde vegetariano = "yeah" escribe en el HTML el nombre de ese objeto en el interior del div "resultados" del HTML
            }
        }
        break;

        case "vegana": //Caso  de tipo vegana
        for(k in  Alimentos){ //For que recorre todo el array de objetos
            if(Alimentos[k].vegana=="yeah"){ //Comprueba si la propiedad vegana es verdadera
                    resultadosEscritos.innerHTML += Alimentos[k].nombre + "<br>"; //De todos los objetos donde vegana = "yeah" escribe en el HTML el nombre de ese objeto en el interior del div "resultados" del HTML
            }
        }
        break;

        case "mediterranea": //Caso  de tipo mediterranea
        for(k in  Alimentos){ //For que recorre todo el array de objetos
            if(Alimentos[k].mediterranea=="yeah"){ //Comprueba si la propiedad mediterranea es verdadera
                    resultadosEscritos.innerHTML += Alimentos[k].nombre + "<br>"; //De todos los objetos donde mediterranea = "yeah" escribe en el HTML el nombre de ese objeto en el interior del div "resultados" del HTML
            }
        }
        break;

        case "rica_en_fibra": //Caso  de tipo Rica en Fibra
        for(k in  Alimentos){ //For que recorre todo el array de objetos
            if(Alimentos[k].rica_en_fibra=="yeah"){ //Comprueba si la propiedad rica en fibra es verdadera
                    resultadosEscritos.innerHTML += Alimentos[k].nombre + "<br>"; //De todos los objetos donde rica_en_fibra = "yeah" escribe en el HTML el nombre de ese objeto en el interior del div "resultados" del HTML
            }
        }
        break;

        case "todas": //Caso de todos
        for(k in  Alimentos){ //For que recorre todo el array de objetos
                    resultadosEscritos.innerHTML += Alimentos[k].nombre + "<br>"; //Muestra el nombre de todos los Objetos del Array de objetos
        }
        break;

        default: alert("Debes seleccionar una opción de Dieta "); break; //Por defecto muestra una alerta al usuario
    }  
}
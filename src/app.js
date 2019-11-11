

// se importa la primera vista a imprimir
import {initRouter} from './router.js';
import {initFirebase} from './js/initFirebase.js';
import { observer } from './controllerFunction/functionLogin.js';


//Inicializamos Firebase y el observador
 export  const init = () => {
    
    initFirebase();
    observer();
    initRouter();
    
 }
 // aquí le decimos que cada vez que la pagina cargue debe realizar la funcion init
window.addEventListener('load', init);



// se importa la primera vista a imprimir 

// se importa la primera vista a imprimir 
import {initRouter} from './router.js';
import {initFirebase} from './js/initFirebase.js';

const init = () => {
    //la primera vista que se imprime en pantalla

    initRouter();
    initFirebase();
 }
 // aquí le decimos que cada vez que la pagina cargue debe realizar la funcion init
window.addEventListener('load', init);



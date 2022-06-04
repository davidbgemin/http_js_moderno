import {} from './css/styles.css';
// import {init} from './js/usuarios';
import {init} from './js/chistes';
// import {init} from './js/subir_archivo';
init();

import * as CRUD from './js/crud';
CRUD.getUsuario(2).then(console.log);

CRUD.crearUsuario({
    name: 'David',
    job: 'Sistemas'
}).then(console.log)

CRUD.actualizarUsuario(1, {
    name: "Melissa",
    job: "developer"
}).then(console.log)

CRUD.borrarUsuario(1).then(console.log)
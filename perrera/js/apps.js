let lp = new ListaPerros();

// Funciones para operar con clase Perro y de clase ListaPerros.
function cargarDatos() {
    let nombre = '';
    let cargar = true;
    while (cargar) {
        nombre = prompt('Nombre del perro: ')
        estado = prompt('Estado (EA: En adopción, PA: Proceso de adopción AD: Adoptado): ')
        perrito = new Perro(nombre, estado);
        lp.agregarPerro(perrito);
        cargar = confirm('Quiere cargar otro perrito?');
    }
}

function listadoGeneral() {
    console.log('Listado general');
    lp.listadoGeneral();
}

function listadoPorEstado(estado) {
    switch (estado) {
        case 'EA':
            titulo = 'En Adopción';
            break;
        case 'PA':
            titulo = 'En proceso de Adopción';
            break;
        case 'AD':
            titulo = 'Adoptado';
            break;
        default:
            estado = '';
            break;
    }
    if (estado != '') {
        console.log(titulo)
        lp.listadoPorEstado(estado);    
    } else {
        console.log('Estado incorrecto')
    }

}


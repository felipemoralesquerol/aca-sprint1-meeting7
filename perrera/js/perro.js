class Perro {
    constructor(nombre, estado) {
        this.nombre = nombre;
        // estados posibles: 'En adopción', 'Proceso de adopción', 'Adoptado'
        this.estado = estado;
    }

    getNombre() {
        return this.nombre;
    }

    setNombre(nombre) {
        this.nombre = nombre;
    }

    getEstado() {
        return this.estado;
    }

    setEstado(estado) {
        this.estado = estado;
    }

}

class ListaPerros {
    constructor() {
      this.arrayPerros = [];  
    }
    agregarPerro(perro) {
        this.arrayPerros.push(perro);
    }

    listadoGeneral() {
        console.log(this.arrayPerros);
    }

    listadoPorEstado(estado) {
        this.arrayPerros.forEach(element => {
            if (element.getEstado() == estado) {console.log(element)};
        });
        
    }

}









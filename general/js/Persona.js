// class
class Personas {
    constructor(n, a, altura, anio_nac) {
        this.nombre = n;
        this.apellido = a;
        this.email = undefined;
        this.altura = altura;
        this.color_ojos = undefined;
        this.anio_nacimiento = anio_nac;
        this.telefonos = []
        
    }

    nombre_completo() {
        return this.apellido + ', ' + this.nombre;
    }

    agregar_telefono(telefono) {
        this.telefonos.push(telefono)

    }

    altura_en_cm() {
        return this.altura + ' cm.'
    }

    //getter
    get_color_ojos() {
        if (this.color_ojos == undefined) {
            return 'Sin información'
        } else {
            return this.color_ojos;
        }
    }

    edad() {
        // todo: generalizar la recuperacion del año
        return 2021 - this.anio_nacimiento;
    }

    es_mayor() {
        if (this.edad()>=18) {
            return true
        }
        return false;
    }


    //setter
    set_color_ojos(color) {
        this.color_ojos = color;
    }


};
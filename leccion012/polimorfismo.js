class Empleado {
    constructor(nombre, sueldo) {

        this._nombre = nombre;
        this._sueldo = sueldo;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        return this._nombre = nombre;
    }

    get sueldo() {
        return this._sueldo;
    }

    set sueldo(sueldo) {
        return this._sueldo = sueldo;
    }

    obtenerDetalles() {
        return `Empleado: \n
            nombre: ${this._nombre}
            sueldo: ${this._sueldo}    
        `
    }

}

class Gerente extends Empleado {
    constructor(nombre, sueldo, departamento) {
        super(nombre, sueldo);

        this._departamento = departamento;
    }

    get departamento() {
        return departamento;
    }

    set departamento(departamento) {
        return this._departamento = departamento;
    }

    obtenerDetalles() {
        return `
        Gerente:
            ${super.obtenerDetalles()}
            depto :  
            ${this._departamento}
        `;
    }
}

//polimorfismo --> multiples formas
function imprimir(tipo) {
    console.log(tipo.obtenerDetalles());
}

let empleado1 = new Empleado('Mateo', 90000000);
let gerente1 = new Gerente('Lina', 1000000, 'Developer');
console.log(gerente1);

imprimir(empleado1);
imprimir(gerente1);
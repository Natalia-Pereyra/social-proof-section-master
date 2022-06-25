

/*

Una perrera municipal tiene cientos de perros para dar en adopcion. 
El primer paso es realizar un analisis de las caracteristicas que pueden tener los perros.
Crea una clase que contenga las caracteristicas de tu analisis. Si tu analisis no contempló
el estado de adopción, añade esta propiedad a tu clase:
En adopción
Proceso de adopción
Adoptado.

Crea dos metodos en tu clase:
Modificar el estado de adopción
Informar el estado de adopción

*/

class Perros {
    constructor(raza, peso, edad, estado) {
    this.raza = raza;
    this.peso = peso;
    this.edad = edad;
    this.estado = estado;
    }
    modificarAdopcion() {
    
    }
    informarAdopcion(estado) {
    return estado;
    }
}

let perro1 = new Perros("chihuahua", 2, 1, "adoptado");
console.log(perro1);
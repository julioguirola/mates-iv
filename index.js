import { biseccion, falsa_pos, newton_raphson, secante } from "./metodos.js";
import { ejemploPrimeraClase , deriv_ejmploPrimeraClase} from "./ejercicios.js";

console.log("solucion de raiz de 2:\n")
console.log("Biseccion:\n")
console.log("resultado: ", biseccion(ejemploPrimeraClase, 1, 2, 0.001) ,"\n")
console.log("Falsa Posicion:\n")
console.log("resultado: ", falsa_pos(ejemploPrimeraClase, 1, 2, 0.001) ,"\n")
console.log("Newton Raphson:\n")
console.log("resultado: ", newton_raphson(ejemploPrimeraClase, deriv_ejmploPrimeraClase, 2, 0.001) ,"\n")
console.log("Secante:\n")
console.log("resultado: ", secante(ejemploPrimeraClase, 2, 2.5, 0.001) ,"\n")
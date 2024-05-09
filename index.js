import { biseccion, falsa_pos, newton_raphson, secante } from "./metodos.js";
import { ej_17_tarea_1, ej_17_tarea_1_d, carla, carla_d} from "./ejercicios.js";

console.log("Biseccion:\n")
console.log("resultado: ", biseccion(ej_17_tarea_1, 1, 2, 0.001) ,"\n")
console.log("Falsa Posicion:\n")
console.log("resultado: ", falsa_pos(ej_17_tarea_1, 1, 2, 0.001) ,"\n")
console.log("Newton Raphson:\n")
console.log("resultado: ", newton_raphson(ej_17_tarea_1, ej_17_tarea_1_d, 2, 0.001) ,"\n")
console.log("Secante:\n")
console.log("resultado: ", secante(ej_17_tarea_1, 2, 3, 0.001) ,"\n")
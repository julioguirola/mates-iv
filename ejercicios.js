const potencia = Math.pow
const sen = Math.sin
const ln = Math.log
const cos = Math.cos

export function ejemploPrimeraClase (x) {
    return potencia(x, 2) - 2
}

export function deriv_ejmploPrimeraClase (x) {
    return 2 * x
}

export function ejDiezTareaUno (x) {
    return potencia(x, 4) - 6 * potencia(x, 2) - x + 2 
}

export function ejCuatroTareaUno (x) {
    return potencia(x, 2) * sen(x)
}

export function clase_dos (x) {
    return sen(x) - ln(x)
}

export function ejemp_conf (x) {
    return cos(x) - x
}

export function ejmpNR (x) {
    return potencia(x,3) - 3 * potencia(x,2) - 3 * x - 1
}

export function deriv_ejmpNR (x) {
    return 3 * potencia(x,2) - 6 * x - 3
}

export function ejm_sec (x) {
    return potencia(x,3) - 3 * potencia(x,2) - 3 * x - 1
}

export function ej_17_tarea_1 (x) {
    return potencia(x,4) + 4 * potencia(x,3) - 5 * x - 1
}

export function ej_17_tarea_1_d (x) {
    return 4 * potencia(x,3) + 12 * potencia(x,2) - 5
}

export function carla (x) {
    return potencia(x,4) - 4 * potencia(x,3) + 5 * x + 1
}

export function carla_d (x) {
    return 4 * potencia(x,3) - 12 * potencia(x,2) + 5
}


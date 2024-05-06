const potencia = Math.pow
const sen = Math.sin

export function ejemploPrimeraClase (x) {
    return potencia(x, 2) - 2
}

export function ejDiezTareaUno (x) {
    return potencia(x, 4) - 6 * potencia(x, 2) - x + 2 
}

export function ejCuatroTareaUno (x) {
    return potencia(x, 2) * sen(x)
}
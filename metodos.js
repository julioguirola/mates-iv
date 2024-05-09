const poner_en_la_tabla = console.log
const modulo = Math.abs

export function biseccion (funcion, a, b, err) {
    let cant_iteraciones = 0
    let med
    let err_act

    do {
        med = (a + b) / 2
        err_act = modulo(b-a)/2
        poner_en_la_tabla(
            cant_iteraciones,
            "a: ", a,
            "b: ", b,
            "pm: ", med,
            "error: ", err_act
        )
        if (err_act < err) return med
        if ((funcion(med) > 0) == (funcion(a) > 0)) {
            a = med
        } else {
            b = med
        }
        cant_iteraciones++;
    } while (true)
}

export function falsa_pos (funcion, a, b, err) {
    let cant_iteraciones = 0
    let x_ant = 10
    let x
    let err_act

    do {
        x = a - (b - a)/(funcion(b) - funcion(a)) * funcion(a)
        err_act = modulo(x - x_ant)
        poner_en_la_tabla(cant_iteraciones, "a: ", a, "b: ", b, "x: ", x, "err: ", err_act)
        if (err_act < err) return x
        cant_iteraciones++;
        x_ant = x

        if ((funcion(x) > 0) == (funcion(a) > 0)) {
            a = x
        } else {
            b = x
        }
    } while(true)
}

export function newton_raphson (funcion, funcion_deriv, x, err) {
    let cant_iteraciones = 0
    let x_ant = x
    let err_act

    do {
        x = x_ant - funcion(x_ant)/funcion_deriv(x_ant)
        err_act = modulo(x - x_ant)
        poner_en_la_tabla(cant_iteraciones, "x: ", x, "err: ", err_act)
        if (err_act < err) return x
        
        cant_iteraciones++;
        x_ant = x
    } while(true)
}

export function secante (funcion, x_1, x_0, err) {
    let cant_iteraciones = 0
    let err_act
    let x

    do {
        x = x_1 - (x_1 - x_0)/(funcion(x_1) - funcion(x_0)) * funcion(x_1)
        err_act = modulo(x - x_1)
        poner_en_la_tabla(cant_iteraciones, "x: ", x, "err: ", err_act)
        if (err_act < err) return x
        
        cant_iteraciones++;
        x_1 = x_0
        x_0 = x
    } while(true)
}
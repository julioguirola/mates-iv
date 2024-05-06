class Punto {
    constructor(valor, signo) {
        this.valor = valor
        this.signo = signo
    }
}

export function biseccion (ejers, a, b, err) {
    let p_a = new Punto(a, ejers(a) > 0)
    let p_b = new Punto(b, ejers(b) > 0)
    let med = (p_a.valor + p_b.valor) / 2
    let p_m = new Punto(med, ejers(med) > 0)

    while (Math.abs(p_b.valor-p_a.valor)/2 > err) {
        if (p_m.signo == p_a.signo ) {
            p_a = p_m
        } else {
            p_b = p_m
        }
        med = (p_a.valor + p_b.valor) / 2
        p_m = new Punto(med, ejers(med) > 0)
    }

    return p_m.valor
}
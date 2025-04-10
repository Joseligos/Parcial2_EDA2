class Colas {
    constructor() {
        this.Consultas = []
    }

    enqueue(item) {
        this.Consultas.push(item)
    }

    toArray() {
        return [...this.Consultas]
    }
}

export default Colas
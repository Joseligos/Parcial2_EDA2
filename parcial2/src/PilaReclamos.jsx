class Stacks {
    constructor() {
        this.Reclamos = []
    }

    push(value) {
        this.Reclamos.push(value)
    }

    toArray() {
        return [...this.Reclamos]
    }
}

export default Stacks
class DoubleNode {
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DoubleLinkedList {
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    append(value){
        const newNode = new DoubleNode(value)

        if(!this.head){
            this.head = newNode
            this.tail = newNode
            return
        }

        this.tail.next = newNode
        newNode.prev = this.tail
        this.tail = newNode
        
        this.length ++
    }
}

export default DoubleLinkedList
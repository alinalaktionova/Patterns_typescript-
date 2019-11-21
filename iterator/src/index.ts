interface IteratorInterface<T> {
    current(): T;
    key(): number;
    next(): T;
    hasNext(): boolean;
}

class Iterator<T> implements IteratorInterface<T> {
    private collection: T[];
    private reverse: boolean = true;
    private index: number;

    constructor(collection: T[], reverse: boolean) {
        this.collection = collection;
        this.reverse = reverse;
        this.index = (this.reverse ? this.collection.length - 1 : 0);
    }

    public current(): T {
        return this.collection[this.index];
    }

    public key(): number {
        return this.index;
    }

    public next(): T {
    
        const item = this.collection[this.index];
        if (this.hasNext()) {
            this.index += this.reverse ? -1 : 1;
        }
        return item;
    }

    public hasNext(): boolean {
        return this.reverse ? this.index >= 0 : this.index <= this.collection.length - 1;
    }

}

const iter = new Iterator(['a', 'b', 'c', 'd','h', 'i'], false);

while (iter.hasNext()) {
    console.log(iter.next());
}

console.log(iter.key());










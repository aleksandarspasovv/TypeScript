const score: Array<number> = []
const names: Array<string> = []

function identity<T> (value: T): T {
    return value
}

function getSearchProducts<T> (products: T[]): T {
    // do some database operations
    const myIndex = 3
    return products[myIndex]
}


const getMoreSearchProducts = <T>(products: T[]): T => {
    // do some database oeprations
    const myIndex = 4
    return products[myIndex]
}                               // <T>(): => {}


interface Database {
    connection: string,
    username: string,
    password: string,
}

function anotherFunction <T, U extends Database>(value1: T, value2: U): object {
    return {value1, value2}
}

anotherFunction(3, {connection: 'a', username: 'b', password: 'a'})


interface Quiz {
    name: string,
    type: string,
}

interface Course {
    name: string,
    author: string,
    subject: string,
}

class Sellable<T>{
    public cart: T[] = []

    addToCart(product: T) {
        this.cart.push(product)
    } 
}


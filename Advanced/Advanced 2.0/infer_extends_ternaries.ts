type Generic<T> = T extends string ? true : false // if T extends string, then return true

type GenericSecond<T extends string> = { // then T extends -> SuperSet T and sting
    age: number
}

type GenericThird = {
    age: number
} & string                        //and string  

type InferGeneric<T> = T extends Array<infer A> ? A : never //dive into a type
                                                            // when you need the value in a variable

                                                            
type KeyValueSplitter<T extends string> = T extends `${infer K}:${infer V}` ? {
    key: K,
    value: V
} : never

type A = KeyValueSplitter<'name:Alex'>

// Objects

type O = {
    name: string,
    age: number,
}

type New<T> = {
    [P in keyof T as `get${Capitalize<P & string>}`]: () =>  T[P]   // get every single key inside my type of P
}

const a: New<O> = {  //age and name have gone undefined 
    getName: () => 'dsds',
    getAge: () => 123 
}

// -readonly => removes readonly
// -? -> removes optional parameters


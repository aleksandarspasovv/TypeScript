function doStuff(a, b, name){
    pritnt(a, b)
    pritnt(sayHi(name))
}

function pritnt(variable){
    console.log(variable)
}

function sum(a, b){
    console.log(a + b)
}

function sayHi(name){
    return('Hi ' + name)
}

doStuff(1, 2, 'Alex')



const getHello = (s: string): string => {
    return `${s} hello`;
}

const getHello2 = (s2: string): string => { return`hello2`};


const heroes = ['Thor', 'Ironman', 'Spiderman'];

heroes.map((hero): string => {                                //type of map element 
    return `${hero}`;
})


function consoleError(errorMessage: string): void {          //void returns nothing
    console.log(errorMessage);
}


function handleError(errMessage: string): never {            //never returns anything
    throw new Error(errMessage);
}
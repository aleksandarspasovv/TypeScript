//wrong TS behavioir

function createUser2({name: string, age: nuber}) {
    return 'user created';
}

let newUser = {name: 'Alex', age: 29, email: 'a@a.bg'};

createUser2(newUser)          //TS allows passing of a 3rd parameter email, which is wrong

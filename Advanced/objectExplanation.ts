//wrong TS behavioir

function createUser2({name: string, age: nuber}) {
    return 'user created';
}

let newUser = {name: 'Alex', age: 29, email: 'a@a.bg'};

createUser2(newUser)          //TS allows passing of a 3rd parameter email, which is wrong




// corrent way writing

type User = {
    name: string,
    email: string,
    isActive: boolean
}

function createUserCorrect(user: User): string {
    // logic for creation of the user
    // if function returns the User, then it must
    // return all the values of the paramenters
    return `User was created successfully`
}

type User2 = {
    readonly _id: string;
    name: string;
    email: string;
}

let newUser2: User2 = {
    _id: '123',
    name: 'A',
    email: 'a@a.com',
}

newUser2.email = 'b@b';
newUser2._id = '3213213' //not allowed
interface User {
    readonly dbID: number
    name: string,
    userID: number,
    googleID?: string,
    startTrial(): string,  //defining a method
    getCoupon(couponname): number,

}

interface User {
    githubToken: string;          //re-opening interface
}                                 //just adding more values

const alex: User = {
    dbID: 1312,
    name: 'Alex',
    userID: 1312,
    startTrial: () => {return 'starting trial'},
    getCoupon: (name: 'canBeAnything') => {return 10},
    githubToken: 'github',
}

alex.name = 'Alexander';

interface Admin extends User {         //extending interface
    role: 'admin' | 'TL' | 'learner'
}

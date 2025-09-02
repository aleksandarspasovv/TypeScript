interface User22 {
    name: string,
    age: number
}

interface Admin22 {
    name: string,
    age: number,
    isAdmin: boolean
}

function isAdminCheck(account: User22 | Admin22){
    if ('isAdmin' in account){
        return account.isAdmin
    }
}

type Fish = {
    swim: () => void
}

type Bird = {fly: () => void}

function isFish(pet: Bird | Fish): pet is Fish{       //pet is Fishg
    return (pet as Fish).swim !== undefined
}

function getFood(pet: Fish | Bird){
    if (isFish(pet)){
        pet
        return 'fish food'
    } else {
        pet
        return 'bird food'
    }
}
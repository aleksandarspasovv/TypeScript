class UserClass {
    email: string;
    name:string
    readonly city: string = 'Sofia'   //readonly
    private cityID: number = 1234     // private
    // public -> eveything is public

    constructor(email: string, name: string) {
        this.email = email;
        this.name = name;
    }
}

const alexander = new UserClass('a@a','Alex')


class AdminUser {
    readonly city: string = 'Sofia';

    constructor(
        public name: string,
        public email:string,
        private userID: number,
        ){}
}
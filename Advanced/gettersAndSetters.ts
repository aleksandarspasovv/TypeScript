class AdminUser2 {

    private _courseCount = 1
    protected city: string = 'Sofia'    //protected can be seen in the inherited classes

    constructor(
        public name: string,
        public email:string,
        private userID: number,
        ){}

    get getAppleEmail(): string {    //getter (used to acces properties)
        return `apple${this.email}`
    } 

    get courseCount(): number {
        return this._courseCount  //basic getter for the course count (doesnt need to be private)
    }

    set courseCount(courseNumber: number) {

        if (courseNumber <= 1) {
            throw new Error('Course count must be more than 1')
        }

        this._courseCount = courseNumber
    }

    private deleteToken(){
        console.log('token deleted');
    }
}

class SubUser extends AdminUser2 {
    isFamily: boolean = true;

    changeCityName(){
        this.city = 'Plovdiv'
    }
}
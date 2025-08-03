class AdminUser2 {

    private _courseCount = 1

    readonly city: string = 'Sofia';

    constructor(
        public name: string,
        public email:string,
        private userID: number,
        ){}

    get getAppleEmail(): string {    //getter (used to acces private parameters)
        return `apple${this.email}`
    } 

    get courseCount(): number {
        return this._courseCount  //basic getter for the course count
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
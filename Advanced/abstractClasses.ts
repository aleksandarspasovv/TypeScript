abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
    ){}

    abstract getSepia(): void // needs to have abstract so that no definition is provided
}

class Instagram2 extends TakePhoto{

    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: string   // adding to the constructor
    ){
        super(cameraMode, filter)
    }

    getSepia(): void {
        console.log('method implemented')
    }
}

const al = new Instagram2('normal', 'none', 'noBurst')

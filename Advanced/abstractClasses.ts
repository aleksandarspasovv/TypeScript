abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
    ){}
}

class Instagram2 extends TakePhoto{

}

const al = new Instagram2('normal', 'none')

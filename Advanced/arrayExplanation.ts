const superHeroes: string[] = []; // correct form string[]
                                  // also coorect number[]

superHeroes.push('SpiderMan');


const superHeroPower: number[] = []; // Array<number> aslo valid
                                     // Array<string>

superHeroPower.push(2);



type Hero {
    name: string;
    power: number;
}

const allHeroes: Hero[] = [];   //array of Hero type

allHeroes.push({name: 'Alex', power: 2});


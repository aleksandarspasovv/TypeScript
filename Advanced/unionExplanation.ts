let data: number | string = 1


data = '1';




function getID(id: number | string) {
    if (typeof id === 'number') {
        console.log(id + 2);
    } else {
        console.log(id.toLocaleLowerCase())
    };
}

const data1: number[] = [1, 2];
const data2: string[] = ['w', 'o'];
const data3: (number | string)[] = [1, 2, 'w']


let seatAllotment: 'aisle' | 'middle' | 'window'

seatAllotment = 'window';
type User<T> = {
    name: T,
    age: number,
    speak: () => string,
}

const Ivan: User<string>  = {
    name: 'Ivan',
    age: 23,
    speak(){ return 'I can speak'}
}


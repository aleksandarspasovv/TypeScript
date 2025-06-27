
//1. Singleton Class (Logger)
class Logger {
    private static instance: Logger | null = null;
    private constructor() {
        // Private constructor to prevent instantiation from outside
    }

       // Public method to get the single instance of Logger

       public static getInstance(): Logger {
        if (this.instance === null) {
            this.instance = new Logger();
        }
        return this.instance;
       }

       // Log Message

       log(message: string): void {
        console.log(`[LLog]: ${message}`);
       }

}


const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();

logger1.log('This is the first message');
logger1.log('This is the second message');

console.log(logger1 === logger2);

//------------------------------------------------------------------------
//------------------------------------------------------------------------
//------------------------------------------------------------------------


// 2.Builder Pattern


// 1. Product Class (Pizza)
class Pizza {
    private crust: string;
    private cheese: string;
    private toppings: string[];

    constructor(crsut: string, cheese: string, toopings: string[]) {
        this.crust = crsut;
        this.cheese = cheese;
        this.toppings = toopings;
    }

    displayPizza(): void {
        console.log(`Pizza with ${this.crust} crust ${this.cheese} cheese, and toopings ${this.toppings.join(', ')}`);
    }
}

//Builder Interface (PizzaBuilder)
//This is the builder interface that defines the methods for building the different parts of a pizza

interface PizzaBuiilder {
    setCrust(crust: string): void;
    setCheese(cheese: string): void;
    addTooping(toping: string): void;
    build(): Pizza;
}


// 3. Concrete Builder (ConcretePizzaBuilder)
// The concrete builder implements the PizzaBuilder interface and constructs the pizza step by step.


class ConcretePizzaBuilder implements PizzaBuiilder {
    
    private crust: string = '';
    private cheese: string = '';
    private toppings: string[] = [];

    setCrust(crust: string): void {
        this.crust = crust;
    }

    setCheese(cheese: string): void {
        this.cheese = cheese;
    }

    addTooping(toping: string): void {
        this.toppings.push(toping);
    }

    build(): Pizza {
        return new Pizza(this.crust, this.cheese, this.toppings);
    }
}

//Director (PizzaDirector)

class PizzaDirector {
    private builder: PizzaBuiilder;

    constructor(builder: PizzaBuiilder) {
        this.builder = builder;
    }

    makeMargeritaPizza(): Pizza {
        this.builder.setCrust('thin');
        this.builder.setCheese('mozzarella');
        this.builder.addTooping('tomatoes');
        return this.builder.build();
    }

    makePepperoniPizza(): Pizza {
        this.builder.setCrust('thick');
        this.builder.setCheese('cheddar');
        this.builder.addTooping('pepperoni');
        this.builder.addTooping('mushrooms');
        return this.builder.build();
    }
}

// Create the concrete builder
const pizzaBuilder = new ConcretePizzaBuilder();

// Create the director and pass the builder to it
const pizzaDirector = new PizzaDirector(pizzaBuilder);

// Create a Margherita pizza
const margheritaPizza = pizzaDirector.makeMargeritaPizza();
margheritaPizza.displayPizza();  // Pizza with thin crust, mozzarella cheese, and toppings: tomatoes

// Create a Pepperoni pizza
const pepperoniPizza = pizzaDirector.makePepperoniPizza();
pepperoniPizza.displayPizza();  // Pizza with thick crust, cheddar cheese, and toppings: pepperoni, mushrooms



// 3. Factory Pattern

interface Notification {
    send(message: string): void;
}

class EmailNotification implements Notification {
    send(message: string): void {
        console.log(`Sending email with message ${message}`);
    }
}

class SMSNotification implements Notification {
    send(message: string): void {
        console.log(`Sending SMS with this message ${message}`);
    }
}

class NotificationFactory {
    static createNotification(type: string): Notification {
        switch (type.toLowerCase()) {
            case 'email':
                return new EmailNotification();

            case 'sms':
                return new SMSNotification();

            default:
                throw new Error(`Unknown notification type`);
        }
    }
}

const notification1 = NotificationFactory.createNotification('email');
notification1.send('Welcome to the platform');

const notification2 = NotificationFactory.createNotification('sms');
notification2.send('Your code is *****');


// 4. Facade Pattern

class DVDPlayer {
    on() {
        console.log('DVD Player is on');
    }

    play(movie: string) {
        console.log(`Playing movie: ${movie}`);
    }

    off() {
        console.log(`Turning DVD Player Off`);
    }

}


class Projector {
    on() {
        console.log('Projector Player is on');
    }

    off() {
        console.log(`Turning Projector Off`);
    }
}


class SurroundSound {
    on() {
        console.log(`Surround sounf is ON`);
    }

    setVolume(level: number) {
        console.log(`Setting volume to level ${level}`;)
    }

    off() {
        console.log(`Surround sound is off`);
    }
}



class HomeTheaterFacade { //Facade Class
    private dvd: DVDPlayer;
    private projector: Projector;
    private sound: SurroundSound;

    constructor(dvd: DVDPlayer, projector: Projector, sound: SurroundSound) {
        this.dvd = dvd;
        this.projector = projector;
        this.sound = sound;
    }

    watchMovie(movie: string) {
        console.log(`Get ready tow atch a movie`);
        this.projector.on();
        this.sound.on();
        this.sound.setVolume(10);
        this.dvd.on();
        this.dvd.play(movie);
    }

    endMovie() {
        console.log(`Shutting the theater down..`);
        this.dvd.off();
        this.sound.off();
        this.projector.off();
    }
}

// Client Code

const dvdPlayer = new DVDPlayer();
const projector = new Projector();
const surroundSound = new SurroundSound();

const homeTheater = new HomeTheaterFacade(dvdPlayer, projector, surroundSound);

homeTheater.watchMovie('Inception');
homeTheater.endMovie();


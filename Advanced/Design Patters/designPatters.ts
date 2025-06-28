
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
                return  new EmailNotification();

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


// 4. Adapter Pattern

interface PaymentProcessor { // Target Interface (What app expects)
    pay(amount: number): void;
}

class ThirdPartyStripe { //Adaptee (Incompatible third-party API)
    makePayment(amountInCents: number): void {
        console.log(`Paymnet of $ ${amountInCents/ 100} made using Stripe`);
    }
}

class StripeAdapter implements PaymentProcessor { //Adapter (Converts the interface)
    private stripe: ThirdPartyStripe;

    constructor(stripe: ThirdPartyStripe) {
        this.stripe = stripe;
    }

    pay(amount: number): void {
        const amountInCents = amount * 100;
        this.stripe.makePayment(amountInCents);
    }
}

// Client expects a PaymentProcessor interface

function checkout(paymentProcessor: PaymentProcessor, amount: number) {
    paymentProcessor.pay(amount);
}

// Using Stripe via Adapter

const stripe = new ThirdPartyStripe();
const adapterStripe = new StripeAdapter(stripe);

checkout(adapterStripe, 49.99) // Client is unaware of the adapter



// 6. Strategy Pattern
// The Strategy Pattern defines a family of algorithms, encapsulates each one, and makes
// them interchangeable. It lets the algorithm vary independently from clients that use it.


interface PaymnetStartegy { // Strategy Interface
    pay(amount: number): void;
}


class CreditCardPaymnet implements PaymnetStartegy { //Concrete Strategies
    pay(amount: number): void {
        console.log(`Paid $${amount} using Credit Card`)
    }
}


class PayPalPayment implements PaymnetStartegy {
    pay(amount: number): void {
        console.log(`Paid $${amount} using PayPal`);
    }
}


class CryptoPaymnet implements PaymnetStartegy {
    pay(amount: number): void {
        console.log(`Paid $${amount} using Vrypto Wallet`);
    }
}

class PaymentContext {                      // Context Class
    private strategy: PaymnetStartegy;

    constructor(startegy: PaymnetStartegy) {
        this.strategy = startegy;
    }

    setStartegy(startegy: PaymnetStartegy){
        this.strategy = startegy;
    }

    checkout(amount: number) {
        this.strategy.pay(amount);
    }
}

const paymnet = new PaymentContext(new CreditCardPaymnet());
paymnet.checkout(100) // Paid Using Credit Card

paymnet.setStartegy(new PayPalPayment());
paymnet.checkout(75) // Paid Using Paypal

paymnet.setStartegy(new CryptoPaymnet());
paymnet.checkout(50) // Paid Using Crypto Wallet


// 7. Observer Pattern

//The Observer Pattern defines a one-to-many dependency between objects so that when
//one object (the Subject) changes state, all its Observers are notified and updated
//automatically.

interface Subscriber {                          //Observer Interface
    update(news: string): void;
}

class EmailSubscriber implements Subscriber { // Concrete Observers
    update(news: string): void {
        console.log(`Email Subscriber recieved: ${news}`);
    }
}


class SMSSubscriber implements Subscriber {
    update(news: string): void {
        console.log(`SMS Subscriber recieved ${news}`);
    }
}

interface NewsAgency {                          // Subject Interface
    subscriber(subscriber: Subscriber): void;
    unsubscribe(subscriber: Subscriber): void;
    notify(news: string): void;
}

class ConcreteNewsAgency implements NewsAgency { //Concrete Subject

    private subscibers: Subscriber[] = [];

    subscriber(subscriber: Subscriber): void {
        this.subscibers.push(subscriber);
    }

    unsubscribe(subscriber: Subscriber): void {
        this.subscibers = this.subscibers.filter(sub => sub !== subscriber);
    }

    notify(news: string): void {
        for (const sub of this.subscibers) {
            sub.update(news);
        }
    }
}

const newsAgency = new ConcreteNewsAgency();

const emailSub = new EmailSubscriber();
const smsSub = new SMSSubscriber();

newsAgency.subscriber(emailSub);
newsAgency.subscriber(smsSub);

newsAgency.notify(`Breaking News: Startegy Patter`);

newsAgency.unsubscribe(smsSub);

newsAgency.notify('Update: Startegy Pattern now avaliable!');
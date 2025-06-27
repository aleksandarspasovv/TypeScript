
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

interface User {
    name: string,
    isAdmin: boolean,
}

const users: User[] = [
    {name: 'Magi', isAdmin: false},
    {name: 'Alex', isAdmin: true},
]

function getIsAdmin(users: User[]): User[] {
    return users.filter(user => user.isAdmin);
}

type Currency = "USD" | 'EUR' | 'BGN';

function convert(amount: number, currency: Currency): string {
    return `${amount} ${currency}`;
}

function inValidEmail(email: string): boolean {
    const atIndex = email.indexOf('@');
    const dotIndex = email.indexOf('.');
    return atIndex > 0 && dotIndex > atIndex;
}

interface ApiResposne<T> {
    data: T;
    success: boolean;
    error: string | null;
}

const respose: ApiResposne<string[]> = {
    data: ['item1', 'item2'],
    success: true,
    error: null,
}

interface Product {
    id: string,
    price: number,

}

interface Product {
    id: string,
    name: string,
    price: number
}

function filterByMinPrice(products: Product[], minPrice: number): Product[] {
    return products.filter(product => product.price >= minPrice);
}


interface Users {
    name: string,
    isAdmin: boolean,
}

function getUserNames(users: Users[]): string[] {
    return users.map(user => user.name);
}

function formatUsers(users: Users[]): string[] {
    return users.map(user => `${user.name} (${user.isAdmin ? 'Admin' : 'User'})`)
}

function wrapArray<T>(value: T): T[] {
    return value[];
}


function getFirstItem<T>(item: T[]): T | undefined {
    return item[0];
}


interface Product {
    id: string;
    inStock: boolean
}

function isAvaliable(products: Product[], id:string): boolean {
    return products.some(p => p.id === id  && p.inStock);
}


interface ApiRenspose<T> {
    data: TemplateStringsArray,
    success: boolean,
    error: string | null,
}

function successResposne<T>(data: T): ApiRenspose<T> {
    return {
        data,
        success: true,
        error: null,
    };
}

function countAdminUsers(users: User[]): number {
    return users.filter(user => user.isAdmin).length;
}

// Capitalize User Names

function capitalizeUserNames(users: User[]): string[] {
    return users.map(user => user.name.charAt(0).toLocaleUpperCase() + user.name.slice(1));
}

// Format User Labels

function formatUsersTwo(users: User[]): string[] {
    return users.map(u => `${u.name} (${u.isAdmin ? 'Admin' : 'User'})`);
}

// Validate Currency Code

function isCurrency(code: string): code is Currency {
    return ['USD', 'BGN', 'EUR'].includes(code);
}


// Deep Clone Array

function deepCloneArray<T>(arr: T[]): T[] {
    return arr.map(item => JSON.parse(JSON.stringify(item)))
}

// Merge Two Objects

function mergeObjects<T, U>(a: T, b: U): T & U {
    return {...a, ...b};
}

//  Get Unique Values from Array

function getUniqueValuesFromArray(items: string[]): string[] {
    return [...new Set(items)];
}


// Exclude Admin Users

function excludeAdminUsers(users: User[]): User[] {
    return users.filter(u => !u.isAdmin);
}


// Extract Emails

interface UserWithEmail extends User {
    email: string;
}

function getValidEmails(users: UserWithEmail[]): string[] {
    return users.map(u => u.email).filter(inValidEmail)
}


// Infer type on input

function getType(value: unknown): string {
    if (typeof value === 'string') return 'string';
    if (typeof value === 'number') return 'number';
    if (typeof value === 'boolean') return 'boolean';
    return 'unknown';
}

// Add new product with ID Generator

function createProdduct(name: string, price: number): Product {
    return {
        id: Math.random().toString(36).slice(2),
        price,
    };

}

//Group by Property ????????????

function groupBy<T, K extends keyof T>(items: T[], key: K): Record<string, T[]> {
  return items.reduce((acc, item) => {
    const groupKey = String(item[key]);
    if (!acc[groupKey]) acc[groupKey] = [];
    acc[groupKey].push(item);
    return acc;
  }, {} as Record<string, T[]>);
}


// Reverse Mapping

function reverseMapping(obj: Record<string, string>): Record<string, string> {
    const result: Record<string, string> = {};

    for(const key in obj) {
        result[obj][key] = key;
    }

    return result
}

// Calculate Total Price 

function totalPrice(products: Product[]): number {
    return products.reduce((sum, p) => sum + p.price, 0);
}


// Update Product Price by ID

function updateProductById(products: Product[], id: string, newPrice: number): Product[] {
    return products.map(p => p.id === id ? {...p, price: newPrice} : p);
}

//Create Tuple

function createTuple<A, B>(a: A, b: B): [A, B] {
    return [a, b];
}


interface User {
    name: string,
    isAdmin: boolean,
}

const users: User[] = [
    {name: 'Ivan', isAdmin: false},
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


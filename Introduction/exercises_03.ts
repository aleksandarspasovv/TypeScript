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

function mapById(products: Product[], )
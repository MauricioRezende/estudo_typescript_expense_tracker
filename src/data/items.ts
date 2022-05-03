import { Item } from '../types/Item'

export const items: Item[] = [
    { 
        id: 1,
        date: new Date(2022, 4, 15),
        category: 'food',
        title: 'McDonalds',
        value: 32.12
    },
    { 
        id: 2,
        date: new Date(2022, 4, 15),
        category: 'food',
        title: 'Burder king',
        value: 28
    },
    { 
        id: 3,
        date: new Date(2022, 4, 16),
        category: 'rent',
        title: 'Aluguel Apt',
        value: 2300
    },
    { 
        id: 4,
        date: new Date(2022, 5, 18),
        category: 'salary',
        title: 'Salário ACME',
        value: 4500
    }
]
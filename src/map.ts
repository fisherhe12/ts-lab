const userMap= new Map<number,User[]>(
    [
        [1, [{ id: 1, name: 'John' }, { id: 2, name: 'Doe' }]],
        [2, [{ id: 3, name: 'Mary' }, { id: 4, name: 'Smith' }]],
    ]
)

const users = [];
users.push({ id:5, name: 'tom' });
users.push({ id:6, name: 'jerry' });
userMap.set(3, users);

 // true

interface User {
    id: number;
    name: string;
}
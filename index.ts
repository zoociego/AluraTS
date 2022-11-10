import clientClass from './AccountsManagement/clientClass'

interface clientData {
    name    : string; 
    lastname: string; 
    nid     : number;
    age     : number;
    location: string;
}

const client1 = new clientClass(
    'María',
    'Gonzalez',
    27000,
    26,
    'Santiago'
);

const client2 = new clientClass(
    'Constanza',
    'Angeles',
    27001,
    30,
    'Buenos aires'
)

const client3 = new clientClass(
    'Constanza',
    'Angeles',
    27002,
    31,
    'Montevideo'
)

const clientList: clientData[] = [
    client1,
    client2,
    client3
];

console.log(clientList);
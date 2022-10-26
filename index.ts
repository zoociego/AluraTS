import clientClass from './clientClass'
 
const checkingAccount1 =  clientClass.prototype.createCheckingAccount(1, 490001, 'CommonBank', 0);

const client1 = new clientClass(
    'María',
    'Gonzalez',
    27000,
    checkingAccount1
);

console.log(client1);







import clientClass from './AccountsManagement/clientClass'
 
const client1 = new clientClass(
    'María',
    'Gonzalez',
    27000
);

client1.createCheckingAccount(1, 49000, 'Common Bank', 1000);
client1.createSaveAccount(1, 79000, 'Common Save Bank', 1000)

client1.saveAccount.withdraw(200)

client1.account.withdraw(200)
client1.account.checkAccount()




const client2 = new clientClass(
    'Leandro',
    'Gado',
    27001
)



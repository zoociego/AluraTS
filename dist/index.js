"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var clientClass_1 = require("./AccountsManagement/clientClass");
var client1 = new clientClass_1.default('María', 'Gonzalez', 27000, 26, 'Santiago');
var client2 = new clientClass_1.default('Constanza', 'Angeles', 27001, 30, 'Buenos aires');
var client3 = new clientClass_1.default('Constanza', 'Angeles', 27002, 31, 'Montevideo');
var clientList = [
    client1,
    client2,
    client3
];
console.log(clientList);

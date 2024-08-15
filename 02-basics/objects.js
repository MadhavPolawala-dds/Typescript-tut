"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: "Madhav",
    email: "madhav@gmail.com",
    isLoggedIn: true,
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = { name: "Madhav", isPaid: false, email: "madhav@gmail.com" };
createUser(newUser);
function createCourse() {
    return {
        name: "Typescript",
        price: 999,
    };
}

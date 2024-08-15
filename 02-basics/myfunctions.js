"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addNum(num) {
    return num + 10;
}
console.log(addNum(7));
function addNumTwo(num) {
    return num + 10;
    // return "Madhav";   // Not usable when function should only return number
}
var myValue = addNumTwo(10);
console.log(myValue);
var arrowFun = function (name) {
    return "POlawala";
};
console.log(arrowFun("madhav"));
function getUpper(value) {
    return value.toUpperCase();
}
console.log(getUpper("madhav"));
function signUpUser(name, email, isLoggedIn) {
    if (isLoggedIn === void 0) { isLoggedIn = false; }
}
var loginUser = function (name, email, isLoggedIn) {
    if (isLoggedIn === void 0) { isLoggedIn = true; }
};

function addNum(num: number) {
  return num + 10;
}
console.log(addNum(7));

function addNumTwo(num: number): number {
  return num + 10;
  // return "Madhav";   // Not usable when function should only return number
}
const myValue = addNumTwo(10);
console.log(myValue);

const arrowFun = (name: string): string => {
  return "Polawala";
};

function getUpper(value: string) {
  return value.toUpperCase();
}

console.log(getUpper("madhav"));

function signUpUser(name: string, email: string, isLoggedIn: boolean = false) {}

let loginUser = (name: string, email: string, isLoggedIn: boolean = true) => {};

const ARs = ["M416", "AKM", "SCARL"];

ARs.map((AR): string => {
  return `AR includes  ${AR}`;
});

function consoleError(errMsg: string): void {
  console.log(errMsg);
}

function handleError(errMsg: string): never {
  throw new Error(errMsg);
}

export {};

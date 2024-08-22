const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: number | string): number | string {
  return val;
}
function identityTwo(val: any): any {
  return val;
}

function identityThree<Type>(val: Type): Type {
  return val;
}

identityThree("madhav");

interface Bottle {
  name: string;
  capacity: number;
}

function getSearchProducts<T>(products: T[]): T {
  const myIndex = 9;
  return products[myIndex];
}

//Through Arrow Function

const arrowMethodGetProducts = <T>(products: T[]): T => {
  const myIndex = 7;
  return products[myIndex];
};

//Generics classes

function anotherFunction<T, U>(valOne: T, valTow: U): object {
  return {
    valOne,
    valTow,
  };
}
anotherFunction(4, "9");

interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

class Sellable<T> {
  public cart: T[] = [];
  addToCart(product: T) {
    this.cart.push(product);
  }
}

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

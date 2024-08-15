let score: number | string = 99;

type User = {
  username: string;
  id: number;
};

type Admin = {
  adminName: string;
  id: number;
};

let user1: User | Admin = { username: "Madhav", id: 1372 };
user1 = { adminName: "MadhavPolawala", id: 1372 };

function getDataBaseId(id: number | string) {
  // id.toUpperCase();      // This is only usable with string, not usable with string and number combined

  if (typeof id == "string") {
    let newId = id.toUpperCase();
    return newId;
  } else {
    return id + 10;
  }
}

console.log(getDataBaseId(7));
console.log(getDataBaseId("Madhav"));

// For Array

const data1: number[] = [1, 2, 3, 4, 5, 6];
const data2: string[] = ["Madhav", "Polawala"];
const data3: (string | number)[] = [1, "Madhav", 2, "Polawala"];

let typeOfHuman: "vegetarian" | "nonvegetarian";
typeOfHuman = "vegetarian";

// typeOfHuman = "eggetarian"   // Not possible

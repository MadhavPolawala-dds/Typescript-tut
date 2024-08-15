type User = {
  readonly _id: string;
  name: string;
  email: string;
  isLoggedIn: boolean;
  creditCardNumber?: number;
};

let user1: User = {
  _id: "567a4d684a68w4d",
  name: "Madhav",
  email: "madhav@gmail.com",
  isLoggedIn: true,
  creditCardNumber: 134679258,
};

let user2: User = {
  _id: "4a684d684qw36d84",
  name: "Karan",
  email: "karan@gmail.com",
  isLoggedIn: false,
};

user1.name = "MadhavPolawala";
// user2._id = "5641aw68d4aw68d46"  not usable because of readonly

type cardNumber = {
  credNum: string;
};
type cardCvv = {
  credCvv: number;
};

type cardDetails = cardNumber & cardCvv; // Two or more Types can be combined to make one Type....

let userCard: cardDetails = {
  credNum: "456879256",
  credCvv: 292,
};

export {};

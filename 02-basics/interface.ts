interface User {
  readonly dbId: string;
  name: string;
  email: string;
  googleId?: string;
  startTrial(): String;
  getCoupon(username: string, discount: number): number;
}

interface User {
  gitHubToken: string;
}

interface Admin extends User {
  role: string;
}

let myUser: User = {
  dbId: "6as54d68as74d9684",
  name: "Madhav",
  email: "madhav@gmail.com",
  startTrial: () => {
    return "Database trial started";
  },
  getCoupon: (name: "Madhav", discount: 25) => {
    return discount;
  },
  gitHubToken: "awe54wq6e9846844",
};

let myUser2: Admin = {
  dbId: "6as54d68as74d9684",
  name: "Madhav",
  email: "madhav@gmail.com",
  startTrial: () => {
    return "Database trial started";
  },
  getCoupon: (name: "Madhav", discount: 25) => {
    return 25;
  },
  gitHubToken: "awe54wq6e9846844",
  role: "AngularDeveloper",
};

export {};

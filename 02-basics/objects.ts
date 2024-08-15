const user = {
  name: "Madhav",
  email: "madhav@gmail.com",
  isLoggedIn: true,
};

function createUser({ name: string, isPaid: boolean }) {}

let newUser = { name: "Madhav", isPaid: false, email: "madhav@gmail.com" };

createUser(newUser);

function createCourse(): { name: string; price: number } {
  return {
    name: "Typescript",
    price: 999,
  };
}

export {};

type User = {
  name: string;
  email: string;
  isLoggedIn: boolean;
};

function createUser(user: User) {
  return { name: "Madhav", email: "madhav@gmail.com", isLoggedIn: false };
}

createUser({ name: "Madhav", email: "madhav@gmail.com", isLoggedIn: false });

export {};

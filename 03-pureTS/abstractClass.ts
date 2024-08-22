abstract class User {
  constructor(public name: string, public email: string) {}
  abstract getRole(): void;
}

class Admin extends User {
  constructor(public name: string, public email: string, public age: number) {
    super(name, email);
  }
  getRole(): void {
    console.log(`The role is Admin`);
  }
}

// const myUser = new User("Madhav", "madhav@gmail.com");   // Abstract class can't create object
const myAdmin = new Admin("Madhav", "madhav@gmail.com", 22);

export {};

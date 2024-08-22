class User {
  private state: string = "Gujarat"; // Private Only usable inside the class
  protected courseCount = 1; // Protected Only usable inside the class and its subclasses
  readonly city: string = "Surat";
  constructor(public name: string, public email: string) {}

  get getEmail(): string {
    return `Email : ${this.email}`;
  }

  get getCourseCount(): number {
    return this.courseCount;
  }

  set setCourseCount(courseNumber: number) {
    if (courseNumber <= 1) {
      throw new Error("Course count should be greater than 1");
    }
    this.courseCount = courseNumber;
  }

  private deleteToken() {
    console.log("Token deleted");
  }
}

class Admin extends User {
  isAdmin: boolean = true;
  changeCourseCount() {
    this.courseCount = 4;
    // this.state = "Maharashtra"; // Not usable
  }
}

const myUser = new User("Madhav", "madhav@gmail.com");
// myUser.deleteToken();
export {};

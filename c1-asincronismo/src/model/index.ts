import users from "../database/users.json";
import { randomUUID } from "node:crypto";

class User {
  name: string;
  type: string;
  permissions: string[];

  constructor(name: string, type: string) {
    this.name = name;
    this.type = type;

    if (this.type === "user") {
      this.permissions = ["read"];
    } else if (this.type === "admin") {
      this.permissions = ["read", "write", "delete"];
    } else {
      this.permissions = [];
    }
  }

  static getUsers() {}

  static getUserById() {}

  static addUser() {}

  static deleteUser() {}

  static createUser(name: string, type: string) {
    // lucia, user
    if (type === "user") {
      return new CommonUser(name, type);
    } else if (type === "admin") {
      return new AdminUser(name, type);
    } else {
      return "Necesitas indicar una tipo de usuario valido.";
    }
  }
}

class CommonUser extends User {
  id: string;
  constructor(name: string, type: string) {
    super(name, type);
    this.id = `${randomUUID()}-user`;
  }
}

class AdminUser extends User {
  id: string;
  constructor(name: string, type: string) {
    super(name, type);
    this.id = `${randomUUID()}-admin`;
  }
}

const pepe = User.createUser("pepe", "admin");

const lucia = User.createUser("Lucia", "user");

console.log(lucia);

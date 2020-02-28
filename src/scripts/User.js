export class User {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.username = data.username;
  }

  get getName() {
    return this.name;
  }

  get getId() {
    return this.id;
  }
}
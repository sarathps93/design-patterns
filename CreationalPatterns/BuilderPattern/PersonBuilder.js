const Person = require("./Person");

class PersonBuilder {
  constructor(name) {
    this.name = name;
  }
  makeEmployee() {
    this.isEmployee = true;
    return this; // Very important for chaining
  }
  makeManager(hours = 40) {
    this.isManager = true;
    this.hours = hours;
    return this; // Very important for chaining
  }
  makePartTime(hours = 20) {
    this.hours = hours;
    return this; // Very important for chaining
  }
  withMoney(money) {
    this.hours.money = money;
    return this; // Very important for chaining
  }
  withList(list=[]) {
    this.shoppingList = list;
    return this; // Very important for chaining
  }
  build() {
    return new Person(this);
  }
}

module.exports = PersonBuilder;

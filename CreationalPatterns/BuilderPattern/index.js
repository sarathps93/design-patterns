const PersonBuilder = require("./PersonBuilder");

/** Problem Statement
 * Whenever we call a function with multiple arguments
 * It wouldn't make sense to a new comes to find out what exactly those arguments are
 * For eg: new Person('sarath', true, false, 'manager', { age: 30, loc: 'london' })
 */

const sue = new PersonBuilder("Sue")
  .makeEmployee()
  .makeManager(60)
  .build();
const bill = new PersonBuilder("Bill")
  .makeEmployee()
  .makePartTime()
  .build();

const charles = new PersonBuilder("Charles")
  .withMoney(500)
  .withList(["Jeans", "SunGlasses"])
  .build();
const tabbitha = new PersonBuilder("Tabbitha").withMoney(1000).build();

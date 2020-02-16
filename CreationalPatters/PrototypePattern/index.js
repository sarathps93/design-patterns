const scout_prototype = require("./scout-prototype");

const john = scout_prototype.clone();
john.name = "John Swissy";
john.addItemToList("Boots");

const suzanne = scout_prototype.clone();
suzanne.name = "Suzanne Johannah";
suzanne.addItemToList("Leggins");

console.log(`${john.name}: ${john.shoppingList}`);
console.log(`${suzanne.name}: ${suzanne.shoppingList}`);

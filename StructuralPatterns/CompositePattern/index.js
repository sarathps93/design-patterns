const CatalogItem = require("./CatalogItem");
const CatalogGroup = require("./CatalogGroup");

const boots = new CatalogItem("Leather boots", 79.99);
const sneakers = new CatalogItem("Kicks", 39.99);
const flipflops = new CatalogItem("Work books", 19.99);

const group_shoes = new CatalogGroup("Shoes", [boots, sneakers, flipflops]);

// Instead of doing this individually
boots.print();
sneakers.print();

// We can group it and print as a whole
group_shoes.print();

// Also we can group different groups together as a catalog
const group_food = new CatalogGroup("Foos", [
  new CatalogItem("Milkshake", 5.99),
  new CatalogItem("French Fries", 3.99)
]);

const key_chain = new CatalogItem("key chain", 1);

const catalog = new CatalogGroup("Clothes and food", [
  key_chain,
  group_food,
  group_shoes
]);

console.log(catalog.total);
catalog.print();

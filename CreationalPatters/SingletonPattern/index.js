const Logger = require("./Logger");
const _logger = require('./Logger2'); // The node js way of doing it

const logger = new Logger().getInstance();

class Store {
  constructor(name, inventory = []) {
    this.name = name;
    this.inventory = inventory;
    logger.log(`New store of name ${name} has ${this.inventory.length} items`);
    _logger.log(`New store of name ${name} has ${this.inventory.length} items`);
  }
}

module.exports = Store;
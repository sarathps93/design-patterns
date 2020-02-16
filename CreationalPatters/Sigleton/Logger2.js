class Logger {
  constructor() {
    this.logs = [];
  }
  get count() {
    return this.logs.length;
  }
  log(message) {
    const timestamp = new Date().toISOString();
    this.logs.push({ message, timestamp });
  }
}

module.exports = new Logger(); 
// Node js will cache the instance when it executes for the first time. 
// It won't create it again even if we import it at multiple places

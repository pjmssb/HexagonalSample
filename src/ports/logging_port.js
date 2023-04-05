const fs = require('fs');
const path = require('path');
const loggingAdapter = require('./logging_dummy'); 
// const loggingAdapter = require('./logging_localFile');


class Logging {
    constructor() {
      this.adapter = new loggingAdapter(); 
    }

    
  async newEntry(message) {
    const timestamp = new Date();
    const logEntry = `[${timestamp.toISOString()}] ${message}`;
    await this.adapter.write(logEntry);
  }
}

module.exports = Logging;
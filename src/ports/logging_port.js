
const loggingAdapter = require('./logging_dummy'); 
/*
* const loggingAdapter = require('./logging_localFile');
* const loggingAdapter = require('./logging_postgresSQL');
* const loggingAdapter = require('./logging_dynamoDB');
*/


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
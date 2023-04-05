const { v4: uuidv4 } = require('uuid');
const Logging = require("../ports/logging_port.js")

class Task {

  constructor({title, description = "", due = null}) {
    this.id = uuidv4();
    this.title = String(title).trim();
    this.description = String(description).trim();
    this.dueDate = new Date(due);
    this.createdAt = new Date();
    this.updatedAt = new Date();
    const logging = new Logging();

    if (!this.isValid()) {

      logging.newEntry("Something is rotten");
    }
  }

  isValid() {
    if ((this.title.length === 0) 
        || (this.description.length === 0) 
        || (Object.is(this.dueDate, null))
        || (this.dueDate < this.createdAt)
        || (this.createdAt < this.updatedAt)
    ) {return false;};
    return true;
  }
}




module.exports = Task;
const { v4: uuidv4 } = require('uuid');

class Task {
  constructor({title, description = "", due = null}) {
    this.id = uuidv4();
    this.title = String(title).trim();
    this.description = String(description).trim();
    this.dueDate = due instanceof Date ? due : null;
    this.status = "pending";
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}




module.exports = Task;
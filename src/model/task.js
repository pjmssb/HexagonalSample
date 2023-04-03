const { v4: uuidv4 } = require('uuid');
//const db = require('TaskRepository');
//const log = require('TaskLoggingService');

module.exports = class Task {
  constructor({title, description = "", due = null, status = "pending"}) {
    this.id = uuidv4();
    this.title = String(title).trim();
    this.description = String(description).trim();
    this.dueDate = due instanceof Date ? due : null;
    this.status = ["pending", "completed", "deleted", "invalid"].includes(status) ? status : "pending";
    this.createdAt = new Date();
    this.updatedAt = new Date();
    if (!this.isValid()) {
        console.log()
    }
    
  }

  /*
  function isValid() {
    if ((this.createdAt > this.dueDate) || 
        (this.createdAt > this.updatedAt) ||
        (this.updatedAt > this.dueDate ) ||
        (this.dueDate == null) ||
        (this.descriprion.length > 0)) {
            log.event('Esta tarea no es válida');
            return false; 
    };
    return true;
  } */

}


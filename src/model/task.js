const { v4: uuidv4 } = require('uuid');
const Logging = require("../ports/logging_port.js");
const Repository = require("../ports/repository_port.js");


class Task {
  constructor({title, description = "", dueDate = null}) {
    this.id = uuidv4();
    this.title = String(title).trim();
    this.description = String(description).trim();
    this.dueDate = new Date(dueDate);
    let _createdAt = new Date();
    let _updatedAt = new Date();
    const _logging = new Logging();
    const _repository = new Repository();

    if (this.isValid(this)) {
      _repository.create(this);
      _logging.newEntry("Tarea creada");
      return true;
    } else {
      _logging.newEntry("Something is rotten - task not stored" + JSON.stringify(this));
      return false;
    }
  }

  
  updateTask({title, description = "", dueDate = null}) {
    if (!this.isValid({title, description, dueDate})) {
      _logging.newEntry('Task: valores de actualización inválidos');
      return false;
    }
    try {
      this.title = title;
      this.description = description;
      this.dueDate = dueDate;
      _repository.update(this);
    } catch (error) {
      Logging.newEntry('Task - update: Algo salio mal')
      return false;
    }
    
    return true;
  }






  isValid(task) {
    if ((task.title.length === 0) 
        || (task.description.length === 0) 
        || (Object.is(task.dueDate, null))
        || (task.dueDate < Date())
    ) {return false;};
    return true;
  }



  


}




module.exports = Task;
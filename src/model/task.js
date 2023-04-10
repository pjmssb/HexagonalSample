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
    this._logging = new Logging();
    this._repository = new Repository();

    if (this._isValid(this)) {
      _repository.create(this);
      _logging.newEntry("Tarea creada");
      return true;
    } else {
      _logging.newEntry("Something is rotten - task not stored" + JSON.stringify(this));
      return false;
    }
  }

  updateTask({title, description = "", dueDate = null}) {
    try {
      if ('title' in arguments[0] && typeof arguments[0].title === 'string') {
        this.description = arguments[0].description;
      };

      if ('description' in arguments[0] && typeof arguments[0].description === 'string') {
        this.description = arguments[0].description;
      };

      if ('dueDate' in arguments[0] && arguments[0].dueDate instanceof Date) {
        this.dueDate = arguments[0].dueDate;
      };

      if (!this._isValid(this)) {
        _logging.newEntry('Task - update: El objeto no es válido y no se guardar en repositorio.')
      };
      
      this._updatedAt = Date();
      _repository.update(this);

    } catch (error) {
      _logging.newEntry('Task - update: Algo salio mal')
      return false;
    }
    
    return true;
  }

  _isValid(task) {
    if ((task.title.length === 0) 
        || (task.description.length === 0) 
        || (Object.is(task.dueDate, null))
        || (task.dueDate < Date())
    ) {return false;};
    return true;
  }

}




module.exports = Task;
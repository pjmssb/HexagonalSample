class RepositoryDummy {

    constructor(task) {
      this.task = task;
      this.whoAmI = "RepositoryDummy"
      console.log('RepositoryDummy-Objeto Creado: ' + JSON.stringify(task));
    }
  
    async create(task) {
      console.log('RepositoryDummy-Creado: ' + JSON.stringify(task));
      return true;
    }

    async delete(task) {
      
      console.log('RepositoryDummy-Borrado: ' + JSON.stringify(task));
      return true;
    }

    async update(task) {
      
      console.log('RepositoryDummy-Actualizado: ' + JSON.stringify(task));
      return true;
    }
  }
  
  module.exports = RepositoryDummy;
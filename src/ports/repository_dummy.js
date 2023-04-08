class RepositoryDummy {

    constructor() {      
      this.whoAmI = "RepositoryDummy"
      console.log('RepositoryDummy-Objeto Creado. Listo para simular persistencia');
    }
  
    async create(task) {
      console.log('RepositoryDummy-Crear: ' + JSON.stringify(task));
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
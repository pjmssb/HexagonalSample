const repositoryAdapter = require('./repository_dummy'); 
// const repositoryAdapter = require('./repository_postgresql'); 


class Repository {
    constructor() {      
      this.adapter = new repositoryAdapter(); 

    }

    async create(task) {
      this.adapter.create(task);
    }

    async delete(task) {
      return this.adapter.delete(task);
    }

    async updatetask(task) {
      return this.adapter.update(task);
    }

    async read(taskID) {
      return this.adapter.read(taskID);
    }
}

module.exports = Repository;
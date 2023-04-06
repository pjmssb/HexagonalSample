const repositoryAdapter = require('./repository_dummy'); 


class Repository {
    constructor() {
      this.adapter = new repositoryAdapter(); 
    }

    async create(task) {
      
    }
}

module.exports = Repository;
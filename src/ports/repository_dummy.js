class RepositoryDummy {

    constructor(task) {
        this.task = task;
        this.whoAmI = "RepositoryDummy"
    }
  
    async create(task) {
      console.log('RepositoryDummy: ' + JSON.stringify(task));
      return true;
    }
  }
  
  module.exports = RepositoryDummy;
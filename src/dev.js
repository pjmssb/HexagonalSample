const { clear } = require('console');
const Task = require('./model/task.js');
const Logging = require('./ports/logging_port.js');
const Repository = require('./ports/repository_port.js');

const testTask = async () => {  
  let title = 'The Title';
  let description = 'Esta es la descripción';
  let due = '2023-06-02';
  let testTaskObject = {title, description, due};

  try {
    var task = new Task(testTaskObject);
    await task.ready;    
    console.log(`Task "${task.title}" created with ID ${task.id}`);
  } catch(err) {    
	  console.error('Error Create ++++++++++++++++++++');
    console.error(err.message)
  }

  try {
    let title = 'New Title';
    let description = 'New Description';
    let due = '2023-12-02';
    let testTaskObject = {title, description, due};
    task.updateTask(testTaskObject);
  } catch(err) {
	  console.error('Error Update ++++++++++++++++++++');
    console.error(err.message)
  }
  
};

const testLogging = async() => {
  let message1 = 'ABCDEFGHIJKKLMNÑOPQRSTWUXYZ1234567890|°!#$%&/()=?¡¿´+{},.-¨*][_:;';
  let message2 = '';
  let message3 = new Date();

  const log = new Logging();
  log.newEntry(message1);
  log.newEntry(message2);
  log.newEntry(message3);
};

const testRepository = async () => {

  const repository = new Repository();
}




//testLogging();
testRepository();
// testTask();












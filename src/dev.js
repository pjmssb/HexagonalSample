const { clear } = require('console');
const Task = require('./model/task.js');

const createTask = async () => {  
  const title = 'Test Title';
  const description = 'Description test. Lorem ipsum dolor sic amet';
  const due = '2023-06-02';
  const testTaskObject = {title, description, due};

  try {
    const task = new Task(testTaskObject);
    await task.ready();    
    console.log(`Task "${task.title}" created with ID ${task.id}`);
  } catch(err) {    
	  console.error('Error ++++++++++++++++++++');
    console.error(err.message)
  }
  
};

createTask();
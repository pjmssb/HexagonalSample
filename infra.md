# Necesitaremos crear infraestructura para cada dominio por separado
# Para la lista de tareas se requiere

componet = [vpc, apigw, lambdaf, ddb, ]
name = TODO-List
environment ==> [dev, qa, prod]
version ==> 0.0.1


For this application we will need:
* Domain dev-todolist.pablomogollon.tech 
* API Gateway called apigw-todolist-0.0.1-dev will receive requests to dev-todolist.pablomogollon.tech and will pass them to lambda function
    * POST  --> creates a new task 
    * GET /{id}--> Returns a task
    * GET / --> Returns a list of tasks. It may be order by name or datetime of creation. It may be filtered by name or datetime >= or datatime <=
    * PUT --> updates a task
    * DELETE /{id} --> deletes a task 
* VPC called vpc-todolist-0.0.1-dev. Needs to receive requests HTTP/HTTPS from the API Gateway
* 

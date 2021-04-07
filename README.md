# api-rest-tasks

Api-rest with Nodejs as backend and Mongodb. Saves a tasks to-do list. 

## Modules

@babel/cli  
@babel/core  
@babel/node  
@babel/preset-env  
cors  
dotenv  
express  
morgan  
mongoose  


## Test

GET localhost:3000/api/tasks - return all the tasks  
GET localhost:3000/api/{id} - return a task by id  
GET localhost:3000/api/done - return tasks already done

POST localhost:3000/api/tasks - Post a task by 'title', 'description' and 'done' keys

DELETE localhost:3000/api/tasks/{id} - Delete a task by id

PUT localhost:3000/api/tasks/{id} - Put

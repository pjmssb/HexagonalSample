# HexagonalSample
This is a demo of software architecture on Cloud Platform I've created in order to solve a debt with my developers and testers. I have tried to explain the Hexagonal Architecture several times. I end presenting a dry slides deck with different versions of the hexagon of boring with ports and adapters beautifuly drawn but not useful to help people to grasp the advantages of this clean architecture. 

What is needed, IMHO, is a project that is simple enough to be easy to manage but complex enough to need testing and have room for improvement and evolution. I believe this will help to undertand why it is convenient the extra efort to separate implementation from the pure logic of the models. 

I will use the help of chatGPT4 and Copilot. The prompts used will also be documented and stored in the project.

The project will manage a To Do List, this is pretty simple logic. But we will implement it on a serverless AWS function and we will evolve from a RDBMS as postgress to a NoSQL DynamoDB repository. Also we will need to automate tests without needing to use the AWS infraestructure.

Concepts included in this demo:

* SDLC good practices
  * Test Driven Development
  * Unit Testing
  * Testing automation
  * Monorepo
  * Git branchs management
  * Environments --> PROD, DEV, QA 
* Hexagonal Architecture - Ports & Adapters
  * Screaming Architecture
  * Vertical Slicing
* Cloud Platform - AWS
  * Infra as code --> Terraform
  * Containers --> Docker + Fargate
  * Serverless --> APIGW + AWS
  * SQL --> RDS + Postgress
  * NoSQL --> DynamoDB
  * Logginh --> Cloudwatch, 

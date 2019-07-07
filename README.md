# angular-ngrx-material-go-starter

Starter project for Angular7/NgRx/angular-material, Golang server, and Postgres DB

## Architecture

Client and server are completely decoupled into separate microservices, and can be deployed independently. The client and server (REST API) services of this prject are separate apps, each served by a webserver (Nginx).

Note that this means the server app is not serving the client app itself, nor is it serving static files. Nginx is responsible for both of these things directly. The server application has one and only one function: to serve the REST API that is the backend for the client. This clean separation makes independent development of frontend and backend logic easier, and is also more efficient in production, as a webserver will serve the the client and static files with better performance.

## Microservices

There are three services deployed as containers for this project:

* Angular Client + Nginx ([README.md](./client/README.md))
* Golang Server ([README.md](./server/README.md))
* PostgreSQL Database

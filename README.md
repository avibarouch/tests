# tests
Test unit example work with: Jest, KnexJs, NodeJs, ExpressJs, Docker, MySQL and more.
Tested on OS: microsoft windows 10.
For OS:"darwin","arch":"any" add "fsevents": "2.3.2" to devDependencies section on file: package.json. 
# Install
Install Docker desktop
Install Node v.14 or above 
Install Npm v.6.14 or above
Download all files to folder name: tests
CD to tests folder on the terminal
$ npm install
# Run
Run Docker desktop
Open a terminal and CD to tests folder then run:
$ docker-compose up
$ npm run dev
Check you see: "Server listen port 8080"
Open another terminal and CD to tests folder then run:
$ npx knex migrate:latest --knexfile db/knexfile.js
$ npx knex seed:run --knexfile ./db/knexfile.js
$ npx jest
Check you see The test results
# OS
Tested on: microsoft windows 10 {"os":"win32","arch":"x64"}
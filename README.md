# tests
Test unit example work with: Jest, KnexJs, NodeJs, ExpressJs, Docker, MySQL and more.
Tested on OS: microsoft windows 10.
For OS:"darwin","arch":"any" add "fsevents": "2.3.2" to devDependencies section on file: package.json. 
# Install
Install Docker desktop
Install Node v.14 or above 
Install Npm v.6.14 or above
Run Docker desktop
Download all files to folder name: tests
CD to tests folder on the terminal
$ npm install
$ docker-compose up
$ npx knex migrate:latest --knexfile db/knexfile.js
# Test
Open a terminal and CD to tests folder.
To test the User and server - run on the terminal:
$ npx jest ./__tests__/user.test.js
# OS
Tested on: microsoft windows 10 {"os":"win32","arch":"x64"}
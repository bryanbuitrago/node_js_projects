console.log('Starting app.');
//to load the modules functionality and call it down below use require()
const fs = require('fs');
const os = require('os');

var user = os.userInfo(); // used userInfo() method
// console.log(user);

fs.appendFile('greetings.txt', `hello ${user.username}!`); // used appendFile() method

// fs.appendFile('greetings.txt', 'hello world!');

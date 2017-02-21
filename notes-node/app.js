console.log('Starting app.');
//to load the modules functionality and call it down below use require()
const fs = require('fs'); // require module fs
const os = require('os'); //require module os
const _ = require('lodash'); // third party module requiring
const notes = require('./notes.js'); // file required from file path

// console.log(_.isString(true));
// console.log(_.isString('Andrew'));

var filteredArray = _.uniq(['Bryan', 1, 'Bryan', 1, 2, 3, 3]);
console.log(filteredArray);

// var sum = notes.add(5,4);
// console.log(sum);

// var res = notes.addNote();
// console.log(res);

// var user = os.userInfo(); // used userInfo() method
// console.log(user);
// fs.appendFile('greetings.txt', 'hello world!');
// fs.appendFile('greetings.txt', `hello ${user.username}! You are ${notes.age}.`); // used appendFile() method

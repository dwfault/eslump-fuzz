var exec = require('child_process').exec;
var fs = require('fs');
var eslump = require('eslump');


var arguments = process.argv.splice(2);
console.log(arguments[0]);
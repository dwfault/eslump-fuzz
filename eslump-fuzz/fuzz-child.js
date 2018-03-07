var exec = require('child_process').exec;
var fs = require('fs');
var eslump = require('eslump');

var arguments = process.argv.splice(2);

var outputFileName = arguments[0];
var binPath = arguments[1];

console.log(binPath+' '+outputFileName);

var jscExec = exec(binPath + ' ' + 'output/' + outputFileName, { timeout: 10000 });

jscExec.stdout.on('data', function (data) {
    console.log('[+] stdout:' + data);
    exec('rm output/' + outputFileName);
});

jscExec.stderr.on('data', function (data) {
    console.log('[-] stderr:' + data);
    if (data.indexOf('AddressSanitizer') != -1)
        exec('mv output/' + outputFileName + ' crash/' + outputFileName);
    else
        exec('rm output/' + outputFileName);
});
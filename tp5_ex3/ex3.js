
const fs = require('fs');
const log = 'twst.txt';

const fsOpts = { flag: 'r', encoding: 'utf8' };
const wantsRe = new RegExp(process.argv[2]);

function handleResults (err, data) {
    console.log(data);
}

function grepWithFs (file, done) {
    fs.readFile(log, fsOpts, function (err, data) {
        if (err) throw (err);
        let res = '';
        data.toString().split(/\n/).forEach(function (line) {
            if (wantsRe && !wantsRe.test(line)) return;
            res += line + '\n';
        });
        done(null, res);
    });
};

function grepWithShell (file, done) {
    const spawn = require('child_process').spawn;
    let res = '';

    const child = spawn('grep', [ '-e', process.argv[2], file ]);
    child.stdout.on('data', function (buffer) { res += buffer.toString(); });
    child.stdout.on('end', function() { done(null, res); });
};

for (let i=0; i < 10; i++) {
 grepWithFs(log, handleResults);
   
}
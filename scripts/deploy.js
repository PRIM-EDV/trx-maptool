const fs = require('fs');
const archiver = require('archiver');

const packageJSON = JSON.parse(fs.readFileSync('package.json'))

fs.mkdir('release', (err) => {});

var output = fs.createWriteStream(`release/rld-maptool-${packageJSON.version}-win32-x64.zip`);
var archive = archiver('zip');

archive.on('error', function(err){
    throw err;
});

archive.pipe(output);
archive.directory(`build/maptool-${packageJSON.version}-win32-x64`, false);
archive.finalize();
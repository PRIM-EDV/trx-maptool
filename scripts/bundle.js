const fs = require('fs');

// Copy package.json
fs.copyFile('package.json', 'dist/rld-maptool/package.json', (err) => {
    if (err) throw err;

});

// Copy electron entry script
fs.copyFile('src/electron/electron.build.js', 'dist/rld-maptool/index.js', (err) => {
    if (err) throw err;

});

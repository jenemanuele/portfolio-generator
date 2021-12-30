const fs = require('fs');

// writing files
const writeFile = fileContent => {
    return new Promise ((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            //if there's an error, send error to catch method
            if (err) {
                reject(err);
                //return out of t function, so promise doesn't accidentally exceute the resolve function 
                return;
            }

            // if ok: resolve the Promise & send the successful data to the '.then()' method
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

//copying file
const copyFile = copyFileResponse => {
    return new Promise ((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/index.html', err => {
            if  (err) {
                reject(err);
                return;
            }
            
            resolve({
                ok: true,
                message: 'Stylesheet created!'
            });
        });
    });
};

module.exports = { writeFile, copyFile };

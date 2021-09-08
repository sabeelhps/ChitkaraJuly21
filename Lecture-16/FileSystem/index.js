const fs = require('fs');
const path = require('path');


const data = 'Hello from file System.We are learning NodeJS';


// console.log(process.cwd());
// console.log(__dirname)

const F1 = path.join(__dirname, 'files','xyz.txt');


// WRITING INTO A FILE

// fs.writeFile(F1, data, {
//     encoding: 'utf-8',
//     flag:'w'
// }, (err) => {
//     if (err) throw err;
//     console.log("File Written Successfully");
// })

// READING FROM A FILE

fs.readFile(F1,{encoding:'utf-8',flag:'r'},(err, data) => {
    if (err) throw err;

    console.log(data);
})


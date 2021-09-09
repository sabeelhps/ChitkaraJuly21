const fs = require('fs');
const path = require('path');



const F1 = path.join(__dirname, 'inp1.txt');
const F2 = path.join(__dirname, 'inp2.txt');

const F3 = path.join(__dirname, 'output.txt');

// reading the first file
function readF1() {
    
    return new Promise((resolve, reject) => {
        
        fs.readFile(F1, (err, data) => {
            if (err) throw err;
            resolve(data.toString().split('\n'));
        })
    
    })
}

// reading the second file

function readF2() {
    
    return new Promise((resolve, reject) => {
        
        fs.readFile(F2, (err, data) => {
            if (err) throw err;
            resolve(data.toString().split('\n'));
        });
    });

}

function writeF3(data) {
    
    return new Promise((resolve, reject) => {
        
        fs.writeFile(F3, data, { encoding: 'utf-8', flag: 'w' }, (err) => {
            resolve();
        })
        
    })
}




let ans;

readF1()
    .then((arr1) => {
        // console.log(arr1);
        ans = arr1;

        return readF2();
    })
    .then((arr2) => {
        // console.log(arr2);
        ans = ans.concat(arr2);
        ans.sort((a, b) => a - b);
        ans = ans.join('\n');

        // console.log(ans);

        return writeF3(ans);
    })
    .then(() => {
        console.log("Every thing Done!!!");
    })
    .catch((err) => {
        console.log(err);
    });
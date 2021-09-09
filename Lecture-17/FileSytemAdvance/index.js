const fs = require('fs');
const path = require('path');


const F1 = path.join(__dirname, 'inp1.txt');
const F2 = path.join(__dirname, 'inp2.txt');

const F3 = path.join(__dirname, 'output.txt');


fs.readFile(F1, (err, data) => {

    if (err) throw err;
    // spliting the string about '\n' character
    const arr1 = data.toString().split('\n');

    fs.readFile(F2, (err, data) => {
        
        if (err) throw err;

        const arr2 = data.toString().split('\n');

        let ans = arr1.concat(arr2);

        ans.sort((a,b)=>a-b);

        ans = ans.join('\n');

        // console.log(ans);

        fs.writeFile(F3, ans, { encoding: 'utf-8', flag: 'w' }, (err) => {

            if (err) throw err;

            console.log("File Written Successfully.Everything Done!!!");

        })
        

    })
    
})






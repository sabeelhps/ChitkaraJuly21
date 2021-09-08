

// const persons = process.argv.slice(2);

// for (let person of persons) {
//     console.log(`Hello from ${person}`);
// }


console.log(process.cwd());


function print(n) {
    
    for (let i = 1; i <= n; i++){
        console.log(i);
    }

}

const num = parseInt(process.argv.slice(2)[0]);

print(num);

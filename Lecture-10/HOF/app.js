
// console.log("Hello"); console.log("Hello");console.log("Hello")









function fun() { 
   
    function innerFun() {
        console.log("Inner Fun")
    }

    return innerFun;
}




const f = fun();
console.log(f);
f();

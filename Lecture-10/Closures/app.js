

function fun() {
    
    let x = 0;

    function innerFun() {
        x++;
        console.log(x);
    }

    return innerFun;
}


const f = fun();

f();
f();
f();
f();



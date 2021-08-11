

console.log(a);

fun();

function fun() {
    console.log("Inside Fun");

    var b = 100;

    function c() {
        console.log(b)
    }

    c();

}

var a = 200;
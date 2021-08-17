// Arrow Functions


const add = (x,y)=> {
    return x + y;
}


// Arrow Implicit Return
const square = num => num * num;



const obj = {
    name: "Sabeel",
    favColor: "Blue",
    getFavColor:()=> {
        console.log(this);
        console.log(this.favColor);
    }
}







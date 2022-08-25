/*
var obj={
    val:2
}

function sum(x,y){
    return this.val+x+y;
}
*/
/*  call function
console.log(sum.call(obj,3,4));
*/


/*apply function
const arr=[3,4];
console.log(sum.apply(obj,arr));
*/

/*bind function
var bound=sum.bind(obj);
console.log(bound(3,4));
*/

/*
var Student={
    age:20
}
function print(){
    return this.age;
}
var bound=print.bind(Student);
console.log(bound());
*/

/* Currying
// Method 1

let multiply=function(x,y){
    console.log(x*y);
}

let multiplyByTwo=multiply.bind(this,2);
multiplyByTwo(5);

let multiplyByThree=multiply.bind(this,3);
multiplyByThree(5);


//Method 2

let multiply=function(x){
    return function(y){
        console.log(x*y);
    }
}
let multiplyByTwo=multiply(2);
multiplyByTwo(5);

let multiplyByThree=multiply(3);
multiplyByThree(5);
*/

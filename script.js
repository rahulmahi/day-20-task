var z;

z = 10 + 20 + '30';

console.log(z);
//output 3030

var a;

a = '10' + 20 + 30;

console.log(a);
//output 102030



var b;

//checking operator
10 == '10'
//true

//strictly operator

10 === '10'
//false

//math inbulit method
//1.Math.floor()
e = 1.5;
f = Math.floor(e);
console.log(f);

//2.Math.ceil()
 
e = 2.5
f = Math.ceil(e);
console.log(f);

//3.Math.round()

e = 3.5
f = Math.round(e);
console.log(f);

//4.Math.sqrt()

e = 64;
f = Math.sqrt(e)
console.log(f);

//5.Math.pow()

e = Math.pow(3,3);
console.log(e);

//for in and for each difference

//1.for in()

let arr = [1,2,3,4];

for(let key in arr)
{
    console.log(arr[key]);
}


//index position

let obj = {
    name:"mahi", 
    phno:234
}
for(let ject in obj)
{
    console.log(ject);
}
//name
//phno

//2.forEach()

let arr1 = [2,3,4,5];

arr1.forEach(fun);

function fun(val)
{
    console.log(val);
}

//js closure
function init()
{
    var phno = 234;
    function display()
    {
        console.log(phno);
    }
    display()
} 
init()


// let obj1 = {name:"rahul",phno:234};

// let c = Object.keys(obj1).length;

// console.log(c);
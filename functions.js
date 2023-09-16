//function is object type
function greet()
{
    console.log("hello world");
}
greet()



///with Agrument

function msg(name) //argument
{
    console.log('hello'+name);
}
msg('ram') //parameter


//with default parameters
function  msg1(name='k')
{
    console.log("hello"+name);
}
msg1('subbu')

//with return type
function square(n)
{
    return n*n;
}
console.log(square(2));

function sum(...arr)
{
    for(let i=0;i<arr.length;i++)
    {
        console.log(arr[i]);
    }
}
sum(1,2,3,4,5)



//Function Declaration
function walk(){
    console.log('Walk')
}
//function Expression or Anonymous Function Expression
 let run=function(){
    console.log('run')
 }
 let move=run //functions are treated as Objects in Js
 run()
 move()



 //Hoisting:  Hoisting is the proccess of moving the function definition to the top of the file automatically by the JS Engine.


//   Exercise 1


console.log(sum([1,2,3,4,5]))

function sum(...items)
{
    if(items.length===1 &&   Array.isArray(items[0]))
        items=[...items[0]]
    return items.reduce((a,b)=>a+b)
} 
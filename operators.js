/*
    i)Arithemetic
    ii)Assignment
    iii)comparison
    iv)Logical
    v)Bitwise
    vi)Increment/Decrement
    vii)Ternary Operator
*/
let x=10
let y=20
console.log(x+y)
console.log(x-y)
console.log(x*y)
console.log(x/y)
console.log(x**y)

console.log(x++)
console.log(++x)
console.log(y--)
console.log(--y)



//Equality

console.log(1=='1') //lose Equality (value)

//it converts the second operand to the first operand Type internally in Lose Equality.

console.log(1==='1') //Strict Equality  (Type+value)

//Ternary operator
console.log(100>100?"gold":"Silver")

console.log(4/2.0)

/*
    Control Flow
    1)conditional Statement
    If...else....
    switch()
    ii)loops
    for loop
    forin
    forof
    while
    dowhile
*/
//for loop
//syntax : 
for(let i=0;i<3;i++)
{
    console.log("kk")
}

const person ={
    name:"ram",
    age:22
};  
/// for in loop
for(let key in person)
{
    console.log(person[key])
}

//arrays
const colors=['red','green','blue']
 for(let index in colors)  //used to acesss the index/properties
 console.log(index)


 //for of

 for(let value of colors)  //used to access the values of sequence
 console.log(value)


 function greater(a,b)
 {
    return a>b?a:b
 }
 x=10
 y=20
console.log(greater(x,y))



Showprimes(10)
function Showprimes(limit)
{
    for(let num=2;num<=limit;num++)
    {
       
        if(isPrime(num))
        {
            console.log(num)
        }
    }
}
function isPrime(num)
{
  
    for(let factor=2;factor<Math.round(num/2)+1;factor++)
    {
        if(num%factor===0)
        {
           return false
        }
        
    }
    return true;
}
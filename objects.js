//OOP object oriented programming
const circle={
    radius:2,
    location:{
        x:1,
        y:1
    },
    isVisible:true,
    draw:function()
    {
        console.log("draw")
    }

}
console.log(circle.radius)
console.log(circle.location.x)
console.log(circle.draw())


//to create to Mutiple Objects we need to define the code to avoid this we use Factory Functions/Constructors.

//Factory Functions
function createCircle(radius)
{
    return {
        radius, // in modern js it treat as radius:radius

        draw() // It is treat as draw:function(){}
        {
            console.log("draw")
        }
    
    }
}
const circle1= createCircle(5)
console.log(circle1)

const circle2= createCircle(5)
console.log(circle2)


//Constructor Function
    // Camel Notation: oneTwoThreeFour
    // Pascal Notation: OneTwoThreeFour we this for creating constructors in js

function Circle(radius)
{
    this.radius=radius; //this refers to the current objects.
    this.draw=function()
    {
        console.log('draw');
    };
}

const circle3=new  Circle() // new creates a empty objects after that it returns the constructor object implicitially we dont require to return the object

//Objects are Dynamic in Nature

const square={
    side:2
}
console.log(square)
square.color="red"
square.draw=function(){
    console.log("Square")
}

console.log(square)

//objects are Dynamic Nature we can modify the properies as we declare the const but we can reassign that objects.

//square={}  it gives TypeError


//Constructor Property



console.log("property"+ circle1.constructor);


//Functions are treated as Objects
Circle.call({},10)  //used to call the Function Constructor
const a=new Circle(100)
console.log(a)
Circle.apply({},[20])
const c=new Circle(200)
console.log(c)


// value Types vs Reference Types
let x=10
let y=x

x=20
console.log(x,y) //primitives are copied by their Values
let o1={value:100}
let o2=o1

o1.value=200
console.log(o1.value,o2.value) //Objects are copied by their References.

//Call by Value

let number=10
function increase(number)
{
    number++ // here the scope of the  variable is changed after the function in priitives
} 
increase(number)
console.log(number) //10


//Call by Reference
let refer={value:10}

function Increment(refer)
{
    refer.value++;
}
Increment(refer);
console.log(refer)

//Enumerating Properties of Objects

for(let key in circle){
    console.log(key,circle[key])
}

// for(let key of circle)
// console.log(key)   it gives TypeError because Circle is not Iterable

for(let key of Object.keys(circle))
console.log(key)


for(let entry of Object.entries(circle))
console.log(entry) // It creates any Array to store the properties in it to store the values and properties



//Clonning the Objects

const  another ={}
for(let key in circle)
    another[key]=circle[key]
console.log(another) //this is the olden fashion
//In modern we have another option

//newObject = Object.assign(targetobject or Existing Object,source objects)
const another1=Object.assign({},circle) //we pass Existing as Empty or with data
const another2=Object.assign({color:"red"},circle)

//Spread Operator (...objectName) SIMPLIEST WAY
const anothers={...circle}
console.log(anothers)


//objects Comparision
function Address(street,zipcode){
    this.street=street;
    this.zipcode=zipcode
}

const add1=new Address("a",123)

const add2=new Address("a",123)

function areSame(add1,add2)
{
    return add1 ===add2
}
console.log(areSame(add1,add2))

const add3=add1
console.log(areSame(add1,add3))//refers to same objects


//comparsion based on the values

function areEquals(add1,add2)
{
    return add1.street===add2.street && add1.zipcode===add2.zipcode;
}

console.log(areEquals(add1,add2))

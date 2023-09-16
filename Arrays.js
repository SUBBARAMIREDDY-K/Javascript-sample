//Arrays : Arrays are the collection of similiar Elements.
const array=[1,2]

//End
array.push(4,5)
console.log(array)
//Begin

array.unshift(0,1)

console.log(array)

//Middle

array.splice(2,0,'a','b')

console.log(array)


//indexOf() return index of present element else -1

console.log(array.indexOf('a'))
console.log(array.indexOf('c'))

//lastIndexOf() return index of presnt element from right to left else -1

console.log(array.lastIndexOf(1))

//includes() is used to verify the element is present in array or not

console.log(array.includes('a'))
console.log(array.includes('c'))


//finding objects in  an Array

const course=[
    {id:1,name:'a'},
    {id:2,name:'b'},
];
console.log(course.includes({id:1,name:'a'})) // it does not check the objects present in the array


//find(predicate) it returns the course object if exists else undefined
const coursev=course.find(function(course){
    return course.name==='a'
})
console.log(coursev)

//findIndex() it returns the index of the object if exists else -1
const coursevi=course.findIndex(function(course){
    return course.name==='a'
})
console.log(coursevi)


//Arrow Function
let x=1000
let y=x=>x%2!=0
console.log(y(x))


let l1=[1,2,3,4]
let l2=l1
console.log(l1)
console.log(l2)  



//Concatenating the primitive Types

let l3=l1.concat(l2)
console.log(l3)
console.log(l3.slice(2))


let o1=[{id:1,name:"ram"}]
console.log(o1.concat(l1))
console.log(o1[0].name)

//Spread Operator

const combined=[...l1, ...l2]
console.log(combined)
//Exercise 1
let range=ArrayRange(1,9)

function ArrayRange(min,max)
{
    let a=[]
    for(let i=min;i<max;i++)
        a.push(i)
    return a
}

console.log(range)
//Exercise 2
const number=[1,2,3,4]
function Search(arr,sele)
{
    for(let ele of arr)
        if(ele==sele)
        return true
    return false
}
console.log(Search(number,1))

//Exercise 3

const output=except(number,[1,2])
function except(array,excluded)
{
    const output=[]
    for(let ele of array)
        if(!excluded.includes(ele))
        output.push(ele)
    return output
}
console.log(output )


//rotating an Array

//Exercise 4
  const out=move(number,0,1)

  function move(array,index,offset)
  {
     const position = index+offset
     if(position>=array.length || position<0){
     console.error("Invalid offset..")
     return
     }
    const output=[...array];
     const element = output.splice(index,1)[0]
     output.splice(index+offset,0,element)
     return output
  }

  console.log(out)


//Exercise 5
const num=[1,2,3,1,5]
const count=countoccurenec(num,1)

console.log(count)
function countoccurenec(array,ele)
{
    // let c=0
    // for(let element of array)
    //     if(element==ele)
    //      c+=1
    // return c;
    return array.reduce((accumulator,current)=>{
        const occurence=(current === ele)?1:0
        return accumulator+occurence
    },0);
}


//Exercise 6

const max= getMax(num);
function getMax(array){
    if(array.length==0)
        return undefined
    // let max=array[0]
    // for(let i=1;i<array.length;i++)
    // {
    //     if(array[i]>max)
    //         max=array[i]
    // }
    // return max;

    return array.reduce((accumulator,current)=> current>accumulator?current:accumulator);

}
console.log(max)


//Exercise 7


const movies=[
    {title:'a',year: 2018,rating:4.5},
    {title:'b',year: 2018,rating:4.7},
    {title:'c',year: 2018,rating:3},
    {title:'d',year: 2017,rating:4.5} 
];

const titles=movies
                    .filter(m=>m.year==2018 && m.rating>=4)
                    .sort((a,b)=>a.rating-b.rating)
                    .reverse()
                    .map(m=>m.title)
console.log(titles)
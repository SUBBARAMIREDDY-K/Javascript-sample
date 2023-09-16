var x=["a",'1a']
let pattern=/[0-9]+[a-z]/i
arr=[]
for(let i=0;i<x.length;i++)
{
    if(pattern.test(x[i]))
    arr.push(x[i])    
}
console.log(arr)



